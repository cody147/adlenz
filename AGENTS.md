<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Agent Rules

## Language & Style

- 默认用中文和用户沟通；网站文案、代码、变量名、组件名默认用英文。
- 回答和实施要简洁、结构化，优先给可执行的命令、代码、步骤。
- 避免空泛理论，结合当前项目上下文给出落地方案。
- 优先级：安全 > 正确性 > 结构化 > 简洁。
- 不确定时尽量基于现有信息做合理假设并说明；只有不澄清会明显走错方向时才追问。

## UI / Page Development

- 新页面实现前，先梳理页面模块、组件拆分和文件路径，再写代码。
- `app/**/page.tsx` 只负责拼装布局和引用 feature/components，避免写成 200 行以上的大组件。
- 通用展示组件放在 `frontend/components/`。
- 业务相关 UI 放在 `frontend/features/<feature>/components/`。
- 页面组件优先使用 Server Components；只有需要状态、事件、浏览器 API 时才使用 Client Components。

## Default Tech Stack

在用户未说明其他技术栈时，默认使用：

- 包管理器：使用 `npm`，不要新增 `pnpm-lock.yaml` 或 `yarn.lock`。
- TypeScript
- Next.js App Router
- React
- Tailwind CSS
- Shadcn UI + Radix UI（按需安装/生成组件）
- Drizzle ORM + PostgreSQL
- Vercel for app deployment
- Cloudflare R2 for object storage

注意：当前项目刚初始化，很多 SaaS 依赖尚未安装。上述技术栈是添加对应功能时的默认选择；实现前必须先确认 `package.json`，缺什么再安装什么，不要直接 import 未安装的包。

## SaaS Infrastructure Choices

涉及数据库、登录、支付、积分/订阅等 SaaS 基础设施时，默认采用以下技术选型，并结合本项目实际裁剪：

- Database: PostgreSQL + Drizzle ORM + `postgres` driver.
- Auth: Better Auth, route mounted at `app/api/auth/[...better-auth]/route.ts`.
- Payments: Creem checkout, billing portal, and webhook.
- Billing model: subscription plans + credit ledger + monthly/annual billing cycle support.
- Storage: Cloudflare R2 / S3-compatible object storage via AWS S3 SDK.
- Validation: Zod for request payloads and server env validation.
- Env: private server env must stay server-only; browser-readable values must use `NEXT_PUBLIC_*`.
- Webhooks: payment webhooks must verify signatures before mutating billing, credits, or orders.
- Cron/internal jobs: protect with bearer/basic auth; do not expose unauthenticated maintenance routes.

## Architecture & Folder Conventions

本项目当前使用 root `app/` 结构，不使用 `src/app/`。默认采用以下分层，可按项目实际裁剪：

```text
app/                        # Next.js App Router: pages, layouts, and API thin layer
  (marketing|dashboard)/    # optional route groups
  api/**/route.ts           # auth/validation, then call backend use cases
frontend/                   # client/SSR-safe frontend code
  components/               # reusable UI
  features/<feature>/       # feature components, hooks, client logic
  auth/                     # frontend auth client
  utils/                    # frontend-safe utilities
backend/                    # server-only code; client must not import this
  config/                   # env validation and runtime config
  infra/                    # db/auth/payments/storage/providers
    db/                     # Drizzle schema/client/repositories
    auth/                   # auth server/config
    creem/                  # Creem client/webhook helpers
    storage/                # R2/S3-compatible storage helpers
  features/<domain>/        # use cases, types, provider wrappers
    service.ts
    types.ts
    provider.ts
drizzle.config.ts           # Drizzle config when database is added
drizzle/                    # generated migrations when migrations are used
```

Rules:

- `app/**` 只做路由层：放 `page.tsx`、`layout.tsx`、`loading.tsx`、`not-found.tsx`、`error.tsx`、`api/**/route.ts` 等 Next.js 路由文件。
- 不在 `app/**` 里沉淀共享 UI；共享组件放 `frontend/components/`，业务组件放 `frontend/features/<feature>/components/`。
- Shadcn UI 组件统一生成/放置到 `frontend/components/ui/`。
- 前端只 import `@/frontend/**` 或同层安全组件，禁止 import `@/backend/**`。
- 当前 `@/*` 指向项目根目录；因此 `@/frontend/*`、`@/backend/*`、`@/app/*` 可直接对应根目录分层。
- API routes 只做鉴权、输入校验和 HTTP 响应映射，业务逻辑放 `backend/features/**/service.ts`。
- 服务端私密 env 统一经 `backend/config/env` 用 Zod 校验；客户端只能使用 `NEXT_PUBLIC_*`。
- Drizzle schema/client 放 `backend/infra/db`；业务用例通过 repository/service，不在页面里直接操作 db client。
- 三方集成封装在 `backend/features/<domain>/provider.ts` 或 `backend/infra/<provider>/`。
- 客户端专用文件可加 `.client.tsx`；后端专用辅助可加 `.server.ts`。
