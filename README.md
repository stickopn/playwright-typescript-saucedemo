# 🚀 Playwright TypeScript Automation Framework

Automated UI test framework built using **Playwright**, **TypeScript** and the **Page Object Model (POM)** design pattern.

This project demonstrates end-to-end test automation of the **SauceDemo** web application using clean automation practices and a scalable test structure.

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

## 📂 Project Structure

```text
playwright-typescript-saucedemo
│
├── pages
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutInfoPage.ts
│   ├── CheckoutOverviewPage.ts
│   └── CheckoutCompletePage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── invalid-login.spec.ts
│   ├── add-to-cart.spec.ts
│   ├── remove-from-cart.spec.ts
│   ├── checkout-missing-zip.spec.ts
│   ├── checkout-to-overview.spec.ts
│   ├── complete-checkout.spec.ts
│   ├── sort.spec.ts
│   └── logout.spec.ts
│
├── fixtures
├── utils
├── .github
│   └── workflows
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md

How to Run Tests

Run all tests:
npm run test

Run in headed mode:
npm run test:headed

Run Playwright UI mode:
npm run test:ui

Run on a specific browser:
npm run test:chromium
npm run test:firefox
npm run test:webkit

Run type checking:
npm run type-check

Reporting
After running tests, open the HTML report with:
npm run test:report