# 核心配置和注解
## application 官方配置文件
###  application.properties配置文件

**配置端口号**

```
#配置端口号
server.port=8090
#配置虚拟路径
server.servlet.context-path=/project-name
```



### application.yaml配置文件

```
#端口号 虚拟路径
server:
  port: 8091
  servlet:
    context-path: /project-name2
```



**注意**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5wwk43sij610f0c0din02.jpg" alt="1593077278907" style="zoom:50%;" />







## 属性注入


### @ConfigurationProperties注入属性


第 1 种方法 properties

```properties
#给类属性赋值
person.id=1
person.name=wukongnotnull
person.family=baba,mama,gege,jiejie
person.hobbies=dance,game,110
person.map.level=3
person.map.salary=3000
person.pet.petName=wangcai
person.pet.petAge=3
```



第二种方式yml

```yaml
#给类属性赋值
person:
  id: 2
  name: wukongnotnull
  family: [baba,mama,gege,jiejie]
  hobbies: [dance,game,sing]
  map: {level: 3,salary: 3000}
  pet: {petName: wangcai, petAge: 3}

```



编写实体类

```java
package com.wukongnotnull.domain;
  /* 
  author: 悟空非空也（B站/知乎/公众号） 
  */

public class Pet {

    private String  petName;
    private  int  petAge;

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public int getPetAge() {
        return petAge;
    }

    public void setPetAge(int petAge) {
        this.petAge = petAge;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "petName='" + petName + '\'' +
                ", petAge=" + petAge +
                '}';
    }
}


```



使用@Component,@ConfigurationProperties注解

```java
package com.wukongnotnull.domain;
  /* 
  author: 悟空非空也（B站/知乎/公众号） 
  */

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "person")
public class Person {

    private  int id;
    private  String name;
    private String[] family;
    private List hobbies;
    private Map map;
    private Pet pet;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List getHobbies() {
        return hobbies;
    }

    public void setHobbies(List hobbies) {
        this.hobbies = hobbies;
    }

    public String[] getFamily() {
        return family;
    }

    public void setFamily(String[] family) {
        this.family = family;
    }

    public Map getMap() {
        return map;
    }

    public void setMap(Map map) {
        this.map = map;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", family=" + Arrays.toString(family) +
                ", hobbies=" + hobbies +
                ", map=" + map +
                ", pet=" + pet +
                '}';
    }
}

```



测试类

```java
@SpringBootTest
class MySpringbootApplicationTests {

    @Autowired
    private  Person person;


    @Test
    public void personTest(){
        System.out.println(person);
    }
 
}
```





###  @Value 注入属性



@Value直接注入属性

```yaml
person:
  id: 2
  name: wukongnotnull
  family: [baba,mama,gege,jiejie]
  hobbies: [dance,game,sing]
  map: {level: 3,salary: 3000}
  pet: {petName: wangcai, petAge: 3}


flag: wukong
```



测试

```java
@SpringBootTest
class MySpringbootApplicationTests {


    @Value(value="${flag}")
    private  String flag;

    @Value(value = "${person.id}")
    private  Integer id;

    @Value(value = "${person.name}")
    private  String name;


    @Value(value = "${person.family[0]}")
    private String familyOne;

    @Value(value = "${person.family}")
    private List family;

    @Value(value = "${person.hobbies[0]}")
    private String hobbiesOne;

    @Value(value="${person.hobbies}")
    private String[] hobbies;

    // 对于自定义对象或者Map类型的数据，需要直接取属性值
    @Value(value = "${person.map.level}")
    private Integer level;

    @Value(value="${person.pet.petName}")
    private String  petName;

    //报错：llegalArgumentException: Could not resolve placeholder 'person.pet' in value "${person.pet}"
/*    @Value(value = "${person.pet}")
    private Pet pet;*/

    @Test
    void testValue(){
        System.out.println("flag = " + flag);
        System.out.println("id = " + id);
        System.out.println("name = " + name);
        System.out.println("familyOne = " + familyOne);
        System.out.println("family = " + family);
        System.out.println("hobbiesOne = " + hobbiesOne);
        System.out.println("hobbies = " + Arrays.toString(hobbies));
        System.out.println("level = " + level);
        System.out.println("petName = " + petName);
        /*  System.out.println("pet = " + pet);*/
    }
  

}
```


### 两种注解对比分析

![1593089590122](https://tva1.sinaimg.cn/large/008i3skNgy1gv5wy2u2jwj60zo0klad402.jpg)



### @ConfigurationProperties注解支持JSR303数据校验


application.properties

```properties
#@ConfigurationProperties注解支持JSR303数据校验
user.email=1390128154@qq.com
```



pom

```pom
       <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
```





实体类

```java
package com.wukongnotnullg.myspringboot.domain;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Email;

@Component
@ConfigurationProperties(prefix = "user")
@Validated
public class User {

    @Email
    private  String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
```





test

```java

@SpringBootTest
class ApplicationTests {

    @Autowired
    private User user;

    @Test
    void emailValidation() {
        System.out.println("user = " + user);
    }

}
```







# 自定义配置文件
## 使用 @PropertySource 加载自定义配置文件

### @PropertySource 源码
```java
public @interface PropertySource {

	/**
	 * Indicate the resource location(s) of the properties file to be loaded.
	 * <p>Both traditional and XML-based properties file formats are supported
	 * &mdash; for example, {@code "classpath:/com/myco/app.properties"}
	 * or {@code "file:/path/to/file.xml"}.
	 * <p>Resource location wildcards (e.g. *&#42;/*.properties) are not permitted;
	 * each location must evaluate to exactly one {@code .properties} or {@code .xml}
	 * resource.
	 * <p>${...} placeholders will be resolved against any/all property sources already
	 * registered with the {@code Environment}. See {@linkplain PropertySource above}
	 * for examples.
	 * <p>Each location will be added to the enclosing {@code Environment} as its own
	 * property source, and in the order declared.
	 */
	String[] value();

```

### 案例


自定义配置文件
test.properties

```properties

#自定义配置文件
test.id=1
test.name=wukongnotnull

```



实体类

```java

package com.wukongnotnull.myspringboot.domain;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

    /**
     * @Author: 悟空非空也（公众号/B站/知乎）
     */
//注意：可以使用@Component代替
//@Configuration+@EnableConfigurationProperties(MyProperties.class)

@Configuration//指定当前类为配置类
@EnableConfigurationProperties(MyProperties.class)//开启配置文件的属性注入功能
@PropertySource(value="classpath:test.properties")//指定自定义配置文件的来源
@ConfigurationProperties(prefix = "test")
public class MyProperties {

    private  int id;
    private  String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "MyProperties{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}

```



测试


```java

@SpringBootTest
class MySpringbootApplicationTests {

    @Autowired
    private MyProperties myProperties;

    @Test
    public void myPropertiesTest(){
        System.out.println("myProperties===>"+myProperties);
    }

}

```





## 使用@ImportResource加载自定义的 spring xml 配置文件

### @ImportResource 源码
```java

public @interface ImportResource {

	/**
	 * Resource locations from which to import.
	 * <p>Supports resource-loading prefixes such as {@code classpath:},
	 * {@code file:}, etc.
	 * <p>Consult the Javadoc for {@link #reader} for details on how resources
	 * will be processed.
	 * @since 4.2
	 * @see #value
	 * @see #reader
	 */
	@AliasFor("value")
	String[] locations() default {};
```
### 案例
创建 spring xml 配置文件  
myBeans.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="myPet" class="com.wukongnotnull.domain.Pet"/>

</beans>
```



启动类上添加 @ImportResource 注解

```java

package com.wukongnotnull;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource(value = "classpath:myBeans.xml")
public class InitializrProjectApplication {

    public static void main(String[] args) {

        SpringApplication.run(InitializrProjectApplication.class, args);

    }

}

```



test

```java

@SpringBootTest
class InitializrProjectApplicationTests {

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    void beansTest(){
        Pet myPet =(Pet) applicationContext.getBean("myPet");
        System.out.println("myPet----->" + myPet);
    }

}


```



## 使用 @Configuration 编写自定义配置类

### @Configuration 源码

```java

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface Configuration {

	/**
	 * Explicitly specify the name of the Spring bean definition associated with the
	 * {@code @Configuration} class. If left unspecified (the common case), a bean
	 * name will be automatically generated.
	 * <p>The custom name applies only if the {@code @Configuration} class is picked
	 * up via component scanning or supplied directly to an
	 * {@link AnnotationConfigApplicationContext}. If the {@code @Configuration} class
	 * is registered as a traditional XML bean definition, the name/id of the bean
	 * element will take precedence.
	 * @return the explicit component name, if any (or empty String otherwise)
	 * @see AnnotationBeanNameGenerator
	 */
	@AliasFor(annotation = Component.class)
	String value() default "";

	/**
	 * Specify whether {@code @Bean} methods should get proxied in order to enforce
	 * bean lifecycle behavior, e.g. to return shared singleton bean instances even
	 * in case of direct {@code @Bean} method calls in user code. This feature
	 * requires method interception, implemented through a runtime-generated CGLIB
	 * subclass which comes with limitations such as the configuration class and
	 * its methods not being allowed to declare {@code final}.
	 * <p>The default is {@code true}, allowing for 'inter-bean references' via direct
	 * method calls within the configuration class as well as for external calls to
	 * this configuration's {@code @Bean} methods, e.g. from another configuration class.
	 * If this is not needed since each of this particular configuration's {@code @Bean}
	 * methods is self-contained and designed as a plain factory method for container use,
	 * switch this flag to {@code false} in order to avoid CGLIB subclass processing.
	 * <p>Turning off bean method interception effectively processes {@code @Bean}
	 * methods individually like when declared on non-{@code @Configuration} classes,
	 * a.k.a. "@Bean Lite Mode" (see {@link Bean @Bean's javadoc}). It is therefore
	 * behaviorally equivalent to removing the {@code @Configuration} stereotype.
	 * @since 5.2
	 */
	boolean proxyBeanMethods() default true;

}


```

### 案例

编写配置类

```java

package com.wukongnotnull.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
        /**
         * @Author: 悟空非空也（公众号/B站/知乎）
         */
@Configuration  //定义该类为配置类
public class MyConfig {

    @Bean(name = "aPet")
    public Pet getPetInstance(){
        return new Pet();
    }
}

```


```java

public class Pet {
    // properties 
}

```



测试

```java

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    public void myServiceTest(){
        Pet aPet = (Pet)applicationContext.getBean("aPet");
        System.out.println(aPet);
    }

```









##  profile 文件配置



多环境配置文件格式

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x020jjfj60jr0bbmyj02.jpg" alt="1593095923921" style="zoom:50%;" />





### 方法一

使用命令行方式激活指定环境的配置文件

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x05obbij61970apgo002.jpg" alt="1593098529499" style="zoom:50%;" />



ctrl+c  服务器运行退出

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x0ah73dj617c03f0tc02.jpg" alt="1593099959623" style="zoom:50%;" />

ctrl+c  停止



### 方法二
在全局配置文件application.properties设置 spring.profiles.active属性激活

```properties
spring.profiles.active=test
```


### 案例 1 不同环境下使用不同端口



**创建不同环境下配置文件**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x0f06ngj60f805qq3702.jpg" alt="image-20210714153939686" style="zoom:50%;" />



application.yml

```yaml
spring:
  profiles:
    active: test
```



application-dev.yml

```yaml
server:
  port: 8081
```



application-prod.yml

```yaml
server:
  port: 8082
```



application-test.yml

```yaml
server:
  port: 8083
```





**运行 main 方法，查看控制台的端口号输出信息**



### 案例 2 不同环境下使用不同数据库

**使用 @Profile 注解进行多环境配置**



编写不同环境下的配置类

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x0jpfoaj60ea06y0sy02.jpg" alt="image-20210714160713270" style="zoom:50%;" />



```java
package com.wukongnotnull.config;
/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

public interface DBConnector {

    /**
     *  对不同的环境下的数据库设置统一接口约束
     */
    void configuration();
}


```

```java

package com.wukongnotnull.config;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile(value = "dev")
public class DevDBConnector  implements  DBConnector{


    @Override
    public void configuration() {
        System.out.println("开发环境下连接数据库。。。");
    }

}

```


```java
package com.wukongnotnull.config;
/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile(value = "pro")
public class ProDBConnector  implements  DBConnector{

    @Override
    public void configuration() {
        System.out.println("生产环境下连接数据库。。。。。");
    }
}
```



```java
package com.wukongnotnull.config;/* 
author: 悟空非空也（B站/知乎/公众号） 
*/

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile(value = "test")
public class TestDBConnector implements  DBConnector{

    public void configuration() {
        System.out.println("测试环境下连接数据库。。。。");
    }
}


```



在全局配置文件application.properties中指定使用哪个环境

```properties

spring.profiles.active=test
#或者
#spring.profiles.active=pro
#或者
#spring .profiles.active=dev

```



测试

```java

    @Autowired
    private DBConnector dbConnector;

    @Test
    public void  dbConnectorTest(){
        dbConnector.configuration();
    }
```









## yml 高级玩法
### 参数间引用

application.properties

```properties

# 参数间的引用
app.name=wukongnotnull
app.description=${app.name} is a technology blog website, welcome your comming.

wukong.age=${random.int[10,20]}
wukong.description=悟空非空也的年龄可能是 ${wukong.age} 

```



test

```java
@SpringBootTest
class MySpringbootApplicationTests {

    @Value("${wukong.description}")
    private String authorDes;

    @Test
    void contextLoads() {
        System.out.println(authorDes);
    }
}
```




