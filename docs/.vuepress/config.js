module.exports = {
    lang: 'zh-CN',
    title: 'Spring Boot',
    description: 'Spring Boot 编程学习，这是悟空非空也的SpringBoot技术的学习笔记',

    themeConfig: {
        logo: 'https://wukongnotnull.com/storage/logo.png',

        /*repo: 'WuKongNotNull/spring-boot-wukongnote',
        repoLabel: '查看源码',*/
     /*   editLinks: true,
        editLinkText: '帮助我们改善此页面！',*/
        navbar: [
            // NavbarItem
            { text: '青铜篇', link: '/qt/'},
            { text: '白银篇', link: '/by/'},
            { text: '黄金篇', link: '/hj/'},
            { text: '铂金篇', link: '/bj/'},
            { text: '钻石篇', link: '/zs/'},
            { text: '星耀篇', link: '/xy/'},
            { text: '王者篇', link: '/wz/'},
            { text: '悟空社区', link: 'https://wukongnotnull.com'},
            { text: '科学上网', link: 'https://github.com/WuKongNotNull/awesome-free-vpn'},
            { text: 'JetBrains全家桶', link: 'https://www.bilibili.com/read/cv11463068'},

        ],
        sidebar: {
            '/qt/': [
                {
                    text: '青铜篇',
                     children:
                            [
                            '/qt/README.md',
                            '/qt/config-annotation',
                            '/qt/data-access',
                            '/qt/log-management',
                            '/qt/aop-intergrate',
                            '/qt/transaction-management',
                            '/qt/view-tech',
                            '/qt/web-dev',
                            '/qt/fore-end-separation',
                            '/qt/cache-management',
                            '/qt/security-management',
                            '/qt/message-service',
                            '/qt/task-management',
                            '/qt/actuator-intergrate',
                            '/qt/integrated-project',

                        ]
                }

            ],

            /*  白银篇  */
            '/by/': [{
                text: '白银篇',
                children: [
                    '/by/README.md',
                    '/by/three',
                    '/by/four'
                ]
            }
            ],

            /* 黄金篇*/
            '/hj/': [{
                text: '黄金篇',
                children: [
                    '/hj/README.md',
                    '/hj/three',
                    '/hj/four'
                ]
            }
            ],
            '/bj/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            '/zs/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            '/xy/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            '/wz/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

        },
    /*    displayAllHeaders: true, // 默认值：false*/
        sidebarDepth: 1,
    },
}