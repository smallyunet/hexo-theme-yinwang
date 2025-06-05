# hexo-theme-yinwang

This theme brings the look and feel of [Yinwang](https://www.yinwang.org/)
to Hexo. A demo is available at
[en.smallyu.net](https://en.smallyu.net/).
See the article [Blog Theme Sharing Initiative][blog-plan]
for the ideas behind the project.

## Features

- Micro-blogging page powered by GitHub Issues
- Built-in tag cloud and categories pages
- About and display pages
- Supports English and Simplified Chinese

## Installation

### Instructions

1. **Multi-language Support**
   - Modify the `language` field in the blog project's `_config.yml` file.
   - Available options: `en`, `zh-cn`.

2. **Custom Page Types**
   - The `type: tags` field marks a page as a tag page.
   - Supported types: `tags`, `categories`, `about`, `display`, `micro-blog`.
   - These types are theme-specific and are not part of Hexo’s official docs.

3. **Theme Configuration**
   - Icons belong in the blog project’s `source` folder,
     not the theme’s own `source` directory.
   - Example: Place `favicon.svg` directly into `source/`.
   - Configurable styles include post titles, tag displays, etc.

4. **Support & Contributions**
   - For any issues or feature requests, use the issue tracker or submit a PR.

### Method 1: Direct Installation

1. **Navigate to the Blog Project Directory**
   - If the blog project already exists, move into its directory.
   - If not, initialize a new blog project:
   
```bash
hexo init blog
cd blog
npm i
```

2. **Copy the Theme**
   - Place the theme into the `themes` directory.

3. **Install Required Dependencies**
   
```bash
npm i --save hexo-renderer-pug
npm i --save hexo-wordcount-sy  
```

4. **Update Blog Configuration (`_config.yml`)**
   - Set `theme: hexo-theme-yinwang`.
   - Disable default highlighting: `highlight -> enable: false`.
   - Customize `subtitle` for the blog’s title.

5. **Update Theme Configuration (`_config.yml`)**
   - No required modifications, but ensure it does not conflict with your
     project settings.

6. **Start the Preview Server**
   
```bash
hexo clean && hexo server
```

### Micro-blog Page

#### Configuration

- Specify the `issue_years`, GitHub username and repository name.
- Set the issue number in the theme configuration.

#### Create a New Page

Run:

```bash
hexo new page micro-blog
```

Modify `source/micro-blog/index.md`:

```yaml
---
title: micro-blog
date: 2023-07-26 11:03:03
type: micro-blog
---
```

- Change the `title` if needed.

#### Updating Microblog

1. If `issue_years` is set in `_config.yml`, running `hexo generate` will
   automatically fetch content.
2. If `issue_years` is empty, manually update with:

```bash
hexo generate 2025
```

### Tags Page

#### Create a New Page

Run:
   
```bash
hexo new page tags
```

Modify `source/tags/index.md`:
   
```yaml
---
title: Tags Cloud
date: 2022-08-30 18:07:20
type: tags
---
```

- Change `title` as needed.

### Method 2: Using the Template

Due to the complexity of installation, a pre-configured template is
available.

**Template Repository**:
[hexo-theme-yinwang-demo](https://github.com/smallyunet/hexo-theme-yinwang-demo)

**Features Included**:
- LaTeX rendering
- Micro-blog page
- Tag cloud page
- Categories page
- About page
- External links

### Theme Configuration Example

```yaml
# Navigation Menu
menu:
  Blog: ''
  Micro-blog: micro-blog
  Tag Cloud: tags
  About: about

# Pagination
paginator: false

# Header Settings
header:
  blank: false     # Open links in a new tab

# Article List
list:
  date: true       # Show post dates
  wordcount: true  # Show word count

# Footer
footer:
  display: false
  href: ""
  text: "© domain name"

# Post Settings
post:
  title_h1: true
  blank: false
  backHome: false
  backhome_right: false
  backHome_hr: false
  backHome_prefix: "↶ "
  backHome_content: "Back to Home"
  backHome_suffix: ""
  show_tags: true

# Tag Cloud
tags:
  all: true

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

# Google Analytics
google_analysis:
  enable: true
  id: G-XXXXXXXXXXX
```

## Formula Rendering

Use this Hexo plugin for LaTeX support:

[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)

No additional theme-level support required.

[blog-plan]: https://en.smallyu.net/2021/02/11/Blog%20Theme%20Sharing%20Plan%20(Draft)/
