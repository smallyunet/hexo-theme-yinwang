[[English](README.md) | 中文]

## 简介

项目动机：《[博客主题共享计划（草稿）](https://smallyu.net/2021/02/11/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98%E5%85%B1%E4%BA%AB%E8%AE%A1%E5%88%92/)》

样式设计来自: [https://www.yinwang.org](http://www.yinwang.org/)

主题样式演示：[https://www.smallyu.net](https://www.smallyu.net/)

## 安装

### 使用说明

1. 支持多语言，需要修改博客项目 `_config.yml` 文件中的 `language` 字段：
    - en
    - zh-cn

2. `type: tags` 的作用是标识当前页面为标签页，目前支持 `tags`、`categories`、`about`、`display`、`micro-blog`，这些是主题自定义的内容，不在 hexo 的文档里

3. 关于主题配置
    - icon 的路径是项目的 `source` 文件夹下（不是主题的 source），直接把 `favicon.svg` 放到 `source` 里
    - 很多样式是可以配置的，比如文章标题、是否在文章链接后显示标签等

4. 主题使用过程中有任何疑问、发现任何问题，欢迎在 issue 中讨论或者 pr

### 方式一：直接安装

1. 进入博客项目目录
    - 如果已经创建博客项目，直接进入目录
    - 如果还未创建博客项目，执行 `hexo init blog` 初始化项目，进入 `blog` 目录，执行 `npm i`

2. 将主题复制到博客项目的 `themes` 目录下

3. 执行以下命令，安装必要依赖

```
npm i --save hexo-renderer-pug
npm i --save hexo-wordcount-sy  
```

4. 博客项目的 `_config.yml` 文件配置
    - 将 `theme` 的值修改为 `hexo-theme-yinwang`
    - 将 `highlight` 下 `enable` 的值修改为 `false`
    - 将 `subtitle` 的值修改为自己博客的标题

5. 主题的 `_config.yml` 文件配置
    - 不必须改，这里是提醒一下和项目的配置文件区分开

6. 运行 `hexo clean && hexo server` 启动预览

#### 微博页

##### 配置

需要在主题的配置页面，填写哪一个年份的微博，使用的用户名、仓库名、issue编号。

##### 新建页面

运行命令新建页面：

```
hexo new page micro-blog
```

打开文件 `source/micro-blog/index.md`，在文件头部的 front-matter 中添加 `type: micro-blog`，添加之后类似这样：

```
---
title: micro-blog
date: 2023-07-26 11:03:03
type: micro-blog
---
```

`title` 可以随意改为想要的标题内容。

##### 更新微博

1. 如果配置文件的 `issue_years` 内容不为空，会在执行 `hexo generate` 命令时自动获取对应的微博内容。

2. 也可以保持配置文件的 `issue_years` 内容为空，执行 `hexo generate 2023` 这样的命令。

#### 标签页

运行命令新建页面：

```
hexo new page tags
```

打开文件 `source/tags/index.md`，在文件头部的 front-matter 中添加 `type: tags`，添加之后类似这样：

```
---
title: 标签云
date: 2022-08-30 18:07:20
type: tags
---
```

`title` 可以随意改为想要的标题内容。

### 方式二：使用模版

由于主题的安装步骤比较繁琐，为了能够更加简便地使用本主题，这里提供了已经配置好主题的模板站点，可以直接下载使用。模板站点使用最新的 hexo 初始化，除了必要的配置，没有任何多余的修改。

模板地址：[https://github.com/smallyunet/hexo-theme-yinwang-demo](https://github.com/smallyunet/hexo-theme-yinwang-demo)

模板增加的支持：
  - Latex 渲染
  - 微博页面
  - 标签云页面
  - 分类页面
  - 关于页面
  - 外链

### 主题配置示例

```
# 导航栏 开头不带斜杠
menu:
  博客: ''
  微博: micro-blog
  标签云: tags
  关于: about

# 建议页数大于1开启
paginator: false

# 头部
header:
  blank: false     # 头部链接是否新标签页打开

# 文章列表
list:
  date: true       # 文章列表是否显示日期
  wordcount: true   # 是否显示字数统计

# 脚部
footer:
  display: false               # 是否显示footer
  href: ""                     # 是否给底部内容加上超链接，可以用于展示ICP备案链接
  text: "© domain name"        # footer内容, 当href为空时，仅展示此文字

# 文章页
post:
  title_h1: false               # 文章是否使用 h1 标题
  blank: false                 # 文章是否新标签页打开
  backHome: false              # 文章末尾是否显示返回首页
  backhome_right: false        # 返回首页内容是否右对齐
  backHome_hr: false           # 返回首页前是否显示分割线
  backHome_prefix: "↶ "        # 返回首页的前缀内容
  backHome_content: "返回首页"   # 返回首页的主体内容
  backHome_suffix: ""          # 返回首页的后缀内容
  show_tags: true              # 文章末尾是否显示标签

# 标签云
tags:
  all: true       # 标签云页面是否显示全部标签

# 微博
github:
  owner: username
  repo: repo_name
micro_blogs:
  - year: 2023
    issue: 1
issue_years: []

google_analysis:
  enable: false
  id: G-XXXXXXXXXXX

```

## 公式渲染

可以使用这个 hexo 插件：[https://github.com/next-theme/hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)。主题层面不需要做额外的支持。

