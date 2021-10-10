# 视图技术
## Spring Boot 支持的视图技术


![image-20200627171028805](https://tva1.sinaimg.cn/large/008i3skNgy1gvalai69dpj60pn07d0tb02.jpg)

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajpb0m6gj60hv0az3yz02.jpg" alt="image-20200627171048685" style="zoom:50%;" />

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajpfyqjsj60qr0gy0w202.jpg" alt="image-20200627171424712" style="zoom:50%;" />





## Spring Boot 访问静态资源

### 访问静态资源

由于SpringBoot的项目一般打成jar包，项目结构中没有 webapps 目录。

那么，静态资源要放到哪里呢？

> Spring Boot 源码告诉我们，将静态资源放到 `resources/static`   (或者 `resources/public` 或者`resources/resources` 或者 `resources/META-INF/resources`) 中即可。







### 修改存放目录

> 根据 `spring.web.resources.static-locations`  自定义静态资源存放位置。
>
> 可以存放在 `src/main/resources/static/`
>
> 或者  `src/main/resources/public/ `
>
> 或者  `src/main/resources/wukong/`



```yaml
spring:
  web:
    resources:
      static-locations: classpath:/static/,classpath:/public/,classpath:/wukong/
```



`css`  和  `js` , 同理

http://localhost:8080/wukong/mycss.css

http://localhost:8080/wukong/myjs.js

也可以分别被引入到html页面中



![image-20210212221525314](https://tva1.sinaimg.cn/large/008i3skNgy1gvajq7jfyvj61ck0j1ado02.jpg)









### 修改访问路径

> `Spring Boot` 默认静态资源的路径匹配为/** 。
>
> 想要修改请设置  `spring.mvc.static-path-pattern`  。

在application.yml中

~~~~yml
spring:
  mvc:
    static-path-pattern: /wk/**  #修改静态资源访问路径
~~~~









## Spring Boot 整合 Thymeleaf
### Thymeleaf 介绍

**Thymeleaf 官网**  
https://www.thymeleaf.org/index.html

![img.png](https://tva1.sinaimg.cn/large/008i3skNgy1gvajqraosgj60kl05daa802.jpg)

Thymeleaf is a modern server-side Java template engine for both web and standalone environments.

Thymeleaf's main goal is to bring elegant natural templates to your development workflow — HTML that can be correctly displayed in browsers and also work as static prototypes, allowing for stronger collaboration in development teams.

With modules for Spring Framework, a host of integrations with your favourite tools, and the ability to plug in your own functionality, Thymeleaf is ideal for modern-day HTML5 JVM web development — although there is much more it can do.

Natural templates
HTML templates written in Thymeleaf still look and work like HTML, letting the actual templates that are run in your application keep working as useful design artifacts.

```html

<table>
  <thead>
    <tr>
      <th th:text="#{msgs.headers.name}">Name</th>
      <th th:text="#{msgs.headers.price}">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr th:each="prod: ${allProducts}">
      <td th:text="${prod.name}">Oranges</td>
      <td th:text="${#numbers.formatDecimal(prod.price, 1, 2)}">0.99</td>
    </tr>
  </tbody>
</table>

```



**官网教学文档**  
https://www.thymeleaf.org/documentation.html





### Thymeleaf 常用标签




###  Thymeleaf 标准表达式



### 整合 Thymeleaf



**创建springboot项目**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajqv577dj61go0m3dju02.jpg" alt="image-20200627173929266" style="zoom:50%;" />




```xml
 <dependencies>

        <!--thymeleaf依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>

        <!--web项目依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
</dependencies>

```





**application.yml 中配置 Thymeleaf 模板缓存 **

> 开发测试时，请关闭缓存。

```yaml

spring:
  thymeleaf:
    mode: HTML
    prefix: classpath:/templates/
    suffix: .html
    cache: false  # 关闭缓存
    encoding: UTF-8

    
```




###  使用 Thymeleaf 完成数据的页面展示

```yaml

```





### 使用Thymeleaf配置国际化页面



**前端资源目录结构**

> 前端资源下载链接
>
> https://share.weiyun.com/iVq52myH

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajqza3s5j60fq0diaar02.jpg" alt="image-20210718111446990" style="zoom:50%;" />








**login.html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no">
    <title>用户登录界面</title>
    <link th:href="@{/login/css/bootstrap.min.css}" rel="stylesheet">
    <link th:href="@{/login/css/signin.css}" rel="stylesheet">
</head>
<body class="text-center">

<form class="form-signin">
    <img class="mb-4" th:src="@{/login/img/login.png}" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal" th:text="#{login.tip}">请登录</h1>
    <input type="text" class="form-control"
           th:placeholder="#{login.username}" required="" autofocus="">
    <input type="password" class="form-control"
           th:placeholder="#{login.password}" required="">
    <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> [[#{login.rememberme}]]
        </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" th:text="#{login.button}">登录</button>
    <p class="mt-5 mb-3 text-muted">© <span th:text="${currentYear}">2018</span>-<span th:text="${currentYear}+1">2019</span></p>
    <a class="btn btn-sm" th:href="@{/toLoginPage(l='zh_CN')}">中文</a>
    <a class="btn btn-sm" th:href="@{/toLoginPage(l='en_US')}">English</a>
</form>
</body>
</html>

```







**login.properties**

```properties
login.tip=请登录
login.username=用户名
login.password=密码
login.rememberme=记住我
login.button=登录
```



**login_zh_CN.properties**

```properties
login.tip=请登录
login.username=用户名
login.password=密码
login.rememberme=记住我
login.button=登录
```



**login_en_US.properties**

```properties
login.tip=Please sign in
login.username=Username
login.password=Password
login.rememberme=Remember me
login.button=Login
```





**在application.properties中配置国际化文件的基础名**

```properties
#配置国际化文件基础名
spring.messages.basename=i18n.login
```







**定制区域化解析器**

> 在  com.wukongnotnull.config 下创建 MyLocaleResolver 类

```java
package com.wukongnotnull.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.Nullable;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.LocaleResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

@Configuration
public class MyLocaleResolver implements LocaleResolver {
    // 自定义区域解析方式
    @Override
    public Locale resolveLocale(HttpServletRequest httpServletRequest) {
        // 获取页面手动切换传递的语言参数l
        String l = httpServletRequest.getParameter("l");
        // 获取请求头自动传递的语言参数Accept-Language
        String header = httpServletRequest.getHeader("Accept-Language");
        Locale locale=null;
        // 如果手动切换参数不为空，就根据手动参数进行语言切换，否则默认根据请求头信息切换
        if(!StringUtils.isEmpty(l)){
            String[] split = l.split("_");
            locale=new Locale(split[0],split[1]);
        }else {
            // Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
            String[] splits = header.split(",");
            String[] split = splits[0].split("-");
            locale=new Locale(split[0],split[1]);
        }
        return locale;
    }

    @Override
    public void setLocale(HttpServletRequest httpServletRequest, @Nullable
            HttpServletResponse httpServletResponse, @Nullable Locale locale) {
    }

    // 将自定义的MyLocaleResolver类重新注册为一个类型LocaleResolver的Bean组件
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocaleResolver();
    }

}
```



**controller**

```java
package com.wukongnotnull.controller;
//author: 悟空非空也（B站/知乎/公众号）

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Calendar;

@Controller
public class IndexController {

    @GetMapping(value = "/login")
    public String login(){
        return "login";
    }

    @GetMapping(value = "/toLoginPage")
    public  String toLoginPage(Model model){
        int currentYear = Calendar.getInstance().get(Calendar.YEAR);
        model.addAttribute("currentYear",currentYear);
        return "login";
    }

}

```





**启动后，浏览器发送请求，进行测试**





### 中文乱码解决

> application 文件中出现中文乱码，请如下设置
>
> 在创建新项目前，将idea进行字符编码设置，这样保证项目和配置文件中的所有中文打字都是使用utf-8编码





<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajr3fzisj616z0u0gry02.jpg" alt="image-20200627194006830.png" style="zoom: 25%;" />









## Spring Boot 整合 Freemarker

### Freemarker 介绍

> 官方网站  https://freemarker.apache.org/
>
> 中文网站  http://freemarker.foofun.cn/toc.html



### 集成 Freemarker 视图

`Spring Boot`内部支持 `Freemarker` 视图技术的集成，并提供了自动化配置类 `FreeMarkerAutoConﬁguration` ，借助自动化配置可以很方便的集成Freemarker 视图到SpringBoot环境中。

#### **pom 依赖**

```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-freemarker</artifactId>
    </dependency>
```



#### **修改 Freemarker 配置信息**

> Freemarker 默认视图路径为 resources/templates 目录(由自动化配置类FreemarkerProperties 类决定)， 该目录可以在application.yml 中进行修改。

```yaml
spring:
  freemarker:
    charset: utf-8
    content-type: text/html
    # 默认是  resources/templates ,改成 resources/views
    template-loader-path: classpath:/views/
    suffix: .ftl
```



#### **controller**

```java
    @RequestMapping("/hello")
    public String showHello(){
            return "hello";
        }
```



#### **resources/views/hello.ftl**

```html
<h1>
  hello ,悟空非空也，我是freemarker模板
</h1>
```



### Freemarker 常用语法

`FreeMarker` 三种语法：

1. 插值：`${...} `，`Freemarker` 会将里面的变量替换为实际值。



2. `FTL` 标签(`tags`)：结构上类似HTML的标签，都是用`<>`包裹起来，普通标签以`<#`开头，用户自定义标签以`<@`开头，如`<#if true>true thing</#if>`，`<@myWukong></@myWukong>`

> 标签（tags）和 指令（directive）的区分
>
> 举个例子：`<#if></#if>` 叫标签； 标签里面的 `if` 是指令。



3. 注释(`Comments`)：`FTL` 中的注释是：`<#-- 被注释掉的内容 -->`，对于注释，`FTL`会自动跳过，所以不会显示在生成的文本中。

> 注意：除以上三种语法之外的所有内容，皆被 FreeMarker 视为普通文本，普通文本会被原样输出



#### if 指令

if 可以根据条件跳过模板中的某块代码，当 `userName` 值为 "悟空非空也" 或`wukongnotnull`时，用特殊样式展示，相关模板代码如下：

```xml
<p>你好，
    <#if userName == "悟空非空也">
        <strong>${userName}</strong>
    <#elseif userName == "wukongnotnull">
        <h1>${userName}</h1>
    <#else>
        ${userName}
    </#if>
</p>
```



#### list 指令

list 用来遍历序列，其语法为：

```xml
<#list sequence as loopVariable>
    repeatThis
</#list>
```

后端 ` model` 里放入一个 `userList` 的集合

```java
model.addAttribute("userList",userService.getUserList());
```

可以直接使用下标访问集合中的某个元素：`${userList[0].name}`

也可以在模板中直接遍历展示：

```xml
<ol>
<#list userList as user>
    <li>
        姓名：${user.name}，年龄：${user.age}
    </li>
</#list>
</ol>
```

渲染出 HTML：

```xml
<ol>
  <li>
    姓名：wukong，年龄：100
  </li>
  <li>
    姓名：zhubajie，年龄：200
  </li>
  <li>
    姓名：shaseng，年龄：300
  </li>
</ol>
```

> 注意：假设 userList 是空的，渲染出页面为 `<ol></ol>`，如何规避，使用 items 标签

```xml
<#list userList>
    <ol>
        <#items as user>
            <li>
                姓名：${user.name}，年龄：${user.age}
            </#items>
    </li>
    </ol>
</#list>
```





#### include 指令

`include`  指令把一个模板的内容插入到另一个模板中。（官方建议使用 import 代替）。
若每个页面都添加 ` footer`，可以编写一个公共的 `footer.ftl` 模板，每个页面直接引入即可。

```xml
<#include "footer.ftlh">
```





#### import 指令

`import` 将模板中定义的变量引入当前模板并使用。

它和  `include` 的主要区别就是 ` import`  可以将变量封装到新的命名空间中。

例如：模板 ` /libs/commons.ftl` 里面写了很多公共方法，想在其他模板里引用，只需要在其他模板的开头写上：

```clean
<#import "/libs/commons.ftl" as com>
```

后续想使用/libs/commons.ftl 中的 copyright 方法，可以直接使用：

```xml
<@com.copyright date="3030-3032"/>
```



#### assign 指令

assign 可以用来创建新的变量并为其赋值，语法如下：

```xml
<#assign name1=value1 name2=value2 ... nameN=valueN>
or
<#assign name1=value1 name2=value2 ... nameN=valueN in namespacehash>
or
<#assign name>
  capture this
</#assign>
or
<#assign name in namespacehash>
  capture this
</#assign>
```

举例：

```xml
<#--创建字符串-->
<#assign username = "悟空非空也">
<#--使用插值语法显示字符串-->
myStr:${myStr}
```



