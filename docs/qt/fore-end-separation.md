# 前后端分离
## RestFull 接口设计

### RESTfull  API 设计思想

最近，流行的Web都分为前端和后端两个部分。前端设备各种各样（手机、平板、桌面电脑等等.）。因此，需要一种统一的机制，方便不同的前端设备与后端进行通信。

需要一个良好的API构架来解决这样问题。`RESTful API` 是目前比较成熟的一套API设计理论。



#### 协议

API与前端设备的通信协议，使用 `HTTPs` 协议。



#### 域名

应该尽量将`API`部署在专用域名之下。

> ```javascript
> https://api.example.com
> ```

如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。

> ```javascript
> https://example.org/api/
> ```



#### 版本

可以将 API 的版本号放入 URL 中，如 Github 。

> ```javascript
> https://api.example.com/v1/
> ```





#### 路径

路径表示 `API` 的具体地址。

在 RESTful 架构中，每个网址代表一种资源（resource），规定网址中不能有动词，只能有名词。

名词一般与数据库的表格名对应。

名词需要使用复数。

比如，有一个电商系统，它的路径应该如下设计。

> - https://api.example.com/v1/users
> - https://api.example.com/v1/bills
> - https://api.example.com/v1/products



#### HTTP动词

对于资源的具体操作类型，由HTTP动词表示。

常用的 HTTP 动词有如下五个种（括号里是对应的SQL命令）。

> - GET（SELECT）：       从服务器取出资源（一项或多项）。
> - POST（CREATE）：    在服务器新建一个资源。
> - PUT（UPDATE）：     在服务器更新资源（客户端提供改变后的完整资源）。
> - PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
> - DELETE（DELETE）：从服务器删除资源。



还有两个不常用的HTTP动词。

> - HEAD：获取资源的元数据。
> - OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。



举例：

> - GET    	   /users：查询用户列表
> - POST        /users： 新建一个用户信息
> - GET           /users/ID：获取某个指定id 的用户信息
> - PUT           /users/ID：更新某个指定id 的用户的信息（提供该用户的全部信息）
> - PATCH      /users/ID：更新某个指定id 的用户的信息（提供该用户的部分信息）
> - DELETE     /users/ID：删除指定用户
> - GET             /users/ID/bills：列出某个用户的所有订单
> - DELETE      /users/ID/bills/ID：删除某个指定用户的指定订单



#### 过滤信息

若查询记录数量很多，服务器不可能都将它们返回给客户端。API应该提供参数，过滤返回结果。

下面是一些常见的参数。

> - ?limit=10：指定返回记录的数量
> - ?offset=10：指定返回记录的开始位置。
> - ?page=2&per_page=100：指定第几页，以及每页的记录数。
> - ?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
> - ?users_type_id=1：指定筛选条件





#### 状态码

服务器向浏览器返回的状态码和提示信息，常见如下

> - 200 OK - [GET]：                                      服务器成功返回用户请求的数据，该操作是每次都成功。
> - 201 CREATED - [POST/PUT/PATCH]：  用户新建或修改数据成功。
> - 202 Accepted - [*]：                                表示一个请求已经进入后台排队（异步任务）
> - 204 NO CONTENT - [DELETE]：             用户删除数据成功。
> - 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，每次都是一样
> - 401 Unauthorized - [*]：                     表示用户没有权限（令牌、用户名、密码错误）。
> - 403 Forbidden - [*]                              表示用户得到授权（与401错误相对），但是访问是被禁止的。
> - 404 NOT FOUND - [*]：                     用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
> - 406 Not Acceptable - [GET]：           用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
> - 410 Gone -[GET]：                            用户请求的资源被永久删除，且不会再得到的。
> - 422 Unprocesable entity - [POST/PUT/PATCH]       当创建一个对象时，发生一个验证错误。
> - 500 INTERNAL SERVER ERROR - [*]：                      服务器发生错误，用户将无法判断发出的请求是否成功。





#### 返回结果

针对不同操作，服务器向用户返回的结果应该符合以下规范

> - GET /collection：                        返回资源对象的列表（数组）
> - GET /collection/resource：       返回单个资源对象
> - POST /collection：                       返回新生成的资源对象
> - PUT /collection/resource：        返回完整的资源对象
> - PATCH /collection/resource：   返回完整的资源对象
> - DELETE /collection/resource：  返回一个空文档



### RESTfull  API 设计实操

>  测试前后端分离的项目，浏览器是不能胜任的，这里选择常用的测试工具，PostMan 完成接口测试。

#### @RequestMapping

> 该注解可以加到方法上或者是类上，设置请求映射规则。



##### 指定请求路径

>  path或者value属性都可以用来指定请求路径。
>
>

~~~~java
@RestController
@RequestMapping("/test")
public class HelloController {
    @RequestMapping("/testPath")
    public String testPath(){
        return "testPath";
    }
}
~~~~

~~~~java
@RestController
public class HelloController {

    @RequestMapping("/test/testPath")
    public String testPath(){
        return "testPath";
    }
}
~~~~



##### 指定请求方式

>  method属性可以用来指定可处理的请求方式。
>
> 注意：可以运用如下注解来进行替换
>
> - ​    @PostMapping       等价于   @RequestMapping(method = RequestMethod.POST)
>
> - ​	@GetMapping         等价于   @RequestMapping(method = RequestMethod.GET)
> - ​	@PutMapping         等价于   @RequestMapping(method = RequestMethod.PUT)
> - ​	@DeleteMapping    等价于   @RequestMapping(method = RequestMethod.DELETE)
>
>

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {

    @RequestMapping(value = "/testMethod",method = RequestMethod.POST)
    public String testMethod(){
        System.out.println("testMethod处理请求");
        return "testMethod";
    }
}

~~~~





#####  指定请求参数

> 我们可以使用**params**属性来对请求参数进行一些限制。可以要求必须具有某些参数，或者是某些参数必须是某个值，或者是某些参数必须不是某个值。

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "code")
    public String testParams(){
        System.out.println("testParams处理了请求");
        return "testParams";
    }
}
~~~~

​

如果是要求**不能有code**这个参数可以把改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "!code")
    public String testParams(){
        System.out.println("testParams处理请求");
        return "testParams";
    }
}
~~~~

​

如果要求有code这参数，并且这参数值必须**是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "code=wukong")
    public String testParams(){
        System.out.println("testParams处理请求");
        return "testParams";
    }
}
~~~~



如果要求有code这参数，并且这参数值必须**不是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "code!=wukong")
    public String testParams(){
        System.out.println("testParams处理了请求");
        return "testParams";
    }
}
~~~~



##### 指定请求头

> 使用 **`headers`** 属性来对请求头进行一些限制。
>
> 例如，请求头中有  **`deviceType`** 能够被方法处理。

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "deviceType")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
~~~~



要求不能有**deviceType**这个请求头，可以写成如下代码

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "!deviceType")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
~~~~



如果要求有deviceType这个请求头，并且其值必须**是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "deviceType=ios")
    public String testHeaders(){
        System.out.println("testHeaders处理请求");
        return "testHeaders";
    }
}
~~~~



如果要求有deviceType这个请求头，并且其值必须**不是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "deviceType!=ios")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
~~~~



##### 指定请求头Content-Type

>  使用 **`consumes`** 属性来对 **`Content-Type`** 这个请求头进行一些限制。



指定请求头中的Content-Type必须为 **multipart/from-data** ，代码如下

~~~~java
    @RequestMapping(value = "/testConsumes",method = RequestMethod.POST,consumes = "multipart/from-data")
    public String testConsumes(){
        System.out.println("testConsumes处理了请求");
        return "testConsumes";
    }
~~~~

要求请求头Content-Type的值必须**不能为某个multipart/from-data**则可以改成如下形式：

~~~~java
    @RequestMapping(value = "/testConsumes",method = RequestMethod.POST,consumes = "!multipart/from-data")
    public String testConsumes(){
        System.out.println("testConsumes处理了请求");
        return "testConsumes";
    }
~~~~



#### @PathVariable  获取请求参数

> 该接口可以用来根据id查询用户。请求路径要求为  /user  ，请求方式要求为GET。

~~~~java
@RestController
public class UserController {

    @RequestMapping(value = "/user/{id}",method = RequestMethod.GET)
    public String findUserById( @PathVariable("id")Integer id){
        System.out.println(id);
        return "findUserById";
    }
}
~~~~

###### 

>  根据id和username查询用户。请求路径要求为  /user  ，请求方式要求为GET。

~~~~java
@RestController
public class UserController {
  
    @RequestMapping(value = "/user/{id}/{name}",method = RequestMethod.GET)
    public String findUser(@PathVariable("id") Integer id,@PathVariable("name") String name){
        System.out.println(id);
        System.out.println(name);
        return "findUser";
    }
  
}

~~~~





#### @RequestBody 获得请求体中的 json 参数

> 使用**@RequestBody**注解获取请求体中的数据。
>
> SpringBoot的web启动器已经默认导入了jackson的依赖，不需要再额外导入。
>
> **注意事项**
>
> 使用**@RequestBody**来获取请求体中 `Json` 数据，并且进行转换，要求请求头 `Content-Type` 的值必须为  `application/json` 。

##### 请求体中数据

~~~~json
{"name":"wukongnotnull","age":18}
~~~~



##### User 实体

~~~~java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String name;
    private Integer age;
}

~~~~

​

##### 获取参数封装成实体对象

> 如果我们想把Json数据获取出来封装User对象,我们可以这样定义方法：

~~~~~java
@RestController
public class UserController {
  
    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String insertUser(@RequestBody User user){
        System.out.println(user);
        return "insertUser";
    }
}
~~~~~



> 或者， 获取参数封装成 `Map` 集合
>
> ~~~~java
>     @RequestMapping(value = "/user",method = RequestMethod.POST)
>     public String insertUser(@RequestBody Map map){
>         System.out.println(map);
>         return "insertUser";
>     }
> ~~~~
>
>



##### 请求体中参数为集合

请求体中数据

~~~~java
[{"name":"悟空","age":100},{"name":"猪八戒","age":200},{"name":"唐僧","age":30}]
~~~~

方法定义

~~~~java
    @RequestMapping(value = "/users",method = RequestMethod.POST)
    public String insertUsers(@RequestBody List<User> users){
        System.out.println("insertUsers");
        System.out.println(users);
        return "insertUser";
    }
~~~~





#### @RequestParam 获取 QueryString 格式参数

> `QueryString` 格式参数为
>
> http://localhost:8080/testRequestParam?id=1&name=wukongnotnull&likes=eat&likes=drink&likes=play



##### 各个参数单独获取

> 方法中参数名和请求参数名一致时，可以省略 `**@RequestParam**` 注解。

~~~~java
    @RequestMapping("/testRequestParam")
    public String testRquestParam(Integer id, String name, String[] likes){
        System.out.println("testRquestParam");
        System.out.println(id);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }

~~~~



> 方法中参数名和请求参数名一致时，需要添加  `**@RequestParam**` 注解。

~~~~java
    @RequestMapping("/testRequestParam")
    public String testRquestParam(@RequestParam("id") Integer uid,@RequestParam("name") String uname, @RequestParam("likes")String[] ulikes){
        System.out.println(uid);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }
~~~~



##### 获取参数封装成实体对象

> 把这些参数封装到 `User` 对象中。

User 实体

> 实体类中的成员变量名要和请求参数名一致，并且要提供对应的set/get方法。

~~~~java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String name;
    private Integer age;
    private String[] likes;
}
~~~~

​

Controller

~~~~java
    @RequestMapping("/testRequestParam")
    public String testRquestParam(User user){
        System.out.println("testRquestParam");
        System.out.println(user);
        return "testRquestParam";
    }
~~~~



测试 url

~~~~java
http://localhost:8080/testRequestParam?id=1&name=wukongnotnull&likes=eat&likes=drink&likes=play
~~~~



##### 相关注解其他属性

###### required

​	代表是否必须，默认值为true也就是必须要有对应的参数。如果没有就会报错。

​	如果对应的参数可传可不传则可以把其设置为fasle

例如：

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(@RequestParam(value = "id",required = false) Integer uid,@RequestParam("name") String name, @RequestParam("likes")String[] likes){
        System.out.println("testRquestParam");
        System.out.println(uid);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }
~~~~



###### defaultValue

​	如果对应的参数没有，我们可以用defaultValue属性设置默认值。

例如：

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(@RequestParam(value = "id",required = false,defaultValue = "777") Integer uid,@RequestParam("name") String name, @RequestParam("likes")String[] likes){
        System.out.println("testRquestParam");
        System.out.println(uid);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }
~~~~





#### @ResponseBody

> `RestFul` 风格请求，把返回数据转换成 `Json` ，放入响应体中。

~~~~java
@Controller
@RequestMapping("/response")
public class ResponseController {

    @RequestMapping("/user/{id}")
    @ResponseBody
    public User findById(@PathVariable("id") Integer id){
        User user = new User();
        return user;
    }
}
~~~~



## 响应结果统一设计

### 背景

在分布式、微服务盛行的时代，项目都采用的微服务框架和前后端分离方式。

前端和后端进行交互，前端按照约定请求 `URL` 路径，并携带相关请求参数；后端服务器接收请求，进行业务处理，返回数据给前端。

统一接口的返回数据，变得非常重要。



### 统一格式设计

#### 一般形式

```xml
{
	# 是否响应成功
	success: true,
	# 响应状态码
	code: 200,		
	# 响应数据
	data: Object
	# 返回错误信息
	message: "",
}
```



####  结果类枚举

```java
public enum ResultCodeEnum {
    /*** 通用部分 100 - 599***/
    // 成功请求
    SUCCESS(200, "successful"),
    // 重定向
    REDIRECT(301, "redirect"),
    // 资源未找到
    NOT_FOUND(404, "not found"),
    // 服务器错误
    SERVER_ERROR(500,"server error");

		//可以根据不同模块用不同的区级分开错误码
    // 1000～1999 区间表示用户模块错误
    // 2000～2999 区间表示订单模块错误
    // 3000～3999 区间表示商品模块错误

    /**
     * 响应状态码
     */
    private Integer code;
    /**
     * 响应信息
     */
    private String message;

    ResultCodeEnum(Integer code, String msg) {
        this.code = code;
        this.message = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
```





#### 统一结果类

```java
public class HttpResult <T> implements Serializable {

    /**
     * 是否响应成功
     */
    private Boolean success;
    /**
     * 响应状态码
     */
    private Integer code;
    /**
     * 响应数据
     */
    private T data;
    /**
     * 错误信息
     */
    private String message;

    // 构造器开始
    /**
     * 无参构造器(构造器私有，外部不可以直接创建)
     */
    private HttpResult() {
        this.code = 200;
        this.success = true;
    }
    /**
     * 有参构造器
     * @param obj
     */
    private HttpResult(T obj) {
        this.code = 200;
        this.data = obj;
        this.success = true;
    }

    /**
     * 有参构造器
     * @param resultCode
     */
    private HttpResult(ResultCodeEnum resultCode) {
        this.success = false;
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
    }
    // 构造器结束

    /**
     * 通用返回成功（没有返回结果）
     * @param <T>
     * @return
     */
    public static<T> HttpResult<T> success(){
        return new HttpResult();
    }

    /**
     * 返回成功（有返回结果）
     * @param data
     * @param <T>
     * @return
     */
    public static<T> HttpResult<T> success(T data){
        return new HttpResult<T>(data);
    }

    /**
     * 通用返回失败
     * @param resultCode
     * @param <T>
     * @return
     */
    public static<T> HttpResult<T> failure(ResultCodeEnum resultCode){
        return  new HttpResult<T>(resultCode);
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HttpResult{" +
                "success=" + success +
                ", code=" + code +
                ", data=" + data +
                ", message='" + message + '\'' +
                '}';
    }
}
```

**说明：**

1. 构造器私有，外部不可以直接创建；
2. 只可以调用统一返回类的静态方法返回对象；
3. `success` 是一个`Boolean` 值，通过这个值，可以直接观察到该次请求是否成功；
4. `data` 表示响应数据，用于请求成功后，返回客户端需要的数据。



#### 测试

```java
@RestController
public class HttpRestController {

    @GetMapping("/success")
    public HttpResult success(){
        return HttpResult.success();
    }


    @GetMapping("/successWithData")
    public HttpResult successWithData(){
        return HttpResult.success("我是悟空非空也");
    }

 
    @GetMapping("/failure")
    public HttpResult failure(){
        return HttpResult.failure(ResultCodeEnum.NOT_FOUND);
    }

}
```











## 用户模块管理
### 准备工作

>  集成mybatis
>
> springboot 2.x 默认数据源是  Hikari

#### 引入坐标

```xml


  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
      <version>2.1.4</version>
    </dependency>

    <dependency>
      <groupId>com.github.pagehelper</groupId>
      <artifactId>pagehelper-spring-boot-starter</artifactId>
      <version>1.2.13</version>
    </dependency>

    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
    </dependency>
</dependencies>
```



#### **application.yml**

```java
# sb2.x 默认数据源Hikari配置
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8
    username: root
    password: rootroot
    driver-class-name: com.mysql.cj.jdbc.Driver


# mybatis 配置
mybatis:
  mapper-locations: classpath:/mappers/*.xml
  configuration:
    map-underscore-to-camel-case: true
  type-aliases-package: com.wukongnotnull.domain

#分页插件配置
pagehelper:
  helper-dialect: mysql

```



#### **启动类**

```java
@SpringBootApplication
public class App
{
    public static void main( String[] args )
    {
        SpringApplication.run(App.class);
        System.out.println( "Hello World!" );
    }
}
```



#### Sql 脚本

```sql
create database `test`;
use    `test`;
CREATE TABLE `user` (
                             `id` INT(20) NOT NULL AUTO_INCREMENT COMMENT '用户 id',
                             `username` VARCHAR(200) DEFAULT NULL COMMENT '用户名',
                             `password` VARCHAR(200) DEFAULT NULL COMMENT '密码',
                             PRIMARY KEY (`id`)
) ENGINE=INNODB  DEFAULT CHARSET=utf8;


insert into `user`(`username`,`password`) value ('wukong','wukong');
insert into `user`(`username`,`password`) value ('zhubajie','zhubajie');
insert into `user`(`username`,`password`) value ('shaseng','shaseng');
insert into `user`(`username`,`password`) value ('bailongma','bailongma');


select * from user;
```





#### User 实体类

```java
package com.wukongnotnull.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//author: 悟空非空也（B站/知乎/公众号）
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    private Integer id;
    private  String username;
    private String password;
    
}
```



#### 设计统一结果类

```java
package com.wukongnotnull.vo;

import lombok.Data;

import java.io.Serializable;

//author: 悟空非空也（B站/知乎/公众号）

public class HttpResult<T> implements Serializable {
    /**
     * 是否响应成功
     */
    private Boolean success;
    /**
     * 响应状态码
     */
    private Integer code;
    /**
     * 响应数据
     */
    private T data;
    /**
     * 错误信息
     */
    private String message;



    // 响应成功的时候，new 的对象
    private HttpResult() {
        this.code=200;
        this.success = true;
    }
    // 响应成功，不携带Data
    public static<T> HttpResult<T> success(){
        return new HttpResult<T>();
    }



    // 响应成功时的构造器
    private HttpResult(T data){
        this.code=200;
        this.success = true;
        this.data = data;
    }
    // 响应成功，携带Data
    public static<T> HttpResult<T> success(T data){
        return new HttpResult<T>(data);
    }




    // 响应失败的时候的构造器
    private HttpResult(ResultCodeEnum resultCode){
        this.success = false;
        this.code=resultCode.getCode() ;
        this.message= resultCode.getMessage();
    }
    // 响应失败时，如何创建实例
    public static<T> HttpResult<T> failure(ResultCodeEnum resultCode){
        return new HttpResult<T>(resultCode);
    }





    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "HttpResult{" +
                "success=" + success +
                ", code=" + code +
                ", data=" + data +
                ", message='" + message + '\'' +
                '}';
    }
}
```



```java
package com.wukongnotnull.vo;
//author: 悟空非空也（B站/知乎/公众号）
// 响应错误（失败）的信息封装枚举
public enum ResultCodeEnum {

    // 服务器错误
    SERVER_ERROR(500,"server error"),
    // 重定向
    REDIRECT(301, "redirect"),
    NOT_FOUND(404,"not found"),
  	USERNAME_REPEAT(520,"username repeat"),
    WUKONG_ERROR(1314," unkown error")
    // 自定义错误提示
    ;


    /**
    * 响应状态码
     */
    private Integer code;
    /**
     * 响应信息
     */
    private String message;

    ResultCodeEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
```





#### **自定义异常工具类**

> 自定义 ParamsException  异常类
>
> 作用： 自定义异常，遇到用户名重复等属性错误时，抛出异常。



```java
package com.wukongnotnull.utils;

/**
 * author: 悟空非空也（B站/知乎/公众号）
 */

public class ParamsException extends RuntimeException {
    // 自定义异常类型码
    private Integer type = 300;
    // 自定义异常的说明信息
    private String msg = "默认自定义异常类型";

    public ParamsException(){
        super();
    }

    public ParamsException(Integer type){
        this.type = type;
    }

    public ParamsException(String msg) {
        this.msg = msg;
    }

    public  ParamsException(Integer type, String msg) {
        this.type = type;
        this.msg = msg;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
```





> AssertUtil   提示语工具类，用于显示不同情况下，返回不同的提示语



```java
package com.wukongnotnull.utils;

/**
 * author: 悟空非空也（B站/知乎/公众号）
 */

/**
 *  提示语工具类
 */
public class AssertUtil {

    public static void isTrue(boolean flag, Integer code, String message)  {
        if (flag) {
            throw new ParamsException(code, message);
        }
        System.out.println();
    }

}

```







### 需求： 根据用户名查询指定用户

>  业务规定：user表中 id 和 username 都要求唯一性

**mapper 层接口**

com.wukongnotnull.mapper.UserMapper

```jaa
package com.wukongnotnull.mapper;

import com.wukongnotnull.domain.User;


public interface UserMapper {

    public User getUserByUsername(String username);
}

```



**sql映射文件        resources/mappers/UserMapper.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.wukongnotnull.mapper.UserMapper">
    <select id="getUserByUsername" parameterType="string" resultType="com.wukongnotnull.domain.User">
        select *
        from user
        where  username = #{username}
    </select>
</mapper>

```



**Service**

```java
public interface UserService {

    public User getUserByUsername(String username);
}

------------分割线------------------
  
  @Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User getUserByUsername(String username) {
        return this.userMapper.getUserByUsername(username);
    }

}
```



**Controller**

```java
package com.wukongnotnull.controller;

import com.wukongnotnull.domain.User;
import com.wukongnotnull.service.UserService;
import com.wukongnotnull.vo.HttpResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users/{username}")
    public HttpResult getUserByUsername(@PathVariable String username){
        
        User userByUsername = this.userService.getUserByUsername(username);
        
        return HttpResult.success(userByUsername);
    }

}
```



### 需求： 根据id查询指定用户

>  上述需求和本需求都是get请求方式，要留意请求路径的区分，不然会报错

**controller**

```java
package com.wukongnotnull.controller;

import com.wukongnotnull.domain.User;
import com.wukongnotnull.service.UserService;
import com.wukongnotnull.vo.HttpResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users/{username}")
    public HttpResult getUserByUsername(@PathVariable String username){

        User userByUsername = this.userService.getUserByUsername(username);

        return HttpResult.success(userByUsername);
    }

    @GetMapping("/users/id/{id}")
    public HttpResult<Object> getUserById(@PathVariable("id") Integer id){
        User user =this.userService.getUserById(id);

        return HttpResult.success(user);
    }

}
```







**service**

```java
		User getUserById(Integer id);


-------- 分割线----------
  
  
      @Override
    public User getUserById(Integer id) {
        return this.userMapper.getUserById(id);
    
```





**mapper**

```java
		User getUserById(@Param("id") Integer id);

-------- 分割线----------
  
    <select id="getUserById" parameterType="int" resultType="User">
        select * from user where id = #{id}
    </select>
```







### 需求： 添加用户

> 业务要求：
>
> 添加用户的所有字段为非空  ：通过后端数据校验（ @NotBlank 注解）
>
> 用户名不能重复   ：自定义异常类来实现

**mapper & sql 映射文件**

```java
public interface UserMapper {

    public int addUser(User user);
}
```

```xml
    <insert id="addUser" parameterType="User">
        insert into user (username, password)
        values (#{username}, #{password})
    </insert>
```





**service**

```java
   public  User  addUser(User user);
```

```java
   @Override
    public User getUserByUsername(String username) {
        return this.userMapper.getUserByUsername(username);
    }


    /**
     *  字段非空判断
     *  username 不能重复
     */
    public User addUser(User user) {

        AssertUtil.isTrue(userMapper.getUserByUsername(user.getUsername()) !=null,520,"用户名重复，请重新输入");
        User user1 = null;
        int i = userMapper.addUser(user);
        if(i == 1){  // 添加成功
            user1 = this.getUserByUsername(user.getUsername());
        }else { // 添加失败
            System.out.println("用户添加失败");
        }
        return user1;
    }
```





**controller**

```java
@PostMapping("/users")
    public HttpResult addUser(@RequestBody User user){
        HttpResult httpResult =null;
        try {
            User user1 = this.userService.addUser(user);
             httpResult = HttpResult.success(user1);
        }catch (ParamsException paramsException){
           if(paramsException.getCode() == 520){
               httpResult = HttpResult.failure(ResultCodeEnum.USERNAME_REPEAT);
           }
        }catch (Exception e){
            httpResult = HttpResult.failure(ResultCodeEnum.WUKONG_ERROR);
            e.printStackTrace();
        }

        return httpResult;
    }
```





### 需求： 修改用户

> 业务要求：
>
> 所有字段不能为空。 （Validation 后端数据校验）
>
> username 字段  修改后的新名字，不可以同原名；
>
> 同时，不能同其他用户信息的用户名。
>
>



**dao & sql 映射文件**

```java
 int modifyUser(User user);
```

```xml
    <update id="modifyUser" parameterType="User">
        update user
        set username = #{username}, password = #{password}
        where id = #{id}
    </update>
```







**service**

```java
 User modifyUser(User user);

```

```java
    @Override
    public User modifyUser(User user) {
        //username 不能已存在，除了自己
        User userByUsername = this.userMapper.getUserByUsername(user.getUsername());
        AssertUtil.isTrue(userByUsername != null && user.getId().equals(userByUsername.getId()),520,"用户名重复，请重新输入");
        //修改用户信息
        int i = userMapper.modifyUser(user);

        return this.getUserByUsername(user.getUsername());

    }
```



**controller**

```java
@PutMapping("/users")
    public HttpResult modifyUser(@RequestBody User user){
        HttpResult<User> httpResult =null;
        try {
            User user1 = this.userService.modifyUser(user);
            httpResult = HttpResult.success(user1);
        }catch (ParamsException paramsException){
            if(paramsException.getCode() == 520){
                httpResult = HttpResult.failure(ResultCodeEnum.USERNAME_REPEAT);
            }
        }catch (Exception e){
            httpResult = HttpResult.failure(ResultCodeEnum.WUKONG_ERROR);
            e.printStackTrace();
        }

        return httpResult;

    }
```





### 需求：全局异常处理

**自定义全局异常处理器**

```java
package com.wukongnotnull.exception;

import com.wukongnotnull.utils.ParamsException;
import com.wukongnotnull.vo.HttpResult;
import com.wukongnotnull.vo.ResultCodeEnum;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

//author: 悟空非空也（B站/知乎/公众号）
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ResponseBody
    @ExceptionHandler(value = {Exception.class})
    public HttpResult handleGlobalException(Exception e){
        HttpResult httpResult = null;
        if(e instanceof ParamsException){
            ParamsException paramsException = (ParamsException) e;
            if(paramsException.getCode() == 520){
                httpResult = HttpResult.failure(ResultCodeEnum.USERNAME_REPEAT);
            }
            
        }else{
            httpResult = HttpResult.failure(ResultCodeEnum.WUKONG_ERROR);
            e.printStackTrace();
        }
        
        return httpResult;
    }
}
```



**修改  controller 中方法**

```
@PostMapping("/users")
public HttpResult addUser(@Validated  @RequestBody User user){

    User user1 = this.userService.addUser(user);

    return HttpResult.success(user1);


}

@PutMapping("/users")
public HttpResult modifyUser(@RequestBody User user){
    User user1 = this.userService.modifyUser(user);

    return  HttpResult.success(user1);

}
```





### 需求： 删除用户

**dao & sql 映射语句**

```xml
   int deleteUser(Integer id);
```

```xml
    <delete id="deleteUser" parameterType="int">
        delete from user
        where id = #{id}
    </delete>
```



**service**

```java
    void deleteUser(Integer id);


--------------分割线-------------------


	public void deleteUser(Integer id) {

        //是否存在该用户
        User userById = this.getUserById(id);

        //删除用户
        if(userById != null) {
          this.userMapper.deleteUser(id);
        }else {
            System.out.println("删除此用户时，发现该用户不存在！！");
        }

```



**controller**

```java
    @DeleteMapping("/users/{id}")
    public HttpResult deleteUser(@PathVariable Integer id) {
        this.userService.deleteUser(id);

        return HttpResult.success();

    }
```







### 需求： 根据用户名查询用户分页列表

**坐标**

```xml
    <dependency>
      <groupId>com.github.pagehelper</groupId>
      <artifactId>pagehelper-spring-boot-starter</artifactId>
      <version>1.2.13</version>
    </dependency>
```



**application.yml**

```yaml
#分页插件配置
pagehelper:
  helper-dialect: mysql
```



**bo/UserParams 实体类**

> 根据用户名查询，将查询参数，封装成一个自定义业务对象
>
> bo: business object

```java
package com.wukongnotnull.bo;
/* author: 悟空非空也（B站/知乎/公众号） */


public class UserParams {

    private  Integer pageNum = 1; //当前页
    private  Integer pageSize = 3; //页容量（每页包含多少记录）
    private  String username;
  

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

```



**dao  & sql 映射文件**

```java
  List<User> getUserList(UserParams userParams);
```

```xml
    <select id="getUserList" parameterType="com.wukongnotnull.bo.UserParams" resultType="User">
        select *
        from user
        <where>
            <if test="username != null and username != ''">
               and username like CONCAT('%',#{username},'%')
            </if>
        </where>
    </select>
```



**service**

```java
    PageInfo<User> getUserPageList(UserParams userParams);
```

```java
    public PageInfo<User> getUserPageList(UserParams userParams) {

        PageHelper.startPage(userParams.getPageNum(), userParams.getPageSize());

        return new PageInfo<User>(this.userMapper.getUserList(userParams));
    }
```



**controller**

```java
    @GetMapping("/users")
    public HttpResult<Object> getUserPageList(@RequestBody UserParams userParams){
        PageInfo<User> userPageList = this.userService.getUserPageList(userParams);
        return  HttpResult.success(userPageList);

    }
```



**postman 测试**

![image-20210303112459155](https://tva1.sinaimg.cn/large/008i3skNgy1gvak4pvhluj61jw0i9ack02.jpg)



## API 文档框架 Swagger2

### Swagger2 文档构建工具

前后端分离的开发模式中，前端开发者和后端开发者需要及时地沟通 RESTful API 接口约定，非常耗时费力。

这里借助第三方构建工具 `Swagger2` 来实现Api文档生成功能 。

这样减少彼此的沟通成本。



**引入依赖**

```xml
    <dependency>
      <groupId>io.springfox</groupId>
      <artifactId>springfox-swagger2</artifactId>
      <version>2.9.2</version>
    </dependency>

    <dependency>
      <groupId>io.springfox</groupId>
      <artifactId>springfox-swagger-ui</artifactId>
      <version>2.9.2</version>
    </dependency>
```



**配置类**

```java
package com.wukongnotnull.config;
/* author: 悟空非空也（B站/知乎/公众号） */

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@Configuration
@EnableSwagger2
public class Swagger2Config {

    @Bean
    public Docket createDocket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(this.apiInfo())
                .select()
          				//根据基包路径选择接口
                .apis(RequestHandlerSelectors.basePackage("com.wukongnotnull.controller"))
                .build();
    }

    //配置文档信息
    private ApiInfo apiInfo() {
        Contact contact = new Contact("悟空非空也", "https://wukongnotnull.com", "1390128154@qq.com");
        return new ApiInfo(
                "悟空的项目api文档", // 标题
                "实现对用户模块的增删改查", // 描述
                "v1.0", // 版本
                "http://terms.service.url/组织链接", // 组织链接
                contact, // 联系人信息
                "Apach 2.0 许可", // 许可
                "许可链接", // 许可连接
                new ArrayList<>()// 扩展
        );
    }

}

```

> // 根据包路径选择接口
>
>basePackage(final String basePackage)
>
>// 选择所有接口
>
>any()
>
>//  不选择接口
>
>none()
>
>// 根据 method 的注解选择，如 withMethodAnnotation(GetMapping.class) 只扫描 GET 请求
>withMethodAnnotation(final Class<? extends Annotation> annotation)
>
>// 根据类上的注解选择，如.withClassAnnotation(Controller.class)只选择 controller注解类中的接口
>withClassAnnotation(final Class<? extends Annotation> annotation)
>
>



**访问路径**

>  wukong 为项目名

http://localhost:8081/wukong/swagger-ui.html





**controller**

```java
package com.wukongnotnull.controller;

import com.github.pagehelper.PageInfo;
import com.wukongnotnull.bo.UserParams;
import com.wukongnotnull.domain.User;
import com.wukongnotnull.service.UserService;

import com.wukongnotnull.vo.HttpResult;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@Api(tags = "用户模块控制器")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users/{username}")
    @ApiOperation(value ="getUserByUsername接口",notes = "根据用户名查询用户")
    @ApiImplicitParam(
            name = "username", value = "用户名",
            required = true, dataType = "String",
            defaultValue = "默认值是。。。",
            paramType = "path"
    )
    public HttpResult getUserByUsername(@PathVariable String username){

        User userByUsername = this.userService.getUserByUsername(username);

        return HttpResult.success(userByUsername);
    }

    @GetMapping("/users/id/{id}")
    @ApiOperation(value = "getUserById接口", notes = "根据id查询用户")
    @ApiImplicitParam(
            name = "id", value = "用户id字段",
            required = true,dataType = "int",
            paramType = "path",defaultValue = "1"
    )
    public HttpResult<Object> getUserById(@PathVariable("id") Integer id){
        User user =this.userService.getUserById(id);

        return HttpResult.success(user);
    }

    @PostMapping("/users")
    @ApiOperation(value = "添加用户接口", notes = "实现添加用户的功能（详细一点）")
    @ApiImplicitParam(
            name = "user", value = "User对象",
            dataType = "User", paramType = "body",
            defaultValue = "默认值..."
    )
    public HttpResult addUser(@Validated  @RequestBody User user){

        User user1 = this.userService.addUser(user);

        return HttpResult.success(user1);


    }

    @PutMapping("/users")
    @ApiOperation(value = "modifyUser接口", notes = "实现用户信息的修改")
    @ApiImplicitParam(
            name = "user",value = "User对象",required = true,
            dataType = "User",paramType = "body",
            defaultValue = "默认值为..."
    )
    public HttpResult modifyUser(@RequestBody User user){
        User user1 = this.userService.modifyUser(user);

        return  HttpResult.success(user1);

    }

    @DeleteMapping("/users/{id}")
    @ApiOperation(value = "deleteUser接口", notes = "删除用户的功能")
    @ApiImplicitParam(
            name = "id",value = "用户id",
            defaultValue = "1", required = true,
            dataType = "int",paramType = "path"
    )
    public HttpResult<Object> deleteUser(@PathVariable Integer id) {
        this.userService.deleteUser(id);

        return HttpResult.success();

    }

    @GetMapping("/users")
    @ApiOperation(value = "getUserPageList接口", notes = "分页查询用户列表")
    @ApiImplicitParam(
            name = "userParams", value = "业务自定义对象",
            required = true,dataType = "UserParams",
            paramType = "body"
    )
    public HttpResult<Object> getUserPageList(@RequestBody  UserParams userParams){
        PageInfo<User> userPageList = this.userService.getUserPageList(userParams);
        return  HttpResult.success(userPageList);

    }

}
```



**model**

- User

```java
package com.wukongnotnull.pojo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "User实体类")
public class User {
    // 当类型为Integer类型时候, example 必须要写
    @ApiModelProperty(name = "id",value = "用户id",example = "1")
    private Integer id;
    @ApiModelProperty(name = "username",value = "用户名")
    private String username;
    @ApiModelProperty(name = "password",value = "用户密码")
    private String password;

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





- HttpResult

```java
package com.wukongnotnull.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

//author: 悟空非空也（B站/知乎/公众号）
@ApiModel(description = "统一响应信息类")
public class HttpResult<T> implements Serializable {
    /**
     * 是否响应成功
     */
    @ApiModelProperty(name = "success",value = "是否响应成功")
    private Boolean success;
    /**
     * 响应状态码
     */
    @ApiModelProperty(name = "code",value = "状态码",example = "200")
    private Integer code;
    /**
     * 响应数据
     */
    @ApiModelProperty(name = "data",value = "响应数据")
    private T data;
    /**
     * 错误信息
     */
    @ApiModelProperty(name = "message",value = "错误提示信息")
    private String message;



    // 响应成功的时候，new 的对象
    private HttpResult() {
        this.code=200;
        this.success = true;
    }
    // 响应成功，不携带Data
    public static<T> HttpResult<T> success(){
        return new HttpResult<T>();
    }



    // 响应成功时的构造器
    private HttpResult(T data){
        this.code=200;
        this.success = true;
        this.data = data;
    }
    // 响应成功，携带Data
    public static<T> HttpResult<T> success(T data){
        return new HttpResult<T>(data);
    }




    // 响应失败的时候的构造器
    private HttpResult(ResultCodeEnum resultCode){
        this.success = false;
        this.code=resultCode.getCode() ;
        this.message= resultCode.getMessage();
    }
    // 响应失败时，如何创建实例
    public static<T> HttpResult<T> failure(ResultCodeEnum resultCode){
        return new HttpResult<T>(resultCode);
    }





    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "HttpResult{" +
                "success=" + success +
                ", code=" + code +
                ", data=" + data +
                ", message='" + message + '\'' +
                '}';
    }
}

```





- UserParams

```java
package com.wukongnotnull.bo;
/* author: 悟空非空也（B站/知乎/公众号） */

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "业务所需用户参数封装类")
public class UserParams {
    @ApiModelProperty(name = "pageNum",value = "当前页码",example = "1")
    private  Integer pageNum = 1; //当前页
    @ApiModelProperty(name = "pageSize",value = "状态码",example = "3")
    private  Integer pageSize = 3; //页容量（每页包含多少记录）
    @ApiModelProperty(name = "username",value = "用户名")
    private  String username;

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
```



### 分环境显示文档

> 动态配置当项目处于test、dev环境时,显示swagger;
>
> 处于prod时不显示swagger 文档

```java
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;

@Bean
public Docket createDocket(Environment environment) {
   // 设置要显示swagger的环境
   Profiles of = Profiles.of("dev", "test");

   // 通过 enable() 接收此参数判断是否要显示
   boolean flag = environment.acceptsProfiles(of);

   return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .enable(flag) //是否启用 Swagger ，false 为浏览器无法访问
      .select()
      .apis(RequestHandlerSelectors.basePackage("com.wukongnotnull.controller"))
       // 通过请求路径再过滤
      .paths(PathSelectors.ant("/wukong/**"))
      .build();
}
```





### 文档分组展示

> 接口文档根据不同开发者进行分组展示，开发者分别是 wukong , zhubajie , shaseng



默认组名为 default  ,通过 groupName() 可配置分组

```
@Bean
public Docket createDocket() {
   return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
      .groupName("wukong") // 配置分组
       // 省略配置....
}
```



配置多个分组

```
@Bean
public Docket createDocket1(){
   return new Docket(DocumentationType.SWAGGER_2).groupName("zhubajie");
}
@Bean
public Docket createDocket2(){
   return new Docket(DocumentationType.SWAGGER_2).groupName("shaseng");
}
```



### UI 界面拓展

**默认的UI**

>  **访问 http://localhost:8080/swagger-ui.html**

```xml
<dependency>
   <groupId>io.springfox</groupId>
   <artifactId>springfox-swagger-ui</artifactId>
   <version>2.9.2</version>
</dependency>
```



**bootstrap-ui**

> 访问 http://localhost:8080/doc.html

```xml
<dependency>
   <groupId>com.github.xiaoymin</groupId>
   <artifactId>swagger-bootstrap-ui</artifactId>
   <version>1.9.1</version>
</dependency>
```



**Layui-ui**

> 访问 http://localhost:8080/docs.html

```
<dependency>
   <groupId>com.github.caspar-chen</groupId>
   <artifactId>swagger-ui-layer</artifactId>
   <version>1.1.3</version>
</dependency>
```



**mg-ui**

>  **访问 http://localhost:8080/document.html**

```
<dependency>
   <groupId>com.zyplayer</groupId>
   <artifactId>swagger-mg-ui</artifactId>
   <version>1.0.6</version>
</dependency>
```


## CORS 跨域处理
###  跨域请求

**跨源资源共享**  `CORS`（或通俗地译为跨域资源共享）是一种基于 `HTTP`  头的机制，该机制通过允许服务器标示除了它自己以外的其它`origin`（域，协议和端口），这样浏览器可以访问加载这些资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的"预检"请求。在预检中，浏览器发送的头中标示有HTTP方法和真实请求中会用到的头。

跨源HTTP请求的一个例子：运行在 `http://domain-a.com` 的JavaScript代码使用 `XMLHttpRequest` 来发起一个到 `https://domain-b.com/data.json` 的请求。

出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，`XMLHttpRequest`和`Fetch API`遵循同源策略。 这意味着使用这些API的`Web`应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。



<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvak899ltcj60pp0hvace02.jpg" alt="img" style="zoom:67%;" />







### CORS 解决跨域

CORS是一个W3C标准，全称是”跨域资源共享” `Cross-origin resource sharing` ，允许浏览器向跨源服务器，发出 `XMLHttpRequest`请求，从而克服了AJAX只能同源使用的限制。



它通过服务器增加一个特殊的 `Header[Access-Control-Allow-Origin]` 来告诉客户端跨域的限制，如果浏览器支持 `CORS`  ,并且判断Origin通过的话，就会允许XMLHttpRequest发起跨域请求。





### SpringBoot 使用 CORS 解决跨域

#### 方法一 @CrossOrigin

> 后端项目中源码：
>
> 方法或者类上添加 `@CrossOrigin` 注解



**Controller**

~~~~java
package com.wukongnotnull.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//author: 悟空非空也（B站/知乎/公众号）
@Controller
@RequestMapping("/api/v1")
@CrossOrigin
public class UserController {
    @ResponseBody
    @GetMapping(value = "/users")
    public String  getUserList(){
        return "获得用户列表成功";
    }
}
~~~~



**html**

> 前端项目中的源码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js">
    </script>
    <script>
        $(function () {
            $("#btn").click(function () {
                console.log("test....");
                $.ajax({
                    url:'http://localhost:8080/api/v1/users',
                    methods:'get',
                    success:function (res) {
                        console.log(res);
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            })
        });
    </script>
</head>

<body>

<a href="http://localhost:8080/api/v1/users">方法一：查询所有用户信息</a>
  
  
<button id ="btn">方法二： 点击查询所有用户信息</button>

</body>


</html>
```



#### 方法二  重写 addCorsMappings 方法

> 后端项目中源码：
>
> 创建处理跨域的配置类

**配置类**

~~~~java
@Configuration
public class MyWebMvcConfigurer implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
      	// 设置允许跨域的路径
        registry.addMapping("/**")
                // 设置允许跨域请求的域名
                .allowedOriginPatterns("*")
                // 是否允许 cookie
                .allowCredentials(true)
                // 设置允许的请求方式
                .allowedMethods("GET", "POST", "DELETE", "PUT")
                // 设置允许的 header 属性
                .allowedHeaders("*")
                // 允许跨域最大时长
                .maxAge(3600);
    }
}
~~~~



**html**

> 前端项目中的源码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js">
    </script>
    <script>
        $(function () {
            $("#btn").click(function () {
                console.log("test....");
                $.ajax({
                    url:'http://localhost:8080/api/v1/users',
                    methods:'get',
                    success:function (res) {
                        console.log(res);
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            })
        });
    </script>
</head>

<body>

<a href="http://localhost:8080/api/v1/users">方法一：查询所有用户信息</a>
    
<button id ="btn">方法二： 点击查询所有用户信息</button>

</body>

</html>
```











## Token

在前后端分离的场景中，采用 `Token` 方案进行登录验证。登录成功时，后端根据用户信息生成一个 `Token` 字符串返回给前端（客户端）存储。

前端再次发送请求时，若存在 `token` ，会放入请求头中发送给后端。后端进行解析比对，如果解析比对不成功（比如，`token` 超时或者`token`信息错误），表示为未登录。

原理类似 `Session` 。



### Token 生成方案-JWT

目前企业中运用比较多的，是使用 `JWT` 技术来生成 `token` 。

#### **引入依赖**

~~~~xml
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.0</version>
        </dependency>
~~~~



#### **设计工具类来生成和解析token**

~~~~java
package com.wukongnotnull.utils;

import io.jsonwebtoken.*;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

/**
 * JWT工具类
 */
public class JwtUtil {

    //有效期为
    public static final Long JWT_TTL = 60 * 60 *1000L;// 60 * 60 *1000 为 1 小时,单位为毫秒

    //设置秘钥明文
    public static final String JWT_KEY = "wukongnotnullwukongnotnull";


    /**
     * 创建token
     * @param id  唯一值
     * @param subject 表示主题，对主题进行加密处理，生成密文，命名为 token 。一般使用用户表中的主键 id
     * @param ttlMillis  设置 token 的最大存活时间
     * @return
     */
    public static String createJWT(String id, String subject, Long ttlMillis) {

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        if(ttlMillis==null){
            ttlMillis=JwtUtil.JWT_TTL;
        }
        long expMillis = nowMillis + ttlMillis;
        Date expDate = new Date(expMillis);
        SecretKey secretKey = generalKey();

        JwtBuilder builder = Jwts.builder()
                .setId(id)              //唯一的ID
                .setSubject(subject)   // 主题  可以是JSON数据
                .setIssuer("wukongnotnull")     // 签发者
                .setIssuedAt(now)      // 签发时间
                .signWith(signatureAlgorithm, secretKey) //使用HS256对称加密算法签名, 第二个参数为秘钥
                .setExpiration(expDate);// 设置过期时间
        return builder.compact();
    }

    /**
     * 生成加密后的秘钥 secretKey
     * @return
     */
    public static SecretKey generalKey() {
        byte[] encodedKey = Base64.getDecoder().decode(JwtUtil.JWT_KEY);
        SecretKey key = new SecretKeySpec(encodedKey, 0, encodedKey.length, "AES");
        return key;
    }
    
    /**
     * 解析
     *
     * @param jwt
     * @return
     * @throws Exception
     */
    public static Claims parseJWT(String jwt) throws Exception {
        SecretKey secretKey = generalKey();
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(jwt)
                .getBody();
    }

    public static void main(String[] args)  {
        // 对用户 id=1  进行加密 ，形成密钥 jwt
        String jwt = JwtUtil.createJWT(UUID.randomUUID().toString(), "1", null);
        System.out.println("jwt = " + jwt);

        // 对密钥进行解析，还原明文
        Claims claims = null;
        try {
            claims = JwtUtil.parseJWT(jwt);
           // claims = JwtUtil.parseJWT("www.wukongnotnull.com");
        } catch (Exception e) {
            // 当密文不是原来的密文或者密文过期，都会出现异常提示
            e.printStackTrace();
        }
        assert claims != null;
        System.out.println("claims = " + claims.getSubject());
    }

}
~~~~



#### 登录页面

> 编写 login.html 页面进行测试， 或者选择 PostMan 进行测试



~~~~sql
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
    <script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js">
    </script>
    <script>
        $(function () {
            $("#btn2").click(function () {
                console.log("输出。。。。");
            });
            $("#btn").click(function (){
                console.log("提交表单成功");
                var username = $("#username").val();
                var password = $("#password").val();
                console.log(username);
                console.log(password);
                $.ajax({
                    url:'http://localhost:8080/api/v1/login.do',
                    type:'POST',
                    /*无论 GET 还是 POST ， form 表单的默认 contentType 都为 application/x-www-form-urlencoded  */
                    /* GET 时，请求参数放入url路径中； POST 时，请求参数放入请求体 Request Body 中 */
                    contentType:'application/x-www-form-urlencoded',
                    data:{
                        "username": username,
                        "password": password
                    },
                    success:function (res) {
                        console.log(res);
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            });

        });
    </script>
</head>
<body>
<div>
    <div>
        <label>
           用户名： <input type="text" name="username" id="username">
        </label>
        <label>
           密码：  <input type="text" name="password" id="password">
        </label>
       <!-- <input id="btn" type="submit" value="登录">-->
        <button id="btn">登录</button>
    </div>
</div>
<div>
   
</div>
</body>
</html>

~~~~



#### LoginController

> 处理客户端请求



~~~~java
package com.wukongnotnull;

import com.wukongnotnull.domain.User;
import com.wukongnotnull.utils.JwtUtil;
import com.wukongnotnull.vo.HttpResult;
import com.wukongnotnull.vo.ResultCodeEnum;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;


//author: 悟空非空也（B站/知乎/公众号）
@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class LoginController {

    @PostMapping("/login.do")
    public HttpResult doLogin(User user) {
        /*
            假装已连接数据库，并查询出某用户信息为： id：1 , username: wukong , password: wukong
         */
        if(user.getUsername().equals("wukong") && user.getPassword().equals("wukong")){
            // 登录成功
            // 使用用户 id 生成密文，命名为 token
            String token = JwtUtil.createJWT(UUID.randomUUID().toString(), "1", null);
           // 将 token 响应给客户端
            HashMap<String, String> map = new HashMap<>();
            map.put("token",token);
            return HttpResult.success(map);
        }else {
            return HttpResult.failure(ResultCodeEnum.UNAUTHORIZED);
        }
    }


}

~~~~


## Token 授权访问
### 拦截器

通过 url 对 controller 中的方法进行访问时，都需要先进行身份验证，证明是已登录用户，才能合法访问。

这种情况，使用拦截器最合适。



###  使用步骤

#### 自定义拦截器

> 实现 `HandlerInterceptor` 接口 ,重写 `preHandle` 方法



~~~~java
package com.wukongnotnull.interceptor;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Component
public class AuthenticationInterceptor implements HandlerInterceptor {


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
         // 若是报错为 is blocked by CORS POLICY ....,加上如下代码
         response.setHeader("Access-Control-Allow-Origin","*");
        response.setHeader("Access-Control-Allow-Headers","*");
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(response.SC_OK);
            return false;
        }
      
      
        // 获得 token
        String token = request.getHeader("token");
        System.out.println("AuthenticationInterceptor-->preHandle --->   token = " + token);

        // 非空判断
        if(token == null ||token.equals("")){
      //  if(!StringUtils.hasText(token)){
            System.out.println("AuthenticationInterceptor-->preHandle --->hasText  为null " );
            response.sendError(response.SC_BAD_REQUEST);
            return false;
        }
        try {
            // token 合法
            Claims claims = JwtUtil.parseJWT(token);
            System.out.println("claims.getSubject() = " + claims.getSubject());


        }catch (Exception e){
            e.printStackTrace();
            // 出现异常的话，表示 token 非法（token 信息被篡改或者token过期了）
            response.sendError(response.SC_UNAUTHORIZED);
          // response.sendError(401,"身份验证是啊");
            return false;
        }
        return true;
    }
}

~~~~





#### 配置拦截器


~~~~java
package com.wukongnotnull.config;

import com.wukongnotnull.interceptor.AuthenticationInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class myWebMvcConfigurer implements WebMvcConfigurer {

    @Autowired
    private AuthenticationInterceptor  authenticationInterceptor;
	
  	// 指定哪些路径需要经过该拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authenticationInterceptor)//添加身份验证拦截器
            .addPathPatterns("/**")  //拦截路径
            .excludePathPatterns("/api/v1/login.do");//排除路径
    }
}
~~~~





#### 测试

- Postman 测试

  http://localhost:8080/api/v1/login.do    +  用户名和密码  能够正常访问

  http://localhost:8080/api/v1/abcdef   不能正常访问,报错 401（unauthorized）, 需要在 request head 中添加 token



- 如何用浏览器测试？

  Ajax 请求：http://localhost:8080/api/v1/users



##### **UserController**

```
package com.wukongnotnull.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

//author: 悟空非空也（B站/知乎/公众号）
@Controller
@RequestMapping("/api/v1")
@CrossOrigin
public class UserController {
    
    @ResponseBody
    @GetMapping(value = "/users")
    public String  getUserList(HttpServletResponse response){
   
        return "获得用户列表成功";
    }
}
```





##### **前端页面**

> - 在login.html 页面中，添加 token 的存储和登录成功后的页面跳转
    >
    >   ```
>   success:function (res) {
>   console.log(res);
>   //将token 存入到客户端（浏览器）的本地存储空间中
>   localStorage.setItem("token",res.data.token);
>   // 跳转到 管理员主页 (路径的跳转在前端项目中实现，不在后端项目中实现)
>   window.location.href = "http://localhost:63342/fore-back/front-end/main.html";
>   },
>   error:function (err) {
>   console.log(err);
>   }
>   ```
>
> - 创建管理员主页 main.html
    >
    >   ```
>   $.ajax({
>    url:"http://localhost:8080/api/v1/users",
>    headers: {'token': localStorage.getItem("token")},
>       
>    type: 'GET',
>    success: function (res) {
>        console.log(res);
>       
>    },
>    error: function (err) {
>        console.log(err);
>       
>    }
>   });
>   ```





**login.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
    <script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js">
    </script>
    <script>
        $(function () {
            $("#btn").click(function (){
                console.log("提交表单成功");
                var username = $("#username").val();
                var password = $("#password").val();
                console.log(username);
                console.log(password);
                $.ajax({
                    url:'http://localhost:8080/api/v1/login.do',
                    type:'POST',
                    /*无论 GET 还是 POST ， form 表单的默认 contentType 都为 application/x-www-form-urlencoded  */
                    /* GET 时，请求参数放入url路径中； POST 时，请求参数放入请求体 Request Body 中 */
                    contentType:'application/x-www-form-urlencoded',
                    data:{
                        "username": username,
                        "password": password
                    },
                    success:function (res) {
                        console.log(res);
                        //将token 存入到客户端（浏览器）的本地存储空间中
                        localStorage.setItem("token",res.data.token);
                        // 跳转到 管理员主页 (路径的跳转在前端项目中实现，不在后端项目中实现)
                        window.location.href = "http://localhost:63342/fore-back/front-end/main.html";
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            });

        });
    </script>
</head>
<body>
<div>
    <div>
        <label>
           用户名： <input type="text" name="username" id="username">
        </label>
        <label>
           密码：  <input type="text" name="password" id="password">
        </label>
       <!-- <input id="btn" type="submit" value="登录">-->
        <button id="btn">登录</button>
    </div>
</div>

</body>
</html>
```



**main.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台主页</title>
    <script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>
    <script>
        // 从后端项目中获得用户列表信息，调用后端接口
        $(function () {
            $("button").click(function () {
                console.log("click button success");
                $.ajax({
                    url:"http://localhost:8080/api/v1/users",
                    headers: {'token': localStorage.getItem("token")},

                    type: 'GET',
                    success: function (res) {
                        console.log(res);

                    },
                    error: function (err) {
                        console.log(err);

                    }
                });
            });
        });
    </script>
</head>
<body>
<h2>主页内容（需要登录成功后，才能访问该页面）</h2>
<h3>显示用户列表信息</h3>
<button>点击显示用户列表信息</button>

</body>
</html>
```



## 自定义注解对参数解析

Controller 中方法参数如何获得请求体中的数据呢？只要在方法参数前添加 @RepuestBody 注解即可。这给我们一个解决这类问题的启示。





### 案例

> 实现当前用户 id 和形参的绑定

#### 自定义注解

~~~~java
package com.wukongnotnull.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

//author: 悟空非空也（B站/知乎/公众号）
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
public @interface CurrentUserId {
    
}

~~~~





#### 自定义参数解析类



~~~~java
package com.wukongnotnull.utils;

import com.wukongnotnull.annotation.CurrentUserId;
import io.jsonwebtoken.Claims;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
@Component
public class UserIdArgumentResolver implements HandlerMethodArgumentResolver {


    // 指定方法参数前可以添加 CurrentUserId 注解
    @Override
    public boolean supportsParameter(MethodParameter parameter) {

        return parameter.hasParameterAnnotation(CurrentUserId.class);

    }



    // 解析参数
    @Override
    public Object resolveArgument(MethodParameter parameter,
                                  ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest,
                                  WebDataBinderFactory binderFactory) throws Exception {

        String token = webRequest.getHeader("token");
        if(StringUtils.hasText(token)){  // 非空

            //解析token，获取userId
            Claims claims = JwtUtil.parseJWT(token);
            String subject = claims.getSubject();
            return Integer.valueOf(subject);

        }
        return null;
    }


}
~~~~





#### 配置参数解析器

~~~~java
@Configuration
public class ArgumentResolverConfig implements WebMvcConfigurer {

    @Autowired
    private UserIdArgumentResolver userIdArgumentResolver;

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(userIdArgumentResolver);
    }
}
~~~~



#### 自定义注解的使用

> @CurrentUserId 实现 token 中解析的 userId 和方法参数的数据绑定

~~~~java
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserServcie userServcie;
  
		// 根据用户 id 获得该用户信息
    @GetMapping("/users/id")
    public HttpResult getUserById(@CurrentUserId Integer userId)  {
        System.out.println(userId);

        User user = this.userService.getUserById(userId);

        return HttpResult.success(user);
    }
  
}
~~~~



#### 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户后台主页</title>
    <script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>
    <script>
        $(function () {
           $("#btn2").click(function () {
                // 执行查询用户列表
                $.ajax({
                    url: "http://localhost:8080/api/v1/users/id",
                    method: "GET",
                    headers:{"token" : window.localStorage.getItem("token")},
                    success: function (resp) {
                        console.log(resp);
                    },
                    error: function (error) {
                        console.log(error);

                    }
                });


            });

        });
    </script>
</head>
<body>
<h1>用户后台主页</h1>

<button id="btn2">管理员使用 ajax 查询本人的用户信息(在后端项目中)</button>

</body>
</html>
```







