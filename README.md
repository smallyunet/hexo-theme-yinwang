[English | [中文](README_zh.md)]

## Introduction

Project Motivation: "[Blog Theme Sharing Initiative (Draft)](https://smallyu.net/2021/02/11/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98%E5%85%B1%E4%BA%AB%E8%AE%A1%E5%88%92/)"

Design inspired by: [https://www.yinwang.org](http://www.yinwang.org/)

Theme Demo: [https://www.smallyu.net](https://www.smallyu.net/)

## Installation

### Instructions

1. Supports multiple languages. To modify, change the `language` field in the blog project's `_config.yml` file.
    - en
    - zh-cn

2. The purpose of `type: tags` is to identify the current page as a tag page. Currently, it supports `tags`, `categories`, `about`, `display`, and `micro-blog`. These are custom contents of the theme and are not documented in Hexo's official documentation.

3. About theme configuration:
    - Path for icons is under the project's `source` folder (not the theme's source). Directly place `favicon.svg` into `source`.
    - Many styles are configurable, like post titles, whether to display tags after post links, etc.

4. If you have any questions or encounter any issues while using the theme, feel free to discuss in the issue section or submit a PR.

### Method 1: Direct Installation

1. Navigate to the blog project directory.
    - If you've already created a blog project, directly navigate to the directory.
    - If you haven't yet, run `hexo init blog` to initialize the project. Enter the `blog` directory and run `npm i`.

2. Copy the theme into the `themes` directory of your blog project.

3. Run the following commands to install necessary dependencies:

```
npm i --save hexo-renderer-pug
npm i --save hexo-wordcount-sy  
```

4. Configuration for the blog project's `_config.yml`:
    - Set the `theme` value to `hexo-theme-yinwang`.
    - Set the `highlight` -> `enable` value to `false`.
    - Modify the `subtitle` value to your blog's title.

5. Configuration for the theme's `_config.yml`:
    - No mandatory changes, just a reminder to differentiate from the project's configuration file.

6. Run `hexo clean && hexo server` to start the preview.

#### Micro-blog Page

##### Configuration

Specify which year's micro-blog to show in the theme's configuration, along with the username, repository name, and issue number.

##### Create a New Page

Run this command to create a new page:

```
hexo new page micro-blog
```

Open the file `source/micro-blog/index.md` and add `type: micro-blog` to the front-matter, it should look like this:

```
---
title: micro-blog
date: 2023-07-26 11:03:03
type: micro-blog
---
```

You can change the `title` as desired.

##### Update Microblog

1. If the `issue_years` content in the configuration file is not empty, the corresponding microblog content will be automatically fetched when executing the `hexo generate` command.

2. You can also keep the `issue_years` content in the configuration file empty and execute a command like `hexo generate 2023`.

#### Tags Page

Run this command to create a new page:

```
hexo new page tags
```

Open the file `source/tags/index.md` and add `type: tags` to the front-matter, it should look like this:

```
---
title: Tags Cloud
date: 2022-08-30 18:07:20
type: tags
---
```


You can change the `title` as desired.

### Method 2: Using the Template

Given the complexity of the theme installation, for convenience, a template site is provided with the theme already configured. It can be downloaded and used directly. The template site is initialized with the latest hexo and has no modifications other than necessary configurations.

Template URL: [https://github.com/smallyunet/hexo-theme-yinwang-demo](https://github.com/smallyunet/hexo-theme-yinwang-demo)

Additional features in the template:
  - Latex rendering
  - Micro-blog page
  - Tags cloud page
  - Categories page
  - About page
  - External links

### Theme Configuration Example

```
# Navigation bar without starting with a slash
menu:
  Blog: ''
  Micro-blog: micro-blog
  Tag Cloud: tags
  About: about

# Recommended to enable when the page count is more than 1
paginator: false

# Header section
header:
  blank: false     # Open header links in a new tab

# Article list
list:
  date: true       # Display date in the article list
  wordcount: true  # Display word count

# Footer section
footer:
  display: false               # Display the footer
  href: ""                     # Display the footer as an href
  text: "© domain name"        # footer content

# Article page
post:
  title_h1: true               # Use h1 for article titles
  blank: false                 # Open articles in a new tab
  backHome: false              # Display back to home at the end of the article
  backhome_right: false        # Align back to home content to the right
  backHome_hr: false           # Display a divider line before back to home
  backHome_prefix: "↶ "        # Prefix content for back to home
  backHome_content: "Back to Home"  # Main content for back to home
  backHome_suffix: ""          # Suffix content for back to home
  show_tags: true              # Display tags at the end of the article

# Tag cloud
tags:
  all: true       # Display all tags on the tag cloud page

# Micro-blog
github:
  owner: smallyunet
  repo: hexo-blog
micro_blogs:
  - year: 2020
    issue: 7
  - year: 2021
    issue: 10
  - year: 2022
    issue: 19
  - year: 2023
    issue: 29
issue_years: []

google_analysis:
  enable: true
  id: G-XXXXXXXXXXX
```

## Formula Rendering

You can use this hexo plugin: [https://github.com/next-theme/hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax). There's no need for additional support at the theme level.

