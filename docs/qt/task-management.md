# 任务管理
## 无返回值异步任务调用

>  应用场景： 发送注册验证码



```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
```





**1-application.java**

```java
package com.wukongnotnull;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class SbTaskApplication {

    public static void main(String[] args) {
        SpringApplication.run(SbTaskApplication.class, args);
    }

}

```



**2-service**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

public interface MyAsyncService  {
    public void sendSms();

}

package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MyAsyncServiceImpl implements  MyAsyncService{

    @Async
    public void sendSms(){
        long startTime = System.currentTimeMillis();
        System.out.println("service--->sendSms-->发送短信进行中。。。");
        try {
            Thread.sleep(5000);
        }catch (Exception e){
            e.printStackTrace();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("service 共耗时"+(endTime-startTime));

    }
}

```



**3-controller**

```java
package com.wukongnotnull.controller;
//author: 悟空非空也（B站/知乎/公众号）

import com.wukongnotnull.service.MyAsyncService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyAsyncController {

    @Autowired
    private MyAsyncService myAsyncService;

    @GetMapping("/sendsms")
    public String sendSms(){
        System.out.println("controller-->sendSms--> 开始执行");
        myAsyncService.sendSms();
        System.out.println("controller-->sendSms--> 执行结束");
        return "短信验证码已发送，请稍后查收";
    }


}

```



**4-test**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakuyqhvzj60ja066gm202.jpg" alt="image-20210723161301811" style="zoom:50%;" />





## 有返回值异步任务调用

> 2个方法 processA() 和 processB()  同时执行，不是先后执行



**1-sevice**

```java
@Service
public class MyAsyncService {

    @Async
    public Future<Integer> processA(){
        System.out.println("MyAsyncService-->start processA");
        long startTime = System.currentTimeMillis();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        int count=123;
        long endTime = System.currentTimeMillis();
        System.out.println("MyAsyncService-->processA end ,total time cost "+(endTime-startTime));
        return new AsyncResult<Integer>(count);
    }

    @Async
    public Future<Integer> processB(){
        System.out.println("MyAsyncService-->start processB");
        long startTime = System.currentTimeMillis();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        int count=321;
        long endTime = System.currentTimeMillis();
        System.out.println("MyAsyncService-->processB end ,total time cost "+(endTime-startTime));
        return new AsyncResult<Integer>(count);
    }

```



**2-controller**

```java
 @RequestMapping("/statistics")
    public String statistics(){
        long startTime = System.currentTimeMillis();
        Future<Integer> processA = myAsyncService.processA();
        Future<Integer> processB = myAsyncService.processB();
        try {
            Integer totalCount=processA.get()+processB.get();
            System.out.println("totalCount is"+totalCount);
        } catch (Exception e) {
            e.printStackTrace();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("AsyncController-->statistics-->total time is"+(endTime-startTime));
        return "success";
    }
```



**3-test**

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakv38l1zj60y60akq4i02.jpg" alt="image-20210723173609576" style="zoom:50%;" />



**所谓异步就是2个方法同时执行**

上述异步方法是有返回值的，这样主流程在执行异步方法时会有短暂阻塞，需要等待并获取异步方法的返回结果，而调用的两个异步方法会作为两个子线程并行执行，直到异步方法执行完成并返回结果，这样主流程会在最后一个异步方法返回结果后跳出阻塞状态。




## 定时任务介绍

**@Scheduled注解**



https://www.jianshu.com/p/1defb0f22ed1



## 定时任务实现

**新建定时业务处理类 ScheduledTaskService**



> 该类中编写定时任务处理方法使用 @Scheduled 注解声明了三个定时任务方法，
>
> 定制的执行规则基本相同，都是每隔1分钟重复执行一次定时任务
>
> 在使用 fixedDelay 属性的方法 scheduledTaskAfterSleep() 中，使用 Thread.sleep(10000 )模拟该定时任务处理耗时为10秒钟。





**启动类**

```java
@EnableScheduling
@SpringBootApplication
public class SbTaskApplication {

    public static void main(String[] args) {
        SpringApplication.run(SbTaskApplication.class, args);
    }

}
```







**service**

```java
@Service
public class ScheduledTaskService {

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    private Integer count1 = 1;
    private Integer count2 = 1;
    private Integer count3 = 1;


    //每隔1分钟，执行一次
    @Scheduled(fixedRate = 60000)
    public void scheduledTaskImmediately() {
        System.out.println(String.format("fixedRate第%s次执行，当前时间为：%s",
                count1++, dateFormat.format(new Date())));
    }
    //每隔1分10秒（1分钟定时+业务处理时间10秒），执行一次
    @Scheduled(fixedDelay = 60000)
    public void scheduledTaskAfterSleep() throws InterruptedException {
        System.out.println(String.format("fixedDelay第%s次执行，当前时间为：%s",
                count2++, dateFormat.format(new Date())));
        Thread.sleep(10000);//模拟业务处理时间
    }
    //整秒输出
    @Scheduled(cron = "0 * * * * *")
    public void scheduledTaskCron(){
        System.out.println(String.format("cron第%s次执行，当前时间为：%s",
                count3++, dateFormat.format(new Date())));
    }



}
```





**启动启动类测试**

![image-20200724172612847](https://tva1.sinaimg.cn/large/008i3skNgy1gvakx2oheaj61r60jrwo402.jpg)


## 发送纯文本邮件



**pom.xml**

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
        </dependency>
```





**application.yml**

```yaml
spring.mail.host=smtp.qq.com
spring.mail.port=587

spring.mail.username=1390128154@qq.com
spring.mail.password=wvthphmybrqmhidf
spring.mail.default-encoding=UTF-8

spring.mail.properties.mail.smtp.connectiontimeout=5000
spring.mail.properties.mail.smtp.timeout=3000
spring.mail.properties.mail.smtp.writetimeout=5000
```







**service**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
@Service
public class SendMailService {
        @Autowired
        private JavaMailSenderImpl mailSender;

        @Value("${spring.mail.username}")
        private String from;


        /**
         * 发送纯文本邮件
         * @param to       收件人地址
         * @param subject  邮件标题
         * @param text     邮件内容
         */
        public void sendSimpleEmail(String to,String subject,String text){
            // 定制纯文本邮件信息SimpleMailMessage
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(from);
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            try {
                // 发送邮件
                mailSender.send(message);
                System.out.println("纯文本邮件发送成功");
            } catch (MailException e) {
                System.out.println("纯文本邮件发送失败 "+e.getMessage());
                e.printStackTrace();
            }
        }

    }

```







**test**

```java
package com.wukongnotnull.service;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

//author: 悟空非空也（B站/知乎/公众号）
@SpringBootTest
class SendMailServiceTest {

    @Autowired
   private SendMailService sendMailService ;

    @Autowired
    private  TemplateEngine templateEngine;

    FastStringWriter fastStringWriter;

    @Test
    void sendSimpleEmail() {
        sendMailService.sendSimpleEmail("1390128154@qq.com","标题123","内容123");
    }

  
}
```





## 发送带附件和图片的文件

**service**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class SendMailService {



        @Autowired
        private JavaMailSenderImpl mailSender;

        @Value("${spring.mail.username}")
        private String from;



        /**
         * 发送复杂邮件（包括静态资源和附件）
         *
         * @param to           收件人地址
         * @param subject      邮件标题
         * @param text         邮件内容
         * @param filePath     附件地址
         * @param rscId        静态资源唯一标识
         * @param rscPath      静态资源地址
         */
        public void sendComplexEmail(
                String to,
                String subject,
                String text,
                String filePath,
                String rscId,
                String rscPath){
            // 定制复杂邮件信息 MimeMessage
            MimeMessage message = mailSender.createMimeMessage();
            try {
                // 使用 MimeMessageHelper 帮助类，并设置 multipart 多部件使用为 true
                MimeMessageHelper helper = new MimeMessageHelper(message, true);
                helper.setFrom(from);
                helper.setTo(to);
                helper.setSubject(subject);
                helper.setText(text, true);
                // 设置邮件静态资源
                FileSystemResource res = new FileSystemResource(new File(rscPath));
                helper.addInline(rscId, res);
                // 设置邮件附件
                FileSystemResource file = new FileSystemResource(new File(filePath));
                String fileName = filePath.substring(filePath.lastIndexOf(File.separator));
                helper.addAttachment(fileName, file);
                // 发送邮件
                mailSender.send(message);
                System.out.println("复杂邮件发送成功");
            } catch (MessagingException e) {
                System.out.println("复杂邮件发送失败 "+e.getMessage());
                e.printStackTrace();
            }
        }

    }

```







**test**

```java
package com.wukongnotnull.service;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

//author: 悟空非空也（B站/知乎/公众号）
@SpringBootTest
class SendMailServiceTest {

    @Autowired
   private SendMailService sendMailService ;

    @Autowired
    private  TemplateEngine templateEngine;

    FastStringWriter fastStringWriter;



    @Test
    void sendComplexEmail() {
        StringBuffer text = new StringBuffer();
        String rscId = "img_2616";
        text.append("<html><head></head><body>");
        text.append("<div>这是邮件正文");
        text.append("<img src=cid:"+rscId+"/>");
        text.append("</body></html>");
        sendMailService.sendComplexEmail("1390128154@qq.com",
                "带附件的邮件标题",
                text.toString(),
                "/Users/mac/Downloads/信1901班级人员名单.xlsx",
                rscId,
                "/Users/mac/Downloads/IMG_2616.JPG");
    }

}
```







## 发送模板邮件

**pom.xml**

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
```





**emailTemplate.html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org" >
<head>
    <meta charset="UTF-8">
    <title>email</title>
</head>
<body>
<div>
    <p><span th:text="${username}"></span>用户您好，你的验证码是 <span th:text="code"></span></p>
    <img src="../static/img/avcon.png" alt="加载失败">
</div>
</body>
</html>
```







**service**

```java
package com.wukongnotnull.service;
//author: 悟空非空也（B站/知乎/公众号）

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class SendMailService {

        @Autowired
        private JavaMailSenderImpl mailSender;

        @Value("${spring.mail.username}")
        private String from;


        /**
         * 发送模板邮件
         * @param to       收件人地址
         * @param subject  邮件标题
         * @param content  邮件内容
         */
        public void sendTemplateEmail(String to, String subject, String content) {
            MimeMessage message = mailSender.createMimeMessage();
            try {
                // 使用MimeMessageHelper帮助类，并设置multipart多部件使用为true
                MimeMessageHelper helper = new MimeMessageHelper(message, true);
                helper.setFrom(from);
                helper.setTo(to);
                helper.setSubject(subject);
                helper.setText(content, true);
                // 发送邮件
                mailSender.send(message);
                System.out.println("模板邮件发送成功");
            } catch (MessagingException e) {
                System.out.println("模板邮件发送失败 "+e.getMessage());
                e.printStackTrace();
            }
        }

    }

```







**test**

> import org.thymeleaf.TemplateEngine;
> import org.thymeleaf.context.Context;
>
> 两个类无法识别 ，后续解决



```java
package com.wukongnotnull.service;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

//author: 悟空非空也（B站/知乎/公众号）
@SpringBootTest
class SendMailServiceTest {

    @Autowired
   private SendMailService sendMailService ;

    @Autowired
    private  TemplateEngine templateEngine;



    @Test
    void sendTemplateEmail() {
        String to="1390128154@qq.com";
        String subject="【模板邮件】标题";
        // 使用模板邮件定制邮件正文内容
        Context context = new Context();
        context.setVariable("username", "悟空非空也");
        context.setVariable("code", "456123");
        // 使用TemplateEngine设置要处理的模板页面
        String emailContent = templateEngine.process("emailTemplate", context);
        // 发送模板邮件
        sendMailService.sendTemplateEmail(to,subject,emailContent);
    }
}
```


### 定时调度集成-Quartz

在日常项目运行中，我们总会有需求在某一时间段周期性的执行某个动作。比如每天在某个时间段导出报表，或者每 隔多久统计一次现在在线的用户量等。

**Scheduled 比较 quartz**

在Spring Boot中有Java自带的java.util.Timer类，SpringBoot自带的Scheduled来实现,也有强大的调度器Quartz。 Scheduled 在Spring3.X 引入，默认SpringBoot自带该功能,使用起来也很简单，在启动类级别添加 @EnableScheduling注解即可引入定时任务环境。

但遗憾的是Scheduled 默认不支持分布式环境，这里主要讲解 Quartz 时钟调度框架与Spring Boot 集成。



**pom**

```xml
  <dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```



**job类**

```java
public class MyJob implements Job {

    private final Logger logger = LoggerFactory.getLogger(MyJob.class);

    @Resource
    private UserService userService;

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        TriggerKey triggerKey =jobExecutionContext.getTrigger().getKey();

        User userById = userService.getUserById(1);
        logger.info("触发器:"+triggerKey.getName()+"-->所属组:"+triggerKey.getGroup()+"->"+userById.toString()+"-->"+"hello Spring Boot Quartz...");


        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        logger.info("触发器:"+triggerKey.getName()+"-->所属组:"+triggerKey.getGroup()+"->"+sdf.format(new Date())+"-->"+"hello Spring Boot Quartz...");
    }
}
```



**配置类**

```java
import com.wukong.job.MyJob;
import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QuartzConfig {

    @Bean
    public JobDetail myJobDetail(){
        return JobBuilder.newJob(MyJob.class).storeDurably().build();
    }


    @Bean
    public Trigger trigger1(){

        SimpleScheduleBuilder simpleScheduleBuilder = SimpleScheduleBuilder.simpleSchedule()
         //每一秒执行一次              
        .withIntervalInSeconds(1)
        //永久重复，一直执行下去              
        .repeatForever();

        return TriggerBuilder.newTrigger()
                            .withIdentity("trigger1","group1")
                            .withSchedule(simpleScheduleBuilder)
                            .forJob(this.myJobDetail()).build();
    }

     // 每两秒触发一次任务    
     @Bean
    public Trigger trigger2(){

        CronScheduleBuilder cronScheduleBuilder=CronScheduleBuilder.cronSchedule("0/5 * * * * ? *");

        return TriggerBuilder.newTrigger()
                .withIdentity("trigger2", "group1")
                .withSchedule(cronScheduleBuilder)
                .forJob(this.myJobDetail()).build();
    }

    }
```



**启动项目，定时生成日志**

