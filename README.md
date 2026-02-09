
# mdhashim.com

This project is built in Angular, a personal portfolio website and its server-side rendering (SSR) support.

# Summary: 
Angular (TypeScript) application with optional SSR using Express. The app is organized under `src/` and built with the Angular CLI.

## Key Points

- **Framework:** Angular
- **Language:** TypeScript
- **SSR:** Angular Universal / Express (server bundle in `dist/`)
- **Build tooling:** Angular CLI (npm scripts configured in `package.json`)

## Versions

- **Angular:** 20.x — project dependencies include `@angular/core` ^20.1.0, `@angular/ssr` ^20.2.2, and `@angular/cli` ^20.1.6
- **Node.js:** Recommended 20.x — development uses `@types/node` ^20.17.19 (use Node 20 LTS for development/build)

## Project layout
```
- angular.json               - Angular workspace config
- package.json               - npm scripts & dependencies
- src/                      - Application source (client + server entry points)
   - main.ts                 - Browser bootstrap
   - main.server.ts          - Server bootstrap for SSR
   - server.ts               - Express server (SSR hosting)
   - build-version.js        - build helper script
   - view/                   - app views and components
   - bloc/                   - app blocs and directives
- public/                   - static assets served by the app

```

Open the `src/` folder for app-specific components, routes, and styles.

## Useful npm scripts

- `npm install` — install dependencies
- `npm start` — runs `ng serve` (development server)
- `npm run build` — builds the app (development build)
- `npm run build-app` — runs `node src/build-version.js` and builds a production bundle
- `npm run watch` — rebuilds on change (development watch)
- `npm test` — runs unit tests
- `npm run serve:ssr:mdhashim` — run the production / built SSR server bundle (`node dist/mdhashim/server/server.mjs`)

## Local development

1. Install dependencies:

```bash
npm install
```

2. Run dev server (live-reload):

```bash
npm start
```

3. Build production (static + server bundle):

```bash
npm run build-app
# after a successful build you can run the server bundle:
npm run serve:ssr:mdhashim
```

## Notes on SSR

The repository includes server entrypoints (`main.server.ts`, `server.ts`) and a script to launch the server bundle from `dist/`. Use `build-app` to create a production build suitable for SSR.

## Contributing

Contributions not accepted :)

## License

This project is available under the MIT License.

