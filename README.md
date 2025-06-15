
# Learning Support Provider Directory

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/learning-support-library.git
cd learning-support-library
yarn install

### Run Locally
- yarn run dev

Defininition of react A React + TypeScript application built with Vite that allows users to browse, search, and view details about various Learning Support Providers. The app uses simulated API data and implements clean routing, filtering, and responsive design using modern React practices.

--

## 🚀 Features

- 📚 **Provider Listing Page**
  - Displays all learning support providers
  - Search functionality for provider names
  - Responsive design with mobile-first layout

- 🔍 **Provider Detail Page**
  - View detailed info about a specific provider
  - Navigation with `react-router-dom`

- ⚙️ **State Management**
  - Global state via Context API and Hooks
  - Data simulation with mock JSON

- 🧩 **Component Design**
  - Reusable components like `ProviderCard`, `SearchInput`, `Loader`
  - Modular structure and scalable file organization

---

## 🧱 Tech Stack

- React 19.1.0
- TypeScript
- Vite
- React Router DOM
- CSS Modules (modular styling applied throughout)
- Context API + React Hooks

---

## 🧭 Folder Structure
src/
├── api/
│ └── fetchProvider.ts # Simulated async fetch function
├── components/
│ ├── ProviderCard/
│ ├── SearchInput/
│ └── Loader/
├── contexts/
│ └── providerContext.tsx
├── data/
│ └── providers.json # Mock provider data
├── pages/
│ ├── ProviderListPage/
│ └── ProviderDetailPage/
├── App.tsx
└── main.tsx






---

## 🎨 Styling Notes

- Initially started with **global CSS**, but later transitioned to a **CSS Modules approach**.
- All components now use modular CSS files for **encapsulation and maintainability**.
- Responsiveness implemented through CSS Modules — tweaked for **mobile, tablet, and desktop** views.

---

## 📋 Commit & Branch Practices

- Used **feature branches** for every major component or styling refactor.
- Commit messages are atomic and meaningful:
  - `feat: add search input component`
  - `refactor: move to CSS Modules in ProviderCard`
  - `style: update responsive layout for small devices`
  - `chore: clean up unused styles`

---

