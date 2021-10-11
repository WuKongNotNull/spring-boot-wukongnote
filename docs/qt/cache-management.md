#  缓存管理


## 基础环境搭建



### **创建项目**

![image-20200630201135910](https://tva1.sinaimg.cn/large/008i3skNgy1gvakdkq00pj61fj0iitco02.jpg)





### **pom.xml**

```xml
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
```





### **配置文件配置**

```properties
#mysql数据库连接配置
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/wukong_blog?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&autoReconnect=true
    username: root
    password: rootroot

 ## 显示 sql 语句
  jpa:
    show-sql: true
```



### **实体类**

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "b_comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "content")
    private String content;
    @Column(name = "author")
    private String author;
    @Column(name = "article_id")
    private Integer articleId;


}
```



### **编写自定义仓库类，继承JpaRepository**

```java
package com.wukongnotnull.repository;
    /*
    author: 悟空非空也（B站/知乎/公众号）
    */
import com.wukongnotnull.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Override
    List<Comment> findAll();

    @Override
    Optional<Comment> findById(Integer id);

    // 查询条件：作者不为空
    List<Comment> findByAuthorNotNull();


    @Override
    long count();

    @Override
    <S extends Comment> S saveAndFlush(S s);

    @Query("select c from b_comment c where c.articleId=?1")
    List<Comment> getCommentList(Integer articleId);

    @Query(value = "select * from b_comment c where c.article_id=?1",nativeQuery = true)
    List<Comment> getCommentList2(Integer articleId);

    @Transactional
    @Modifying
    @Query(value = "update b_comment set author =?1  where id =?2 ",nativeQuery = true)
    int updateComment(String author,Integer id);

    @Transactional
    @Modifying
    @Query(value = "delete from b_comment where id = ?1",nativeQuery = true)
    int deleteComment(Integer id);

    @Override
    <S extends Comment> S save(S entity);

}

```



### **service层**

```java
package com.wukongnotnull.service;

import com.wukongnotnull.domain.Comment;

import java.util.Optional;

public interface CommentService {
    //add
    public Comment addComment(Comment comment);
  
    //delete
    public void deleteComment(Integer id);

    //modify
    public Comment modifyComment(Integer id,String author);
  
    //query
    public Comment findById(Integer id);
}

```



```java
package com.wukongnotnull.service;

import com.wukongnotnull.domain.Comment;
import com.wukongnotnull.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentServiceImpl implements  CommentService {

    @Autowired
    public CommentRepository commentRepository;

    //add
    public Comment addComment(Comment comment){
        return this.commentRepository.save(comment);
    }
    //delete
    public void deleteComment(Integer id){
        this.commentRepository.deleteById(id);
    }

    //modify
    public Comment modifyComment(Integer id,String author){
        int i = this.commentRepository.updateComment(author, id);
        if(i == 1) {
            return this.findById(id);
        }
        return null;
    }
  
    //query
    public Comment findById(Integer id){
        Optional<Comment> optional = this.commentRepository.findById(id);
        if(optional.isPresent()){
           return optional.get();

        }
        return null;
    };
}

```



### **controller层**

> 返回结果为自定义统一结果类 `HttpResult`

```java
package com.wukongnotnull.controller;

import com.wukongnotnull.domain.Comment;
import com.wukongnotnull.service.CommentService;
import com.wukongnotnull.vo.HttpResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class CommentController {

    @Autowired
    private CommentService commentService;

    //query
    @GetMapping("/comments/{id}")
    public HttpResult findById(@PathVariable("id") Integer id){
        Comment comment = this.commentService.findById(id);
        return HttpResult.success(comment);
    }

    //modify
    @PutMapping("/comments/{id}/{author}")
    public HttpResult modifyBy(@PathVariable("id") Integer id,@PathVariable("author") String author){
        Comment comment = this.commentService.modifyComment(id, author);
        return HttpResult.success(comment);

    }

    //delete
    @DeleteMapping("/comments/{id}")
    public HttpResult deleteById(@PathVariable("id") Integer id){
        this.commentService.deleteComment(id);
        return HttpResult.success();
    }

    //add

}

```




## Spring Boot默认缓存体验

**spring boot 自带缓存机制，可以使用默认缓存，避免每次查询都去数据库访问一边，避免资源消耗**



### **启动类**

> 在启动类上添加注解 @EnableCaching

```java
package com.wukongnotnull;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching //开启springboot默认缓存
public class RedisSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(RedisSpringbootApplication.class, args);
    }

}

```



### **Service层实现类**

> 在service层的实现类的方法上添加注解 @Cacheable，开启缓存空间

```java
package com.wukongnotnull.service;

import com.wukongnotnull.domain.Comment;
import com.wukongnotnull.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentServiceImpl implements  CommentService {

    @Autowired
    public CommentRepository commentRepository;

    //add
    public Comment addComment(Comment comment){
        return this.commentRepository.save(comment);
    }

    //delete
    @CacheEvict(cacheNames = "comment")
    public void deleteComment(Integer id){
        this.commentRepository.deleteById(id);
    }


    @CachePut(cacheNames = "comment",key = "#result.id")
    public Comment modifyComment(Integer id,String author){
        int i = this.commentRepository.updateComment(author, id);
        if(i == 1) {
            return this.findById(id);
        }
        return null;
    }

    //query
    @Cacheable(cacheNames = "comment")//创建缓存空间，并命名为comment
    public Comment findById(Integer id){
        Optional<Comment> optional = this.commentRepository.findById(id);
        if(optional.isPresent()){
           return optional.get();

        }
        return null;
    };
}
```



### **测试**

> 多次查询，在控制台只打印第一次查询日志












## Redis 缓存介绍





### 基于注解的 Redis 缓存实现



#### **pom中**

> pom中添加redis的依赖启动器

```xml
       <!--redis-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
```



#### **application.yml**

> redis的连接配置

```xml
#redis数据库的连接配置
spring:
  redis:
    host: 127.0.0.1
    port: 6379
    password:
```





#### **启动类**

> 启动类上添加注解@EnableCaching

```java
@SpringBootApplication
@EnableCaching//开启springboot默认缓存
public class RedisSprongbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(RedisSprongbootApplication.class, args);
    }

}
```



#### **Service层**

> `Service` 层对删改查操作,添加 `redis` 缓存注解
>
> **增加功能直接插入mysql数据库**

```java
package com.wukongnotnull.repository;
    /*
    author: 悟空非空也（B站/知乎/公众号）
    */
import com.wukongnotnull.domain.Comment;
import com.wukongnotnull.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentServiceImpl implements  CommentService {

    @Autowired
    public CommentRepository commentRepository;

    //add
    public Comment addComment(Comment comment){
        return this.commentRepository.save(comment);
    }

    //delete
    @CacheEvict(cacheNames = "comment")//删除使用@CacheEvict
    public void deleteComment(Integer id){
        this.commentRepository.deleteById(id);
    }

     //modify
    @CachePut(cacheNames = "comment",key ="#result.id")
    public Comment modifyComment(Integer id,String author){
        int i = this.commentRepository.updateComment(author, id);
        //再次查询操作,查询结果存入redis缓存中
       return this.findById(id);
    }

    //query
  	//创建缓存空间，并命名为comment,如果查询结果为null，不存入该空间
    @Cacheable(cacheNames = "comment",unless = "#result==null")
    public Comment findById(Integer id){
        Optional<Comment> optional = this.commentRepository.findById(id);
        if(optional.isPresent()){
           return optional.get();

        }
        return null;
    };
}

```



#### **实体类序列化**

```java
package com.wukongnotnull.domain;
//author: 悟空非空也（B站/知乎/公众号）

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "b_comment")
public class Comment  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "content")
    private String content;
    @Column(name = "author")
    private String author;
    @Column(name = "article_id")
    private Integer articleId;


}

```



#### 基于注解的缓存数据的 json 格式化

>  自定义RedisCacheManager（基于注解的缓存数据的json格式化）
>
>  测试之前，先清空 Redis 数据库中的数据，不然会因数据库中的乱码产生报错



```java
package com.wukongnotnull.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.time.Duration;

@Configuration//定义为配置类
public class RedisConfig {

    @Bean
   public RedisCacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
        // 分别创建String和JSON格式序列化对象，对缓存数据key和value进行转换
        RedisSerializer<String> strSerializer = new StringRedisSerializer();
        Jackson2JsonRedisSerializer<Object> jacksonSerial =
                new Jackson2JsonRedisSerializer<>(Object.class);
        // 解决查询缓存转换异常的问题
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jacksonSerial.setObjectMapper(om);

        // 定制缓存数据序列化方式及时效
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofDays(1))
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(strSerializer))
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jacksonSerial))
                .disableCachingNullValues();

        return RedisCacheManager.builder(redisConnectionFactory).cacheDefaults(config).build();
    }
}



```





#### **查看数据库**

> 使用 Redis Desktop Manager 客户端查看数据库情况

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakj0bxzej61m70joaea02.jpg" alt="image-20200711141612683" style="zoom:50%;" />











### 基于 API 的 Redis 缓存实现

#### 启动类

> 启动类上什么都不用加

```java
@SpringBootApplication
public class RedisSprongbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(RedisSprongbootApplication.class, args);
    }

}
```



#### **实体类Comment**

```java
package com.wukongnotnull.domain;
//author: 悟空非空也（B站/知乎/公众号）

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "b_comment")
public class Comment  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "content")
    private String content;
    @Column(name = "author")
    private String author;
    @Column(name = "article_id")
    private Integer articleId;


}


```



#### **repository:CommentRepository**

```java
package com.wukongnotnull.repository;
    /*
    author: 悟空非空也（B站/知乎/公众号）
    */
import com.wukongnotnull.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Override
    List<Comment> findAll();

    @Override
    Optional<Comment> findById(Integer id);

    // 查询条件：作者不为空
    List<Comment> findByAuthorNotNull();


    @Override
    long count();

    @Override
    <S extends Comment> S saveAndFlush(S s);

    @Query("select c from b_comment c where c.articleId=?1")
    List<Comment> getCommentList(Integer articleId);

    @Query(value = "select * from b_comment c where c.article_id=?1",nativeQuery = true)
    List<Comment> getCommentList2(Integer articleId);

    @Transactional
    @Modifying
    @Query(value = "update b_comment set author =?1  where id =?2 ",nativeQuery = true)
    int updateComment(String author,Integer id);

    @Transactional
    @Modifying
    @Query(value = "delete from b_comment where id = ?1",nativeQuery = true)
    int deleteComment(Integer id);

    @Override
    <S extends Comment> S save(S entity);

}



```



#### **service: ApiCommentService**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.domain.Comment;

public interface ApiCommentService {

    /**
     * 查询方法
     */

    Comment findById(Integer id) ;


    /**
     * 更新方法
     */
   Comment updateComment(Comment comment);


    /**
     * 删除方法
     */
    void deleteComment(Integer id);

}
```



```java
package com.wukongnotnull.service;

import ch.qos.logback.core.util.TimeUtil;
import com.wukongnotnull.domain.Comment;
import com.wukongnotnull.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@Transactional
public class ApiCommentServiceImpl {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired  // 引入 RedisTemplate
    private RedisTemplate redisTemplate;

    /**
     * 查询方法
     */

    public Comment findById(Integer id){
        //先到缓存中查询
        Comment comment = (Comment) redisTemplate.opsForValue().get("comment_" + id);
        if(comment!=null){
            //缓存中有数据
            return  comment;
        }else{//缓存中没有数据
            //到数据库中进行查询
            Optional<Comment> byId = commentRepository.findById(id);
            if(byId.isPresent()){
                //若是数据库中存在，将数据先存入redis
                Comment comment1 = byId.get();
                redisTemplate.opsForValue().set("comment_"+id,comment1,1, TimeUnit.DAYS);
                return comment1;
            }
            System.out.println("缓存中没有数据的情况下，数据库中也没有");
            return null;
        }

    }
  
    /**
     * 更新方法
     */
    public Comment updateComment(Comment comment){
        //更新mysql数据库
        int i = commentRepository.updateComment(comment.getAuthor(), comment.getId());
        //更新redis缓存
        redisTemplate.opsForValue().set("comment_"+comment.getId(),comment);
        //更新后进行查询
      return   this.findById(comment.getId());

    }

    /**
     * 删除方法
     */
     public void deleteComment(Integer id){
         //删除 mysql 数据库中的数据
         commentRepository.deleteById(id);
         //删除redis缓存中的数据
         redisTemplate.delete("comment_" + id);
     }



}

```



#### **controller:ApiCommentController**

```java
package com.wukongnotnull.controller;

import com.wukongnotnull.domain.Comment;
import com.wukongnotnull.service.ApiCommentService;
import com.wukongnotnull.vo.HttpResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2")
public class ApiCommentController {

    @Autowired
    private ApiCommentService apiCommentService;

    //query
    @GetMapping("/comments/{id}")
    public HttpResult findById(@PathVariable("id") Integer id){
        Comment comment = this.apiCommentService.findById(id);
        return HttpResult.success(comment);
    }

    //modify
    @PutMapping("/comments/{id}/{author}")
    public HttpResult modifyBy(@PathVariable("id") Integer id,@PathVariable("author") String author){
        Comment comment1 = new Comment();
        comment1.setId(id);
        comment1.setAuthor(author);
        Comment comment = this.apiCommentService.updateComment(comment1);
        return HttpResult.success(comment);

    }

    //delete
    @DeleteMapping("/comments/{id}")
    public HttpResult deleteById(@PathVariable("id") Integer id){
        this.apiCommentService.deleteComment(id);
        return HttpResult.success();
    }

    //add


}
```





#### 基于api的缓存数据的 json 格式化

> 自定义RedisTemplate(基于api的缓存数据json格式化)



```java
package com.wukongnotnull.config;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.time.Duration;


@Configuration   // 定义一个配置类
public class RedisConfig {
    @Bean
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<Object, Object> template = new RedisTemplate();
        template.setConnectionFactory(redisConnectionFactory);
        // 使用JSON格式序列化对象，对缓存数据key和value进行转换
        Jackson2JsonRedisSerializer jacksonSerial = new Jackson2JsonRedisSerializer(Object.class);
        // 解决查询缓存转换异常的问题
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jacksonSerial.setObjectMapper(om);

        // 设置RedisTemplate模板API的序列化方式为JSON
        template.setDefaultSerializer(jacksonSerial);
        return template;
    }
}

   

```

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakj6g9i9j612t0fnabt02.jpg" alt="image-20200711135024037" style="zoom:50%;" />

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakj9qa32j61jc0q7qaz02.jpg" alt="image-20200711141704095" style="zoom: 33%;" />














## 集成 Ehcache 缓存框架

`EhCache` 是一个纯 Java 的进程内缓存框架，具有快速、精干等特点，是 `Hibernate` 中默认 `CacheProvider` 。

`Spring` 提供了对缓存功能的抽象：即允许绑定不同的缓存解决方案（如 `Ehcache` ）。它支持注解方式使用缓存，非常方便。



### **ehcache 和 redis 比较**

`ehcache` 直接在 `jvm` 虚拟机中缓存，速度快，效率高；但是缓存共享麻烦，集群分布式应用不方便。

`redis` 是通过 `socket` 访问到缓存服务，效率比 `ehcache` 低，比数据库要快很多，处理集群和分布式缓存方便，有成熟的方案。如果是单个应用或者对缓存访问要求很高的应用，用 `ehcache`。如果是大型系统，存在缓存共享、分布式部署、缓存内容很大的，建议用 `redis` 。

`ehcache` 也有缓存共享方案，不过是通过 `RMI` 或者 `Jgroup` 多播方式进行广播缓存通知更新，缓存共享复杂，维护不方便；简单的共享可以，但是涉及到缓存恢复，大数据缓存，则不合适。



### 实操

#### **pom**

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<dependency>
  <groupId>net.sf.ehcache</groupId>
  <artifactId>ehcache</artifactId>
</dependency>
```



#### **src/main/resources/ehcache.xml**

```xml
<ehcache name="mycache">
    <!--
       diskStore：为缓存路径，ehcache分为内存和磁盘两级，此属性定义磁盘的缓存位置。参数解释如下：
       user.home – 用户主目录
       user.dir  – 用户当前工作目录
       java.io.tmpdir – 默认临时文件路径
     -->
    <diskStore path="java.io.tmpdir/Tmp_EhCache"/>
    <!--
       defaultCache：默认缓存策略，当ehcache找不到定义的缓存时，则使用这个缓存策略。只能定义一个。
     -->
    <!--
      name:缓存名称。
      maxElementsInMemory:缓存最大数目
      maxElementsOnDisk：硬盘最大缓存个数。
      eternal:对象是否永久有效，一但设置了，timeout将不起作用。
      overflowToDisk:是否保存到磁盘，当系统宕机时
      timeToIdleSeconds:设置对象在失效前的允许闲置时间（单位：秒）。
      仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
      timeToLiveSeconds:设置对象在失效前允许存活时间（单位：秒）。
      最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，
			默认是0.，也就是对象存活时间无穷大。
      diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists
		 between restarts of the Virtual Machine. The default value is false.
      diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。
		默认是30MB。每个Cache都应该有自己的一个缓冲区。
      diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
      memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，
		Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。
      你可以设置为FIFO（先进先出）或是LFU（较少使用）。
      clearOnFlush：内存数量最大时是否清除。
      memoryStoreEvictionPolicy:可选策略有：LRU（最近最少使用，默认策略）、
		FIFO（先进先出）、LFU（最少访问次数）。
      FIFO，first in first out，这个是大家最熟的，先进先出。
      LFU， Less Frequently Used，就是上面例子中使用的策略，
			直白一点就是讲一直以来最少被使用的。如上面所讲，缓存的元素有一个hit属性，hit值最小的将会被清出缓存。
      LRU，Least Recently Used，最近最少使用的，缓存的元素有一个时间戳，
			当缓存容量满了，而又需要腾出地方来缓存新的元素的时候，
      那么现有缓存元素中时间戳离当前时间最远的元素将被清出缓存。
   -->
    <defaultCache
            eternal="false"
            maxElementsInMemory="10000"
            overflowToDisk="false"
            diskPersistent="false"
            timeToIdleSeconds="1800"
            timeToLiveSeconds="259200"
            memoryStoreEvictionPolicy="LRU"/>

    <cache
            name="users"
            eternal="false"
            maxElementsInMemory="5000"
            overflowToDisk="false"
            diskPersistent="false"
            timeToIdleSeconds="1800"
            timeToLiveSeconds="1800"
            memoryStoreEvictionPolicy="LRU"/>

</ehcache>
```



#### **application.xml**

```yaml
## 缓存的配置
spring:
  cache:
    ehcache:
      config: classpath:ehcache.xml
      
## 开启dao层的dubug日志，打印出sql语句，便于缓存测试分析
logging:
	level:
		com.wukong.dao: debug
		
```



#### **实体类序列化**

```java
public class User implements Serializable {
}
```



#### **启动类**

```java
@SpringBootApplication

@EnableCaching
public class App
{
    public static void main( String[] args )
    {
        SpringApplication.run(App.class);
        System.out.println( "Hello World!" );
    }
}
```



#### **Service层设置缓存**

```java
@Service
public class UserServiceImpl implements UserService {

    @Cacheable(value = "users", key = "#username")
    public User getUserByUsername(String username) {
       
    }
  

    @Cacheable(value = "users",key = "#id")
    public User getUserById(Integer id)  {
        
    }

		// 添加用户，不需要添加到缓存容器中
    public void addUser(User user) {

    }

  
  	// 修改用户，返回类型不能是void，
  	// 参数是对象是，使用 #user.id 作为关键词
  	// 当然也可以直接使用@CacheEvict ,修改数据库同时删除缓存容器中该数据
    @CachePut(value = "users", key = "#user.id")
    public User modifyUser(User user) {

        return user;
    }
	
  	// @CacheEvict 作用： 清空缓存空间
    @CacheEvict(value = "users", allEntries = true)
    public void deleteUser(Integer id) {
       

    }
  
		//参数是封装对象时，可以使用多个key ，写法如下
    @Cacheable(value = "users" ,key = "#userParams.pageNum+'-'+#userParams.pageSize+'-'+#userParams.username")
    public PageInfo<User> getUserPageList(UserParams userParams) {

    }
  
  
```




