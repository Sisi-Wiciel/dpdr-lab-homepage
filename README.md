# DPDR Lab Homepage

一个面向课题组/学术团队的静态学术主页 MVP，聚焦：
- DPDR / 自我意识 / 现实感
- insula–mPFC 环路
- EEG / MRI / 蛋白组
- 针刺与临床转化

## 结构

- `index.html` 页面结构
- `styles.css` 页面样式
- `script.js` 渲染逻辑与移动端菜单
- `content.js` 集中式内容数据（最容易修改）
- `SPEC.md` 最初需求说明

## 如何修改内容

优先修改 `content.js`：
- `research` 研究方向
- `publications` 代表成果
- `team` 团队成员
- `projects` 项目基金
- `translation` 转化路线
- `news` 动态更新

联系人、邮箱、单位等可直接改 `index.html` 中 contact 部分。

## 本地预览

最简单方式：

```bash
cd /root/.openclaw/workspace/projects/dpdr-lab-homepage
python3 -m http.server 8000
```

然后打开：
<http://127.0.0.1:8000>

## 部署建议

可直接部署到：
- GitHub Pages
- Vercel（静态站点）
- Netlify
- 学校/医院服务器静态目录

## 后续可扩展

- 中英双语切换
- 论文自动从 Zotero / Google Scholar 同步
- 新闻后台化
- 团队成员详情页
- 课题项目页
- 专利/软著资产页
- 下载区 / 数据资源页
