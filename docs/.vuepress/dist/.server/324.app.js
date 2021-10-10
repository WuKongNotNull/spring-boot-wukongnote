"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 9395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0995923a",
  "path": "/qt/log-management.html",
  "title": "日志管理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "开启日志",
      "slug": "开启日志",
      "children": []
    },
    {
      "level": 2,
      "title": "默认日志管理",
      "slug": "默认日志管理",
      "children": [
        {
          "level": 3,
          "title": "默认日志框架 logback",
          "slug": "默认日志框架-logback",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/log-management.md",
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

/***/ 4350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ log_management_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/log-management.html.vue?vue&type=template&id=5105f6b8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h1><h2 id="开启日志" tabindex="-1"><a class="header-anchor" href="#开启日志" aria-hidden="true">#</a> 开启日志</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#开启日志</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.wukongnotnull</span><span class="token punctuation">:</span> debug <span class="token comment">#设置日志级别</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="默认日志管理" tabindex="-1"><a class="header-anchor" href="#默认日志管理" aria-hidden="true">#</a> 默认日志管理</h2><h3 id="默认日志框架-logback" tabindex="-1"><a class="header-anchor" href="#默认日志框架-logback" aria-hidden="true">#</a> 默认日志框架 logback</h3><p>java web 有多种日志框架，比如：logback，log4j，log4j2（slj4f 并不是一种日志框架，它相当于定义了规范，实现了这个规范的日志框架就能够用 slj4f 调用）。</p><p>其中性能最高的应该使 logback ，Spring Boot 默认使用的也是 logback 日志。</p><p>默认情况下 Spring Boot 将 info 级别的日志输出到控制台中，不会写到日志文件，且不能进行复杂配置。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span><span class="token punctuation">;</span>

  <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;我是 springboot的默认日志系统.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>日志的复杂配置</strong></p><p>写到日志文件中。如果要编写除控制台输出之外的日志文件，则需要application.yml中设置logging.file 或者logging.path属性。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token comment"># 项目路径下的log目录下的spring.log 文件（默认名为 spring.log）</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./log
    <span class="token comment"># 自定义日志名，存放在项目路径下 （name 优先级高于 path）</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> ./resources.log

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/log-management.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const log_management_html = (__exports__);

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
//# sourceMappingURL=324.app.js.map