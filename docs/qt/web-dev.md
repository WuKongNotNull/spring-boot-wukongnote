# 实现 Web 开发
## Spring Boot 整合 MVC 和拦截器
### Spring Boot 整合 Spring MVC

#### **pom 依赖**

```xml
        <!-- thymeleaf -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>

        <!-- web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
```





### **自定义配置类**

> 编写自定义配置类并实现WebMvcConfigurer

````java
package com.wukongnotnull.config;

import com.wukongnotnull.interceptor.MyInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyMvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/login.html").setViewName("login");

    }

}

````







#### **login 页面展示**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
</head>
<body>
<div>
  <form action="">
    <p>用户名：<input type="text"></p>
    <p>密码：<input type="password"></p>
    <p><input type="submit" value="登录"></p>
  </form>
</div>
</body>
</html>
```



### Spring Boot 整合拦截器

### 自定义拦截器组件

> 准备主页（home.html）和 登录页（login.html）
>
> 拦截器实现未登录状态下，不能访问主页（home页面文件）

```java
package com.wukongnotnull.interceptor;
//author: 悟空非空也（B站/知乎/公众号）

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class MyInterceptor  implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, 
                             HttpServletResponse response, 
                             Object handler) throws Exception {
        // 拦截下来的请求，什么请求被阻止，什么请求被放行 
        Object username = request.getSession().getAttribute("userSession");
        if (username == null) {
            response.sendRedirect(request.getContextPath()+"/login");
            // 拦截
            return false;
        }
        // 放行
        return  true;
    }


}

```



**在 MyMvcConfig 配置类中添加拦截器的相关配置**

````java
package com.wukongnotnull.config;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.interceptor.MyInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyMvcConfig  implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
      registry.addViewController("/login").setViewName("login");
       registry.addViewController("/home").setViewName("home");
  
    }

    @Autowired
    private MyInterceptor myInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
      	// 指定拦截哪些请求
        // 拦截所有请求，除了 /login 和 /doLogin
       registry.addInterceptor(myInterceptor).addPathPatterns("/**")
         .excludePathPatterns("/login");
    }
}


````



**测试**

localhost:8080/home

localhost:8080/login





## Spring Boot 整合数据校验
### Spring MVC 数据校验

前端提交表单数据，被后端接口接收到，为了程序的严谨性，后端会进行数据校验。

`Spring Boot`  通过  `spring-boot-starter-validation `  模块进行数据校验的工作。

**JSR303/JSR-349**

` JSR303` 是一项标准,只提供规范不提供实现，规定一些校验规范即校验注解，如 `@Null` ， ` @NotNull` ， `@Pattern` ，位于`javax.validation.constraints` 包下。

JSR-349是其升级版本，添加了一些新特性。

**Hibernate Validation：**

`Hibernate Validation`  是对这个规范的实现，并增加了一些其他校验注解，如`@Email`， `@Length`，`@Range` 等等 。

`Spring Validation` 对 `Hibernate Validation` 进行了二次封装，在 `Spring MVC` 模块中添加自动校验，并将校验信息封装进特定的类中。



### 使用案例

#### **pom 依赖**

```xml
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

```





#### 前端页面

> 创建 `registerUser.html`
>
> > 记得引入 `spring-boot-starter-thymeleaf` 依赖

```html
  <form action="/addUser" method="post">
    <p>用户名：<input type="text" name="username"></p>
    <p>密码：<input type="text" name="password"></p>
    <p><input type="submit" value="注册"></p>
  </form>
```





#### **User 实体类**

> 属性上添加对应校验注解，比如 `@NotBlank` ，`@Length` ，`@NotBlank`  。
>
> 补充：
>
> > @Data  //记得引入 lombok 依赖

```java
package com.wukongnotnull;
//author: 悟空非空也（B站/知乎/公众号）

import org.hibernate.validator.constraints.Length;


import javax.validation.constraints.NotBlank;
import java.io.Serializable;
@Data  //记得引入 lombok 依赖
public class User implements Serializable {

    private  Integer id;
    @NotBlank(message = "用户名不能为空")
    private  String username;

    @Length(min=3,max=10,message = "密码长度为3-10之间")
    @NotBlank(message = "密码不能为空")
    private  String password;

   
}

```



#### **controller**

> 形参前添加 `@Validated` 或者 `@Valid`

```java
package com.wukongnotnull.controller;

import com.wukongnotnull.User;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//author: 悟空非空也（B站/知乎/公众号）
@Controller
public class UserController {

    @GetMapping("/register")
    public String showRegisterPage(){
        return "registerUser";
    }


    // 添加注解 @Valid 或者 @Validated 均可以
    // BindingResult 用于接收数据校验失败的提示信息
    @PostMapping(value = "/addUser")
    @ResponseBody
    public Object addUser(@Validated User user , BindingResult bindingResult){
        List<Object> list = new ArrayList<>();
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(e ->{
                list.add(e.getDefaultMessage());
            });
        }else {
            list.add("后端数据校验成功");
        }
        return list;
    }


}
```







## Spring Boot  全局异常处理

`Spring Boot` 提供了对异常的全局性处理，相关注解如下:

**@ControllerAdvice**
最常用的就是作为全局异常处理的切面类,同时通过该注解可以指定包扫描围。`@ControllerAdvice` 约定了几种可行的返回值，如果是直接返回 `model` 类的话，需要使用 `@ResponseBody` 进行 ` json` 转换。



**@ExceptionHandler**
该注解在 `Spring 3.X`  版本引入，在处理异常时标注在方法级别，代表当前方法处理的异常类型有哪些。



### 案例
> 程序出现异常，如何被统一处理 ？


#### 返回响应信息封装类
```java
package com.wukongnotnull.vo;

import lombok.Data;

//author: 悟空非空也（B站/知乎/公众号）
// 响应信息的封装类
@Data
public class ResultInfo {

    private Integer  code;
    public String msg;
    private Object data;
    
}
```



#### 自定义全局异常处理器

```java
package com.wukongnotnull.exception;
/* author: 悟空非空也（B站/知乎/公众号） */

import com.wukongnotnull.utils.ParamsException;
import com.wukongnotnull.vo.ResultInfo;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = {Exception.class})
    @ResponseBody
    public ResultInfo handleException(Exception e){
        ResultInfo resultInfo = new ResultInfo();
        resultInfo.setCode(520);
        resultInfo.setMsg("系统异常");
      	resultInfo.setData(e);
        return  resultInfo;
    }

}
```



#### Controller

```java
@Controller
public class UserController {
    
    @PostMapping(value = "/ge")
    @ResponseBody
    public Object testGlobalException() {
     ResultInfo resultInfo = new ResultInfo();
     // 制造异常
     int i = 1 / 0;
     resultInfo.setCode(521);
     resultInfo.setMsg("test 成功");
     resultInfo.setData(null);
      
     return resultInfo;
    }
    
}
```



## 整合 Servlet Filter Listener

### 组件注册方式整合Servlet三大组件


> 3 大组件分别是 servlet  filter  和 listener



#### **整合 servlet 组件**

> servlet  负责和浏览器进行交互 ，接受请求，找到相对应的响应信息，返回给客户端（浏览器）





**myServlet**

```java
package com.wukongnotnull.servlet;
/* author: 悟空非空也（B站/知乎/公众号） */

import org.springframework.stereotype.Component;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class MyServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        this.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.getWriter().write("hello MyServlet ,hello wukong");
    }

}

```





**servletConfig**

```java
package com.wukongnotnull.config;
/* author: 悟空非空也（B站/知乎/公众号） */

import com.wukongnotnull.servlet.MyServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ServletConfig {
    
    // 注册Servlet组件
    @Bean
    public ServletRegistrationBean<MyServlet> getServlet(MyServlet myServlet){

        return new ServletRegistrationBean<>(myServlet,"/myServlet");
    }


}
```



**测试**  

通过路径找到对应的资源文件，返回给浏览器。



#### **整合 filter**



**自定义 MyFilter**

```java
package com.wukongnotnull.servlet;
/* author: 悟空非空也（B站/知乎/公众号） */


import org.springframework.stereotype.Component;
import javax.servlet.*;
import java.io.IOException;

@Component
public class MyFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("悟空非空也在执行过滤操作。。。。");
        filterChain.doFilter(servletRequest,servletResponse);
    }

    @Override
    public void destroy() {

    }
}

```



**FilterConfig**

```java
package com.wukongnotnull.config;
/* author: 悟空非空也（B站/知乎/公众号） */

import com.wukongnotnull.servlet.MyFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import java.util.Arrays;
import java.util.Collections;

@Configuration
public class FilterConfig {

    // 注册filter组件
    @Bean
    public FilterRegistrationBean<MyFilter> getFilter(MyFilter myFilter){
        FilterRegistrationBean<MyFilter> myFilterFilterRegistrationBean = new FilterRegistrationBean<>(myFilter);
        myFilterFilterRegistrationBean.setUrlPatterns(Arrays.asList("/myServlet"));
        return myFilterFilterRegistrationBean;

    }

}

```



#### **整合 listener**



**MyListener**

```java
package com.wukongnotnull.servlet;
/* author: 悟空非空也（B站/知乎/公众号） */


import org.springframework.stereotype.Component;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

@Component
public class MyListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("ServletContextListener  开始初始化.....");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("ServletContextListener  销毁掉.....");
    }
}
```



**listenerConfig**

```java
package com.wukongnotnull.config;
/* author: 悟空非空也（B站/知乎/公众号） */

import com.wukongnotnull.servlet.MyListener;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ListenerConfig {

    @Bean
    public ServletListenerRegistrationBean<MyListener> getListener(MyListener myListener){
        return new ServletListenerRegistrationBean<>(myListener);
    }

}
```





### 路径扫描方式整合Servlet三大组件

**启动类**

> 添加注解 @ServletComponentScan

```java
@SpringBootApplication
@ServletComponentScan
public class WebappThymeleafApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebappThymeleafApplication.class, args);
    }

}
```



#### **myServlet**

>  添加注解   @WebServlet(value = {"/myServlet"})

```java
package com.wukongnotnull.servlet;
/* author: 悟空非空也（B站/知乎/公众号） */

import org.springframework.stereotype.Component;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(value = {"/myServlet"})
public class MyServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        this.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.getWriter().write("hello MyServlet ,hello wukong");
    }

}

```



#### **myFilter**

> 添加注解 @WebFilter(value = {"/myServlet"})

```java
package com.wukongnotnull.servlet;
/* author: 悟空非空也（B站/知乎/公众号） */

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter(value = {"/myServlet"})
public class MyFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("悟空非空也在执行过滤操作。。。。");
        filterChain.doFilter(servletRequest,servletResponse);
    }

    @Override
    public void destroy() {

    }
}

```



#### **myListener.java**

> 添加注解 @WebListener

```java
package com.wukongnotnull.servlet;
/* author: 悟空非空也（B站/知乎/公众号） */

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class MyListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("ServletContextListener  开始初始化.....");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("ServletContextListener  销毁掉.....");
    }
}
```




## Spring Boot  多文件上传

### **controller**

```java
package com.wukongnotnull.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

//author: 悟空非空也（B站/知乎/公众号）
@Controller
public class FileController {

    @GetMapping("/upload")
    public String upload(){
        return "upload";
    }

    @PostMapping("/uploadFile")
    public String uploadFile(
            @RequestParam("fileUpload") MultipartFile[] uploadFiles,
            Model model,
            HttpServletRequest request){
     
        for (MultipartFile file : uploadFiles) {
            String originalFilename = file.getOriginalFilename();// 获得文件名及后缀，例如  wukong.jpg
            //重新命名
            String newFilename = UUID.randomUUID() +"-"+ originalFilename;
            // 创建上传文件的存放目录 :设置为tomcat服务器中的路径
            String newPath = request.getServletContext().getRealPath("/upload");
            System.out.println(newPath);

            // String newPath ="D:\\upload";
            File file1 = new File(newPath);
            if (!file1.exists()){
                file1.mkdir();
            }

            //创建新文件，接受传递过来的文件流
            try {
                file.transferTo(new File(newPath,newFilename));
                 model.addAttribute("uploadStatus","文件上传成功");
            } catch (IOException e) {
                e.printStackTrace();
                model.addAttribute("uploadStatus","上传失败");
            }
        }
        return "upload";
    }

}

```





### **upload.html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>动态添加文件上传列表</title>
<!--  <link th:href="@{/login/css/bootstrap.min.css}" rel="stylesheet">-->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
 <!-- <script th:src="@{/login/js/jquery.min.js}"></script>-->
  <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
<div th:if="${uploadStatus}" style="color: red" th:text="${uploadStatus}">上传成功</div>
<form th:action="@{/uploadFile}" method="post" enctype="multipart/form-data">
    上传文件:&nbsp;&nbsp;<input type="button" value="添加文件" onclick="add()"/>
    <div id="file" style="margin-top: 10px;" th:value="文件上传区域">  </div>
    <input id="submit" type="submit" value="上传"
           style="display: none;margin-top: 10px;"/>
</form>
<script type="text/javascript">
    // 动态添加上传按钮
    function add(){
        var innerdiv = "<div>";
        innerdiv += "<input type='file' name='fileUpload' required='required'>" +
            "<input type='button' value='删除' onclick='remove(this)'>";
        innerdiv +="</div>";
        $("#file").append(innerdiv);
        // 打开上传按钮
        $("#submit").css("display","block");
    }
    // 删除当前行<div>
    function remove(obj) {
        $(obj).parent().remove();
        if($("#file div").length ==0){
            $("#submit").css("display","none");
        }
    }
</script>
</body>
</html>
```





## Spring Boot 文件下载

### **pom.xml**

```xml
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.3.3</version>
        </dependency>
```





### **controller**

```java
package com.wukongnotnull.controller;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

//author: 悟空非空也（B站/知乎/公众号）
@Controller
public class FileController {

    @GetMapping("/download")
    public String downloadShow(){
        return "download";
    }

    @RequestMapping("/downloadFile")
    public ResponseEntity<byte[]> getdownloadFile(String filename, 
                                                  HttpServletRequest request)  {
        String dirPath= "/Users/mac/Desktop/download/";
        File file = new File(dirPath, filename);

        HttpHeaders httpHeaders = new HttpHeaders();

        // 通知浏览器以下载方式打开（下载前对文件名进行转码,处理中文名乱码问题）
        filename=this.getFilename(request,filename);

        httpHeaders.setContentDispositionFormData("attachment" ,filename);
        httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);

        ResponseEntity<byte[]> responseEntity =null;

        try {
            responseEntity = 
              new ResponseEntity<>(FileUtils.readFileToByteArray(file), httpHeaders, HttpStatus.OK);

        } catch (IOException e) {
            responseEntity = 
              new ResponseEntity<>(e.getMessage().getBytes(), HttpStatus.EXPECTATION_FAILED);
            e.printStackTrace();
        }
        return  responseEntity;
    }

    // 根据浏览器的不同进行编码设置，返回编码后的文件名
    private String getFilename(HttpServletRequest request, String filename)  {
        // IE不同版本User-Agent中出现的关键词
        String[] IEBrowserKeyWords = {"MSIE", "Trident", "Edge"};
        // 获取请求头代理信息
        String userAgent = request.getHeader("User-Agent");
        String newFilename= null;
        try {
            for (String keyWord : IEBrowserKeyWords) {
                if (userAgent.contains(keyWord)) {
                    //IE内核浏览器，统一为UTF-8编码显示，并对转换的+进行更正
                    return URLEncoder.encode(filename, "UTF-8").replace("+"," ");
                }
            }
            newFilename = new String(filename.getBytes("UTF-8"), "ISO-8859-1");

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        //火狐等其它浏览器统一为ISO-8859-1编码显示
        return newFilename;
    }
}
```



### **html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8">
  <title>文件下载</title>
</head>
<body>
<div style="margin-bottom: 10px">文件下载列表：</div>
<table>
  <tr>
    <td>wukong.rtf</td>
    <td><a th:href="@{/downloadFile(filename='wukong.rtf')}">下载文件</a></td>
  </tr>
  <tr>
    <td>悟空.rtf</td>
    <td><a th:href="@{/downloadFile(filename='悟空.rtf')}">
      下载文件</a></td>
  </tr>
</table>
</body>
</html>
```





## Spring Boot jar包方式打包部署

### **maven打包插件**

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```



### **打包**

> 步骤 ： +    --->    command line: package

![image-20210831151820294](https://tva1.sinaimg.cn/large/008i3skNgy1gvajy5suntj61ok0u043002.jpg)











### **找到保存路径**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajyafoszj614z0c1adg02.jpg" alt="image-20200629185556075" style="zoom:50%;" />





### **运行jar包后直接访问**



`java -jar target\myspringboot-mybatis-0.0.1-SNAPSHOT.jar`





> **注意**
> 使用 java 指令，需要配置java的环境变量







## Spring Boot  war包方式打包部署

### **pom.xml**

```xml
        <!-- jar 改成 war -->
				<packaging>war</packaging>


        <!-- 排除内嵌的 tomcat-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
            <scope>provided</scope>
        </dependency>

```









### **修改启动类**

```java
@SpringBootApplication
public class MyspringbootMybatisApplication extends SpringBootServletInitializer {

    //继承SpringbootServletInitializer ,重写configure方法
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(MyspringbootMybatisApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(MyspringbootMybatisApplication.class, args);
    }

}

```





### **打包**

> 配置 maven 命令 进行打包
>
> 操作 ： +   ->    Maven   ->  command Line: package



![image-20210831150739705](https://tva1.sinaimg.cn/large/008i3skNgy1gvajyujnyzj61o50u0n2a02.jpg)







### **部署到外部的tomcat的webapp内**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajyybb7oj60t306p0u102.jpg" alt="image-20200629195656565" style="zoom:50%;" />





### **启动tomcat部署成功**

> - 执行 `bin\startup.bat`指令
>
> - 执行启动指令后，`war` 包指定解压，生成同名文件夹
> - 浏览器访问 http:// localhost:8080/[同名文件夹]

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajz0zyn4j60gg066t9202.jpg" alt="image-20200629195757542" style="zoom:33%;" />





> **注意**
> Jar 包内嵌服务器（Tomcat），war包不含服务器，需要外部服务器才能运行







