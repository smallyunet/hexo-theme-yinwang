## 简介

项目动机：《[博客主题共享计划（草稿）](https://smallyu.net/2021/02/11/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98%E5%85%B1%E4%BA%AB%E8%AE%A1%E5%88%92/)》

样式设计来自: [https://www.yinwang.org](http://www.yinwang.org/)

主题样式演示：[https://www.smallyu.net](https://www.smallyu.net/)

## 安装

步骤 2、3、4、5 是 **必需** 的。

1. 执行 `hexo init blog` 初始化项目。

1. 将主题复制到 `themes` 目录下。

2. 执行以下命令，安装必要依赖

```
npm i --save hexo-renderer-pug
npm i --save hexo-wordcount-sy  
```

3. 将项目 `_config.yml` 中`theme` 的值修改为 `hexo-theme-yinwang`

4. 将项目 `_config.yml` 中 `highlight` 下 `enable` 的值修改为 `false`

5. 运行 `hexo clean && hexo server` 启动预览。

## 说明

1. 如果需要的话，可以执行以下命令新建 “标签云” 和 “关于我” 页面。这些内容是自定义的，可以熟悉一下 hexo 的相关操作。

```
hexo new page tags
hexo new page about
```

2. 微博（micro-blog）的内容是硬编码的，暂时没办法提供便捷的方式去使用。

3. icon 的路径是项目的 `source` 文件夹下（不是主题的 source），直接把 `favicon.svg` 放到 `source` 里。

4. 有些样式是可以配置的，比如文章标题。

## 配置示例

```yml
# html lang
language: en

# 导航栏 开头不带斜杠
menu:
  博客: ''
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
  context: "© smallyu.net"     # footer内容

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

# 标签云
tags:
  all: true       # 标签云页面是否显示全部标签

google_analysis_id: UA-0000

version: 1
debug: false
```
