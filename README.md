## 💣 Minesweeper Game

A classic Minesweeper game built with **React**, **TypeScript**, and **Redux** for state management. Features clean, modular architecture, scalable component design, and unit testing with **Jest**.


---

## 📑 Table of Contents

- [🎯 Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [🏗️ Project Structure](#-project-structure)
- [🧪 Testing](#-testing)
- [🧠 Gameplay Logic](#-gameplay-logic)
- [📦 Technologies Used](#-technologies-used)
- [🔧 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Features

- ⚛️ Built with React and TypeScript
-  Responsive grid layout
-  Probability-based mine placement
- 🔁 Undo/Redo logic (coming soon)
- 🧪 Unit tested with Jest
- 🗃️ Redux-powered state management
- 🎨 Dynamic tile color feedback
- 📊 Uses `console.table` for dev grid debugging
- ⏱️ Timer and mine counter (optional feature toggle)

---

##  Getting Started

### Prerequisites

- Node.js >= 16
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/minesweeper-react.git
cd minesweeper-reac
npm install
# or
yarn

```

```bash 
npm run dev
# or
yarn dev


```

## Project Structure

coverage
├── lcov-report 
├── lcov.info
eslint.config.js
index.html
jest.config.js
package-lock.json
package.json
postcss.config.mjs
public
README.md
src
├── App.tsx
├── assets
├── helpers
│   ├── BoardTypes.tsx
├── index.css
├── jest.setup.ts
├── main.tsx
├── mocks
│   ├── fileMock.js
├── test
│   ├── Board.test.ts
├── vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts


# Run all test

```bash
npm run test
# or
yarn test
```

## Game Logic

- The board is generated with a size and density parameter.
- Mines are placed randomly based on a probability check.

# On reveal:
If tile is a bomb → Game Over
If not:
Count adjacent mines
If 0 → Recursively reveal surrounding tiles

# Win condition:

All non-bomb tiles are revealed
Field generation uses basic probability math, not complex algorithms.

## 🔧 Contributing
Fork the repository

Create a feature branch: 

```bash
git checkout -b feature-name
git commit -m "feat: added something"
git push origin feature-name
```

Open a Pull Request

We welcome contributions for:
- New features
- Bug fixes
- Tests
- UI improvements

## 📄 License
This project is licensed under the MIT License 

