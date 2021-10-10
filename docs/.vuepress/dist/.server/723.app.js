"use strict";
exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 9048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3c87189d",
  "path": "/qt/message-service.html",
  "title": "消息服务",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么要使用消息服务",
      "slug": "为什么要使用消息服务",
      "children": []
    },
    {
      "level": 2,
      "title": "常用消息中间件介绍",
      "slug": "常用消息中间件介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "RabbitMQ 消息中间件",
      "slug": "rabbitmq-消息中间件",
      "children": []
    },
    {
      "level": 2,
      "title": "安装RabbitMQ",
      "slug": "安装rabbitmq",
      "children": []
    },
    {
      "level": 2,
      "title": "Spring Boot 整合 RabbitMQ 环境搭建",
      "slug": "spring-boot-整合-rabbitmq-环境搭建",
      "children": []
    },
    {
      "level": 2,
      "title": "Public/Subscribe 发布/订阅工作模式",
      "slug": "public-subscribe-发布-订阅工作模式",
      "children": [
        {
          "level": 3,
          "title": "1-基于api方式",
          "slug": "_1-基于api方式",
          "children": []
        },
        {
          "level": 3,
          "title": "2-基于配置类的方式",
          "slug": "_2-基于配置类的方式",
          "children": []
        },
        {
          "level": 3,
          "title": "3-基于注解方式实现发布/订阅模式",
          "slug": "_3-基于注解方式实现发布-订阅模式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Routing 路由工作模式",
      "slug": "routing-路由工作模式",
      "children": []
    },
    {
      "level": 2,
      "title": "Topics通配符工作模式",
      "slug": "topics通配符工作模式",
      "children": []
    }
  ],
  "filePathRelative": "qt/message-service.md",
  "git": {
    "updatedTime": 1633567014000,
    "contributors": [
      {
        "name": "悟空非空也",
        "email": "1390128154@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ message_service_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/message-service.html.vue?vue&type=template&id=f41a5e62


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="消息服务" tabindex="-1"><a class="header-anchor" href="#消息服务" aria-hidden="true">#</a> 消息服务</h1><h2 id="为什么要使用消息服务" tabindex="-1"><a class="header-anchor" href="#为什么要使用消息服务" aria-hidden="true">#</a> 为什么要使用消息服务</h2><p>在多数应用尤其是分布式系统中，消息服务是不可或缺的重要部分，它使用起来比较简单，同时解决了不少难题，例如异步处理、应用解耦、流量削锋、分布式事务管理等，使用消息服务可以实现一个高性能、高可用、高扩展的系统。</p><p><strong>异步处理</strong></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakqnbg5jj60cc09zdgn02.jpg" alt="image-20200723103025400"></p><p><strong>应用解耦</strong></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gval8ophc2j60d205maah02.jpg" alt="image-20200723103133787"></p><p><strong>流量削峰</strong></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakqtu79pj60f202lt8s02.jpg" alt="image-20200723103432578"></p><p><strong>分布式事务</strong></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakqwuky8j60g3088dgl02.jpg" alt="image-20200723103508105"></p><p>1.订单支付成功后，写入消息表</p><p>2.定时扫描消息表消息写入到消息队列中</p><p>3.库存系统会立即读取到消息队列中的消息进行库存更新，同时添加消息处理状态</p><p>4.库存系统向消息队列中写入库存处理结果</p><p>5.订单系统会立即读取到消息队列中的库存处理状态。直接删除消息表数据，并写入到历史消息表</p><h2 id="常用消息中间件介绍" tabindex="-1"><a class="header-anchor" href="#常用消息中间件介绍" aria-hidden="true">#</a> 常用消息中间件介绍</h2><h2 id="rabbitmq-消息中间件" tabindex="-1"><a class="header-anchor" href="#rabbitmq-消息中间件" aria-hidden="true">#</a> RabbitMQ 消息中间件</h2><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakrlcwsej60jv05fwer02.jpg" alt="image-20200723104834356"></p><p><strong>工作模式介绍</strong></p><ul><li><p>Work queues（工作队列模式）</p></li><li><p>Publish/Subscribe（发布订阅模式）</p></li><li><p>Routing（路由模式）</p></li><li><p>Topics（通配符模式）</p></li><li><p>RPC</p></li><li><p>Headers（使用较少）</p></li></ul><h2 id="安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#安装rabbitmq" aria-hidden="true">#</a> 安装RabbitMQ</h2><p><strong>注意版本的兼容，3.8 版本需要Erlang语言包 20 以上的，不然不兼容，注意</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakroy0v5j60qa0alt9d02.jpg" alt="image-20200723154150870" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakrrtkymj61ab0bvt9r02.jpg" alt="image-20200723154344608" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><p>1、在RabbitMQ官网上http://www.rabbitmq.com/install-windows.html</p><p>下载,如果是在Windows环境下安装RabbitMQ消息中间件还需要64位的Erlang语言包支持。</p><p>2、 RabbitMQ安装包依赖于Erlang语言包的支持，所以要先安装Erlang语言包，再安装RabbitMQ安装包。</p><p>3、RabbitMQ可视化效果展示, RabbitMQ默认提供了两个端口号5672和15672，其中5672用作服务端口号，15672用作可视化管理端口号。在浏览器上访问http://localhost:15672(用户名和密码均为guest)</p><h2 id="spring-boot-整合-rabbitmq-环境搭建" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-rabbitmq-环境搭建" aria-hidden="true">#</a> Spring Boot 整合 RabbitMQ 环境搭建</h2><p><strong>pom.xml</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>application.xml</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>spring:
  rabbitmq:
    host: localhost
    username: guest
    password: guest
    virtual-host: /
    port: 5672

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="public-subscribe-发布-订阅工作模式" tabindex="-1"><a class="header-anchor" href="#public-subscribe-发布-订阅工作模式" aria-hidden="true">#</a> Public/Subscribe 发布/订阅工作模式</h2><h3 id="_1-基于api方式" tabindex="-1"><a class="header-anchor" href="#_1-基于api方式" aria-hidden="true">#</a> 1-基于api方式</h3><p><strong>1.1 交换器和队列进行绑定，定制中间件,并运行@Test</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AmqpAdmin</span> amqpAdmin<span class="token punctuation">;</span>
	<span class="token comment">// 定制中间件</span>
<span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">amqpAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//定义fanout类型交换器</span>
        amqpAdmin<span class="token punctuation">.</span><span class="token function">declareExchange</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FanoutExchange</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//定义2个默认持久化队列，处理email和sms</span>
        amqpAdmin<span class="token punctuation">.</span><span class="token function">declareQueue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        amqpAdmin<span class="token punctuation">.</span><span class="token function">declareQueue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_sms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将队列分别与交换机进行绑定</span>
        amqpAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Binding</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_email&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">Binding<span class="token punctuation">.</span>DestinationType</span><span class="token punctuation">.</span>QUEUE<span class="token punctuation">,</span><span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        amqpAdmin<span class="token punctuation">.</span><span class="token function">declareBinding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Binding</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_sms&quot;</span><span class="token punctuation">,</span><span class="token class-name">Binding<span class="token punctuation">.</span>DestinationType</span><span class="token punctuation">.</span>QUEUE<span class="token punctuation">,</span>
                <span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakrwm43mj61550s4tcw02.jpg" alt="image-20200723181403662" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvaks0a69vj618w0oj76t02.jpg" alt="image-20200723181439925" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><p><strong>1.2 消息发布者发布消息</strong></p><blockquote><p><strong>先创建实体类，同时将实体类输出格式转换成json格式</strong></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span>  <span class="token punctuation">{</span>

    <span class="token keyword">private</span>  <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>support<span class="token punctuation">.</span>converter<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonMessageConverter</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>support<span class="token punctuation">.</span>converter<span class="token punctuation">.</span></span><span class="token class-name">MessageConverter</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">//将实体类转换成json格式呈现</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MessageConverter</span> <span class="token function">messageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p><strong>消息发布者</strong></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>     <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span>  rabbitTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>1.3 消费者消费消息</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Message</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RabbitListener</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;fanout_queue_email&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushConsumerEmail</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> string <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;邮件业务接收到消息&quot;</span><span class="token operator">+</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;fanout_queue_sms&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushConsumerSMS</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> string <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sms业务接收到消息&quot;</span><span class="token operator">+</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>1.4 测试</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvaks5izbbj61dz0hwai502.jpg" alt="image-20200723181308163" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><h3 id="_2-基于配置类的方式" tabindex="-1"><a class="header-anchor" href="#_2-基于配置类的方式" aria-hidden="true">#</a> <strong>2-基于配置类的方式</strong></h3><p><strong>1</strong>、打开RabbitMQ消息配置类<strong>RabbitMQConfig</strong>，定义消息转换器、<strong>fanout</strong>类型的交换器、不同名称的消息队列以及将不同名称的消息队列与交换器绑定。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>support<span class="token punctuation">.</span>converter<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonMessageConverter</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>support<span class="token punctuation">.</span>converter<span class="token punctuation">.</span></span><span class="token class-name">MessageConverter</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">//将实体类转换成json格式呈现</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MessageConverter</span> <span class="token function">messageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//创建 fanout类型的交换器</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Exchange</span> <span class="token function">fanout_exchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ExchangeBuilder</span><span class="token punctuation">.</span><span class="token function">fanoutExchange</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//创建 存放email消息的持久化队列</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">fanout_queue_email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//创建存放 sms 消息的持久化队列</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">fanout_queue_sms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_sms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//创建存放 weixin 消息的持久化队列</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">fanout_queue_wx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_wx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//email消息队列绑定交换机</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">bindingEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>
                <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">fanout_queue_email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">fanout_exchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">noargs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//sms消息队列绑定交换机</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">bindingSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>
                <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">fanout_queue_sms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">fanout_exchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">noargs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//wx消息队列绑定交换机</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">bindingWx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>
                <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">fanout_queue_wx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">fanout_exchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">noargs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h3 id="_3-基于注解方式实现发布-订阅模式" tabindex="-1"><a class="header-anchor" href="#_3-基于注解方式实现发布-订阅模式" aria-hidden="true">#</a> 3-基于注解方式实现发布/订阅模式</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">User</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Exchange</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Queue</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">QueueBinding</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RabbitListener</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span><span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">psubConsumerEmailAno</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;邮件业务接收到消息： &quot;</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span><span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>value <span class="token operator">=</span>
    <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token string">&quot;fanout_queue_sms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>exchange <span class="token operator">=</span>
    <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;fanout_exchange&quot;</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">psubConsumerSmsAno</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;短信业务接收到消息： &quot;</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="routing-路由工作模式" tabindex="-1"><a class="header-anchor" href="#routing-路由工作模式" aria-hidden="true">#</a> Routing 路由工作模式</h2><p>1.使用基于注解的方式定制消息组件和消息消费者</p><p><strong>打开业务类</strong>RabbitMQService，在该类中使用**@<strong>RabbitListener</strong>注解及其相关属性定制**Routing路由模式的消息组件，并模拟编写消息消费者接收的方法。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Exchange</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Queue</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">QueueBinding</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RabbitListener</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>
            bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;routing_queue_error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span><span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>
                            value <span class="token operator">=</span> <span class="token string">&quot;routing_exchange&quot;</span><span class="token punctuation">,</span>
                            type <span class="token operator">=</span> <span class="token string">&quot;direct&quot;</span>
                    <span class="token punctuation">)</span> <span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token string">&quot;error_routing_key&quot;</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">routingConsumerError</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到error级别日志消息:&quot;</span><span class="token operator">+</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>
            bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;routing_queue_all&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>
                            value <span class="token operator">=</span> <span class="token string">&quot;routing_exchange&quot;</span><span class="token punctuation">,</span>
                            type <span class="token operator">=</span> <span class="token string">&quot;direct&quot;</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;error_routing_key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;warning_routing_key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;info_routing_key&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">routingConsumerAll</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到所有级别error,warning,info的日志消息:&quot;</span><span class="token operator">+</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>2.<strong>消息发送者</strong>发送消息</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>      <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span>  rabbitTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">routingPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;routing_exchange&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;error_routing_key&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;routing send : this is error message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>3-测试结果</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvaksbomu8j612t08o78l02.jpg" alt="image-20200724120422461" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><p>4-改造：</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakshxr4yj611j0avtaj02.jpg" alt="image-20200724120609543"></p><p>5-测试结果为：</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakt7r7ykj60xs078q6d02.jpg" alt="image-20200724120732863" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"33%"})
  }"><h2 id="topics通配符工作模式" tabindex="-1"><a class="header-anchor" href="#topics通配符工作模式" aria-hidden="true">#</a> Topics通配符工作模式</h2><p>“通配符交换机”（Topic Exchange）将路由键和某模式进行匹配。此时队列需要绑定在一个模式上。符号“#”匹配一个或多个词，符号“<em>”仅匹配一个词。因此“audit.#”能够匹配到“audit.irs.corporate”，但是“audit.</em>”只会匹配到“audit.irs”。（这里与我们一般的正则表达式的“*”和“#”刚好相反，这里我们需要注意一下。） 举例：</p><p>key:</p><p>info.#.email.# 的队列 ---》邮件业务订阅该队列的消息 info.#.sms.# 的队列 ---》短信业务订阅该队列的消息</p><p>routingKey:</p><p>info.email info.sms info.email.sms</p><p>1-使用注解方式定制消息组件和消息订阅者（消费者）</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>studyrabbitmq<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Exchange</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Queue</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">QueueBinding</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RabbitListener</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>
            bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;topic_queue_email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span><span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;topic_exchange&quot;</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token string">&quot;info.#.email.#&quot;</span>

    <span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">topicConsumerEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;邮件业务消费该消息：&quot;</span><span class="token operator">+</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>
            bindings <span class="token operator">=</span> <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;topic_queue_sms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;topic_exchange&quot;</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token string">&quot;info.#.sms.#&quot;</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">topicConsumerSMS</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;短信业务消费该消息：&quot;</span><span class="token operator">+</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>2-消息发送者发送消息</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span>  rabbitTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">topicPublisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//只发邮件</span>
      <span class="token comment">//  rabbitTemplate.convertAndSend(&quot;topic_exchange&quot;,&quot;info.email&quot;,&quot;email: this is an email&quot;);</span>
        <span class="token comment">//只发短信</span>
       <span class="token comment">// rabbitTemplate.convertAndSend(&quot;topic_exchange&quot;,&quot;info.sms&quot;,&quot;sms: this is a sms&quot;);</span>
        <span class="token comment">//既发邮件也发短信</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;topic_exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;info.email.sms&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;both: we are an email and a sms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/message-service.html.vue?vue&type=template&id=f41a5e62

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/message-service.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const message_service_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    for (const [key, val] of props) {
        sfc[key] = val;
    }
    return sfc;
};


/***/ })

};
;
//# sourceMappingURL=723.app.js.map