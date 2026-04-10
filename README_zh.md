# DeepFurry 网站

[![部署状态](https://github.com/DeepFurry/DeepFurry/actions/workflows/static.yml/badge.svg)](https://github.com/DeepFurry/DeepFurry/actions/workflows/static.yml)

这是 DeepFurry 的静态组织网站，使用原生 HTML 编写，并通过 Tailwind CSS 构建样式后部署到 GitHub Pages。

## 技术栈

- 原生 HTML 静态页面
- Tailwind CSS CLI
- GitHub Pages
- GitHub Actions 自动构建与部署

## 本地开发

安装依赖：

```bash
npm install
```

构建生产用 CSS 和可部署站点：

```bash
npm run build
```

编辑 HTML 时监听 Tailwind 输出：

```bash
npm run watch:css
```

## 项目结构

- `src/tailwind.css`：Tailwind 入口文件
- `css/style.css`：生成后的 CSS 输出
- `pages/`：静态子页面
- `scripts/build-site.mjs`：把部署所需文件整理到 `dist/`
- `.github/workflows/static.yml`：GitHub Pages 部署工作流

## 部署方式

GitHub Pages 通过 GitHub Actions 发布。工作流会：

1. 安装 npm 依赖
2. 构建 Tailwind CSS
3. 生成 `dist/` 部署目录
4. 将 `dist/` 上传到 GitHub Pages
