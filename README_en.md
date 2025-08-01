# hexo-theme-yinwang

[[English] | [中文](README.md)]

> A clean and elegant Hexo blog theme inspired by Wang Yin's personal website

## 📖 Introduction

- **Project Motivation**: [Blog Theme Sharing Initiative (Draft)](https://en.smallyu.net/2021/02/11/Blog%20Theme%20Sharing%20Plan%20(Draft)/)
- **Design Inspiration**: [https://www.yinwang.org](http://www.yinwang.org/)
- **Live Demo**: [https://en.smallyu.net](https://en.smallyu.net/)

## ✨ Features

- 🌐 Multi-language support (Chinese/English)
- 📱 Responsive design
- 🏷️ Tag cloud page
- 📝 Micro-blog page (based on GitHub Issues)
- 📊 Categories page
- 👤 About page
- 📄 Custom page support
- 🔢 Word count statistics
- 📐 LaTeX formula rendering support

## 📋 Requirements

Before using this theme, please ensure:

1. **Language Settings**: Modify the `language` field in your blog project's `_config.yml` file:
   - `en` - English
   - `zh-cn` - Chinese

2. **Page Type Description**: Supports the following custom page types:
   - `tags` - Tag page
   - `categories` - Categories page  
   - `about` - About page
   - `display` - Display page
   - `micro-blog` - Micro-blog page

3. **Icon Configuration**: Place `favicon.svg` and other icon files in your blog project's `source` folder (not the theme's source directory)

4. **Issue Feedback**: If you encounter any problems during use, feel free to discuss in [Issues](https://github.com/smallyunet/hexo-theme-yinwang/issues) or submit a PR

## 🚀 Installation Methods

### Method 1: Direct Installation (Recommended)

#### 1. Prepare Blog Project

```bash
# If you don't have a blog project yet, create one
hexo init my-blog
cd my-blog
npm install

# If you already have a project, navigate to the project directory
cd your-blog-directory
```

#### 2. Download Theme

Download or clone this theme to your blog project's `themes` directory:

```bash
git clone https://github.com/smallyunet/hexo-theme-yinwang.git themes/hexo-theme-yinwang
```

#### 3. Install Dependencies

```bash
npm install --save hexo-renderer-pug
npm install --save hexo-wordcount-sy
```

#### 4. Configure Blog

Edit the `_config.yml` file in your blog's root directory:

```yaml
# Enable theme
theme: hexo-theme-yinwang

# Disable default code highlighting (theme has its own highlighting scheme)
highlight:
  enable: false

# Set blog title
subtitle: Your Blog Title
```

#### 5. Configure Theme

Copy theme configuration file to blog root directory (optional):

```bash
cp themes/hexo-theme-yinwang/_config.yml _config.theme.yml
```

#### 6. Start Preview

```bash
hexo clean && hexo server
```

### Method 2: Using Template (Quick Start)

To simplify the installation process, we provide a pre-configured template project:

**Template Repository**: [hexo-theme-yinwang-demo](https://github.com/smallyunet/hexo-theme-yinwang-demo)

**Template Features**:
- ✅ LaTeX formula rendering
- ✅ Micro-blog page
- ✅ Tag cloud page  
- ✅ Categories page
- ✅ About page
- ✅ External link support

```bash
git clone https://github.com/smallyunet/hexo-theme-yinwang-demo.git my-blog
cd my-blog
npm install
hexo server
```

## 📄 Page Settings

### Micro-blog Page

The micro-blog page can display micro-blog content based on GitHub Issues.

#### Configure Micro-blog

Set in the theme configuration file:

```yaml
github:
  owner: your-username      # GitHub username
  repo: your-repo-name     # Repository name
micro_blogs:
  - year: 2023
    issue: 1               # Issue number
issue_years: []            # Automatically fetched years, leave empty for manual specification
```

#### Create Micro-blog Page

```bash
hexo new page micro-blog
```

Edit `source/micro-blog/index.md`:

```yaml
---
title: Micro-blog
date: 2023-07-26 11:03:03
type: micro-blog
---
```

#### Update Micro-blog Content

```bash
# Method 1: Auto-fetch after setting issue_years in config file
hexo generate

# Method 2: Manually specify year
hexo generate 2023
```

### Tags Page

#### Create Tags Page

```bash
hexo new page tags
```

Edit `source/tags/index.md`:

```yaml
---
title: Tag Cloud
date: 2022-08-30 18:07:20
type: tags
---
```

### Categories Page

```bash
hexo new page categories
```

Edit `source/categories/index.md`:

```yaml
---
title: Categories
date: 2022-08-30 18:07:20
type: categories
---
```

### About Page

```bash
hexo new page about
```

Edit `source/about/index.md`:

```yaml
---
title: About
date: 2022-08-30 18:07:20
type: about
---

Write your about content here...
```

## ⚙️ Theme Configuration

The theme provides rich configuration options. Here's a complete configuration example:

```yaml
# Navigation menu (paths don't start with slash)
menu:
  Blog: ''
  Micro-blog: micro-blog
  Tag Cloud: tags
  About: about

# Pagination settings (recommended to enable when page count > 1)
paginator: false

# Header settings
header:
  blank: false     # Whether header links open in new tab

# Article list settings
list:
  date: true       # Whether to show article dates
  wordcount: true  # Whether to show word count

# Footer settings
footer:
  display: false               # Whether to show footer
  href: ""                     # Footer link (e.g., ICP filing link)
  text: "© your-domain.com"    # Footer text content

# Article page settings
post:
  title_h1: false              # Whether article titles use h1 tag
  blank: false                 # Whether article links open in new tab
  backHome: false              # Whether to show "Back to Home" at article end
  backhome_right: false        # Whether "Back to Home" is right-aligned
  backHome_hr: false           # Whether to show divider before "Back to Home"
  backHome_prefix: "↶ "        # "Back to Home" prefix
  backHome_content: "Back to Home"  # "Back to Home" text content
  backHome_suffix: ""          # "Back to Home" suffix
  show_tags: true              # Whether to show tags at article end

# Tag cloud settings
tags:
  all: true       # Whether tag cloud page shows all tags

# Micro-blog settings
github:
  owner: your-username        # GitHub username
  repo: your-repo-name       # Repository name
micro_blogs:
  - year: 2023
    issue: 1                 # Issue number
issue_years: []              # Auto-fetch year list

# Google Analytics (optional)
google_analysis:
  enable: false
  id: G-XXXXXXXXXXX
```

### Configuration Description

1. **Navigation Menu**: Customize navigation bar menu items and corresponding pages
2. **Article Settings**: Control article page display effects and functionality
3. **Micro-blog Feature**: Implement micro-blog functionality based on GitHub Issues
4. **Style Customization**: Most styles can be adjusted through configuration file

## 🧮 Formula Rendering

The theme supports LaTeX mathematical formula rendering. We recommend using the following plugin:

### Install MathJax Plugin

```bash
npm install hexo-filter-mathjax --save
```

### Configure Plugin

Add to your blog's `_config.yml`:

```yaml
mathjax:
  tags: none # or 'ams' or 'all'
  single_dollars: true # Enable single $ symbol
  cjk_width: 0.9 # Relative width of CJK characters
  normal_width: 0.6 # Relative width of normal characters
  append_css: true # Add CSS to each page
  every_page: false # If true, every page will render MathJax regardless of formulas
```

### Usage Example

Use mathematical formulas in articles:

```markdown
Inline formula: $E = mc^2$

Block formula:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 🤝 Contributing Guide

Welcome to submit Issues and Pull Requests!

### Development Environment

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Issue Feedback

- Found a Bug? Please report in [Issues](https://github.com/smallyunet/hexo-theme-yinwang/issues)
- Have feature suggestions? Welcome to discuss in Issues
- Need help? Feel free to ask questions in Issues

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Wang Yin's personal website](https://www.yinwang.org/)
- Thanks to all contributors and users for their support

---

If this theme helps you, please consider giving it a ⭐️ Star!
