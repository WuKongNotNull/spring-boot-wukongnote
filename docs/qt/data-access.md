# 数据访问
## Spring Boot 数据访问概述

![image-20200627115255361](https://tva1.sinaimg.cn/large/008i3skNgy1gvajhh0x0aj60p004xmy402.jpg)

![image-20200627115340382](https://tva1.sinaimg.cn/large/008i3skNgy1gvajf1bvnnj60lx0cwtae02.jpg)



## 基础环境搭建



**创建数据库**

```sql
CREATE DATABASE wukong_blog;

USE wukong_blog;

CREATE TABLE `b_article` (
  `id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` VARCHAR(200) DEFAULT NULL COMMENT '文章标题',
  `content` LONGTEXT COMMENT '文章内容',
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO `b_article` VALUES ('1', 'Spring Boot 青铜篇', '从入门到放弃讲解...');
INSERT INTO `b_article` VALUES ('2', 'Spring Cloud 王者篇', '从入门到入土讲解...');

  CREATE TABLE `b_comment` (
  `id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `content` LONGTEXT COMMENT '评论内容',
  `author` VARCHAR(200) DEFAULT NULL COMMENT '评论作者',
  `article_id` INT(20) DEFAULT NULL COMMENT '外键：文章id',
  PRIMARY KEY (`id`)
) ENGINE=INNODB  DEFAULT CHARSET=utf8;

INSERT INTO `b_comment` VALUES ('1', '赞1', 'wukong', '1');
INSERT INTO `b_comment` VALUES ('2', '赞2', 'zhubajie', '1');
INSERT INTO `b_comment` VALUES ('3', '赞3', 'tangseng', '1');
INSERT INTO `b_comment` VALUES ('4', '赞4', 'bailongma', '2');
INSERT INTO `b_comment` VALUES ('5', '赞5', 'baigujing', '2');

```





**创建项目,引入mysql的依赖启动器**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajf8jg32j60k70bjaao02.jpg" alt="image-20200627121225875" style="zoom:50%;" />





**创建实体类domain**

> 推荐实体类使用  lombok  插件，编译后自动生成 setter | getter 方法。

```java
package com.wukongnotnull.domain;
/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {

    private Integer id;
    private String title;
    private String content;


}


```

```java
package com.wukongnotnull.domain;
  /* 
  author: 悟空非空也（B站/知乎/公众号） 
  */

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    private Integer id;
    private String content;
    private String author;
    //此属性名和表中的字段article_id不一致，不能自动映射，需要在application.yml中进行配置
    //mybatis.configuration.map-underscore-to-camel-case=true
    private Integer articleId;


}

```



**全局配置文件进行数据库连接配置**

application.yml

```xml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/wukong_blog?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&autoReconnect=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: rootroot
```



**使用第三方数据源进行配置（推荐：ali的druid数据源为例）**

pom.xml

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.22</version>
</dependency>

```



**在全局配置文件中设置druid的属性**



application.yml

```yaml
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    initialSize: 30
    minIdle: 20
    maxActive: 200
```











## 整合MyBatis
### 使用注解的方式整合MyBatis



**mapper接口**

```java
package com.wukongnotnull.mapper;
    /* 
    author: 悟空非空也（B站/知乎/公众号） 
    */

import com.wukongnotnull.domain.Comment;
import org.apache.ibatis.annotations.*;


@Mapper
public interface CommentMapper {

    // 查询
    @Select("select * from b_comment where id = #{id}")
    public Comment queryComment(Integer id);

    //删除
    @Delete("delete from b_comment where id=#{id}")
    public int deleteComment(@Param("id") Integer id);

    // 修改
    @Update("update b_comment set content = #{content}, author = #{author}  where id = #{id}")
    public int updateComment(Comment comment);

    // 添加，注意是 #{articleId} ，不是#{article_id}
    @Insert("insert into b_comment(content,author,article_id) values(#{content},#{author},#{articleId})")
    public int insertComment(Comment comment);

}

```



**测试**

```java
package com.wukongnotnull.mapper;

import com.wukongnotnull.domain.Comment;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

    /*
    author: 悟空非空也（B站/知乎/公众号） 
    */
@SpringBootTest
class CommentMapperTest {

    @Autowired
    private CommentMapper commentMapper;

    @Test
    void queryComment() {
        System.out.println(commentMapper.queryComment(2));
    }

    @Test
    void deleteComment() {
        System.out.println(commentMapper);
        System.out.println(commentMapper.deleteComment(5));
    }

    @Test
    void updateComment(){
        Comment comment = new Comment();
        comment.setId(2);
        comment.setContent("11111");
        comment.setAuthor("111");
        System.out.println(commentMapper.updateComment(comment));
    }

    @Test
    void insertComment(){
        Comment comment = new Comment();
        comment.setContent("add11111");
        comment.setAuthor("add11111");
        comment.setArticleId(1);
        System.out.println(commentMapper.insertComment(comment));
    }

}

```



### 使用配置文件的方式整合MyBatis



**在全局配置文件配置**



> mapper-locations: classpath:mapper/**
>
> 该位置是在 resources 文件夹下新建 mapper 目录



```properties
mybatis:
  configuration:
    map-underscore-to-camel-case: true
  mapper-locations: classpath:mapper/**
  type-aliases-package: com.wukongnotnull.domain
```



**编写ArticleMapper接口**

```java
package com.wukongnotnull.mapper;
   /*
   author: 悟空非空也（B站/知乎/公众号）
   */

import com.wukongnotnull.domain.Article;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

// 不要忘记 @Mapper
@Mapper
public interface ArticleMapper {

   // 查询单文章
   Article getArticleById(int id);

   // 查询文章列表
   List<Article> getArticleList();

   // 修改文章
   int updateArticle(Article article);

   // 添加文章
    int addArticle(Article article);

    // 删除文章
    int delArticle(int id);

}

```



**编写接口对应的xml配置文件**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.wukongnotnull.mapper.ArticleMapper">

    <select id="getArticleById" resultType="Article" parameterType="int">
        select * from b_article where id = #{id}
    </select>

    <select id="getArticleList" resultType="Article">
        select  * from b_article
    </select>

    <update id="updateArticle" parameterType="Article">
        update b_article set title = #{title}, content = #{content} where id = #{id}
    </update>

    <insert id="addArticle" parameterType="Article">
        insert into b_article(title,content) values(#{title},#{content})
    </insert>

    <delete id="delArticle" parameterType="int" >
        delete from b_article where id = #{id}
    </delete>

</mapper>
```



**测试**

```java
package com.wukongnotnull.mapper;

import com.wukongnotnull.domain.Article;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

  /*
  author: 悟空非空也（B站/知乎/公众号）
  */
@SpringBootTest
class ArticleMapperTest {

    @Autowired
    private  ArticleMapper articleMapper;

    @Test
    void delArticle(){
        System.out.println(articleMapper.delArticle(3));
    }

    @Test
    void addArticle(){
        Article article = new Article();
        article.setTitle("add 1029");
        article.setContent("add content 1030");
        System.out.println(articleMapper.addArticle(article));
    }

    @Test
    void updateArticle(){
        Article article = new Article();
        article.setId(2);
        article.setTitle("update 1026...");
        article.setContent("content 1026");
        System.out.println(articleMapper.updateArticle(article));
    }

    @Test
    void getArticleList(){
        System.out.println(articleMapper.getArticleList());
    }

    @Test
    void getArticleById() {
        System.out.println(articleMapper.getArticleById(1));
    }
}

```













## 整合 JPA
### Spring Date JPA 介绍

Spring Data 是Spring的一个子项目，旨在统一和简化各类型数据的持久化存储方式，而不拘泥于是关系型数据库还是NoSQL数据库。无论是哪种持久化存储方式，数据访问对象（Data Access Objects，DAO）都会提供对对象的增加、删除、修改和查询的方法，以及排序和分页方法等。
Spring Data 提供了基于这些层面的统一接口（如：CrudRepository、 PagingAndSortingRepository），以实现持久化的存储。



JPA（Java Persistence API）是Java的持久化API，用于对象的持久化。它是一个非常强大的ORM持久化的解决方案，免去了使用JDBCTemplate开发的编写脚本工作。JPA通过简单约定好接口方法的规则自动生成相应的JPQL语句，然后映射成POJO对象。

JPA是一个规范化接口，封装了Hibernate的操作作为默认实现，让用户不通过任何配置即可完成数据库的操作。





### Spring Boot 整合 JPA

#### **pom 依赖**

```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
	  <dependency>
       <groupId>mysql</groupId>
       <artifactId>mysql-connector-java</artifactId>
       <scope>runtime</scope>
     </dependency>
```



#### **配置文件**

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/wukong_blog?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&autoReconnect=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: rootroot
```





#### **实体类与表的映射**

```java
package com.wukongnotnull.domain;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

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

    @Column(name = "content" )
    private String content;
  
    @Column(name = "author")
    private String author;
  
    @Column(name = "article_id")
    private Integer articleId;


}

```



#### **自定义接口**

>  默认继承父接口，父接口提供了简单的增删改查方法，还不能满足业务需求，那就需要自定义方法

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
// 记得添加该注解 @Repository
@Repository
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

  	// 不能使用 * 通配符
    @Query("select c from b_comment c where c.articleId=?1",nativeQuery = false)
    List<Comment> getCommentList(Integer articleId);

  	// 若使用通配符 * 
    @Query(value = "select * from b_comment c where c.articleId=?1",nativeQuery = true)
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



#### **单元测试**

```java
package com.wukongnotnull.repository;

import com.wukongnotnull.domain.Comment;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

    /*
    author: 悟空非空也（B站/知乎/公众号） 
    */
@SpringBootTest
class CommentRepositoryTest {

    @Autowired
    private  CommentRepository commentRepository;

    @Test
    void findAll() {
        System.out.println(commentRepository.findAll());
    }
  
      @Test
    void findById(){
        Optional<Comment> optionalComment = commentRepository.findById(1);
        if (optionalComment.isPresent()) {
            Comment comment1 = optionalComment.get();
            System.out.println(comment1);
        }

    }

    @Test
    void findByAuthorNotNull(){
        System.out.println(commentRepository.findByAuthorNotNull());
    }

    @Test
    void count(){
        System.out.println(commentRepository.count());
    }

    @Test
    void getCommentList(){
        System.out.println(commentRepository.getCommentList(1));
    }

    @Test
    void getCommentList2(){
        System.out.println(commentRepository.getCommentList2(1));
    }

    @Test
    void updateComment(){
        System.out.println(commentRepository.updateComment("6666", 6));
    }

    @Test
    void deleteComment(){
        System.out.println(commentRepository.deleteComment(6));
    }

    @Test
    void save(){
        Comment comment = new Comment();
        comment.setAuthor("wukongnotnull0716");
        comment.setContent("content .... wukong ...");
        System.out.println(commentRepository.save(comment));
    }
}
```








## Spring Boot 整合 Redis

### Redis 简介

#### **Redis 概念**

Redis 是一个开源（BSD许可）的、内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件，并提供多种语言的API。



#### **优点**

1. 存取速度快：Redis速度非常快，每秒可执行大约110000次的设值操作，或者执行81000次的读取操作。

2. 支持丰富的数据类型：Redis支持开发人员常用的大多数数据类型，例如列表、集合、排序集和散列等。

3. 操作具有原子性：所有Redis操作都是原子操作，这确保如果两个客户端并发访问，Redis服务器能接收更新后的值。

4. 提供多种功能：Redis提供了多种功能特性，可用作非关系型数据库、缓存中间件、消息中间件等。



### Redis下载与安装

**下载路径**

https://github.com/microsoftarchive/redis/releases/tag/win-3.2.100

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajfof62oj61k70u0wjp02.jpg" alt="image-20200629130139745" style="zoom: 33%;" />



**解压后放入磁盘某位置就安装成功（免安装）**



**安装可视化客户端**

> 推荐安装 Redis Desktop Manager 客户端

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajfslg9lj60ow0cr0tm02.jpg" alt="image-20200629155409332" style="zoom:33%;" />





### Spring Boot 整合 Redis

#### 依赖启动器

> 在pom文件中添加Spring Data Redis依赖启动器

```properties
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

```



#### 配置

> 在全局配置文件application.properties中添加Redis数据库连接配置

```properties
spring:
  redis:
    host: 127.0.0.1
    port: 6379
    password:

```



#### 编写实体类

```java
package com.wukongnotnull.domain;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.util.List;

@Data
@RedisHash(value = "people")
public class Person {

    @Id
    private  String id;
    @Indexed
    private  String firstName;
    @Indexed
    private  String lastName;
    private  Address address;
    private List<Family> familyList;
}

```

```java
package com.wukongnotnull.domain;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import lombok.Data;
import org.springframework.data.redis.core.index.Indexed;

@Data
public class Address {

    @Indexed
    private  String nation;
    @Indexed
    private  String village;

}
```

```java
package com.wukongnotnull.domain;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import lombok.Data;
import org.springframework.data.redis.core.index.Indexed;

@Data
public class Family {

    @Indexed
    private String   type;

    @Indexed
    private String   name;


}

```



#### 编写 Repository 接口

```java
package com.wukongnotnull.repository;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import com.wukongnotnull.domain.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person,String> {

    Person findPersonByFirstName(String firstName);

    @Override
    <S extends Person> S save(S entity);

}

```



#### 单元测试

> 编写单元测试进行接口方法测试以及整合测试

```java
 package com.wukongnotnull.repository;

import com.wukongnotnull.domain.Address;
import com.wukongnotnull.domain.Family;
import com.wukongnotnull.domain.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

/*
author: 悟空非空也（B站/知乎/公众号） 
*/
@SpringBootTest
class PersonRepositoryTest {

    @Autowired
    private  PersonRepository personRepository;

    @Test
    void findPersonByFirstName() {
        System.out.println(personRepository.findPersonByFirstName("空"));
    }

    @Test
    void save() {
        Person person = new Person();
        person.setId("001");
        person.setLastName("悟");
        person.setFirstName("空");

        Address address = new Address();
        address.setNation("中国");
        address.setVillage("南京");
        person.setAddress(address);

        List<Family> familyList = new ArrayList<>();
        Family father = new Family();
        father.setType("father");
        father.setName("杨康");
        Family mother = new Family();
        mother.setType("mother");
        mother.setName("穆念慈");
        familyList.add(father);
        familyList.add(mother);
        person.setFamilyList(familyList);

        System.out.println(personRepository.save(person));
    }
}

```







