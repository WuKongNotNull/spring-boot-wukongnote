"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 5256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6e2e2d32",
  "path": "/qt/integrated-project.html",
  "title": "综合项目",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "数据库设计",
      "slug": "数据库设计",
      "children": [
        {
          "level": 3,
          "title": "数据库概述",
          "slug": "数据库概述",
          "children": []
        },
        {
          "level": 3,
          "title": "sql 脚本",
          "slug": "sql-脚本",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Spring Boot 综合项目实战",
      "slug": "spring-boot-综合项目实战",
      "children": [
        {
          "level": 3,
          "title": "项目概述",
          "slug": "项目概述",
          "children": []
        },
        {
          "level": 3,
          "title": "系统开发及运行环境",
          "slug": "系统开发及运行环境",
          "children": []
        },
        {
          "level": 3,
          "title": "项目结构",
          "slug": "项目结构",
          "children": []
        },
        {
          "level": 3,
          "title": "前端素材",
          "slug": "前端素材",
          "children": []
        },
        {
          "level": 3,
          "title": "10.5系统环境搭建",
          "slug": "_10-5系统环境搭建",
          "children": []
        },
        {
          "level": 3,
          "title": "10.6文章分页展示",
          "slug": "_10-6文章分页展示",
          "children": []
        },
        {
          "level": 3,
          "title": "10.7文章详情查看",
          "slug": "_10-7文章详情查看",
          "children": []
        },
        {
          "level": 3,
          "title": "10.8文章评论管理",
          "slug": "_10-8文章评论管理",
          "children": []
        },
        {
          "level": 3,
          "title": "10.9数据展示",
          "slug": "_10-9数据展示",
          "children": []
        },
        {
          "level": 3,
          "title": "10.10文章发布",
          "slug": "_10-10文章发布",
          "children": []
        },
        {
          "level": 3,
          "title": "10.11文章修改",
          "slug": "_10-11文章修改",
          "children": []
        },
        {
          "level": 3,
          "title": "10.12文章删除",
          "slug": "_10-12文章删除",
          "children": []
        },
        {
          "level": 3,
          "title": "10.13用户登录控制",
          "slug": "_10-13用户登录控制",
          "children": []
        },
        {
          "level": 3,
          "title": "10.14定时邮件发送",
          "slug": "_10-14定时邮件发送",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "qt/integrated-project.md",
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

/***/ 8986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ integrated_project_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/qt/integrated-project.html.vue?vue&type=template&id=1547e356

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="综合项目" tabindex="-1"><a class="header-anchor" href="#综合项目" aria-hidden="true">#</a> 综合项目</h1><h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2><h3 id="数据库概述" tabindex="-1"><a class="header-anchor" href="#数据库概述" aria-hidden="true">#</a> <strong>数据库概述</strong></h3><p>库名 wukong_blog ，包含 6 张表</p><p><strong>文章详情表 b_article</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>长度</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>20</td><td>文章 id</td></tr><tr><td>title</td><td>varchar</td><td>100</td><td>文章标题</td></tr><tr><td>content</td><td>longtext</td><td></td><td>文章内容</td></tr><tr><td>categories</td><td>varchar</td><td>200</td><td>文章分类</td></tr><tr><td>tags</td><td>varchar</td><td>200</td><td>文章标签</td></tr><tr><td>allow_comment</td><td>tinyint</td><td>1</td><td>是否允许评论</td></tr><tr><td>thumbnail</td><td>varchar</td><td>200</td><td>文章缩略图</td></tr><tr><td>create_by</td><td>int</td><td>20</td><td>创建人（用户 id）</td></tr><tr><td>create_date</td><td>datetime</td><td></td><td>创建时间</td></tr><tr><td>modify_by</td><td>int</td><td>20</td><td>修改人（用户 id ）</td></tr><tr><td>modify_date</td><td>datetime</td><td></td><td>修改时间</td></tr></tbody></table><p><strong>评论表 b_comment</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>长度</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>20</td><td>评论 id</td></tr><tr><td>article_id</td><td>int</td><td>20</td><td>外键 文章i d</td></tr><tr><td>content</td><td>text</td><td></td><td>评论内容</td></tr><tr><td>status</td><td>varchar</td><td>200</td><td>评论状态（默认允许）</td></tr><tr><td>author</td><td>Varchar</td><td>100</td><td>评论作者</td></tr><tr><td>create_by</td><td>int</td><td>20</td><td>创建人（用户 id）</td></tr><tr><td>create_date</td><td>datetime</td><td></td><td>创建时间</td></tr><tr><td>modify_by</td><td>int</td><td>20</td><td>修改人（用户 id ）</td></tr><tr><td>modify_date</td><td>datetime</td><td></td><td>修改时间</td></tr></tbody></table><p><strong>统计表 b_statistic</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>长度</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>20</td><td>文章统计 id</td></tr><tr><td>article_id</td><td>int</td><td>20</td><td>文章 id</td></tr><tr><td>hit</td><td>int</td><td>20</td><td>文章点击量</td></tr><tr><td>comment_num</td><td>int</td><td>20</td><td>文章评论量</td></tr><tr><td>create_by</td><td>int</td><td>20</td><td>创建人（用户 id）</td></tr><tr><td>create_date</td><td>datetime</td><td></td><td>创建时间</td></tr><tr><td>modify_by</td><td>int</td><td>20</td><td>修改人（用户 id ）</td></tr><tr><td>modify_date</td><td>datetime</td><td></td><td>修改时间</td></tr></tbody></table><p><strong>用户表 b_user</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>长度</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>20</td><td>用户 id</td></tr><tr><td>username</td><td>varchar</td><td>100</td><td>用户名</td></tr><tr><td>password</td><td>varchar</td><td>100</td><td>密码</td></tr><tr><td>email</td><td>varchar</td><td>100</td><td>密码</td></tr><tr><td>valid</td><td>tinyint</td><td>1</td><td>用户是否有效（默认有效）1：有效 0：无效</td></tr><tr><td>create_by</td><td>int</td><td>20</td><td>创建人（用户 id）</td></tr><tr><td>create_date</td><td>datetime</td><td></td><td>创建时间</td></tr><tr><td>modify_by</td><td>int</td><td>20</td><td>修改人（用户 id ）</td></tr><tr><td>modify_date</td><td>datetime</td><td></td><td>修改时间</td></tr></tbody></table><p><strong>用户权限表 b_authority</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>长度</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>20</td><td>权限 id</td></tr><tr><td>authority</td><td>varchar</td><td>100</td><td>权限类型：以ROLE_ 开头</td></tr><tr><td>create_by</td><td>int</td><td>20</td><td>创建人（用户 id）</td></tr><tr><td>create_date</td><td>datetime</td><td></td><td>创建时间</td></tr><tr><td>modify_by</td><td>int</td><td>20</td><td>修改人（用户 id ）</td></tr><tr><td>modify_date</td><td>datetime</td><td></td><td>修改时间</td></tr></tbody></table><p><strong>用户权限-文章关联表 b_authority_article</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>长度</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>20</td><td>id</td></tr><tr><td>article_id</td><td>int</td><td>20</td><td>文章 id</td></tr><tr><td>authority_id</td><td>int</td><td>20</td><td>权限 id</td></tr><tr><td>create_by</td><td>int</td><td>20</td><td>创建人（用户 id）</td></tr><tr><td>create_date</td><td>datetime</td><td></td><td>创建时间</td></tr><tr><td>modify_by</td><td>int</td><td>20</td><td>修改人（用户 id ）</td></tr><tr><td>modify_date</td><td>datetime</td><td></td><td>修改时间</td></tr></tbody></table><h3 id="sql-脚本" tabindex="-1"><a class="header-anchor" href="#sql-脚本" aria-hidden="true">#</a> <strong>sql 脚本</strong></h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> wukong_blog<span class="token punctuation">;</span>

<span class="token keyword">USE</span> wukong_blog<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span>b_article<span class="token punctuation">\`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>id<span class="token punctuation">\`</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文章id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>title<span class="token punctuation">\`</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文章标题&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>content<span class="token punctuation">\`</span> <span class="token keyword">LONGTEXT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文章内容&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_article<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Spring Boot 青铜篇&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;从入门到放弃讲解...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_article<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Spring Cloud 王者篇&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;从入门到入土讲解...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>id<span class="token punctuation">\`</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;评论id&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>content<span class="token punctuation">\`</span> <span class="token keyword">LONGTEXT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;评论内容&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>author<span class="token punctuation">\`</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;评论作者&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>article_id<span class="token punctuation">\`</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;外键：文章id&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span>  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wukong&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zhubajie&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tangseng&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bailongma&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span>b_comment<span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baigujing&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="spring-boot-综合项目实战" tabindex="-1"><a class="header-anchor" href="#spring-boot-综合项目实战" aria-hidden="true">#</a> Spring Boot 综合项目实战</h2><h3 id="项目概述" tabindex="-1"><a class="header-anchor" href="#项目概述" aria-hidden="true">#</a> 项目概述</h3><h3 id="系统开发及运行环境" tabindex="-1"><a class="header-anchor" href="#系统开发及运行环境" aria-hidden="true">#</a> 系统开发及运行环境</h3><ul><li><p>Window 10</p></li><li><p>jdk 1.8</p></li><li><p>Maven 3.6</p></li><li><p>Mysql 8.x</p></li><li><p>redis</p></li><li><p>Idea</p></li></ul><h3 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h3><h3 id="前端素材" tabindex="-1"><a class="header-anchor" href="#前端素材" aria-hidden="true">#</a> 前端素材</h3><h3 id="_10-5系统环境搭建" tabindex="-1"><a class="header-anchor" href="#_10-5系统环境搭建" aria-hidden="true">#</a> 10.5系统环境搭建</h3><h3 id="_10-6文章分页展示" tabindex="-1"><a class="header-anchor" href="#_10-6文章分页展示" aria-hidden="true">#</a> 10.6文章分页展示</h3><h3 id="_10-7文章详情查看" tabindex="-1"><a class="header-anchor" href="#_10-7文章详情查看" aria-hidden="true">#</a> 10.7文章详情查看</h3><h3 id="_10-8文章评论管理" tabindex="-1"><a class="header-anchor" href="#_10-8文章评论管理" aria-hidden="true">#</a> 10.8文章评论管理</h3><h3 id="_10-9数据展示" tabindex="-1"><a class="header-anchor" href="#_10-9数据展示" aria-hidden="true">#</a> 10.9数据展示</h3><h3 id="_10-10文章发布" tabindex="-1"><a class="header-anchor" href="#_10-10文章发布" aria-hidden="true">#</a> 10.10文章发布</h3><h3 id="_10-11文章修改" tabindex="-1"><a class="header-anchor" href="#_10-11文章修改" aria-hidden="true">#</a> 10.11文章修改</h3><h3 id="_10-12文章删除" tabindex="-1"><a class="header-anchor" href="#_10-12文章删除" aria-hidden="true">#</a> 10.12文章删除</h3><h3 id="_10-13用户登录控制" tabindex="-1"><a class="header-anchor" href="#_10-13用户登录控制" aria-hidden="true">#</a> 10.13用户登录控制</h3><h3 id="_10-14定时邮件发送" tabindex="-1"><a class="header-anchor" href="#_10-14定时邮件发送" aria-hidden="true">#</a> 10.14定时邮件发送</h3><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/qt/integrated-project.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const integrated_project_html = (__exports__);

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
//# sourceMappingURL=184.app.js.map