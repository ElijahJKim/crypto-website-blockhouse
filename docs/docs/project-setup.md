# Project Setup Guide

## Clone and Install Dependencies

```sh
git clone https://github.com/your-repo/crypto-website.git
cd crypto-website
```

```sh
cd docs
npm install
cd ../web-app
npm install
```

## Run Development Server

```sh
at crypto-website-blockhouse

npm install &
npm install concurrently --save-dev

npm run dev
```

localhost:3000 → Crypto website

localhost:3001/docs/docs/project-setup → Website documentation

# API Integration

For this project, I used the **CoinCap API** to fetch cryptocurrency data.

## How the API is Integrated

1. Created a `useFetchCoin.js` file inside the `utils/` directory to handle API requests.
2. Used **async/await** to fetch data and managed the response using **React Query (`useQuery`)**.
3. In the `CryptoList` component, imported `useFetchCoin` and extracted `coins, isLoading, error, refetch` for use in the UI.

## API Fetching Logic (`utils/useFetchCoin.js`)

```tsx
import { useQuery } from "@tanstack/react-query";

const fetchCoinData = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets?limit=5");
  const result = await response.json();
  return result.data;
};

export function useFetchCoin() {
  return useQuery({ queryKey: ["crypto"], queryFn: fetchCoinData });
}
```

## Using API Data in CryptoList.jsx

# Why React Query?

## Why did I choose React Query over Zustand or Context API?

1. **Optimized for Next.js SSR (Server-Side Rendering) & SSG (Static Site Generation).**
2. **Specialized for handling asynchronous data fetching, caching, and refetching.**
3. **Automatically caches API requests and keeps data updated in real-time.**
4. **Provides `refetch` functionality, making it easy to get the latest data instantly.**

# Challenges & Solutions Faced While Building the Project

## Integrating Docusaurus with Next.js

One of the biggest challenges I faced was integrating **Docusaurus** with **Next.js** because I was using Docusaurus for the first time.  
Since I had been using React frequently, I encountered difficulties in linking Next.js with Docusaurus.

**Solution**

1. Configured `rewrites` in `next.config.mjs` to ensure Next.js correctly proxies Docusaurus requests:
   ```mjs
   export default {
     async rewrites() {
       return [
         {
           source: "/docs/:path*",
           destination: "http://localhost:3001/docs/:path*",
         },
       ];
     },
   };
   ```

## Another challenge was structuring the project folders in a way that kept Next.js and Docusaurus organized.

```
crypto-website/
│── docs/ # Docusaurus documentation
│ ├── docs/ # Documentation files (.md, .mdx)
│ ├── src/ # Docusaurus UI components
│ ├── docusaurus.config.js
│ ├── package.json
│── web-app/ # Next.js project
│ ├── app/ # Next.js pages
│ ├── components/ # UI components
│ ├── utils/ # API fetch functions
│ ├── styles/ # Stylesheets
│ ├── next.config.mjs # Next.js configuration
│ ├── package.json
```
