"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5e72466e",
  "path": "/qt/view-tech.html",
  "title": "视图技术",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Spring Boot 支持的视图技术",
      "slug": "spring-boot-支持的视图技术",
      "children": []
    },
    {
      "level": 2,
      "title": "Spring Boot 访问静态资源",
      "slug": "spring-boot-访问静态资源",
      "children": [
        {
          "level": 3,
          "title": "访问静态资源",
          "slug": "访问静态资源",
          "children": []
        },
        {
          "level": 3,
          "title": "修改存放目录",
          "slug": "修改存放目录",
          "children": []
        },
        {
          "level": 3,
          "title": "修改访问路径",
          "slug": "修改访问路径",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Spring Boot 整合 Thymeleaf",
      "slug": "spring-boot-整合-thymeleaf",
      "children": [
        {
          "level": 3,
          "title": "Thymeleaf 介绍",
          "slug": "thymeleaf-介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "Thymeleaf 常用标签",
          "slug": "thymeleaf-常用标签",
          "children": []
        },
        {
          "level": 3,
          "title": "Thymeleaf 标准表达式",
          "slug": "thymeleaf-标准表达式",
          "children": []
        },
        {
          "level": 3,
          "title": "整合 Thymeleaf",
          "slug": "整合-thymeleaf",
          "children": []
        },
        {
          "level": 3,
          "title": "使用 Thymeleaf 完成数据的页面展示",
          "slug": "使用-thymeleaf-完成数据的页面展示",
          "children": []
        },
        {
          "level": 3,
          "title": "使用Thymeleaf配置国际化页面",
          "slug": "使用thymeleaf配置国际化页面",
          "children": []
        },
        {
          "level": 3,
          "title": "中文乱码解决",
          "slug": "中文乱码解决",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Spring Boot 整合 Freemarker",
      "slug": "spring-boot-整合-freemarker",
      "children": [
        {
          "level": 3,
          "title": "Freemarker 介绍",
          "slug": "freemarker-介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "集成 Freemarker 视图",
          "slug": "集成-freemarker-视图",
          "children": []
        },
        {
          "level": 3,
          "title": "Freemarker 常用语法",
          "slug": "freemarker-常用语法",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/view-tech.md",
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

/***/ 4199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ view_tech_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/view-tech.html.vue?vue&type=template&id=2cff189c


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="视图技术" tabindex="-1"><a class="header-anchor" href="#视图技术" aria-hidden="true">#</a> 视图技术</h1><h2 id="spring-boot-支持的视图技术" tabindex="-1"><a class="header-anchor" href="#spring-boot-支持的视图技术" aria-hidden="true">#</a> Spring Boot 支持的视图技术</h2><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvalai69dpj60pn07d0tb02.jpg" alt="image-20200627171028805"></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajpb0m6gj60hv0az3yz02.jpg" alt="image-20200627171048685" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajpfyqjsj60qr0gy0w202.jpg" alt="image-20200627171424712" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><h2 id="spring-boot-访问静态资源" tabindex="-1"><a class="header-anchor" href="#spring-boot-访问静态资源" aria-hidden="true">#</a> Spring Boot 访问静态资源</h2><h3 id="访问静态资源" tabindex="-1"><a class="header-anchor" href="#访问静态资源" aria-hidden="true">#</a> 访问静态资源</h3><p>由于SpringBoot的项目一般打成jar包，项目结构中没有 webapps 目录。</p><p>那么，静态资源要放到哪里呢？</p><blockquote><p>Spring Boot 源码告诉我们，将静态资源放到 <code>resources/static</code> (或者 <code>resources/public</code> 或者<code>resources/resources</code> 或者 <code>resources/META-INF/resources</code>) 中即可。</p></blockquote><h3 id="修改存放目录" tabindex="-1"><a class="header-anchor" href="#修改存放目录" aria-hidden="true">#</a> 修改存放目录</h3><blockquote><p>根据 <code>spring.web.resources.static-locations</code> 自定义静态资源存放位置。</p><p>可以存放在 <code>src/main/resources/static/</code></p><p>或者 <code>src/main/resources/public/ </code></p><p>或者 <code>src/main/resources/wukong/</code></p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token key atrule">static-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>/static/<span class="token punctuation">,</span>classpath<span class="token punctuation">:</span>/public/<span class="token punctuation">,</span>classpath<span class="token punctuation">:</span>/wukong/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>css</code> 和 <code>js</code> , 同理</p><p>http://localhost:8080/wukong/mycss.css</p><p>http://localhost:8080/wukong/myjs.js</p><p>也可以分别被引入到html页面中</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajq7jfyvj61ck0j1ado02.jpg" alt="image-20210212221525314"></p><h3 id="修改访问路径" tabindex="-1"><a class="header-anchor" href="#修改访问路径" aria-hidden="true">#</a> 修改访问路径</h3><blockquote><p><code>Spring Boot</code> 默认静态资源的路径匹配为/** 。</p><p>想要修改请设置 <code>spring.mvc.static-path-pattern</code> 。</p></blockquote><p>在application.yml中</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
    <span class="token key atrule">static-path-pattern</span><span class="token punctuation">:</span> /wk/<span class="token important">**</span>  <span class="token comment">#修改静态资源访问路径</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="spring-boot-整合-thymeleaf" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-thymeleaf" aria-hidden="true">#</a> Spring Boot 整合 Thymeleaf</h2><h3 id="thymeleaf-介绍" tabindex="-1"><a class="header-anchor" href="#thymeleaf-介绍" aria-hidden="true">#</a> Thymeleaf 介绍</h3><p><strong>Thymeleaf 官网</strong><br> https://www.thymeleaf.org/index.html</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajqraosgj60kl05daa802.jpg" alt="img.png"></p><p>Thymeleaf is a modern server-side Java template engine for both web and standalone environments.</p><p>Thymeleaf&#39;s main goal is to bring elegant natural templates to your development workflow — HTML that can be correctly displayed in browsers and also work as static prototypes, allowing for stronger collaboration in development teams.</p><p>With modules for Spring Framework, a host of integrations with your favourite tools, and the ability to plug in your own functionality, Thymeleaf is ideal for modern-day HTML5 JVM web development — although there is much more it can do.</p><p>Natural templates HTML templates written in Thymeleaf still look and work like HTML, letting the actual templates that are run in your application keep working as useful design artifacts.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{msgs.headers.name}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{msgs.headers.price}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Price<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prod: \${allProducts}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${prod.name}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Oranges<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${#numbers.formatDecimal(prod.price, 1, 2)}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0.99<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>官网教学文档</strong><br> https://www.thymeleaf.org/documentation.html</p><h3 id="thymeleaf-常用标签" tabindex="-1"><a class="header-anchor" href="#thymeleaf-常用标签" aria-hidden="true">#</a> Thymeleaf 常用标签</h3><h3 id="thymeleaf-标准表达式" tabindex="-1"><a class="header-anchor" href="#thymeleaf-标准表达式" aria-hidden="true">#</a> Thymeleaf 标准表达式</h3><h3 id="整合-thymeleaf" tabindex="-1"><a class="header-anchor" href="#整合-thymeleaf" aria-hidden="true">#</a> 整合 Thymeleaf</h3><p><strong>创建springboot项目</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajqv577dj61go0m3dju02.jpg" alt="image-20200627173929266" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--thymeleaf依赖--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-thymeleaf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--web项目依赖--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>**application.yml 中配置 Thymeleaf 模板缓存 **</p><blockquote><p>开发测试时，请关闭缓存。</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">thymeleaf</span><span class="token punctuation">:</span>
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> HTML
    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>/templates/
    <span class="token key atrule">suffix</span><span class="token punctuation">:</span> .html
    <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># 关闭缓存</span>
    <span class="token key atrule">encoding</span><span class="token punctuation">:</span> UTF<span class="token punctuation">-</span><span class="token number">8</span>

    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="使用-thymeleaf-完成数据的页面展示" tabindex="-1"><a class="header-anchor" href="#使用-thymeleaf-完成数据的页面展示" aria-hidden="true">#</a> 使用 Thymeleaf 完成数据的页面展示</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="使用thymeleaf配置国际化页面" tabindex="-1"><a class="header-anchor" href="#使用thymeleaf配置国际化页面" aria-hidden="true">#</a> 使用Thymeleaf配置国际化页面</h3><p><strong>前端资源目录结构</strong></p><blockquote><p>前端资源下载链接</p><p>https://share.weiyun.com/iVq52myH</p></blockquote><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajqza3s5j60fq0diaar02.jpg" alt="image-20210718111446990" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><p><strong>login.html</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.thymeleaf.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html; charset=UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1,shrink-to-fit=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>用户登录界面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/login/css/bootstrap.min.css}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/login/css/signin.css}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-signin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/login/img/login.png}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>72<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>72<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h3 mb-3 font-weight-normal<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{login.tip}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name"><span class="token namespace">th:</span>placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{login.username}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">autofocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control<span class="token punctuation">&quot;</span></span>
           <span class="token attr-name"><span class="token namespace">th:</span>placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{login.password}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox mb-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remember-me<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> [[#{login.rememberme}]]
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-lg btn-primary btn-block<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{login.button}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-5 mb-3 text-muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>© <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${currentYear}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2018<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${currentYear}+1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2019<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/toLoginPage(l=<span class="token punctuation">&#39;</span>zh_CN<span class="token punctuation">&#39;</span>)}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中文<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/toLoginPage(l=<span class="token punctuation">&#39;</span>en_US<span class="token punctuation">&#39;</span>)}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><strong>login.properties</strong></p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">login.tip</span><span class="token punctuation">=</span><span class="token attr-value">请登录</span>
<span class="token attr-name">login.username</span><span class="token punctuation">=</span><span class="token attr-value">用户名</span>
<span class="token attr-name">login.password</span><span class="token punctuation">=</span><span class="token attr-value">密码</span>
<span class="token attr-name">login.rememberme</span><span class="token punctuation">=</span><span class="token attr-value">记住我</span>
<span class="token attr-name">login.button</span><span class="token punctuation">=</span><span class="token attr-value">登录</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>login_zh_CN.properties</strong></p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">login.tip</span><span class="token punctuation">=</span><span class="token attr-value">请登录</span>
<span class="token attr-name">login.username</span><span class="token punctuation">=</span><span class="token attr-value">用户名</span>
<span class="token attr-name">login.password</span><span class="token punctuation">=</span><span class="token attr-value">密码</span>
<span class="token attr-name">login.rememberme</span><span class="token punctuation">=</span><span class="token attr-value">记住我</span>
<span class="token attr-name">login.button</span><span class="token punctuation">=</span><span class="token attr-value">登录</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>login_en_US.properties</strong></p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">login.tip</span><span class="token punctuation">=</span><span class="token attr-value">Please sign in</span>
<span class="token attr-name">login.username</span><span class="token punctuation">=</span><span class="token attr-value">Username</span>
<span class="token attr-name">login.password</span><span class="token punctuation">=</span><span class="token attr-value">Password</span>
<span class="token attr-name">login.rememberme</span><span class="token punctuation">=</span><span class="token attr-value">Remember me</span>
<span class="token attr-name">login.button</span><span class="token punctuation">=</span><span class="token attr-value">Login</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>在application.properties中配置国际化文件的基础名</strong></p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment">#配置国际化文件基础名</span>
<span class="token attr-name">spring.messages.basename</span><span class="token punctuation">=</span><span class="token attr-value">i18n.login</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>定制区域化解析器</strong></p><blockquote><p>在 com.wukongnotnull.config 下创建 MyLocaleResolver 类</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">LocaleResolver</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Locale</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyLocaleResolver</span> <span class="token keyword">implements</span> <span class="token class-name">LocaleResolver</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义区域解析方式</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Locale</span> <span class="token function">resolveLocale</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取页面手动切换传递的语言参数l</span>
        <span class="token class-name">String</span> l <span class="token operator">=</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;l&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取请求头自动传递的语言参数Accept-Language</span>
        <span class="token class-name">String</span> header <span class="token operator">=</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Locale</span> locale<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果手动切换参数不为空，就根据手动参数进行语言切换，否则默认根据请求头信息切换</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> split <span class="token operator">=</span> l<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            locale<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> splits <span class="token operator">=</span> header<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> split <span class="token operator">=</span> splits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            locale<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> locale<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span>
            <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将自定义的MyLocaleResolver类重新注册为一个类型LocaleResolver的Bean组件</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">LocaleResolver</span> <span class="token function">localeResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyLocaleResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p><strong>controller</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token comment">//author: 悟空非空也（B站/知乎/公众号）</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>ui<span class="token punctuation">.</span></span><span class="token class-name">Model</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Calendar</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/toLoginPage&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span>  <span class="token class-name">String</span> <span class="token function">toLoginPage</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> currentYear <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span>YEAR<span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;currentYear&quot;</span><span class="token punctuation">,</span>currentYear<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><strong>启动后，浏览器发送请求，进行测试</strong></p><h3 id="中文乱码解决" tabindex="-1"><a class="header-anchor" href="#中文乱码解决" aria-hidden="true">#</a> 中文乱码解决</h3><blockquote><p>application 文件中出现中文乱码，请如下设置</p><p>在创建新项目前，将idea进行字符编码设置，这样保证项目和配置文件中的所有中文打字都是使用utf-8编码</p></blockquote><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvajr3fzisj616z0u0gry02.jpg" alt="image-20200627194006830.png" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"25%"})
  }"><h2 id="spring-boot-整合-freemarker" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合-freemarker" aria-hidden="true">#</a> Spring Boot 整合 Freemarker</h2><h3 id="freemarker-介绍" tabindex="-1"><a class="header-anchor" href="#freemarker-介绍" aria-hidden="true">#</a> Freemarker 介绍</h3><blockquote><p>官方网站 https://freemarker.apache.org/</p><p>中文网站 http://freemarker.foofun.cn/toc.html</p></blockquote><h3 id="集成-freemarker-视图" tabindex="-1"><a class="header-anchor" href="#集成-freemarker-视图" aria-hidden="true">#</a> 集成 Freemarker 视图</h3><p><code>Spring Boot</code>内部支持 <code>Freemarker</code> 视图技术的集成，并提供了自动化配置类 <code>FreeMarkerAutoConﬁguration</code> ，借助自动化配置可以很方便的集成Freemarker 视图到SpringBoot环境中。</p><h4 id="pom-依赖" tabindex="-1"><a class="header-anchor" href="#pom-依赖" aria-hidden="true">#</a> <strong>pom 依赖</strong></h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="修改-freemarker-配置信息" tabindex="-1"><a class="header-anchor" href="#修改-freemarker-配置信息" aria-hidden="true">#</a> <strong>修改 Freemarker 配置信息</strong></h4><blockquote><p>Freemarker 默认视图路径为 resources/templates 目录(由自动化配置类FreemarkerProperties 类决定)， 该目录可以在application.yml 中进行修改。</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">freemarker</span><span class="token punctuation">:</span>
    <span class="token key atrule">charset</span><span class="token punctuation">:</span> utf<span class="token punctuation">-</span><span class="token number">8</span>
    <span class="token key atrule">content-type</span><span class="token punctuation">:</span> text/html
    <span class="token comment"># 默认是  resources/templates ,改成 resources/views</span>
    <span class="token key atrule">template-loader-path</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>/views/
    <span class="token key atrule">suffix</span><span class="token punctuation">:</span> .ftl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> <strong>controller</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">showHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="resources-views-hello-ftl" tabindex="-1"><a class="header-anchor" href="#resources-views-hello-ftl" aria-hidden="true">#</a> <strong>resources/views/hello.ftl</strong></h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
  hello ,悟空非空也，我是freemarker模板
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="freemarker-常用语法" tabindex="-1"><a class="header-anchor" href="#freemarker-常用语法" aria-hidden="true">#</a> Freemarker 常用语法</h3><p><code>FreeMarker</code> 三种语法：</p><ol><li><p>插值：<code>\${...} </code>，<code>Freemarker</code> 会将里面的变量替换为实际值。</p></li><li><p><code>FTL</code> 标签(<code>tags</code>)：结构上类似HTML的标签，都是用<code>&lt;&gt;</code>包裹起来，普通标签以<code>&lt;#</code>开头，用户自定义标签以<code>&lt;@</code>开头，如<code>&lt;#if true&gt;true thing&lt;/#if&gt;</code>，<code>&lt;@myWukong&gt;&lt;/@myWukong&gt;</code></p></li></ol><blockquote><p>标签（tags）和 指令（directive）的区分</p><p>举个例子：<code>&lt;#if&gt;&lt;/#if&gt;</code> 叫标签； 标签里面的 <code>if</code> 是指令。</p></blockquote><ol start="3"><li>注释(<code>Comments</code>)：<code>FTL</code> 中的注释是：<code>&lt;#-- 被注释掉的内容 --&gt;</code>，对于注释，<code>FTL</code>会自动跳过，所以不会显示在生成的文本中。</li></ol><blockquote><p>注意：除以上三种语法之外的所有内容，皆被 FreeMarker 视为普通文本，普通文本会被原样输出</p></blockquote><h4 id="if-指令" tabindex="-1"><a class="header-anchor" href="#if-指令" aria-hidden="true">#</a> if 指令</h4><p>if 可以根据条件跳过模板中的某块代码，当 <code>userName</code> 值为 &quot;悟空非空也&quot; 或<code>wukongnotnull</code>时，用特殊样式展示，相关模板代码如下：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>你好，
    &lt;#if userName == &quot;悟空非空也&quot;&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>\${userName}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
    &lt;#elseif userName == &quot;wukongnotnull&quot;&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\${userName}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#else</span><span class="token punctuation">&gt;</span></span>
        \${userName}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#if</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="list-指令" tabindex="-1"><a class="header-anchor" href="#list-指令" aria-hidden="true">#</a> list 指令</h4><p>list 用来遍历序列，其语法为：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">sequence</span> <span class="token attr-name">as</span> <span class="token attr-name">loopVariable</span><span class="token punctuation">&gt;</span></span>
    repeatThis
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>后端 <code> model</code> 里放入一个 <code>userList</code> 的集合</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;userList&quot;</span><span class="token punctuation">,</span>userService<span class="token punctuation">.</span><span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以直接使用下标访问集合中的某个元素：<code>\${userList[0].name}</code></p><p>也可以在模板中直接遍历展示：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">userList</span> <span class="token attr-name">as</span> <span class="token attr-name">user</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
        姓名：\${user.name}，年龄：\${user.age}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>渲染出 HTML：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    姓名：wukong，年龄：100
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    姓名：zhubajie，年龄：200
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    姓名：shaseng，年龄：300
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>注意：假设 userList 是空的，渲染出页面为 <code>&lt;ol&gt;&lt;/ol&gt;</code>，如何规避，使用 items 标签</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">userList</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#items</span> <span class="token attr-name">as</span> <span class="token attr-name">user</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                姓名：\${user.name}，年龄：\${user.age}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#items</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="include-指令" tabindex="-1"><a class="header-anchor" href="#include-指令" aria-hidden="true">#</a> include 指令</h4><p><code>include</code> 指令把一个模板的内容插入到另一个模板中。（官方建议使用 import 代替）。 若每个页面都添加 <code> footer</code>，可以编写一个公共的 <code>footer.ftl</code> 模板，每个页面直接引入即可。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#include</span> <span class="token attr-name">&quot;footer.ftlh&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="import-指令" tabindex="-1"><a class="header-anchor" href="#import-指令" aria-hidden="true">#</a> import 指令</h4><p><code>import</code> 将模板中定义的变量引入当前模板并使用。</p><p>它和 <code>include</code> 的主要区别就是 <code> import</code> 可以将变量封装到新的命名空间中。</p><p>例如：模板 <code> /libs/commons.ftl</code> 里面写了很多公共方法，想在其他模板里引用，只需要在其他模板的开头写上：</p><div class="language-clean ext-clean line-numbers-mode"><pre class="language-clean"><code>&lt;#import &quot;/libs/commons.ftl&quot; as com&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>后续想使用/libs/commons.ftl 中的 copyright 方法，可以直接使用：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>@com.copyright</span> <span class="token attr-name">date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3030-3032<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="assign-指令" tabindex="-1"><a class="header-anchor" href="#assign-指令" aria-hidden="true">#</a> assign 指令</h4><p>assign 可以用来创建新的变量并为其赋值，语法如下：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">name1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>value1</span> <span class="token attr-name">name2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>value2</span> <span class="token attr-name">...</span> <span class="token attr-name">nameN</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>valueN</span><span class="token punctuation">&gt;</span></span>
or
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">name1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>value1</span> <span class="token attr-name">name2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>value2</span> <span class="token attr-name">...</span> <span class="token attr-name">nameN</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>valueN</span> <span class="token attr-name">in</span> <span class="token attr-name">namespacehash</span><span class="token punctuation">&gt;</span></span>
or
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">name</span><span class="token punctuation">&gt;</span></span>
  capture this
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#assign</span><span class="token punctuation">&gt;</span></span>
or
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">name</span> <span class="token attr-name">in</span> <span class="token attr-name">namespacehash</span><span class="token punctuation">&gt;</span></span>
  capture this
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#assign</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>举例：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--创建字符串--</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">username</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>悟空非空也<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--使用插值语法显示字符串--</span><span class="token punctuation">&gt;</span></span>
myStr:\${myStr}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/view-tech.html.vue?vue&type=template&id=2cff189c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/view-tech.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const view_tech_html = (__exports__);

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
//# sourceMappingURL=920.app.js.map