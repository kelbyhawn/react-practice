# react-practice

[![Netlify Status](https://api.netlify.com/api/v1/badges/50b19367-6a2c-4b69-9e86-121724116adf/deploy-status)](https://app.netlify.com/sites/kh-react-sandbox/deploys)

Learning React with a mix of components and dependencies.

[kh-react-sandbox.netlify.app](https://kh-react-sandbox.netlify.app/)

Includes:

- Shopping list
- Cat pics generator (😺)
- Fetch example
- Mapbox map
- Basic form

## Dependencies

- [React](https://reactjs.org/) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - The React framework for the web.
- [Sass](https://www.npmjs.com/package/sass) - CSS with superpowers.
- [clsx](https://www.npmjs.com/package/clsx) - A tiny (228B) utility for constructing `className` strings conditionally.
- [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) - Interactive, thoroughly customizable maps in the browser
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) - 📋 React Hooks for form state management and validation (Web + React Native)

## Mapbox Setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_MAPBOX_TOKEN` with your Mapbox public token (`pk...`).
3. Restart the dev server after changing `.env.local`.
