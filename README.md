# hexo-theme-yinwang

[[English](README_en.md) | 中文]

> 一个简洁优雅的 Hexo 博客主题，设计灵感来自王垠的个人网站

## 📖 简介

- **项目动机**：《[博客主题共享计划（草稿）](https://smallyu.net/2021/02/11/%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A2%98%E5%85%B1%E4%BA%AB%E8%AE%A1%E5%88%92/)》
- **设计灵感**：[https://www.yinwang.org](http://www.yinwang.org/)
- **在线演示**：[https://www.smallyu.net](https://www.smallyu.net/)

## ✨ 特性

- 🌐 多语言支持（中文/英文）
- 📱 响应式设计
- 🏷️ 标签云页面
- 📝 微博页面（基于 GitHub Issues）
- 📊 分类页面
- 👤 关于页面
- 📄 自定义页面支持
- 🔢 字数统计
- 📐 LaTeX 公式渲染支持

## 📋 使用要求

在使用本主题前，请确保：

1. **多语言设置**：修改博客项目 `_config.yml` 文件中的 `language` 字段：
   - `en` - 英文
   - `zh-cn` - 中文

2. **页面类型说明**：支持以下自定义页面类型
   - `tags` - 标签页
   - `categories` - 分类页  
   - `about` - 关于页
   - `display` - 展示页
   - `micro-blog` - 微博页

3. **图标配置**：将 `favicon.svg` 等图标文件放在博客项目的 `source` 文件夹下（不是主题的 source 目录）

4. **问题反馈**：使用过程中遇到问题，欢迎在 [Issues](https://github.com/smallyunet/hexo-theme-yinwang/issues) 中讨论或提交 PR

## 🚀 安装方式

### 方式一：直接安装（推荐）

#### 1. 准备博客项目

```bash
# 如果还没有博客项目，先创建一个
hexo init my-blog
cd my-blog
npm install

# 如果已有项目，直接进入项目目录
cd your-blog-directory
```

#### 2. 下载主题

将本主题下载或克隆到博客项目的 `themes` 目录下：

```bash
git clone https://github.com/smallyunet/hexo-theme-yinwang.git themes/hexo-theme-yinwang
```

#### 3. 安装依赖

```bash
npm install --save hexo-renderer-pug
npm install --save hexo-wordcount-sy
```

#### 4. 配置博客

编辑博客根目录的 `_config.yml` 文件：

```yaml
# 启用主题
theme: hexo-theme-yinwang

# 禁用默认代码高亮（主题有自己的高亮方案）
highlight:
  enable: false

# 设置博客标题
subtitle: 你的博客标题
```

#### 5. 配置主题

复制主题配置文件到博客根目录（可选）：

```bash
cp themes/hexo-theme-yinwang/_config.yml _config.theme.yml
```

#### 6. 启动预览

```bash
hexo clean && hexo server
```

### 方式二：使用模板（快速开始）

为了简化安装过程，我们提供了预配置的模板项目：

**模板地址**：[hexo-theme-yinwang-demo](https://github.com/smallyunet/hexo-theme-yinwang-demo)

**模板特性**：
- ✅ LaTeX 公式渲染
- ✅ 微博页面
- ✅ 标签云页面  
- ✅ 分类页面
- ✅ 关于页面
- ✅ 外链支持

```bash
git clone https://github.com/smallyunet/hexo-theme-yinwang-demo.git my-blog
cd my-blog
npm install
hexo server
```

## 📄 页面设置

### 微博页面

微博页面可以展示基于 GitHub Issues 的微博内容。

#### 配置微博

在主题配置文件中设置：

```yaml
github:
  owner: your-username      # GitHub 用户名
  repo: your-repo-name     # 仓库名
micro_blogs:
  - year: 2023
    issue: 1               # Issue 编号
issue_years: []            # 自动获取的年份，留空则手动指定
```

#### 创建微博页面

```bash
hexo new page micro-blog
```

编辑 `source/micro-blog/index.md`：

```yaml
---
title: 微博
date: 2023-07-26 11:03:03
type: micro-blog
---
```

#### 更新微博内容

```bash
# 方式1：配置文件中设置 issue_years 后自动获取
hexo generate

# 方式2：手动指定年份
hexo generate 2023
```

### 标签页面

#### 创建标签页

```bash
hexo new page tags
```

编辑 `source/tags/index.md`：

```yaml
---
title: 标签云
date: 2022-08-30 18:07:20
type: tags
---
```

### 分类页面

```bash
hexo new page categories
```

编辑 `source/categories/index.md`：

```yaml
---
title: 分类
date: 2022-08-30 18:07:20
type: categories
---
```

### 关于页面

```bash
hexo new page about
```

编辑 `source/about/index.md`：

```yaml
---
title: 关于
date: 2022-08-30 18:07:20
type: about
---

在这里写关于你的内容...
```

## ⚙️ 主题配置

主题提供了丰富的配置选项，以下是完整的配置示例：

```yaml
# 导航菜单（路径开头不带斜杠）
menu:
  博客: ''
  微博: micro-blog
  标签云: tags
  关于: about

# 分页设置（建议页数大于1时开启）
paginator: false

# 头部设置
header:
  blank: false     # 头部链接是否在新标签页打开

# 文章列表设置
list:
  date: true       # 是否显示文章日期
  wordcount: true  # 是否显示字数统计

# 页脚设置
footer:
  display: false               # 是否显示页脚
  href: ""                     # 页脚链接（如ICP备案链接）
  text: "© your-domain.com"    # 页脚文字内容

# 文章页面设置
post:
  title_h1: false              # 文章标题是否使用 h1 标签
  blank: false                 # 文章链接是否在新标签页打开
  backHome: false              # 文章末尾是否显示"返回首页"
  backhome_right: false        # "返回首页"是否右对齐
  backHome_hr: false           # "返回首页"前是否显示分割线
  backHome_prefix: "↶ "        # "返回首页"前缀
  backHome_content: "返回首页"   # "返回首页"文字内容
  backHome_suffix: ""          # "返回首页"后缀
  show_tags: true              # 文章末尾是否显示标签

# 标签云设置
tags:
  all: true       # 标签云页面是否显示全部标签

# 微博设置
github:
  owner: your-username        # GitHub 用户名
  repo: your-repo-name       # 仓库名
micro_blogs:
  - year: 2023
    issue: 1                 # Issue 编号
issue_years: []              # 自动获取年份列表

# Google Analytics（可选）
google_analysis:
  enable: false
  id: G-XXXXXXXXXXX
```

### 配置说明

1. **导航菜单**：可以自定义导航栏的菜单项和对应页面
2. **文章设置**：控制文章页面的显示效果和功能
3. **微博功能**：基于 GitHub Issues 实现微博功能
4. **样式定制**：多数样式都可以通过配置文件调整

## 🧮 公式渲染

主题支持 LaTeX 数学公式渲染，推荐使用以下插件：

### 安装 MathJax 插件

```bash
npm install hexo-filter-mathjax --save
```

### 配置插件

在博客的 `_config.yml` 中添加：

```yaml
mathjax:
  tags: none # 或 'ams' 或 'all'
  single_dollars: true # 启用单个$符号
  cjk_width: 0.9 # 相对 CJK 字符的宽度
  normal_width: 0.6 # 相对正常字符的宽度
  append_css: true # 将 CSS 添加到每个页面
  every_page: false # 如果为 true，每个页面都会渲染 MathJax，不管是否有公式
```

### 使用示例

在文章中使用数学公式：

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发环境

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 问题反馈

- 发现 Bug？请在 [Issues](https://github.com/smallyunet/hexo-theme-yinwang/issues) 中报告
- 有功能建议？欢迎在 Issues 中讨论
- 需要帮助？可以在 Issues 中提问

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- 设计灵感来自 [王垠的个人网站](https://www.yinwang.org/)
- 感谢所有贡献者和使用者的支持

---

如果这个主题对你有帮助，请考虑给个 ⭐️ Star！

