"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 7391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2f23d8fe",
  "path": "/qt/task-management.html",
  "title": "任务管理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "无返回值异步任务调用",
      "slug": "无返回值异步任务调用",
      "children": []
    },
    {
      "level": 2,
      "title": "有返回值异步任务调用",
      "slug": "有返回值异步任务调用",
      "children": []
    },
    {
      "level": 2,
      "title": "定时任务介绍",
      "slug": "定时任务介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "定时任务实现",
      "slug": "定时任务实现",
      "children": []
    },
    {
      "level": 2,
      "title": "发送纯文本邮件",
      "slug": "发送纯文本邮件",
      "children": []
    },
    {
      "level": 2,
      "title": "发送带附件和图片的文件",
      "slug": "发送带附件和图片的文件",
      "children": []
    },
    {
      "level": 2,
      "title": "发送模板邮件",
      "slug": "发送模板邮件",
      "children": [
        {
          "level": 3,
          "title": "定时调度集成-Quartz",
          "slug": "定时调度集成-quartz",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/task-management.md",
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

/***/ 1273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ task_management_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/task-management.html.vue?vue&type=template&id=3aeea098


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="任务管理" tabindex="-1"><a class="header-anchor" href="#任务管理" aria-hidden="true">#</a> 任务管理</h1><h2 id="无返回值异步任务调用" tabindex="-1"><a class="header-anchor" href="#无返回值异步任务调用" aria-hidden="true">#</a> 无返回值异步任务调用</h2><blockquote><p>应用场景： 发送注册验证码</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>1-application.java</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableAsync</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableAsync</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SbTaskApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SbTaskApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>2-service</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyAsyncService</span>  <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Async</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAsyncServiceImpl</span> <span class="token keyword">implements</span>  <span class="token class-name">MyAsyncService</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;service---&gt;sendSms--&gt;发送短信进行中。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;service 共耗时&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>endTime<span class="token operator">-</span>startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>3-controller</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">MyAsyncService</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAsyncController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MyAsyncService</span> myAsyncService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/sendsms&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;controller--&gt;sendSms--&gt; 开始执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myAsyncService<span class="token punctuation">.</span><span class="token function">sendSms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;controller--&gt;sendSms--&gt; 执行结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;短信验证码已发送，请稍后查收&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>4-test</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakuyqhvzj60ja066gm202.jpg" alt="image-20210723161301811" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><h2 id="有返回值异步任务调用" tabindex="-1"><a class="header-anchor" href="#有返回值异步任务调用" aria-hidden="true">#</a> 有返回值异步任务调用</h2><blockquote><p>2个方法 processA() 和 processB() 同时执行，不是先后执行</p></blockquote><p><strong>1-sevice</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAsyncService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">processA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyAsyncService--&gt;start processA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyAsyncService--&gt;processA end ,total time cost &quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>endTime<span class="token operator">-</span>startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AsyncResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">processB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyAsyncService--&gt;start processB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">321</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyAsyncService--&gt;processB end ,total time cost &quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>endTime<span class="token operator">-</span>startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AsyncResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><strong>2-controller</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/statistics&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">statistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> processA <span class="token operator">=</span> myAsyncService<span class="token punctuation">.</span><span class="token function">processA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> processB <span class="token operator">=</span> myAsyncService<span class="token punctuation">.</span><span class="token function">processB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> totalCount<span class="token operator">=</span>processA<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>processB<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;totalCount is&quot;</span><span class="token operator">+</span>totalCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;AsyncController--&gt;statistics--&gt;total time is&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>endTime<span class="token operator">-</span>startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>3-test</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakv38l1zj60y60akq4i02.jpg" alt="image-20210723173609576" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><p><strong>所谓异步就是2个方法同时执行</strong></p><p>上述异步方法是有返回值的，这样主流程在执行异步方法时会有短暂阻塞，需要等待并获取异步方法的返回结果，而调用的两个异步方法会作为两个子线程并行执行，直到异步方法执行完成并返回结果，这样主流程会在最后一个异步方法返回结果后跳出阻塞状态。</p><h2 id="定时任务介绍" tabindex="-1"><a class="header-anchor" href="#定时任务介绍" aria-hidden="true">#</a> 定时任务介绍</h2><p><strong>@Scheduled注解</strong></p><p>https://www.jianshu.com/p/1defb0f22ed1</p><h2 id="定时任务实现" tabindex="-1"><a class="header-anchor" href="#定时任务实现" aria-hidden="true">#</a> 定时任务实现</h2><p><strong>新建定时业务处理类 ScheduledTaskService</strong></p><blockquote><p>该类中编写定时任务处理方法使用 @Scheduled 注解声明了三个定时任务方法，</p><p>定制的执行规则基本相同，都是每隔1分钟重复执行一次定时任务</p><p>在使用 fixedDelay 属性的方法 scheduledTaskAfterSleep() 中，使用 Thread.sleep(10000 )模拟该定时任务处理耗时为10秒钟。</p></blockquote><p><strong>启动类</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableScheduling</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SbTaskApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SbTaskApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>service</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledTaskService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> count1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> count2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> count3 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


    <span class="token comment">//每隔1分钟，执行一次</span>
    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>fixedRate <span class="token operator">=</span> <span class="token number">60000</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">scheduledTaskImmediately</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;fixedRate第%s次执行，当前时间为：%s&quot;</span><span class="token punctuation">,</span>
                count1<span class="token operator">++</span><span class="token punctuation">,</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//每隔1分10秒（1分钟定时+业务处理时间10秒），执行一次</span>
    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>fixedDelay <span class="token operator">=</span> <span class="token number">60000</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">scheduledTaskAfterSleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;fixedDelay第%s次执行，当前时间为：%s&quot;</span><span class="token punctuation">,</span>
                count2<span class="token operator">++</span><span class="token punctuation">,</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//模拟业务处理时间</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//整秒输出</span>
    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">&quot;0 * * * * *&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">scheduledTaskCron</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;cron第%s次执行，当前时间为：%s&quot;</span><span class="token punctuation">,</span>
                count3<span class="token operator">++</span><span class="token punctuation">,</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>启动启动类测试</strong></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvakx2oheaj61r60jrwo402.jpg" alt="image-20200724172612847"></p><h2 id="发送纯文本邮件" tabindex="-1"><a class="header-anchor" href="#发送纯文本邮件" aria-hidden="true">#</a> 发送纯文本邮件</h2><p><strong>pom.xml</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>application.yml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>spring.mail.host=smtp.qq.com
spring.mail.port=587

spring.mail.username=1390128154@qq.com
spring.mail.password=wvthphmybrqmhidf
spring.mail.default<span class="token punctuation">-</span>encoding=UTF<span class="token punctuation">-</span><span class="token number">8</span>

spring.mail.properties.mail.smtp.connectiontimeout=5000
spring.mail.properties.mail.smtp.timeout=3000
spring.mail.properties.mail.smtp.writetimeout=5000
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>service</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileSystemResource</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MailException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">SimpleMailMessage</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">JavaMailSenderImpl</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">MimeMessageHelper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MessagingException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>internet<span class="token punctuation">.</span></span><span class="token class-name">MimeMessage</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendMailService</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Autowired</span>
        <span class="token keyword">private</span> <span class="token class-name">JavaMailSenderImpl</span> mailSender<span class="token punctuation">;</span>

        <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.mail.username}&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> from<span class="token punctuation">;</span>


        <span class="token doc-comment comment">/**
         * 发送纯文本邮件
         * <span class="token keyword">@param</span> <span class="token parameter">to</span>       收件人地址
         * <span class="token keyword">@param</span> <span class="token parameter">subject</span>  邮件标题
         * <span class="token keyword">@param</span> <span class="token parameter">text</span>     邮件内容
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSimpleEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token keyword">to</span><span class="token punctuation">,</span><span class="token class-name">String</span> subject<span class="token punctuation">,</span><span class="token class-name">String</span> text<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 定制纯文本邮件信息SimpleMailMessage</span>
            <span class="token class-name">SimpleMailMessage</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleMailMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 发送邮件</span>
                mailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;纯文本邮件发送成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MailException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;纯文本邮件发送失败 &quot;</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p><strong>test</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>thymeleaf<span class="token punctuation">.</span></span><span class="token class-name">TemplateEngine</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>thymeleaf<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">Context</span><span class="token punctuation">;</span>

<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SendMailServiceTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
   <span class="token keyword">private</span> <span class="token class-name">SendMailService</span> sendMailService <span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">TemplateEngine</span> templateEngine<span class="token punctuation">;</span>

    <span class="token class-name">FastStringWriter</span> fastStringWriter<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">sendSimpleEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sendMailService<span class="token punctuation">.</span><span class="token function">sendSimpleEmail</span><span class="token punctuation">(</span><span class="token string">&quot;1390128154@qq.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;标题123&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;内容123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="发送带附件和图片的文件" tabindex="-1"><a class="header-anchor" href="#发送带附件和图片的文件" aria-hidden="true">#</a> 发送带附件和图片的文件</h2><p><strong>service</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileSystemResource</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MailException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">SimpleMailMessage</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">JavaMailSenderImpl</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">MimeMessageHelper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MessagingException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>internet<span class="token punctuation">.</span></span><span class="token class-name">MimeMessage</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendMailService</span> <span class="token punctuation">{</span>



        <span class="token annotation punctuation">@Autowired</span>
        <span class="token keyword">private</span> <span class="token class-name">JavaMailSenderImpl</span> mailSender<span class="token punctuation">;</span>

        <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.mail.username}&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> from<span class="token punctuation">;</span>



        <span class="token doc-comment comment">/**
         * 发送复杂邮件（包括静态资源和附件）
         *
         * <span class="token keyword">@param</span> <span class="token parameter">to</span>           收件人地址
         * <span class="token keyword">@param</span> <span class="token parameter">subject</span>      邮件标题
         * <span class="token keyword">@param</span> <span class="token parameter">text</span>         邮件内容
         * <span class="token keyword">@param</span> <span class="token parameter">filePath</span>     附件地址
         * <span class="token keyword">@param</span> <span class="token parameter">rscId</span>        静态资源唯一标识
         * <span class="token keyword">@param</span> <span class="token parameter">rscPath</span>      静态资源地址
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendComplexEmail</span><span class="token punctuation">(</span>
                <span class="token class-name">String</span> <span class="token keyword">to</span><span class="token punctuation">,</span>
                <span class="token class-name">String</span> subject<span class="token punctuation">,</span>
                <span class="token class-name">String</span> text<span class="token punctuation">,</span>
                <span class="token class-name">String</span> filePath<span class="token punctuation">,</span>
                <span class="token class-name">String</span> rscId<span class="token punctuation">,</span>
                <span class="token class-name">String</span> rscPath<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 定制复杂邮件信息 MimeMessage</span>
            <span class="token class-name">MimeMessage</span> message <span class="token operator">=</span> mailSender<span class="token punctuation">.</span><span class="token function">createMimeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 使用 MimeMessageHelper 帮助类，并设置 multipart 多部件使用为 true</span>
                <span class="token class-name">MimeMessageHelper</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MimeMessageHelper</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 设置邮件静态资源</span>
                <span class="token class-name">FileSystemResource</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemResource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>rscPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">addInline</span><span class="token punctuation">(</span>rscId<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 设置邮件附件</span>
                <span class="token class-name">FileSystemResource</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemResource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> fileName <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>filePath<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token class-name">File</span><span class="token punctuation">.</span>separator<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">addAttachment</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 发送邮件</span>
                mailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;复杂邮件发送成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MessagingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;复杂邮件发送失败 &quot;</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><p><strong>test</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>thymeleaf<span class="token punctuation">.</span></span><span class="token class-name">TemplateEngine</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>thymeleaf<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">Context</span><span class="token punctuation">;</span>

<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SendMailServiceTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
   <span class="token keyword">private</span> <span class="token class-name">SendMailService</span> sendMailService <span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">TemplateEngine</span> templateEngine<span class="token punctuation">;</span>

    <span class="token class-name">FastStringWriter</span> fastStringWriter<span class="token punctuation">;</span>



    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">sendComplexEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> rscId <span class="token operator">=</span> <span class="token string">&quot;img_2616&quot;</span><span class="token punctuation">;</span>
        text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;div&gt;这是邮件正文&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;img src=cid:&quot;</span><span class="token operator">+</span>rscId<span class="token operator">+</span><span class="token string">&quot;/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/body&gt;&lt;/html&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sendMailService<span class="token punctuation">.</span><span class="token function">sendComplexEmail</span><span class="token punctuation">(</span><span class="token string">&quot;1390128154@qq.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;带附件的邮件标题&quot;</span><span class="token punctuation">,</span>
                text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&quot;/Users/mac/Downloads/信1901班级人员名单.xlsx&quot;</span><span class="token punctuation">,</span>
                rscId<span class="token punctuation">,</span>
                <span class="token string">&quot;/Users/mac/Downloads/IMG_2616.JPG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="发送模板邮件" tabindex="-1"><a class="header-anchor" href="#发送模板邮件" aria-hidden="true">#</a> 发送模板邮件</h2><p><strong>pom.xml</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-thymeleaf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>emailTemplate.html</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.thymeleaf.org<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${username}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>用户您好，你的验证码是 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../static/img/avcon.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>加载失败<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>service</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileSystemResource</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MailException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">SimpleMailMessage</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">JavaMailSenderImpl</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">MimeMessageHelper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MessagingException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>internet<span class="token punctuation">.</span></span><span class="token class-name">MimeMessage</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendMailService</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Autowired</span>
        <span class="token keyword">private</span> <span class="token class-name">JavaMailSenderImpl</span> mailSender<span class="token punctuation">;</span>

        <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.mail.username}&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> from<span class="token punctuation">;</span>


        <span class="token doc-comment comment">/**
         * 发送模板邮件
         * <span class="token keyword">@param</span> <span class="token parameter">to</span>       收件人地址
         * <span class="token keyword">@param</span> <span class="token parameter">subject</span>  邮件标题
         * <span class="token keyword">@param</span> <span class="token parameter">content</span>  邮件内容
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendTemplateEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token keyword">to</span><span class="token punctuation">,</span> <span class="token class-name">String</span> subject<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">MimeMessage</span> message <span class="token operator">=</span> mailSender<span class="token punctuation">.</span><span class="token function">createMimeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 使用MimeMessageHelper帮助类，并设置multipart多部件使用为true</span>
                <span class="token class-name">MimeMessageHelper</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MimeMessageHelper</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>
                helper<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 发送邮件</span>
                mailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;模板邮件发送成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MessagingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;模板邮件发送失败 &quot;</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p><strong>test</strong></p><blockquote><p>import org.thymeleaf.TemplateEngine; import org.thymeleaf.context.Context;</p><p>两个类无法识别 ，后续解决</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>thymeleaf<span class="token punctuation">.</span></span><span class="token class-name">TemplateEngine</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>thymeleaf<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">Context</span><span class="token punctuation">;</span>

<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SendMailServiceTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
   <span class="token keyword">private</span> <span class="token class-name">SendMailService</span> sendMailService <span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">TemplateEngine</span> templateEngine<span class="token punctuation">;</span>



    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">sendTemplateEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> <span class="token keyword">to</span><span class="token operator">=</span><span class="token string">&quot;1390128154@qq.com&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> subject<span class="token operator">=</span><span class="token string">&quot;【模板邮件】标题&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用模板邮件定制邮件正文内容</span>
        <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">setVariable</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;悟空非空也&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">setVariable</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;456123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用TemplateEngine设置要处理的模板页面</span>
        <span class="token class-name">String</span> emailContent <span class="token operator">=</span> templateEngine<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token string">&quot;emailTemplate&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 发送模板邮件</span>
        sendMailService<span class="token punctuation">.</span><span class="token function">sendTemplateEmail</span><span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">,</span>subject<span class="token punctuation">,</span>emailContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="定时调度集成-quartz" tabindex="-1"><a class="header-anchor" href="#定时调度集成-quartz" aria-hidden="true">#</a> 定时调度集成-Quartz</h3><p>在日常项目运行中，我们总会有需求在某一时间段周期性的执行某个动作。比如每天在某个时间段导出报表，或者每 隔多久统计一次现在在线的用户量等。</p><p><strong>Scheduled 比较 quartz</strong></p><p>在Spring Boot中有Java自带的java.util.Timer类，SpringBoot自带的Scheduled来实现,也有强大的调度器Quartz。 Scheduled 在Spring3.X 引入，默认SpringBoot自带该功能,使用起来也很简单，在启动类级别添加 @EnableScheduling注解即可引入定时任务环境。</p><p>但遗憾的是Scheduled 默认不支持分布式环境，这里主要讲解 Quartz 时钟调度框架与Spring Boot 集成。</p><p><strong>pom</strong></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-quartz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>job类</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">MyJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> jobExecutionContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>
        <span class="token class-name">TriggerKey</span> triggerKey <span class="token operator">=</span>jobExecutionContext<span class="token punctuation">.</span><span class="token function">getTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> userById <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;触发器:&quot;</span><span class="token operator">+</span>triggerKey<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;--&gt;所属组:&quot;</span><span class="token operator">+</span>triggerKey<span class="token punctuation">.</span><span class="token function">getGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;-&gt;&quot;</span><span class="token operator">+</span>userById<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;--&gt;&quot;</span><span class="token operator">+</span><span class="token string">&quot;hello Spring Boot Quartz...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;触发器:&quot;</span><span class="token operator">+</span>triggerKey<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;--&gt;所属组:&quot;</span><span class="token operator">+</span>triggerKey<span class="token punctuation">.</span><span class="token function">getGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;-&gt;&quot;</span><span class="token operator">+</span>sdf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;--&gt;&quot;</span><span class="token operator">+</span><span class="token string">&quot;hello Spring Boot Quartz...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>配置类</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>wukong<span class="token punctuation">.</span>job<span class="token punctuation">.</span></span><span class="token class-name">MyJob</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>quartz<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuartzConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JobDetail</span> <span class="token function">myJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">MyJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">storeDurably</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Trigger</span> <span class="token function">trigger1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">SimpleScheduleBuilder</span> simpleScheduleBuilder <span class="token operator">=</span> <span class="token class-name">SimpleScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">simpleSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token comment">//每一秒执行一次              </span>
        <span class="token punctuation">.</span><span class="token function">withIntervalInSeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment">//永久重复，一直执行下去              </span>
        <span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>simpleScheduleBuilder<span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">forJob</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">myJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     <span class="token comment">// 每两秒触发一次任务    </span>
     <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Trigger</span> <span class="token function">trigger2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">CronScheduleBuilder</span> cronScheduleBuilder<span class="token operator">=</span><span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0/5 * * * * ? *&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>cronScheduleBuilder<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">forJob</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">myJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p><strong>启动项目，定时生成日志</strong></p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/task-management.html.vue?vue&type=template&id=3aeea098

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/task-management.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const task_management_html = (__exports__);

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
//# sourceMappingURL=99.app.js.map