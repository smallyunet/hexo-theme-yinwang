[[中文](./README.md) | English)]

## Introduction

Project motivation: "[Blog theme sharing plan (draft)](https://smallyu.net/2021/02/11/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2 %98%E5%85%B1%E4%BA%AB%E8%AE%A1%E5%88%92/)》

Style design comes from: [https://www.yinwang.org](http://www.yinwang.org/)

Theme style demo: [https://www.smallyu.net](https://www.smallyu.net/)

## Templates

Since the installation steps of the theme are cumbersome, in order to use this theme more easily, here is a template site that has been configured with the theme, which can be downloaded and used directly. The template site is initialized with the latest hexo, without any extra modification except the necessary configuration.

Template address: [https://github.com/smallunet/hexo-theme-yinwang-demo](https://github.com/smallunet/hexo-theme-yinwang-demo)

## Install

The install step is **required**.

1. Enter the blog project directory
     - If you have already created a blog project, go directly to the directory
     - If you have not created a blog project, execute `hexo init blog` to initialize the project, enter the `blog` directory, and execute `npm i`

2. Copy the theme to the `themes` directory of the blog project

3. Execute the following command to install the necessary dependencies

```
npm i --save hexo-renderer-pug
npm i --save hexo-wordcount-sy
```

4. `_config.yml` file configuration of the blog project
     - Change the value of `theme` to `hexo-theme-yinwang`
     - Modify the value of `enable` under `highlight` to `false`
     - Change the value of `subtitle` to the title of your blog

5. The theme's `_config.yml` file configuration
     - No need to change, here is a reminder to distinguish it from the configuration file of the project

6. Run `hexo clean && hexo server` to start the preview

## Bookmark page

Run the command to create a new page:

```
hexo new page tags
```

Open the file `source/tags/index.md`, add `type: tags` in the front-matter of the file header, after adding it looks like this:

```
---
title: tag cloud
date: 2022-08-30 18:07:20
type: tags
---
```

`title` can be freely changed to the desired title content.

## Formula rendering

You can use this hexo plugin: [https://github.com/next-theme/hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax). No additional support is required at the topic level.

## illustrate

1. The function of `type: tags` is to identify the current page as a tab page. Currently, `tags`, `categories`, `about`, and `display` are supported. These are theme-defined content, which are not in the hexo documentation

2. About theme configuration
     - The path of the icon is under the `source` folder of the project (not the source of the theme), directly put `favicon.svg` into `source`
     - Some styles are configurable, such as article titles

3. About the demo site
     - The content of micro-blog is hard-coded, and there is no way to provide a convenient way to use it
     - Theme should have been stripped of superfluous personal content

4. If you have any questions or find any problems during the use of the theme, please discuss in issue or pr


## Configuration example

```yml
# html lang
language: en

# Navigation bar starts without a slash
menu:
   Blog: ''
   Tag cloud: tags
   About: about

# It is recommended that the number of pages is greater than 1 to enable
paginator: false

# head
header:
   blank: false # Whether the header link is opened in a new tab

# Article list
list:
   date: true # Whether the article list displays the date
   wordcount: false # Whether to display word count

# feet
footer:
   display: false # Whether to display footer
   context: "© smallu.net" # footer content

# article page
post:
   title_h1: false # Whether the article uses h1 title
   blank: false # Whether the article opens in a new tab
   backHome: false # Whether to display the return home page at the end of the article
   backhome_right: false # Returns whether the content of the homepage is right-aligned
   backHome_hr: false # Whether to display the dividing line before returning to the home page
   backHome_prefix: "↶ " # Return the prefix content of the home page
   backHome_content: "Back Home" # Return to the main content of the home page
   backHome_suffix: "" # Return the suffix content of the home page

# Tag Cloud
tags:
   all: true # Whether to display all tags on the tag cloud page

google_analysis:
   enable: false
   id: UA-0000
```