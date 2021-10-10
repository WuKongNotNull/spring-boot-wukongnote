"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 9818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e76481dc",
  "path": "/qt/config-annotation.html",
  "title": "核心配置和注解",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "application 官方配置文件",
      "slug": "application-官方配置文件",
      "children": [
        {
          "level": 3,
          "title": "application.properties配置文件",
          "slug": "application-properties配置文件",
          "children": []
        },
        {
          "level": 3,
          "title": "application.yaml配置文件",
          "slug": "application-yaml配置文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "属性注入",
      "slug": "属性注入",
      "children": [
        {
          "level": 3,
          "title": "@ConfigurationProperties注入属性",
          "slug": "configurationproperties注入属性",
          "children": []
        },
        {
          "level": 3,
          "title": "@Value 注入属性",
          "slug": "value-注入属性",
          "children": []
        },
        {
          "level": 3,
          "title": "两种注解对比分析",
          "slug": "两种注解对比分析",
          "children": []
        },
        {
          "level": 3,
          "title": "@ConfigurationProperties注解支持JSR303数据校验",
          "slug": "configurationproperties注解支持jsr303数据校验",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "使用 @PropertySource 加载自定义配置文件",
      "slug": "使用-propertysource-加载自定义配置文件",
      "children": [
        {
          "level": 3,
          "title": "@PropertySource 源码",
          "slug": "propertysource-源码",
          "children": []
        },
        {
          "level": 3,
          "title": "案例",
          "slug": "案例",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "使用@ImportResource加载自定义的 spring xml 配置文件",
      "slug": "使用-importresource加载自定义的-spring-xml-配置文件",
      "children": [
        {
          "level": 3,
          "title": "@ImportResource 源码",
          "slug": "importresource-源码",
          "children": []
        },
        {
          "level": 3,
          "title": "案例",
          "slug": "案例-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "使用 @Configuration 编写自定义配置类",
      "slug": "使用-configuration-编写自定义配置类",
      "children": [
        {
          "level": 3,
          "title": "@Configuration 源码",
          "slug": "configuration-源码",
          "children": []
        },
        {
          "level": 3,
          "title": "案例",
          "slug": "案例-2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "profile 文件配置",
      "slug": "profile-文件配置",
      "children": [
        {
          "level": 3,
          "title": "方法一",
          "slug": "方法一",
          "children": []
        },
        {
          "level": 3,
          "title": "方法二",
          "slug": "方法二",
          "children": []
        },
        {
          "level": 3,
          "title": "案例 1 不同环境下使用不同端口",
          "slug": "案例-1-不同环境下使用不同端口",
          "children": []
        },
        {
          "level": 3,
          "title": "案例 2 不同环境下使用不同数据库",
          "slug": "案例-2-不同环境下使用不同数据库",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "yml 高级玩法",
      "slug": "yml-高级玩法",
      "children": [
        {
          "level": 3,
          "title": "参数间引用",
          "slug": "参数间引用",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/config-annotation.md",
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

/***/ 9795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ config_annotation_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/config-annotation.html.vue?vue&type=template&id=63a19ec4


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="核心配置和注解" tabindex="-1"><a class="header-anchor" href="#核心配置和注解" aria-hidden="true">#</a> 核心配置和注解</h1><h2 id="application-官方配置文件" tabindex="-1"><a class="header-anchor" href="#application-官方配置文件" aria-hidden="true">#</a> application 官方配置文件</h2><h3 id="application-properties配置文件" tabindex="-1"><a class="header-anchor" href="#application-properties配置文件" aria-hidden="true">#</a> application.properties配置文件</h3><p><strong>配置端口号</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#配置端口号
server.port=8090
#配置虚拟路径
server.servlet.context-path=/project-name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="application-yaml配置文件" tabindex="-1"><a class="header-anchor" href="#application-yaml配置文件" aria-hidden="true">#</a> application.yaml配置文件</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#端口号 虚拟路径
server:
  port: 8091
  servlet:
    context-path: /project-name2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>注意</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5wwk43sij610f0c0din02.jpg" alt="1593077278907" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><h2 id="属性注入" tabindex="-1"><a class="header-anchor" href="#属性注入" aria-hidden="true">#</a> 属性注入</h2><h3 id="configurationproperties注入属性" tabindex="-1"><a class="header-anchor" href="#configurationproperties注入属性" aria-hidden="true">#</a> @ConfigurationProperties注入属性</h3><p>第 1 种方法 properties</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment">#给类属性赋值</span>
<span class="token attr-name">person.id</span><span class="token punctuation">=</span><span class="token attr-value">1</span>
<span class="token attr-name">person.name</span><span class="token punctuation">=</span><span class="token attr-value">wukongnotnull</span>
<span class="token attr-name">person.family</span><span class="token punctuation">=</span><span class="token attr-value">baba,mama,gege,jiejie</span>
<span class="token attr-name">person.hobbies</span><span class="token punctuation">=</span><span class="token attr-value">dance,game,110</span>
<span class="token attr-name">person.map.level</span><span class="token punctuation">=</span><span class="token attr-value">3</span>
<span class="token attr-name">person.map.salary</span><span class="token punctuation">=</span><span class="token attr-value">3000</span>
<span class="token attr-name">person.pet.petName</span><span class="token punctuation">=</span><span class="token attr-value">wangcai</span>
<span class="token attr-name">person.pet.petAge</span><span class="token punctuation">=</span><span class="token attr-value">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>第二种方式yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#给类属性赋值</span>
<span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> wukongnotnull
  <span class="token key atrule">family</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>baba<span class="token punctuation">,</span>mama<span class="token punctuation">,</span>gege<span class="token punctuation">,</span>jiejie<span class="token punctuation">]</span>
  <span class="token key atrule">hobbies</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dance<span class="token punctuation">,</span>game<span class="token punctuation">,</span>sing<span class="token punctuation">]</span>
  <span class="token key atrule">map</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">level</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token key atrule">salary</span><span class="token punctuation">:</span> <span class="token number">3000</span><span class="token punctuation">}</span>
  <span class="token key atrule">pet</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">petName</span><span class="token punctuation">:</span> wangcai<span class="token punctuation">,</span> <span class="token key atrule">petAge</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>编写实体类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>
  <span class="token comment">/* 
  author: 悟空非空也（B站/知乎/公众号） 
  */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span>  petName<span class="token punctuation">;</span>
    <span class="token keyword">private</span>  <span class="token keyword">int</span>  petAge<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> petName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPetName</span><span class="token punctuation">(</span><span class="token class-name">String</span> petName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>petName <span class="token operator">=</span> petName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> petAge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPetAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> petAge<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>petAge <span class="token operator">=</span> petAge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Pet{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;petName=&#39;&quot;</span> <span class="token operator">+</span> petName <span class="token operator">+</span> <span class="token string">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, petAge=&quot;</span> <span class="token operator">+</span> petAge <span class="token operator">+</span>
                <span class="token string">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>使用@Component,@ConfigurationProperties注解</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>
  <span class="token comment">/* 
  author: 悟空非空也（B站/知乎/公众号） 
  */</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span>  <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> family<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span> hobbies<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span> map<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Pet</span> pet<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token function">getHobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> hobbies<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHobbies</span><span class="token punctuation">(</span><span class="token class-name">List</span> hobbies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hobbies <span class="token operator">=</span> hobbies<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getFamily</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> family<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFamily</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> family<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>family <span class="token operator">=</span> family<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Map</span> <span class="token function">getMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Pet</span> <span class="token function">getPet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPet</span><span class="token punctuation">(</span><span class="token class-name">Pet</span> pet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pet <span class="token operator">=</span> pet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span>
                <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, family=&quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>family<span class="token punctuation">)</span> <span class="token operator">+</span>
                <span class="token string">&quot;, hobbies=&quot;</span> <span class="token operator">+</span> hobbies <span class="token operator">+</span>
                <span class="token string">&quot;, map=&quot;</span> <span class="token operator">+</span> map <span class="token operator">+</span>
                <span class="token string">&quot;, pet=&quot;</span> <span class="token operator">+</span> pet <span class="token operator">+</span>
                <span class="token string">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><p>测试类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">MySpringbootApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span>  <span class="token class-name">Person</span> person<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">personTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="value-注入属性" tabindex="-1"><a class="header-anchor" href="#value-注入属性" aria-hidden="true">#</a> @Value 注入属性</h3><p>@Value直接注入属性</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> wukongnotnull
  <span class="token key atrule">family</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>baba<span class="token punctuation">,</span>mama<span class="token punctuation">,</span>gege<span class="token punctuation">,</span>jiejie<span class="token punctuation">]</span>
  <span class="token key atrule">hobbies</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dance<span class="token punctuation">,</span>game<span class="token punctuation">,</span>sing<span class="token punctuation">]</span>
  <span class="token key atrule">map</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">level</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token key atrule">salary</span><span class="token punctuation">:</span> <span class="token number">3000</span><span class="token punctuation">}</span>
  <span class="token key atrule">pet</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">petName</span><span class="token punctuation">:</span> wangcai<span class="token punctuation">,</span> <span class="token key atrule">petAge</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>


<span class="token key atrule">flag</span><span class="token punctuation">:</span> wukong
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>测试</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">MySpringbootApplicationTests</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;\${flag}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> flag<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${person.id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span>  <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${person.name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> name<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${person.family[0]}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> familyOne<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${person.family}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span> family<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${person.hobbies[0]}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> hobbiesOne<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;\${person.hobbies}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hobbies<span class="token punctuation">;</span>

    <span class="token comment">// 对于自定义对象或者Map类型的数据，需要直接取属性值</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${person.map.level}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> level<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;\${person.pet.petName}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span>  petName<span class="token punctuation">;</span>

    <span class="token comment">//报错：llegalArgumentException: Could not resolve placeholder &#39;person.pet&#39; in value &quot;\${person.pet}&quot;</span>
<span class="token comment">/*    @Value(value = &quot;\${person.pet}&quot;)
    private Pet pet;*/</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;flag = &quot;</span> <span class="token operator">+</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id = &quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name = &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;familyOne = &quot;</span> <span class="token operator">+</span> familyOne<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;family = &quot;</span> <span class="token operator">+</span> family<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hobbiesOne = &quot;</span> <span class="token operator">+</span> hobbiesOne<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hobbies = &quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>hobbies<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;level = &quot;</span> <span class="token operator">+</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;petName = &quot;</span> <span class="token operator">+</span> petName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*  System.out.println(&quot;pet = &quot; + pet);*/</span>
    <span class="token punctuation">}</span>
  

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="两种注解对比分析" tabindex="-1"><a class="header-anchor" href="#两种注解对比分析" aria-hidden="true">#</a> 两种注解对比分析</h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5wy2u2jwj60zo0klad402.jpg" alt="1593089590122"></p><h3 id="configurationproperties注解支持jsr303数据校验" tabindex="-1"><a class="header-anchor" href="#configurationproperties注解支持jsr303数据校验" aria-hidden="true">#</a> @ConfigurationProperties注解支持JSR303数据校验</h3><p>application.properties</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment">#@ConfigurationProperties注解支持JSR303数据校验</span>
<span class="token attr-name">user.email</span><span class="token punctuation">=</span><span class="token attr-value">1390128154@qq.com</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>pom</p><div class="language-pom ext-pom line-numbers-mode"><pre class="language-pom"><code>       &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>实体类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnullg<span class="token punctuation">.</span>myspringboot<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Validated</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>constraints<span class="token punctuation">.</span></span><span class="token class-name">Email</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Validated</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Email</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> email<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>test</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">emailValidation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user = &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="自定义配置文件" tabindex="-1"><a class="header-anchor" href="#自定义配置文件" aria-hidden="true">#</a> 自定义配置文件</h1><h2 id="使用-propertysource-加载自定义配置文件" tabindex="-1"><a class="header-anchor" href="#使用-propertysource-加载自定义配置文件" aria-hidden="true">#</a> 使用 @PropertySource 加载自定义配置文件</h2><h3 id="propertysource-源码" tabindex="-1"><a class="header-anchor" href="#propertysource-源码" aria-hidden="true">#</a> @PropertySource 源码</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">PropertySource</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * Indicate the resource location(s) of the properties file to be loaded.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Both traditional and XML-based properties file formats are supported
	 * <span class="token entity named-entity" title="—">&amp;mdash;</span> for example, <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token string">&quot;classpath:/com/myco/app.properties&quot;</span></span></span><span class="token punctuation">}</span>
	 * or <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token string">&quot;file:/path/to/file.xml&quot;</span></span></span><span class="token punctuation">}</span>.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Resource location wildcards (e.g. *<span class="token entity" title="*">&amp;#42;</span>/*.properties) are not permitted;
	 * each location must evaluate to exactly one <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token punctuation">.</span>properties</span></span><span class="token punctuation">}</span> or <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token punctuation">.</span>xml</span></span><span class="token punctuation">}</span>
	 * resource.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\$<span class="token punctuation">{</span>...<span class="token punctuation">}</span> placeholders will be resolved against any/all property sources already
	 * registered with the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">Environment</span></span></span><span class="token punctuation">}</span>. See <span class="token punctuation">{</span><span class="token keyword">@linkplain</span> <span class="token reference"><span class="token class-name">PropertySource</span></span> above<span class="token punctuation">}</span>
	 * for examples.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Each location will be added to the enclosing <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">Environment</span></span></span><span class="token punctuation">}</span> as its own
	 * property source, and in the order declared.
	 */</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>自定义配置文件 test.properties</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>
<span class="token comment">#自定义配置文件</span>
<span class="token attr-name">test.id</span><span class="token punctuation">=</span><span class="token attr-value">1</span>
<span class="token attr-name">test.name</span><span class="token punctuation">=</span><span class="token attr-value">wukongnotnull</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>实体类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>myspringboot<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">EnableConfigurationProperties</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertySource</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * @Author: 悟空非空也（公众号/B站/知乎）
     */</span>
<span class="token comment">//注意：可以使用@Component代替</span>
<span class="token comment">//@Configuration+@EnableConfigurationProperties(MyProperties.class)</span>

<span class="token annotation punctuation">@Configuration</span><span class="token comment">//指定当前类为配置类</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">MyProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//开启配置文件的属性注入功能</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;classpath:test.properties&quot;</span><span class="token punctuation">)</span><span class="token comment">//指定自定义配置文件的来源</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyProperties</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span>  <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span>  <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;MyProperties{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span>
                <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>测试</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">MySpringbootApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MyProperties</span> myProperties<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myPropertiesTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;myProperties===&gt;&quot;</span><span class="token operator">+</span>myProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="使用-importresource加载自定义的-spring-xml-配置文件" tabindex="-1"><a class="header-anchor" href="#使用-importresource加载自定义的-spring-xml-配置文件" aria-hidden="true">#</a> 使用@ImportResource加载自定义的 spring xml 配置文件</h2><h3 id="importresource-源码" tabindex="-1"><a class="header-anchor" href="#importresource-源码" aria-hidden="true">#</a> @ImportResource 源码</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ImportResource</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * Resource locations from which to import.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Supports resource-loading prefixes such as <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">classpath<span class="token operator">:</span></span></span><span class="token punctuation">}</span>,
	 * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">file<span class="token operator">:</span></span></span><span class="token punctuation">}</span>, etc.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Consult the Javadoc for <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">reader</span></span><span class="token punctuation">}</span> for details on how resources
	 * will be processed.
	 * <span class="token keyword">@since</span> 4.2
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">value</span></span>
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token punctuation">#</span><span class="token field">reader</span></span>
	 */</span>
	<span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">locations</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3><p>创建 spring xml 配置文件<br> myBeans.xml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myPet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.wukongnotnull.domain.Pet<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>启动类上添加 @ImportResource 注解</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ImportResource</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@ImportResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;classpath:myBeans.xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InitializrProjectApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">InitializrProjectApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>test</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">InitializrProjectApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">beansTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Pet</span> myPet <span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">Pet</span><span class="token punctuation">)</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;myPet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;myPet-----&gt;&quot;</span> <span class="token operator">+</span> myPet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="使用-configuration-编写自定义配置类" tabindex="-1"><a class="header-anchor" href="#使用-configuration-编写自定义配置类" aria-hidden="true">#</a> 使用 @Configuration 编写自定义配置类</h2><h3 id="configuration-源码" tabindex="-1"><a class="header-anchor" href="#configuration-源码" aria-hidden="true">#</a> @Configuration 源码</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * Explicitly specify the name of the Spring bean definition associated with the
	 * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Configuration</span></span></span><span class="token punctuation">}</span> class. If left unspecified (the common case), a bean
	 * name will be automatically generated.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>The custom name applies only if the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Configuration</span></span></span><span class="token punctuation">}</span> class is picked
	 * up via component scanning or supplied directly to an
	 * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">AnnotationConfigApplicationContext</span></span><span class="token punctuation">}</span>. If the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Configuration</span></span></span><span class="token punctuation">}</span> class
	 * is registered as a traditional XML bean definition, the name/id of the bean
	 * element will take precedence.
	 * <span class="token keyword">@return</span> the explicit component name, if any (or empty String otherwise)
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">AnnotationBeanNameGenerator</span></span>
	 */</span>
	<span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Specify whether <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Bean</span></span></span><span class="token punctuation">}</span> methods should get proxied in order to enforce
	 * bean lifecycle behavior, e.g. to return shared singleton bean instances even
	 * in case of direct <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Bean</span></span></span><span class="token punctuation">}</span> method calls in user code. This feature
	 * requires method interception, implemented through a runtime-generated CGLIB
	 * subclass which comes with limitations such as the configuration class and
	 * its methods not being allowed to declare <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">final</span></span></span><span class="token punctuation">}</span>.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>The default is <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span>, allowing for &#39;inter-bean references&#39; via direct
	 * method calls within the configuration class as well as for external calls to
	 * this configuration&#39;s <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Bean</span></span></span><span class="token punctuation">}</span> methods, e.g. from another configuration class.
	 * If this is not needed since each of this particular configuration&#39;s <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Bean</span></span></span><span class="token punctuation">}</span>
	 * methods is self-contained and designed as a plain factory method for container use,
	 * switch this flag to <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">false</span></span></span><span class="token punctuation">}</span> in order to avoid CGLIB subclass processing.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Turning off bean method interception effectively processes <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Bean</span></span></span><span class="token punctuation">}</span>
	 * methods individually like when declared on non-<span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Configuration</span></span></span><span class="token punctuation">}</span> classes,
	 * a.k.a. &quot;@Bean Lite Mode&quot; (see <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Bean</span></span> @Bean&#39;s javadoc<span class="token punctuation">}</span>). It is therefore
	 * behaviorally equivalent to removing the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Configuration</span></span></span><span class="token punctuation">}</span> stereotype.
	 * <span class="token keyword">@since</span> 5.2
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">proxyBeanMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h3 id="案例-2" tabindex="-1"><a class="header-anchor" href="#案例-2" aria-hidden="true">#</a> 案例</h3><p>编写配置类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * @Author: 悟空非空也（公众号/B站/知乎）
         */</span>
<span class="token annotation punctuation">@Configuration</span>  <span class="token comment">//定义该类为配置类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;aPet&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Pet</span> <span class="token function">getPetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token comment">// properties </span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>测试</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myServiceTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Pet</span> aPet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Pet</span><span class="token punctuation">)</span>applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;aPet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aPet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="profile-文件配置" tabindex="-1"><a class="header-anchor" href="#profile-文件配置" aria-hidden="true">#</a> profile 文件配置</h2><p>多环境配置文件格式</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x020jjfj60jr0bbmyj02.jpg" alt="1593095923921" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>使用命令行方式激活指定环境的配置文件</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x05obbij61970apgo002.jpg" alt="1593098529499" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><p>ctrl+c 服务器运行退出</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x0ah73dj617c03f0tc02.jpg" alt="1593099959623" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><p>ctrl+c 停止</p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>在全局配置文件application.properties设置 spring.profiles.active属性激活</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token attr-value">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="案例-1-不同环境下使用不同端口" tabindex="-1"><a class="header-anchor" href="#案例-1-不同环境下使用不同端口" aria-hidden="true">#</a> 案例 1 不同环境下使用不同端口</h3><p><strong>创建不同环境下配置文件</strong></p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x0f06ngj60f805qq3702.jpg" alt="image-20210714153939686" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><p>application.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> test
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>application-dev.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>application-prod.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>application-test.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8083</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>运行 main 方法，查看控制台的端口号输出信息</strong></p><h3 id="案例-2-不同环境下使用不同数据库" tabindex="-1"><a class="header-anchor" href="#案例-2-不同环境下使用不同数据库" aria-hidden="true">#</a> 案例 2 不同环境下使用不同数据库</h3><p><strong>使用 @Profile 注解进行多环境配置</strong></p><p>编写不同环境下的配置类</p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv5x0jpfoaj60ea06y0sy02.jpg" alt="image-20210714160713270" style="${
    (0,server_renderer.ssrRenderStyle)({"zoom":"50%"})
  }"><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
<span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DBConnector</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     *  对不同的环境下的数据库设置统一接口约束
     */</span>
    <span class="token keyword">void</span> <span class="token function">configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Profile</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DevDBConnector</span>  <span class="token keyword">implements</span>  <span class="token class-name">DBConnector</span><span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;开发环境下连接数据库。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
<span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Profile</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;pro&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProDBConnector</span>  <span class="token keyword">implements</span>  <span class="token class-name">DBConnector</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;生产环境下连接数据库。。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wukongnotnull<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span><span class="token comment">/* 
author: 悟空非空也（B站/知乎/公众号） 
*/</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Profile</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDBConnector</span> <span class="token keyword">implements</span>  <span class="token class-name">DBConnector</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;测试环境下连接数据库。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>在全局配置文件application.properties中指定使用哪个环境</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>
<span class="token attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token attr-value">test</span>
<span class="token comment">#或者</span>
<span class="token comment">#spring.profiles.active=pro</span>
<span class="token comment">#或者</span>
<span class="token comment">#spring .profiles.active=dev</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>测试</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">DBConnector</span> dbConnector<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">dbConnectorTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        dbConnector<span class="token punctuation">.</span><span class="token function">configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="yml-高级玩法" tabindex="-1"><a class="header-anchor" href="#yml-高级玩法" aria-hidden="true">#</a> yml 高级玩法</h2><h3 id="参数间引用" tabindex="-1"><a class="header-anchor" href="#参数间引用" aria-hidden="true">#</a> 参数间引用</h3><p>application.properties</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>
<span class="token comment"># 参数间的引用</span>
<span class="token attr-name">app.name</span><span class="token punctuation">=</span><span class="token attr-value">wukongnotnull</span>
<span class="token attr-name">app.description</span><span class="token punctuation">=</span><span class="token attr-value">\${app.name} is a technology blog website, welcome your comming.</span>

<span class="token attr-name">wukong.age</span><span class="token punctuation">=</span><span class="token attr-value">\${random.int[10,20]}</span>
<span class="token attr-name">wukong.description</span><span class="token punctuation">=</span><span class="token attr-value">悟空非空也的年龄可能是 \${wukong.age} </span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>test</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">MySpringbootApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${wukong.description}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> authorDes<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>authorDes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/config-annotation.html.vue?vue&type=template&id=63a19ec4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/config-annotation.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const config_annotation_html = (__exports__);

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
//# sourceMappingURL=322.app.js.map