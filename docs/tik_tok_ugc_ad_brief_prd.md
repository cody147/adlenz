# AdBrief AI PRD：TikTok 竞品广告拆解 → UGC Brief 生成器

## 1. 产品一句话

**AdBrief AI 是一个面向 TikTok Shop 卖家、DTC 品牌、Media Buyer 和 UGC Agency 的 AI 创意策略工具。用户粘贴竞品 TikTok 视频链接，输入自己的产品信息，系统自动拆解竞品广告结构，并生成可拍摄的 UGC 广告 Brief、脚本、Hook、Shot List 和 Creator Instructions。**

核心价值不是“生成脚本”，而是：

> 把竞品已经验证过的短视频广告结构，转成自己产品可测试、可拍摄、可交付的 UGC 广告方案。

---

## 2. 产品定位

### 2.1 不做什么

本产品不做：

- 不做通用 AI Script Generator
- 不做 TikTok Downloader
- 不做完整视频剪辑器
- 不做自动生成最终 UGC 成片
- 不做社媒排程工具
- 不做 TikTok 数据爬虫平台
- 不承诺复制竞品视频
- 不承诺生成“爆款视频”

### 2.2 做什么

本产品专注做：

> Competitor TikTok → Ad Breakdown → Product Rewrite → UGC Brief

即：

1. 输入竞品 TikTok 链接
2. 提取 transcript / on-screen text
3. AI 拆解广告结构
4. 用户输入自己的产品信息
5. AI 改写成自己产品的 UGC 脚本和拍摄 Brief
6. 支持导出 PDF / DOC / CSV / Notion / Google Doc

---

## 3. 目标用户

### 3.1 首要用户：TikTok Shop / Shopify 小卖家

**画像：**

- 1–5 人团队
- 每周需要测试短视频素材
- 没有专业创意团队
- 看到竞品爆款但不知道怎么复用
- 需要快速给自己、剪辑师或 UGC Creator 一份可拍摄脚本

**核心痛点：**

- 不知道竞品为什么能卖
- 不知道自己的产品该怎么讲
- 脚本产出慢
- 拍出来的视频经常没有卖点
- 找 UGC Creator 前没有清晰 Brief

**愿意付费：**

- Starter：$29/月
- Pro：$79/月

---

### 3.2 第二用户：Media Buyer / DTC Growth Marketer

**画像：**

- 负责 TikTok Ads / Meta Reels Ads 投放
- 每周需要大量新素材
- 痛点不是投放设置，而是创意素材不够测

**核心痛点：**

- Creative fatigue
- 每周缺 Hook / Angle / CTA
- 手动刷竞品视频太慢
- 缺少结构化 Creative Matrix
- 创意想法难以同步给剪辑师 / Creator

**愿意付费：**

- Pro：$79/月
- Growth：$149/月

---

### 3.3 第三用户：UGC Creator / UGC Agency

**画像：**

- 帮品牌拍摄 UGC 广告
- 需要快速产出脚本、拍摄清单和客户方案
- 多客户、多产品、多 Brief

**核心痛点：**

- 写脚本耗时
- 客户给的信息不完整
- 需要更专业的交付文档
- 需要批量生成不同 Angle
- 需要白标 Brief / PDF 报告

**愿意付费：**

- Creator：$19–39/月
- Agency：$149–499/月

---

## 4. 核心使用场景

### 场景 A：卖家看到竞品爆款视频

用户行为：

1. 用户在 TikTok / TikTok Shop / Ads Library 看到竞品视频
2. 复制 TikTok URL
3. 粘贴到 AdBrief AI
4. 输入自己的产品链接或产品描述
5. 系统生成：
   - 竞品广告拆解
   - Hook 分析
   - Selling Angle
   - Offer / CTA
   - 自己产品的 15s / 30s UGC 脚本
   - Shot-by-shot Brief
6. 用户导出给 Creator 拍摄

---

### 场景 B：Media Buyer 每周做素材测试计划

用户行为：

1. 批量导入 10–50 个竞品 TikTok URL
2. 系统生成 Hook / Angle / CTA Matrix
3. 用户选择 3–5 个最值得测试的 Angle
4. 系统生成每个 Angle 的脚本变体
5. 导出 Creative Brief 给团队

---

### 场景 C：UGC Agency 给客户做创意方案

用户行为：

1. 创建客户 Project
2. 导入客户产品信息
3. 批量分析竞品视频
4. 生成多个 Creative Concepts
5. 输出白标 PDF Brief
6. 给客户确认后安排拍摄

---

## 5. 信息架构与页面

### 5.1 首发页面矩阵

首发只做 5 个页面：

1. `/tiktok-transcript-generator`
   - 免费入口，拿 SEO 流量
   - 目标：让用户粘贴 TikTok URL 并得到 Transcript
   - 转化 CTA：Turn this transcript into a UGC brief

2. `/tiktok-ad-script-generator`
   - 商业页
   - 目标：让用户理解可以生成可投放脚本
   - CTA：Generate Ad Scripts

3. `/ugc-brief-generator`
   - 核心产品页
   - 目标：突出“完整 Brief”价值
   - CTA：Generate UGC Brief

4. `/tiktok-hook-generator`
   - 流量 + 高转化工具页
   - 目标：生成 Hook，导向完整 Brief
   - CTA：Turn Hooks Into Full UGC Brief

5. `/tiktok-ad-analyzer`
   - Pro / Agency 价值页
   - 目标：批量分析、报告、团队协作
   - CTA：Start Analyzing Free

---

## 6. MVP 功能范围

### 6.1 MVP 必须有

#### 功能 1：TikTok URL 输入

用户可以输入一个公开 TikTok 视频链接。

**输入：**

- TikTok video URL

**系统处理：**

- 校验链接格式
- 提取视频 ID
- 获取视频基础信息
- 获取 transcript / speech-to-text
- 获取 on-screen text，如果可行

**异常：**

- 私密视频不可用
- 删除视频不可用
- 地区限制视频可能不可用
- 无音频视频只输出 on-screen text 或提示

---

#### 功能 2：Transcript 生成

生成 TikTok 视频的文字稿。

**输出字段：**

- Spoken transcript
- Timestamp
- On-screen text
- Duration
- Word count
- Language

**导出：**

- Copy
- TXT
- SRT

**页面归属：**

- `/tiktok-transcript-generator`

---

#### 功能 3：竞品广告拆解

AI 根据 transcript 和视频信息拆解广告结构。

**输出模块：**

- Hook
- Hook Type
- Pain Point
- Target Audience
- Selling Angle
- Product Promise
- Proof / Credibility
- Offer
- CTA
- Objection Handling
- Video Structure
- Why It Works

**示例输出：**

```text
Hook: “Your skin is begging for a reset.”
Hook Type: Pain-point hook
Angle: Gentle cleanser for sensitive skin
Promise: Deep clean without stripping
Proof: Creator first-person experience
CTA: Try it today
Why it works: The hook names a common frustration, then introduces a simple product-led solution.
```

---

#### 功能 4：用户产品信息输入

用户可以输入自己的产品。

**输入字段：**

- Product name
- Product URL
- Category
- Target audience
- Key benefits
- Price point
- Offer
- Brand tone
- Claims to avoid
- Competitors / references

**MVP 可简化为：**

- Product name
- Product description
- Key benefits
- Target audience
- Offer

---

#### 功能 5：Product Fit Rewrite

将竞品广告结构改写为用户自己产品的 UGC 广告方案。

**输出：**

- Adapted Hook
- New Angle
- Product-specific Script
- CTA variants
- On-screen text
- Shot list

**原则：**

- 学习结构，不复制文案
- 输出原创内容
- 不使用竞品品牌名
- 不生成侵权或误导性内容

---

#### 功能 6：UGC Brief 生成

这是核心价值功能。

**完整 Brief 结构：**

1. Campaign Objective
2. Target Audience
3. Competitor Ad Breakdown
4. Winning Hook Analysis
5. Your Product Angle
6. Hook Variants
7. 15s Script
8. 30s Script
9. Shot-by-shot Plan
10. On-screen Text
11. Voiceover
12. B-roll Suggestions
13. Creator Instructions
14. Do / Don’t
15. CTA Variants
16. Export Options

---

#### 功能 7：Hook Generator

从 TikTok URL 或产品信息生成 Hook。

**Hook 类型：**

- Pain Point
- Contrarian
- Problem / Solution
- Before / After
- Curiosity
- Mistake
- Social Proof
- How-to
- Listicle

**输出：**

每种类型生成 3–5 个 Hook。

---

#### 功能 8：导出

**MVP 导出格式：**

- Copy to clipboard
- PDF
- DOCX
- TXT

**Pro 后续：**

- Google Doc
- Notion
- CSV
- Share link
- White-label PDF

---

## 7. Pro / Agency 功能

### 7.1 Batch Competitor Analysis

用户可以批量输入 TikTok URL。

**输入：**

- 10–50 个 TikTok 链接

**输出：**

- Top Hooks
- Common Angles
- CTA Patterns
- Offer Breakdown
- Script Templates
- Creative Opportunities
- CSV / PDF Report

---

### 7.2 Hook / Angle Matrix

按竞品视频聚合分析。

**矩阵字段：**

- Hook Type
- Hook Text
- Angle
- Audience
- Product Promise
- Offer
- CTA
- Recommended Adaptation

---

### 7.3 Project Workspace

Agency 用户需要按客户管理。

**对象：**

- Workspace
- Client
- Brand
- Product
- Competitor Videos
- Briefs
- Reports

---

### 7.4 White-label Report

Agency 可导出无 AdBrief AI 品牌的报告。

**功能：**

- 上传 Agency Logo
- 自定义封面
- 自定义颜色
- PDF Export

---

## 8. 用户流程

### 8.1 免费入口流程

```text
进入 /tiktok-transcript-generator
→ 粘贴 TikTok URL
→ 生成 Transcript
→ 显示 Hook Preview
→ CTA：Create UGC Brief
→ 输入产品信息
→ 生成简版 Brief
→ 注册后保存 / 导出
```

---

### 8.2 核心付费流程

```text
进入 /ugc-brief-generator
→ 粘贴竞品 TikTok URL
→ 输入自己的产品信息
→ AI 拆解竞品视频
→ AI 生成 UGC Brief
→ 用户编辑
→ 导出 PDF / Doc
→ 保存到 Project
```

---

### 8.3 Agency 批量流程

```text
创建 Client Project
→ 输入品牌和产品信息
→ 批量导入竞品 TikTok URL
→ 生成 Competitor Analysis Report
→ 选择 Top Angles
→ 生成多个 UGC Brief
→ 导出白标报告
```

---

## 9. 数据模型

### 9.1 User

```json
{
  "id": "user_123",
  "email": "user@example.com",
  "plan": "pro",
  "credits_remaining": 120,
  "created_at": "2026-05-06T00:00:00Z"
}
```

### 9.2 Product

```json
{
  "id": "prod_123",
  "user_id": "user_123",
  "name": "GlowPure Facial Cleanser",
  "category": "skincare",
  "description": "Gentle foaming cleanser for sensitive skin",
  "target_audience": "Women 25-35 with sensitive or breakout-prone skin",
  "benefits": ["Deep cleans", "Gentle", "Brightens skin"],
  "offer": "20% off first order",
  "claims_to_avoid": ["cures acne", "medical claims"]
}
```

### 9.3 TikTokVideo

```json
{
  "id": "video_123",
  "url": "https://www.tiktok.com/@brand/video/123456789",
  "duration": 28,
  "caption": "This cleanser changed my routine",
  "transcript": [],
  "on_screen_text": [],
  "created_at": "2026-05-06T00:00:00Z"
}
```

### 9.4 TranscriptLine

```json
{
  "start": 0.0,
  "end": 2.3,
  "speaker": "creator",
  "text": "Your face is begging for a reset."
}
```

### 9.5 AdBreakdown

```json
{
  "video_id": "video_123",
  "hook": "Your face is begging for a reset.",
  "hook_type": "pain_point",
  "angle": "gentle skincare reset",
  "pain_point": "skin feels dull after cleansing",
  "promise": "deep clean without stripping",
  "proof": "creator testimonial",
  "offer": "try today",
  "cta": "shop now",
  "why_it_works": "The hook directly names a common frustration and quickly introduces a simple product-led solution."
}
```

### 9.6 UGCBrief

```json
{
  "id": "brief_123",
  "user_id": "user_123",
  "product_id": "prod_123",
  "source_video_id": "video_123",
  "title": "GlowPure Facial Cleanser UGC Brief",
  "hooks": [],
  "scripts": [],
  "shot_list": [],
  "cta_variants": [],
  "creator_notes": [],
  "export_url": null
}
```

---

## 10. AI 输出 Prompt 规范

### 10.1 竞品广告拆解 Prompt

**目标：** 从 transcript 中拆出广告结构。

**要求：**

- 不臆测外部数据
- 不声称视频一定表现好
- 使用“likely / appears to / suggests”类表达
- 输出结构化 JSON
- 识别 hook、angle、offer、CTA

---

### 10.2 Product Rewrite Prompt

**目标：** 将竞品广告结构改写成用户产品广告。

**要求：**

- 不复制竞品文案
- 不使用竞品品牌名
- 避免医疗、金融、夸大承诺
- 保持 UGC 口吻自然
- 输出 15s / 30s 两个版本

---

### 10.3 Brief 生成 Prompt

**目标：** 输出可拍摄 UGC Brief。

**要求：**

- 结构清晰
- 每个 scene 有时间、画面、口播、屏幕文字、Creator Notes
- 包含 B-roll 建议
- 包含 CTA
- 包含拍摄注意事项

---

## 11. 内容安全与合规

### 11.1 核心合规原则

产品文案必须强调：

> Analyze creative structure. Generate original briefs. Do not copy videos.

即：

- 学习结构
- 不下载/搬运原视频
- 不复制原素材
- 不直接复刻竞品文案
- 生成原创 brief

### 11.2 禁止能力

系统不应提供：

- 下载 TikTok 视频原文件
- 去水印
- 盗用竞品素材
- 生成误导性医疗/金融/夸大效果声明
- 生成冒充真实用户虚假证言
- 生成侵权品牌模仿内容

### 11.3 声明文案

页面底部或导出报告应包含：

```text
AdBrief AI helps you analyze creative patterns and generate original briefs. Always review scripts for brand accuracy, platform policy, and legal compliance before publishing.
```

---

## 12. 定价方案

### Free

$0/月

- 每月 3 个 TikTok Transcript
- 每月 1 个简版 Brief
- 无导出 PDF
- 有 AdBrief AI 水印

### Starter

$29/月

- 50 个 TikTok 分析/月
- 50 个 UGC Brief/月
- 15s / 30s scripts
- Hook variants
- TXT / PDF 导出
- 适合 TikTok Shop 小卖家

### Pro

$79/月

- 300 个 TikTok 分析/月
- 批量导入 20 个链接
- Hook / Angle Matrix
- Product Rewrite
- Brand Voice
- PDF / DOCX / CSV 导出
- 项目保存
- 适合 DTC / Media Buyer

### Agency

$249/月

- 1,000 个视频分析/月
- 多客户 workspace
- 白标 PDF
- 团队成员
- 批量报告
- 优先队列
- 适合 UGC / Creative Agency

---

## 13. SEO 策略

### 13.1 第一批页面

| 页面 | 主关键词 | 目标 |
|---|---|---|
| `/tiktok-transcript-generator` | tiktok transcript generator | 免费入口 |
| `/tiktok-ad-script-generator` | tiktok ad script generator | 商业转化 |
| `/ugc-brief-generator` | ugc brief generator | 核心产品页 |
| `/tiktok-hook-generator` | tiktok hook generator | 工具入口 |
| `/tiktok-ad-analyzer` | tiktok ad analyzer | Pro / Agency |

### 13.2 第二批页面

- `/ugc-script-generator`
- `/video-ad-script-generator`
- `/tiktok-shop-script-generator`
- `/product-video-script-generator`
- `/promo-video-script-generator`
- `/ugc-brief-template`
- `/tiktok-ad-script-template`
- `/creative-brief-template`

### 13.3 页面转化路径

```text
Transcript 页面 → Hook Preview → Create UGC Brief
Hook 页面 → Full Script → UGC Brief
Script 页面 → Export / Save → Paid Plan
Analyzer 页面 → Batch / Reports → Pro / Agency
```

---

## 14. 核心指标

### 14.1 Acquisition

- Organic clicks
- Landing page CVR
- Tool usage rate
- Signup rate

### 14.2 Activation

- TikTok URL submitted
- Transcript generated
- Product info submitted
- Brief generated
- Export clicked

### 14.3 Revenue

- Free → Paid conversion
- MRR
- ARPU
- Credit consumption
- Churn

### 14.4 Product Quality

- Brief regeneration rate
- User edit rate
- Export rate
- Saved brief rate
- User feedback score

---

## 15. MVP 上线范围

### V0.1：内部原型

- TikTok URL 输入
- Transcript 生成
- 简单 Ad Breakdown
- 简单 UGC Brief 生成
- Copy 输出

### V0.2：公开免费工具

- `/tiktok-transcript-generator`
- Transcript + on-screen text
- Hook preview
- 注册保存

### V0.3：付费 MVP

- `/ugc-brief-generator`
- 产品输入
- 15s / 30s UGC Brief
- PDF 导出
- Free / Starter / Pro 计费

### V0.4：Pro 功能

- Batch analysis
- Hook / Angle Matrix
- CSV export
- Project 保存

### V0.5：Agency 功能

- Workspace
- Client Projects
- White-label PDF
- Team seats

---

## 16. 技术实现建议

### 16.1 前端

- Next.js
- Tailwind CSS
- Shadcn UI
- Landing pages + App dashboard

### 16.2 后端

- Node.js / Python API
- PostgreSQL
- Redis queue
- Object storage for exports

### 16.3 AI / 多媒体处理

- Speech-to-text：Whisper / AssemblyAI / Deepgram
- OCR：视频帧抽样 + OCR
- LLM：用于 breakdown / rewrite / brief generation
- Export：PDF / DOCX generation

### 16.4 任务队列

生成流程可能较慢，建议异步任务：

```text
submit job
→ fetch/process video metadata
→ transcribe
→ OCR frames
→ LLM breakdown
→ LLM rewrite
→ generate brief
→ notify frontend
```

---

## 17. 风险与对策

### 风险 1：TikTok 链接获取不稳定

**对策：**

- 支持用户上传视频文件作为 fallback
- 支持粘贴 transcript
- 支持手动输入竞品脚本

### 风险 2：用户期待直接生成成片

**对策：**

- 明确定位为 Brief / Script / Shot List
- 后续可做 Video Draft，但不作为 MVP

### 风险 3：输出质量不稳定

**对策：**

- 固定 JSON 输出结构
- 提供模板化 brief
- 增加用户可编辑
- 每次输出多个版本

### 风险 4：版权与合规

**对策：**

- 不下载原视频
- 不复制竞品文案
- 不生成抄袭内容
- 明确免责声明

---

## 18. 首发版本验收标准

MVP 成功标准：

1. 用户可以粘贴 TikTok URL 并生成 transcript
2. 系统可以生成结构化 Ad Breakdown
3. 用户可以输入产品信息
4. 系统可以生成 15s 和 30s UGC Brief
5. 用户可以复制或导出 PDF
6. 免费用户可以体验完整流程一次
7. 付费墙出现在导出、批量和保存处
8. 首批 5 个 SEO 页面上线
9. 支持基础计费
10. 支持用户反馈收集

---

## 19. 最小首屏文案

### `/ugc-brief-generator`

Headline:

> Turn Competitor TikToks into UGC Ad Briefs

Subheadline:

> Paste a TikTok URL, add your product, and get hooks, angles, scripts, shot lists, and creator-ready briefs in seconds.

CTA:

> Generate Your Brief Now

---

### `/tiktok-transcript-generator`

Headline:

> Free TikTok Transcript Generator

Subheadline:

> Paste a TikTok URL and instantly extract spoken words, on-screen text, and a clean, copyable transcript.

CTA:

> Extract Transcript

Secondary CTA:

> Turn Transcript into UGC Brief

---

### `/tiktok-ad-analyzer`

Headline:

> Analyze Winning TikTok Ads at Scale

Subheadline:

> Uncover hooks, angles, offers, pacing, creator patterns, and creative opportunities across competitor TikToks.

CTA:

> Start Analyzing Free

---

## 20. 最终产品原则

1. **锋利，不泛化**：只服务 TikTok / UGC / 电商广告创意工作流。
2. **Brief > Script**：卖完整创意交付物，不卖普通 AI 文案。
3. **结构 > 抄袭**：学习广告结构，不复制原视频。
4. **先轻后重**：先做 transcript、breakdown、brief，后做 video draft。
5. **免费入口 + 付费工作流**：Transcript/Hook 免费，Brief/Batch/Export 付费。
6. **面向赚钱场景**：服务卖家、投手、agency，而不是泛 creator。

