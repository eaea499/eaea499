# eaea499.cn

个人作品集与学习空间，记录物联网、计算机视觉和 Web 开发实践。

线上地址：[eaea499.cn](https://eaea499.cn)

## 当前内容

- 个人主页与学习方向
- 物联网、视觉相关项目展示
- 博客文章框架
- ICP 备案信息

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- Nginx + Ubuntu ECS

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 即可预览。

## 生产构建

```bash
npm run build
npm run start
```

## Nginx 404

静态导出会生成 `out/404.html`。如果 Nginx 仍显示默认的 `404 Not Found`，请把 `deploy/nginx-404-snippet.conf` 中的配置加入现有 HTTPS server 块，然后执行：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Nginx 安全响应头

建议把 `deploy/nginx-security-headers.conf` 中的四行配置加入同一个 HTTPS `server` 块，并执行：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

这些配置用于限制 MIME 嗅探、跨站来源信息、浏览器设备权限和第三方嵌入，不会改变页面内容。

## 说明

项目不提交 `.env`、私钥、证书或其他敏感配置。网站内容会随着项目和学习记录持续更新。
