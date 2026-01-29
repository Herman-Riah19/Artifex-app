Parfait 👍
Voici une **réécriture complète du fichier `README.md`**, cohérente avec la **réalité du projet Artifex** : **Bun monorepo**, **architecture microservices**, **Turborepo**, avec **apps (`api`, `web`, `docs`)** et **packages partagés**.
Le ton est **professionnel, clair, et prêt pour GitHub**.

---

# ⚡ Artifex Monorepo

Artifex is a **modern Bun-based monorepo** built with a **microservices-oriented architecture** and orchestrated using **Turborepo**.
It is designed to manage **multiple applications and shared packages** within a single repository, enabling **parallel development**, **code reuse**, and **high scalability**.

The project includes a backend API, a web application, and a documentation site, all sharing common configurations and UI components.

---

## 🚀 Key Features

✅ **Bun runtime & package manager** — fast installs and execution
✅ **Monorepo architecture** — apps and shared packages in one repository
✅ **Turborepo** — parallel development, builds, and caching
✅ **Microservices-ready** — clean separation between services
✅ **Shared UI system** — reusable components built with Shadcn UI
✅ **Shared configurations** — centralized ESLint and TypeScript configs
✅ **Scalable structure** — easy to add new apps or packages
✅ **Developer-friendly** — consistent DX across all services

---

## 📁 Project Structure

```
artifex/
│
├── apps/
│   ├── api/             # Backend microservices (Bun-based)
│   ├── web/             # Main web application
│   └── docs/            # Documentation application
│
├── packages/
│   ├── ui/              # Shared UI components (Shadcn UI)
│   ├── eslint-config/   # Shared ESLint configuration
│   └── ts-config/       # Shared TypeScript configuration
│
├── turbo.json           # Turborepo task orchestration
├── bun.lockb
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Herman-Riah19/artifex.git
cd artifex
```

### 2️⃣ Install dependencies

```bash
bun install
```

### 3️⃣ Run development mode (parallel)

```bash
bun dev
```

This command uses **Turborepo** to start all applications (`api`, `web`, `docs`) **in parallel**.

---

## 🧩 Applications Overview

### 🛠 `apps/api`

* Backend microservices powered by **Bun**
* Designed for REST or GraphQL APIs
* Business logic and service orchestration layer

### 🌐 `apps/web`

* Main web application
* Consumes the API services
* Uses shared UI components from `packages/ui`

### 📚 `apps/docs`

* Documentation site for the platform
* Technical guides, architecture notes, and usage instructions
* Shares the same UI system for visual consistency

---

## 🧰 Shared Packages

### 🎨 `packages/ui`

* Shared UI component library
* Built using **Shadcn UI**, **Radix UI**, and **Tailwind CSS**
* Used across `web` and `docs` apps

### 🧹 `packages/eslint-config`

* Centralized ESLint rules
* Ensures consistent code quality across all apps

### 🧠 `packages/ts-config`

* Shared TypeScript configurations
* Enforces consistent typing and compiler options

---

## ⚡ Turborepo Usage

Artifex leverages Turborepo for:

* Parallel execution of dev servers
* Optimized build pipelines
* Task dependency management
* Incremental caching for faster builds

Example:

```bash
bun dev
bun build
bun lint
```

---

## 🧱 Tech Stack

* **Runtime & Package Manager**: Bun
* **Monorepo Tooling**: Turborepo
* **Frontend**: Next.js, Tailwind CSS
* **UI System**: Shadcn UI
* **Backend**: Bun-based microservices
* **Linting**: ESLint
* **Typing**: TypeScript

---

## 🤝 Contributing

Contributions are welcome 🚀

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "feat: add new feature"
   ```
4. Push the branch and open a Pull Request

Please ensure your code follows the shared ESLint and TypeScript rules.

---

## 📜 License

MIT License © 2025 — [Hermann Razafindranaivo](https://github.com/Herman-Riah19)

---

## 💬 Contact

For questions, ideas, or collaboration:

* 🧩 GitHub Issues: Open an issue
* 📧 Email: *[contact@riah.dev](mailto:contact@riah.dev)* *(optional)*
* 🌍 Website: *[https://riah.dev](https://riah.dev)* *(optional)*

---

> ⚙️ **Artifex** — A scalable Bun monorepo foundation for modern microservice-driven applications.
