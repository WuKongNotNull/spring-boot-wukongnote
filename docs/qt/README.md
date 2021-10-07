# Spring Boot 开发入门

## Spring Boot 

### Spring Boot 是什么
### Spring Boot 优点
- 快速构建项目
- 内嵌服务器（Tomcat,Jetty,Undertow），无需部署 `war` 包
- 依赖启动器简化构建配置
- 自动化配置
- 整合大量第三方
### Spring Boot 应用场景



##  Spring Initialzr 构建项目
### 悟空编号

`sbqt001`

<br>

### 配套视频

> B 站链接：

<br>

###  使用Spring Initialzr方式构建 Spring Boot 项目
> - 推荐：建议创建父子项目，而不是单体项目
>
> - 推荐： 使用阿里 Maven 镜像构建项目，速度快
    >
    >   - 打开 maven 的配置文件  **conf/settings.xml**，在 `<mirrors></mirrors>` 标签中添加 mirror 子节点:
          >
          >     ```xml
>     <mirror>
>       <id>aliyunmaven</id>
>       <mirrorOf>*</mirrorOf>
>       <name>阿里云公共仓库</name>
>       <url>https://maven.aliyun.com/repository/public</url>
>     </mirror>
>     ```



#### 创建父项目





#### 创建子项目

第 1 步

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5vwz27ifj61680u079e02.jpg" alt="image-20210711220609209" style="zoom:50%;" />



第 2 步

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5vx513qbj60x80u041602.jpg" alt="image-20210711220906588" style="zoom:50%;" />



第 3 步

检查目录结构是否完整

> .mvn  HELP.md  mvnw   mvnw.cmd 4 个文件（目录）可以直接删除



<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5vxab95oj60pu0qajtp02.jpg" alt="image-20210711221204520" style="zoom:50%;" />


## 启动Banner图标设置
### 悟空编号

`sbqt002`

<br>



### 配套视频

> B 站链接：

<br>

```
introduction
```

### 修改启动图标

- **创建 /src/main/resources/banner.txt 文件**

- 通过如下网站设置banner图标样式

  > http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
  >
  > or
  >
  > http://www.degraeve.com/img2txt.php

- 例如，如下图标复制到 banner.txt 文件中

  ```xml
                   __                                         __                 .__  .__   
  __  _  ____ __  |  | ______   ____    ____     ____   _____/  |_    ____  __ __|  | |  |  
  \ \/ \/ /  |  \ |  |/ /  _ \ /    \  / ___\   /    \ /  _ \   __\  /    \|  |  \  | |  |  
   \     /|  |  / |    <  <_> )   |  \/ /_/  > |   |  (  <_> )  |   |   |  \  |  /  |_|  |__
    \/\_/ |____/  |__|_ \____/|___|  /\___  /  |___|  /\____/|__|   |___|  /____/|____/____/
                       \/          \//_____/        \/                   \/                 
  ```





<br>



### 关闭启动图标

**banner图标如何关闭**

```java
@SpringBootApplication
public class App
{
    public static void main( String[] args )
    {
        SpringApplication springApplication = new SpringApplication(App.class);
        // 关闭 banner 图标
       springApplication.setBannerMode(Banner.Mode.OFF);
        springApplication.run();

    }
}

```




## 单元测试
### 依赖

**pom**

```xml
   <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
    </dependency>
```





### **service 层单元测试**



```java
@SpringBootTest
class MySpringbootApplicationTests {

    @Autowired
    private HelloController helloController;

    @Test
    public void contextLoads() {
        String hello = helloController.hello();
        System.out.println(hello);

    }

}

```



### **controller层单元测试**

视图层代码使用MockMvc 进行测试，这里以UserCntroller 为例,src/test/java 目录下添加测试包

com.wukong.controller 定义测试类代码如下:

```java
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {Starter.class})
@AutoConfigureMockMvc
public class TestUserController {
private Logger log = LoggerFactory.getLog ler.class);
@Autowired
private MockMvc mockMvc;
//用户列表查询
@Test
public void apiTest01()t
MvcResult mvcResu ders.get("/user/list")).
andExp Ok()).andReturn();
log.info("响 Status());
log.info(" getContentAsString());;
}
// 用户名记录查询
@Test
public void apiTest02()t
MvcResult
mvcResult=mockMvc.perform(MockMvcR tBuilders.get("/user/uname/admin")).
andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
log.info("响应状态:{}",mvcResult.getResponse().getStatus());
log.info("响应内容:{}",mvcResult.getResponse().getContentAsString());;
}
}

         @RunWith(SpringRunner.class)
@SpringBootTest(classes = {Starter.class})
@AutoConfigureMockMvc
public class TestUserController {
private Logger log = LoggerFactory.getLog ler.class);
@Autowired
private MockMvc mockMvc;
//用户列表查询
@Test
public void apiTest01()t
MvcResult mvcResu ders.get("/user/list")).
andExp Ok()).andReturn();
log.info("响 Status());
log.info(" getContentAsString());;
}
// 用户名记录查询
@Test
public void apiTest02()t
MvcResult
mvcResult=mockMvc.perform(MockMvcR tBuilders.get("/user/uname/admin")).
andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
log.info("响应状态:{}",mvcResult.getResponse().getStatus());
log.info("响应内容:{}",mvcResult.getResponse().getContentAsString());;
}
}

```




## 热部署
### 介绍


### 实操



#### pom文件钟添加spring-boot-devtools热部署依赖



```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
        </dependency>
```



#### idea中热部署设置



**第1步**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5w10q0cjj61n20qvk2d02.jpg" alt="1593072992087" style="zoom:50%;" />





**第2步**

ctrl+shift+alt(option)+/   打开界面



<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5w15dyqkj61950h0n3102.jpg" alt="1593073323230" style="zoom:50%;" />



#### 热部署测试

使用浏览器测试，不需要重复启动main方法



## 依赖管理





## Spring Boot 自动配置





## Spring Boot 执行流程
<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5w9zcp71j61460lhtbs02.jpg" alt="1593074745488" style="zoom:50%;" />



