# IoE Machine Economy

A unified SDK and "Mission Control" interface bridging **DePIN** (Decentralized Physical Infrastructure Networks) and **AI Agents** on the **Arc blockchain**.

---

## 1. Vision

This project serves as both an institutional showcase and an operational dashboard for autonomous machine fleets. It is built on the philosophy of **"Calm Tech"**—futuristic yet understated, inspiring trust and security without gamification.

### Core Objectives
- **Unification**: Seamless integration of physical infrastructure and AI agents.
- **Financial Layer**: Native support for USDC and Arc blockchain transactions.
- **Operational Reality**: Real-time monitoring and control of decentralized nodes.

---

## 2. Technology Stack

Built with cutting-edge tools for performance, scalability, and developer experience.

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Elements**: [Spline](https://spline.design/) (@splinetool/react-spline)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 3. Design System & Identity

### Philosophy
**"Calm Tech" 2026**. The interface is designed to be informative and professional. It prioritizes data clarity and operational awareness over flashy distractions.

### Theme: Dark Mode First (Strict)
- **Backgrounds**: `Slate-900` (#0f172a) or `Zinc-950` (#09090b). **No white backgrounds.**
- **Accents**:
  - **Financial**: USDC Blue / Electric Cyan (#2775CA / #00E3FF).
  - **Operational**: Neon Mint (#00FFA3) for active agents and success states.
  - **Alerts**: Neon Red/Orange for disconnected nodes.

### Typography
- **Headings**: `Inter` or `Space Grotesk`
- **Body**: `Inter`
- **Data/Logs**: `JetBrains Mono`

---

## 4. Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ioe-ecosystem
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 5. Project Structure

```bash
ioe-ecosystem/
├── app/                # Next.js App Router (Pages & Layouts)
├── public/             # Static assets (Images, Fonts)
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── next.config.ts      # Next.js configuration
```

---

## 6. Development Guidelines

- **Component Strictness**: Use the Design System tokens. Do not introduce arbitrary colors or fonts.
- **Type Safety**: Avoid `any`. Ensure all props and data structures are strictly typed.
- **Performance**: Optimize 3D assets and animations to ensure a smooth 60fps experience.
- **Linting**: Run `npm run lint` before committing to ensure code quality.

---

## 7. License

Private. Copyright © 2026 Isma De Hory. All Rights Reserved.
