(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"第一步：安装hexo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步：安装hexo"}},[a._v("#")]),a._v(" 第一步：安装hexo")]),a._v(" "),t("p",[a._v("node和npm此处不表。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g hexo-cli\n")])])]),t("p",[a._v("安装成功后：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("hexo i myblog  // 生成博客文件夹\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" myblog      // 进入目录,其中官方给出了一个demo\nhexo g         // 生成js、css、html等静态文件\nhexo s         // 启动一个本地服务器，预览页面\n")])])]),t("p",[a._v("本地使用浏览器，输入地址"),t("code",[a._v("localhost:4000")]),a._v(",进行预览。\n{%  asset_img demohome.jpg %}")]),a._v(" "),t("h2",{attrs:{id:"第二步：需要注册一个github账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步：需要注册一个github账号"}},[a._v("#")]),a._v(" 第二步：需要注册一个github账号")]),a._v(" "),t("h3",{attrs:{id:"_1-打开最大的同性交友网站github-进行注册。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-打开最大的同性交友网站github-进行注册。"}},[a._v("#")]),a._v(" 1.打开最大的同性交友网站"),t("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),t("OutboundLink")],1),a._v(",进行注册。")]),a._v(" "),t("p",[a._v("{% asset_img githubHome.jpg %}")]),a._v(" "),t("h3",{attrs:{id:"_2-新建一个仓库，仓库名要以github-io结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建一个仓库，仓库名要以github-io结尾"}},[a._v("#")]),a._v(" 2.新建一个仓库，仓库名要以"),t("code",[a._v("github.io")]),a._v("结尾")]),a._v(" "),t("p",[a._v("{% asset_img newR.jpg %}\n因为我之前已经新建过同名仓库，此处报同名错误。")]),a._v(" "),t("h2",{attrs:{id:"第三步：将hexo生成的博客内容上传至github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步：将hexo生成的博客内容上传至github"}},[a._v("#")]),a._v(" 第三步：将hexo生成的博客内容上传至github")]),a._v(" "),t("h3",{attrs:{id:"_1-编辑-config-yml-文件-repo-设置成自己的仓库地址。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-编辑-config-yml-文件-repo-设置成自己的仓库地址。"}},[a._v("#")]),a._v(" 1.编辑 "),t("code",[a._v("_config.yml")]),a._v(" 文件, "),t("code",[a._v("repo")]),a._v(" 设置成自己的仓库地址。")]),a._v(" "),t("p",[a._v("{% asset_img config.jpg %}")]),a._v(" "),t("h3",{attrs:{id:"_2-开始同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开始同步"}},[a._v("#")]),a._v(" 2.开始同步")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" hexo-deployer-git --save    // 上传需要的插件\nhexo d   // 部署\n")])])]),t("h3",{attrs:{id:"_3-查看效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看效果"}},[a._v("#")]),a._v(" 3.查看效果")]),a._v(" "),t("p",[a._v("{% asset_img result.jpg %}")]),a._v(" "),t("h2",{attrs:{id:"第四步：新建博客"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四步：新建博客"}},[a._v("#")]),a._v(" 第四步：新建博客")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("hexo n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blog name"')]),a._v(" // 在 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("source/_posts/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 文件夹下会生成对应的*.md文件\n")])])]),t("p",[a._v("现在编辑你的博客吧！采用markdown语法～")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("接着：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("hexo clean // 清除之前生成的文件\nhexo g // 重新生成\nhexo d // 部署到github\n")])])]),t("p",[a._v("大功告成！快去看看自己的第一篇博客～\n如果不喜欢这个样式，hexo有很多主题供选择。可以慢慢挑选！")])])}),[],!1,null,null,null);s.default=r.exports}}]);