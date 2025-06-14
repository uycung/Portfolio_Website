# Project Rules & Setup Guide

This document outlines the essential configuration and setup process for creating a React + Tailwind CSS project using Vite. Following these guidelines ensures a stable development environment free from common configuration issues.

## Core Principles

### 1. Build Tool
- **Vite**: Our chosen build tool for React projects
- Benefits:
  - Enhanced development speed
  - Streamlined configuration
  - Superior to Create React App

### 2. Version Management
- **Dependency Versioning**: All packages pinned to latest stable releases
- **Compatibility Focus**: Ensures smooth integration between all components

### 3. Configuration Philosophy
- **Minimalist Approach**: Clean, efficient setup
- **Standard Practices**: Uses official plugins
- **Structured Organization**: Follows recommended patterns

## Required Dependencies

| Package           | Version    | Purpose                    |
|------------------|------------|----------------------------|
| React            | ^18.2.0    | Core Framework            |
| Tailwind CSS     | ^3.4.4     | Utility-First CSS         |
| PostCSS          | ^8.4.38    | CSS Processing            |
| Autoprefixer     | ^10.4.19   | Cross-Browser Support     |
| Vite             | ^5.3.1     | Build Tool               |
| Vite React       | ^4.3.1     | React Integration        |

## Step-by-Step Setup Process

Follow these steps exactly to create the project foundation.

### Step 1: Create the Vite + React Project

First, create a new React project using the Vite CLI.

```
npm create vite@latest your-project-name -- --template react
```

Navigate into the newly created project directory:

```
cd your-project-name
```

### Step 2: Install Tailwind CSS Dependencies

Next, install Tailwind CSS and its peer dependencies (postcss, autoprefixer).

```
npm install -D tailwindcss postcss autoprefixer
```

### Step 3: Generate Configuration Files

Generate the necessary tailwind.config.js and postcss.config.js files. The -p flag is essential.

npx tailwindcss init -p

### Step 4: Configure Tailwind's Template Paths

Open the generated tailwind.config.js file and modify the content array. This tells Tailwind which files to scan for utility classes, which is crucial for purging unused styles in production.

File: `tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5: Add Tailwind Directives to CSS

Open the src/index.css file. Remove all existing CSS and add the three main Tailwind CSS @tailwind directives. These directives inject Tailwind's base, component, and utility styles into your project.

File: `src/index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Note: Ensure this index.css file is imported in your main entry file, src/main.jsx. Vite does this by default.

### Step 6: Final Check and Run

Your project is now configured correctly. Install all Node modules and start the development server.

```
npm install
npm run dev
```

The application should now be running with Tailwind CSS properly configured, avoiding the common PostCSS errors. All subsequent development should build upon this stable foundation.