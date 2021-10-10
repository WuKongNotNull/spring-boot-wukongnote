"use strict";
exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f0219060",
  "path": "/qt/aop-intergrate.html",
  "title": "整合 AOP",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Spring Boot 整合 AOP",
      "slug": "spring-boot-整合-aop",
      "children": [
        {
          "level": 3,
          "title": "AOP",
          "slug": "aop",
          "children": []
        },
        {
          "level": 3,
          "title": "使用步骤",
          "slug": "使用步骤",
          "children": []
        },
        {
          "level": 3,
          "title": "切换动态代理",
          "slug": "切换动态代理",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/aop-intergrate.md",
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

/***/ 530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ aop_intergrate_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/aop-intergrate.html.vue?vue&type=template&id=7b239eeb

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="整合-aop" tabindex="-1"><a class="header-anchor" href="#整合-aop" aria-hidden="true">#</a> 整合 AOP</h1><h2 id="spring-boot-整合-aop" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-aop" aria-hidden="true">#</a> Spring Boot 整合 AOP</h2><h3 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h3><p>在SpringBoot中默认是开启AOP功能的</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">aop</span><span class="token punctuation">:</span>
    <span class="token key atrule">auto</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3><h4 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-aop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解" aria-hidden="true">#</a> 自定义注解</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">InvokeLog</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="定义切面类" tabindex="-1"><a class="header-anchor" href="#定义切面类" aria-hidden="true">#</a> 定义切面类</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Aspect</span>  <span class="token comment">//标识这是一个切面类</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InvokeLogAspect</span> <span class="token punctuation">{</span>
  
  	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">InvokeLogAspect</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//指定哪些连接点为切点</span>
    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(com.wukongnotnull.aop.InvokeLog)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
		
  	<span class="token comment">// 在切点出添加什么增强，增强方式是什么？</span>
    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;cp()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">printInvokeLog</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">//目标方法调用前</span>
        <span class="token class-name">Object</span> proceed <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">MethodSignature</span> signature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> signature<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;enter this method---&gt;&quot;</span><span class="token operator">+</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            proceed <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//目标方法调用后</span>
            logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;leave this method---&gt;&quot;</span><span class="token operator">+</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwable<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> proceed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="增加自定义注解" tabindex="-1"><a class="header-anchor" href="#增加自定义注解" aria-hidden="true">#</a> 增加自定义注解</h4><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>@Service
public class UserServiceImpl implements UserServcie {

    @Autowired
    private UserMapper userMapper;

    @Override
    @InvokeLog  //添加自定义注解
    public List&lt;User&gt; findAll() {
        return userMapper.findAll();
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="切换动态代理" tabindex="-1"><a class="header-anchor" href="#切换动态代理" aria-hidden="true">#</a> 切换动态代理</h3><p>有的时候我们需要修改AOP的代理方式。</p><p>我们可以使用以下方式修改：</p><p>在配置文件中配置spring.aop.proxy-target-class为false这为使用jdk动态代理。该配置默认值为true，代表使用cglib动态代理。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableAspectJAutoProxy</span><span class="token punctuation">(</span>proxyTargetClass <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment">//修改代理方式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConfigurableApplicationContext</span> context <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">WebApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果想生效还需要在配置文件中做如下配置</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">aop</span><span class="token punctuation">:</span>
    <span class="token key atrule">proxy-target-class</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#切换动态代理的方式</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/aop-intergrate.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const aop_intergrate_html = (__exports__);

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
//# sourceMappingURL=955.app.js.map