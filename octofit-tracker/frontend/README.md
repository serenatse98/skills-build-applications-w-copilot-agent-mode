# OctoFit Tracker frontend

The presentation tier is a React 19 application served by Vite. It reads the
API host from `VITE_CODESPACE_NAME` and requests resources from
`https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/`.

Define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local` before
starting Vite, for example:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When the variable is unset, the app safely falls back to
`http://localhost:8000/api` for local development.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
