# 安全管理
## SpringSecurity

### 介绍

Spring Security致力于为Java应用提供认证和授权管理。它是一个强大的，高度自定义的认证和访问控制框架。

这句话包括两个关键词：Authentication（认证）和 Authorization（授权，也叫访问控制）

认证是验证用户身份的合法性，而授权是控制你可以做什么。

简单地来说，认证就是你是谁，授权就是你可以做什么。



### 用户角色权限模型

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakmhsphuj60sa0dw75802.jpg" alt="image-20210909185204649" style="zoom:50%;" />



## Spring Security 快速入门



**pom.xml**

```xml
 <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
```





**直接url访问**

>默认显示 登录界面，该界面是由spring security提供的
>用户名  user
>密码   启动项目时候，在控制台随机生成



![image-20200711182516541](https://tva1.sinaimg.cn/large/008i3skNgy1gvakmminkdj61ez0mpq4d02.jpg)





### Mvc Security 安全配置介绍







## Security 身份认证

### 内存身份认证

> 自定义用户名和密码，该方法适用于测试环境，临时使用

#### pom.xml

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>
```





#### 前端页面

> 首页 index.html
>
> 主页 home.html





#### SecurityConfig

```java
package com.wukongnotnull.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.InMemoryUserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//author: 悟空非空也（B站/知乎/公众号）
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //设置密码编码器
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        // 内存身份认证，模拟测试用户
        InMemoryUserDetailsManagerConfigurer<AuthenticationManagerBuilder> builder =
                auth.inMemoryAuthentication().passwordEncoder(bCryptPasswordEncoder);

        builder.withUser("wukong").password(bCryptPasswordEncoder.encode("wukong")).roles("common");
        builder.withUser("admin").password(bCryptPasswordEncoder.encode("admin")).roles("vip");
    }

}

```







### JDBC 身份认证

**sql 脚本**

```sql
#use database
USE springbootdata;
#create t_customer 并插入相关数据
DROP TABLE IF EXISTS `t_customer`;
CREATE TABLE t_customer (
	`id` INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(200),
	`password` VARCHAR(200),
	`valid` TINYINT(1) NOT NULL DEFAULT '1'
);
INSERT INTO t_customer VALUES(
	'1','wukong','wukong','1'
),(
	'2','admin','admin','1'
);

#创建表 t_authority 并插入数据
DROP TABLE IF EXISTS `t_authority`;
CREATE TABLE `t_authority`(
	id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	authority VARCHAR(20)
);
INSERT INTO `t_authority` VALUES(
	1,'ROLE_common'
),(2,'ROLE_vip');

#创建中间表 t_customer_authority，并插入数据
DROP TABLE IF EXISTS `t_customer_authority`;
CREATE TABLE `t_customer_authority`(
	id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	customer_id INT(20),
	authority_id INT(20)
);
INSERT INTO `t_customer_authority` VALUES(
	'1','1','1'
),(
	'2','2','2'
);

```





**配置mysql连接**

```xml
# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/springbootdata?serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

spring.thymeleaf.cache=false
```





**添加依赖**

```xml
       <!--jdbc数据库连接启动器-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <!--mysql 数据库连接驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
```





**编写SecurityConfig**

```java
package com.wukongnotnull.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.InMemoryUserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    //重写 configure方法
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //设置密码编码器
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        //使用jdbc进行身份认证
        String userSQL ="select username,password,valid from t_customer " +
                   "where username = ?";
           String authoritySQL="select c.username,a.authority from t_customer c,t_authority a,"+
                   "t_customer_authority ca where ca.customer_id=c.id " +
                   "and ca.authority_id=a.id and c.username =?";
           auth.jdbcAuthentication().passwordEncoder(bCryptPasswordEncoder)
                   .dataSource(dataSource)
                   .usersByUsernameQuery(userSQL)
                   .authoritiesByUsernameQuery(authoritySQL);

    }
}

```





**登录测试**

> 1   对密码进行编码加密
>
> ```java
> @Test
> void contextLoads() {
>  //设置密码编码器
>  BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
>  String wukong = bCryptPasswordEncoder.encode("wukong");
>  String admin = bCryptPasswordEncoder.encode("admin");
>  System.out.println("wukong = " + wukong);
>  System.out.println("admin = " + admin);
>  System.out.println("是否编码成功？---> " + bCryptPasswordEncoder.matches("wukong", wukong));
> }
> ```
>
> 2  生成的密码保存到数据库中





<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvaknm7yvlj60vh0jjgmd02.jpg" alt="image-20200711203828048" style="zoom:25%;" />











### UserDetailService 身份认证

#### **pom.xml**

```java
        <!-- Spring Data JPA操作数据库  -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <!--mysql 数据库连接驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>

```



#### **domain:**

**Authority**

```java
package com.wukongnotnull.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "t_authority")
public class Authority implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private  String authority;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public String toString() {
        return "Authority{" +
                "id=" + id +
                ", authority='" + authority + '\'' +
                '}';
    }
}

```



**Customer**

```java
package com.wukongnotnull.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
@Entity(name = "t_customer")
public class Customer implements  Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private  String username;
    private  String password;
    private  Integer valid;

    public Integer getValid() {
        return valid;
    }

    public void setValid(Integer valid) {
        this.valid = valid;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

```



#### **repository**

**:AuthorityRepository**

```java
package com.wukongnotnull.repository;

import com.wukongnotnull.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AuthorityRepository extends JpaRepository<Authority,Integer> {
  
    @Query(value = "select a.* from t_customer c,t_authority a,t_customer_authority ca where ca.customer_id=c.id and ca.authority_id=a.id and c.username =?1",nativeQuery = true)
    public List<Authority> findAuthoritiesByUsername(String username);
  
}

```



**CustomerRepository**

```java
package com.wukongnotnull.repository;

import com.wukong.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {

    Customer findByUsername(String username);


}

```



#### **service**

**CustomerService**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.domain.Customer;

public interface CustomerService {

    // 根据用户名查询用户信息
    Customer findByUsername(String username);
}

```



**AuthorityService**

```
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.domain.Authority;

import java.util.List;

public interface AuthorityService {

    public List<Authority> findAuthoritiesByUsername(String username);
}
```



**CustomerServiceImpl**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.repository.CustomerRepository;
import com.wukongnotnull.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements  CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    // 根据用户名查询用户信息
   public Customer findByUsername(String username){

       return customerRepository.findByUsername(username);

    }

}
```



**AuthorityServiceImpl**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.repository.AuthorityRepository;
import com.wukongnotnull.domain.Authority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuthorityServiceImpl implements AuthorityService{
    @Autowired
    private AuthorityRepository authorityRepository;

    // 根据唯一用户名查询权限列表
    public List<Authority> findAuthoritiesByUsername(String username){

          return authorityRepository.findAuthoritiesByUsername(username);

    }

}
```



**UserDetailsServiceImpl**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.domain.Authority;
import com.wukongnotnull.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private CustomerService customerService;
    @Autowired
    private AuthorityService authorityService;



    @Override
    public UserDetails loadUserByUsername(String username) 
      throws UsernameNotFoundException {
        //通过业务方法获取用户及权限信息
        Customer customer = customerService.findByUsername(username);

        List<Authority> authorities = 
          authorityService.findAuthoritiesByUsername(username);
        // 对权限进行封装
        List<SimpleGrantedAuthority> authorityList = authorities.stream().
                map(authority -> new SimpleGrantedAuthority(authority.getAuthority()))
                .collect(Collectors.toList());

        // 返回封装的UserDetails用户详情类
        if(customer!=null){
            // 同名用户存在，那么密码是否一致呢？
            UserDetails userDetails= 
              new User(customer.getUsername(),customer.getPassword(),authorityList);
            return userDetails;
        } else {
            // 如果查询的用户不存在（用户名不存在），必须抛出此异常
            throw new UsernameNotFoundException("当前用户不存在！");
        }

    }
}
```





**SecurityConfig**

```
package com.wukongnotnull.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//author: 悟空非空也（B站/知乎/公众号）
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        //设置密码编码器
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        //使用 UserDetailsService 进行身份认证时，对明文密码进行加密
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);

    }

}
```





**登录测试**

> | 用户名 | 密码   |
> | ------ | ------ |
> | wukong | wukong |
> | admin  | admin  |




### 悟空编号







### 学前素材准备

> 前端资源（html css js image 等等）
>
> 链接：https://share.weiyun.com/hzCrSxQ9 密码：wukong







### 自定义用户访问控制

> 使用随机密码进行测试
>
> 默认情况下，是无法访问首页index.html；登录状态下，是可以访问静态资源的，比如图片，样式等
>
> 那么，如何实现未登录状态下，访问 index 首页和静态资源呢？
>
> 如何实现访问指定页面资源，需要指定角色权限呢？



```java
@Override
protected void configure(HttpSecurity http) throws Exception {
        // 自定义用户授权管理
        http.authorizeRequests()
                 // 未登录状态下，所有人都可以访问
                .antMatchers("/").permitAll()
                // 未登录状态下，对static文件夹下静态资源（图片和样式），所有人都可以访问
                .antMatchers("/login/**").permitAll()
          			// 拥有指定角色（权限）， common 或者 vip，才能访问对应资源
                .antMatchers("/detail/common/**").hasAnyRole("common","vip")
                .antMatchers("/detail/vip/**").hasRole("vip")
                // 任何请求访问都需要先进行身份认证
                .anyRequest().authenticated();
}
```





> Spring Security 中的 hasRole 和 hasAuthority 有区别吗？
>
> https://cloud.tencent.com/developer/article/1703187



**hasRole()**

```java
public ExpressionInterceptUrlRegistry hasRole(String role) {
 return access(ExpressionUrlAuthorizationConfigurer.hasRole(role));
}
private static String hasRole(String role) {
 Assert.notNull(role, "role cannot be null");
 if (role.startsWith("ROLE_")) {
  throw new IllegalArgumentException(
    "role should not start with 'ROLE_' since it is automatically inserted. Got '"
      + role + "'");
 }
 return "hasRole('ROLE_" + role + "')";
}
```






### 自定义用户登录页面

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>用户登录界面</title>
    <link th:href="@{/login/css/bootstrap.min.css}" rel="stylesheet">
    <link th:href="@{/login/css/signin.css}" rel="stylesheet">
    <link th:href="@{/login/css/mycss.css}" rel="stylesheet"/>
</head>
<body class="text-center">
<form class="form-signin" th:action="@{/userLogin}" th:method="post">
    <img class="mb-4" th:src="@{/login/img/login.jpg}" width="72px" height="72px" alt="">
    <h1 class="h3 mb-3 font-weight-normal">请登录</h1>
    <!-- 用户登录错误信息提示框 -->
    <div th:if="${param.error}" style="color: red;height: 40px;text-align: left;font-size: 1.1em">
        <img th:src="@{/login/img/loginError.jpg}" width="20px" alt="">用户名或密码错误，请重新登录！
    </div>
    <label>
        <input type="text" name="name" class="form-control" placeholder="用户名" required="" autofocus="">
    </label>
    <label>
        <input type="password" name="pwd" class="form-control" placeholder="密码" required="">
    </label>
    <div class="checkbox mb-3">
        <label>
            <input type="checkbox" name="rememberMe"> 记住我
        </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
    <p class="mt-5 mb-3 text-muted">Copyright© 2050-3030</p>
</form>
</body>
</html>

```



```java
package com.wukongnotnull.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


//author: 悟空非空也（B站/知乎/公众号）
@Controller
public class LoginController {

    @GetMapping("/userLogin")  //路径要和 提交登录表单的url 一致
    public String index(){
        return "login/login";
    }

}
```



```java
package com.wukongnotnull.config;


import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import javax.sql.DataSource;


//author: 悟空非空也（B站/知乎/公众号）
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {

        // 自定义用户登录控制
        // 技巧： 获得登录页和处理登录信息的 url 都是 /userLogin , post 请求进入如下方法
        http.authorizeRequests().and()
          			// 开启登录功能
          			.formLogin()
          			// 访问登录页面（自定义登录路径）
                .loginPage("/userLogin").permitAll()
          			//  指定登录处理的 url ，对应action的值
          			.loginProcessingUrl("/userLogin")
                .usernameParameter("name")
                .passwordParameter("pwd")
          			// 	登录成功后，访问首页 /
                .defaultSuccessUrl("/")
          			// 登录失败后，访问 /userLogin?error
                .failureUrl("/userLogin?error");

    }

}

```





### 自定义用户退出

```java
    @Override
    protected void configure(HttpSecurity http) throws Exception {
 				// 退出
        http
          // 开启退出功能
          .logout()
          // 访问 /logout 执行退出功能
          .logoutUrl("/logout")
          // 退出成功，访问首页  / 
          .logoutSuccessUrl("/");

    }
```





### 登录用户信息获取

```
    /**
     *  通过 Security 提供的 SecurityContextHolder 获取登录用户信息
     * @return String
     */
    @GetMapping("/userInfo")
    @ResponseBody
    public String getUser(){
        // 获取应用上下文
        SecurityContext context = SecurityContextHolder.getContext();
        // 获取用户相关信息
        Authentication authentication = context.getAuthentication();
        UserDetails userDetails = (UserDetails)authentication.getPrincipal();
        System.out.println("username: "+userDetails.getUsername());
        return "登录的用户名为： " + userDetails.getUsername();
    }
```





### 记得我功能

```
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" name="rememberMe"> 记住我
            </label>
        </div>
```



```mysql
USE springbootdata;
# 来源于 JdbcTokenRepositoryImpl 
create table persistent_logins (username varchar(64) not null, series varchar(64) primary key,
			token varchar(64) not null, last_used timestamp not null);

```



```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
```



```java
    // 使用jdbc 技术访问数据库 
    @Autowired
    private DataSource dataSource;
   
   
   /**
     * 持久化Token存储
     * @return 
     */
    @Bean
    public JdbcTokenRepositoryImpl tokenRepository(){
        JdbcTokenRepositoryImpl jr=new JdbcTokenRepositoryImpl();
        jr.setDataSource(dataSource);
        return jr;
    }

		@Override
    protected void configure(HttpSecurity http) throws Exception {
       // 记住我
        http.rememberMe()
                .rememberMeParameter("rememberMe")
                .tokenValiditySeconds(60*60*24*7)
                .tokenRepository(this.tokenRepository());
    }

```





### CSRF防护功能

> 跨站伪造用户，获得真实用户的 session 信息，伪造成真实用户，进行非法操作。



**form 表单使用 csrf 防护**

>  			 			 <!--csrf 防护： 添加如下代码-->
>  			 	   <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>

```html
    <!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org" lang="en">
    <head>
        <meta charset="UTF-8">
        <title>修改用户</title>
        <link th:href="@{/login/css/mycss.css}" rel="stylesheet"/>
    </head>
    <body>
    <div align="center">
        <form method="post" th:action="@{/updateUser}">
            <!--csrf 防护： 添加如下代码-->
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>
            <label>用户名:
                <input type="text" name="username"/>
            </label><br/>
            <button type="submit">修改用户名</button>
        </form>
    </div>
    </body>
</html>
```



```java
package com.wukongnotnull.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

//author: 悟空非空也（B站/知乎/公众号）
@Controller
public class CSRFController {
    @GetMapping("/updateUser")
    public String updateUser(){
        return "csrf/csrfTest";
    }


    @ResponseBody
    @PostMapping("/updateUser")
    public String updateUser(@RequestParam("username") String username,
                             HttpServletRequest request
    ){
        System.out.println("request = " + request);

        String csrf_token=request.getParameter("_csrf");
        System.out.println("csrf_token = " + csrf_token);

        System.out.println("username = " + username);
        return "success";
    }
}

```





**ajax 使用 csrf 防护**

```html
<head> //针对ajax数据修改的CSRF Token配置
    <meta name="_csrf" th:content="${_csrf.token}"/>
    <meta name="_csrf_header" th:content="${_csrf.headerName}"/>
</head>

$(function () {
    var token = $("meta[name='_csrf']").attr("content");
    var headerName = $("meta[name='_csrf_header']").attr("content");
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(headerName, token);
    });
});
```





### Security 管理前端页面内容呈现

> 不同权限，页面内容针对性呈现不同的内容
>
> 应用场景： 动态菜单的实现



```
       <!--使 thymeLeaf 上的权限属性生效-->
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-springsecurity5</artifactId>
        </dependency>
```



> **(1)sec:authorize="isAuthenticated()"**
>
> **判断用户是否已经登陆认证，引号内的参数必须是isAuthenticated()。**
>
> **(2)sec:authentication=“name”**
>
> **获得当前用户的用户名，引号内的参数必须是name。**
>
> **(3)sec:authorize=“hasRole(‘role’)”**
>
> **判断当前用户是否拥有指定的权限。引号内的参数为权限的名称。**
>
> **(4)sec:authentication="principal.authorities"**
>
> **获得当前用户的全部角色，引号内的参数必须是principal.authorities。**





**index.html**

```html
<!DOCTYPE html>
<html
		xmlns:th="http://www.thymeleaf.org"
		xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>新浪新闻平台</title>
	<link th:href="@{/login/css/mycss.css}" rel="stylesheet"/>
</head>

<body>
<h1>欢迎新浪新闻首页</h1>

<div sec:authorize="isAnonymous()">
	<h2>游客您好，如果想查看<b>会员新闻</b><a th:href="@{/userLogin}">请登录</a></h2>
</div>


<div sec:authorize="isAuthenticated()">
	<h2>
		用户: <span sec:authentication="name" style="color: #0e69cb"></span> 
		您的权限：<span sec:authentication="principal.authorities" style="color:#66c256"></span>，您有权观看以下内容
	</h2>
	<form th:action="@{/logout}" method="post">
		<label>
			<input th:type="submit" th:value="注销"/>
		</label>
	</form>
</div>

<hr>

<div>
	<h3>游客 - 新闻专栏</h3>
	<ul>
		<li><a th:href="@{/detail/visitor/1}">新闻1：悟空非空也带你学习 Java </a></li>
		<li><a th:href="@{/detail/visitor/2}">新闻2：悟空非空也带你学习 Python </a></li>
		<li><a th:href="@{/detail/visitor/3}">新闻3：悟空非空也带你学习 C++ </a></li>
	</ul>
</div>

<!--<div sec:authorize="hasRole('common')">-->
<div sec:authorize="hasRole('common') || hasRole('vip')">
	<h3>普通会员 - 新闻专栏</h3>
	<ul>
		<li><a th:href="@{/detail/common/1}">普通会员新闻：1 </a></li>
		<li><a th:href="@{/detail/common/2}">普通会员新闻：2 </a></li>
	</ul>
</div>

<!--<div sec:authorize="hasAuthority('ROLE_vip')">-->
<div sec:authorize="hasRole('vip')">
	<h3>VIP会员 - 专享专栏</h3>
	<ul>
		<li><a th:href="@{/detail/vip/1}">vip会员新闻：1</a></li>
		<li><a th:href="@{/detail/vip/2}">vip会员新闻：2</a></li>
	</ul>
</div>

</body>
</html>


```







### 源码归档

> 归档链接










## Shiro

什么是 Shiro？

官网：http://shiro.apache.org/

是一款主流的 Java 安全框架，不依赖任何容器，可以运行在 Java SE 和 Java EE 项目中，它的主要作用是对访问系统的用户进行身份认证、授权、会话管理、加密等操作。

Shiro 就是用来解决安全管理的系统化框架。



### Shiro 核心组件

> 用户、角色、权限 三者的关系是什么？
>
> 给用户赋予角色 ,会给角色赋予权限。



- **UsernamePasswordToken**     Shiro 用来封装用户登录信息，使用用户的登录信息来创建令牌 Token。

- **SecurityManager**      Shiro 的核心部分，负责安全认证和授权。

- **Suject**          Shiro 的一个抽象概念，包含了用户信息。

- **Realm**         开发者自定义的模块，根据项目的需求，验证和授权的逻辑全部写在 Realm 中。

- **AuthenticationInfo**     用户的角色信息集合，认证时使用。

- **AuthorzationInfo**        角色的权限信息集合，授权时使用。

- **DefaultWebSecurityManager**   安全管理器，自定义的 Realm 需要注入到 DefaultWebSecurityManager 进行管理才能生效。

- **ShiroFilterFactoryBean**        过滤器工厂，Shiro 的基本运行机制是开发者定制规则，Shiro 去执行，具体执行操作由   ShiroFilterFactoryBean 创建的每个 Filter 对象来完成。





Shiro 的运行机制如下图所示。



### Spring Boot 整合 Shiro

1、创建 Spring Boot 应用，集成 Shiro 及相关组件，pom.xml

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <dependency>
        <groupId>org.apache.shiro</groupId>
        <artifactId>shiro-spring</artifactId>
        <version>1.5.3</version>
    </dependency>

    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>

    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.3.1.tmp</version>
    </dependency>

</dependencies>
```





2、自定义 Shiro 过滤器

```java
public class AccoutRealm extends AuthorizingRealm {

    @Autowired
    private AccountService accountService;

    /**
     * 授权
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
          //获取当前登录的用户信息
        Subject subject = SecurityUtils.getSubject();
        Account account = (Account) subject.getPrincipal();

        //设置角色，确定用户具备哪些角色
        Set<String> roles = new HashSet<>();
        roles.add(account.getRole());
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo(roles);

        //设置权限
        info.addStringPermission(account.getPerms());
        return info;
    }


    /**
     *  身份认证(登录验证)
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        Account account = accountService.findByUsername(token.getUsername());
        if(account != null){
              // 若是 密码不一致，shiro 抛出异常，表示密码不一致
            return new SimpleAuthenticationInfo(account,account.getPassword(),getName());
        }
        return null;  //shiro 抛出异常，表示用户名不存在
    }
}
```





3、配置类

```java
@Configuration
public class ShiroConfig {
      @Bean
    public AccoutRealm accoutRealm(){
        return new AccoutRealm();
    }

    @Bean
    public DefaultWebSecurityManager securityManager(@Qualifier("accoutRealm") AccoutRealm accoutRealm){
        DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
        manager.setRealm(accoutRealm);
        return manager;
    }
  
      @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager securityManager){
        ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();
        factoryBean.setSecurityManager(securityManager);
        return factoryBean;
    }

}
```





**controller**

```java
@Controller
public class AccountController {

    @GetMapping("/{url}")
    public String redirect(@PathVariable("url") String url){
        return url;
    }

    @PostMapping("/login")
    public String login(String username, String password, Model model){
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        try {
            subject.login(token);
            Account account = (Account) subject.getPrincipal();
            subject.getSession().setAttribute("account",account);
            return "index";
        } catch (UnknownAccountException e) {
            e.printStackTrace();
            model.addAttribute("msg","用户名错误！");
            return "login";
        } catch (IncorrectCredentialsException e){
            model.addAttribute("msg","密码错误！");
            e.printStackTrace();
            return "login";
        }
    }

    @GetMapping("/unauth")
    @ResponseBody
    public String unauth(){
        return "未授权，无法访问！";
    }

    @GetMapping("/logout")
    public String logout(){
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "login";
    }
}
```





**编写认证和授权规则：**

> 认证过滤器

anon：无需认证。

authc：必须认证。

authcBasic：需要通过 HTTPBasic 认证。

user：不一定通过认证，只要曾经被 Shiro 记录即可，比如：记住我。



> 授权过滤器

perms：必须拥有某个权限才能访问。

role：必须拥有某个角色才能访问。

port：请求的端口必须是指定值才可以。

rest：请求必须基于 RESTful，POST、PUT、GET、DELETE。

ssl：必须是安全的 URL 请求，协议 HTTPS。



创建 3 个页面，main.html、manage.html、administrator.html

访问权限如下：

1、必须登录才能访问 main.html

2、当前用户必须拥有 manage 授权才能访问 manage.html

3、当前用户必须拥有 administrator 角色才能访问 administrator.html



### 访问控制

> 不同请求需要满足设置好的权限，才能访问成功。
>
> 可以将不同的请求路径，设置不同的权限。只有符合指定的权限，才能正常访问。



```java
import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Hashtable;
import java.util.Map;

@Configuration
public class ShiroConfig {

    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager securityManager){
        ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();
        factoryBean.setSecurityManager(securityManager);
      
           //设置登录页面
        factoryBean.setLoginUrl("/login");
      
        //权限设置
        Map<String,String> map = new Hashtable<>();
        map.put("/main","authc");
        map.put("/manage","perms[manage]");
        map.put("/administrator","roles[administrator]");
        factoryBean.setFilterChainDefinitionMap(map);
   
        //设置未授权页面
        factoryBean.setUnauthorizedUrl("/unauth");
        return factoryBean;
    }


    @Bean  // @Qualifier("同下面的方法名")
    public DefaultWebSecurityManager securityManager(@Qualifier("accoutRealm") AccoutRealm accoutRealm){
        DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
        manager.setRealm(accoutRealm);
        return manager;
    }

    @Bean
    public AccoutRealm accoutRealm(){
        return new AccoutRealm();
    }


}
```



**controller**

```java
@Controller
public class AccountController {

    @GetMapping("/{url}")
    public String redirect(@PathVariable("url") String url){
        return url;
    }

    @PostMapping("/login")
    public String login(String username, String password, Model model){
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        try {
            subject.login(token); //如果登录身份验证成功，执行下面代码
            Account account = (Account) subject.getPrincipal();
            subject.getSession().setAttribute("account",account);
            return "index";
        } catch (UnknownAccountException e) {
            e.printStackTrace();
            model.addAttribute("msg","用户名错误！");
            return "login";
        } catch (IncorrectCredentialsException e){
            model.addAttribute("msg","密码错误！");
            e.printStackTrace();
            return "login";
        }
    }

    @GetMapping("/unauth")
    @ResponseBody
    public String unauth(){
        return "未授权，无法访问！";
    }

    @GetMapping("/logout")
    public String logout(){
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        return "login";
    }
}
```





### Shiro 整合 Thymeleaf

1、pom.xml 引入依赖

```xml
<dependency>
    <groupId>com.github.theborakompanioni</groupId>
    <artifactId>thymeleaf-extras-shiro</artifactId>
    <version>2.0.0</version>
</dependency>
```

2、配置类添加 ShiroDialect

```java
@Bean
public ShiroDialect shiroDialect(){
    return new ShiroDialect();
}
```

3、index.html

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org" xmlns:shiro="http://www.thymeleaf.org/thymeleaf-extras-shiro">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="shortcut icon" href="#"/>
</head>
<body>
    <h1>index</h1>
    <div th:if="${session.account != null}">
        <span th:text="${session.account.username}+'欢迎回来！'"></span><a href="/logout">退出</a>
    </div>
    <a href="/main">main</a> <br/>
    <div shiro:hasPermission="manage">
        <a href="manage">manage</a> <br/>
    </div>
    <div shiro:hasRole="administrator">
        <a href="/administrator">administrator</a>
    </div>
</body>
</html>
```

