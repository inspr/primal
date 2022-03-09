## 🎉 Getting Started
###  Primitives
The primitives library is a component library for Nextjs created by the Inspr team!

To use our primitives library, run the following npm command:

```bash
npm i @primal/icons @primal/state @primal/theme @primal/primitives
```

This package has as peerDepencies the following:
```json
"@emotion/react": "^11.7.1",
"@emotion/styled": "^11.6.0",
"next": "^12.0.8",
"react": "^17.0.2",
"react-dom": "^17.0.2"
```

Since npm does not install them automatically, you can do:
```bash
npm i @emotion/react@11.1.4 @emotion/styled@11.6.0 react react-dom next
```

Or, if you start your Next application with:

```bash
npx create-next-app website --ts
```

Then you can only install emotion after that!

Finally, when you create your Next application you need to tell Next to transpile some of our libraries, since they were done in Typescript! To do that you can install the [Next Transpile Modules](https://www.npmjs.com/package/next-transpile-modules). To that, run the command:

```bash
npm i next-transpile-modules
```

And in your next.config.js add:
```js
const withTM = require("next-transpile-modules")([
    "@primal/state",
    "@primal/theme",
    "@primal/primitives",
])

module.exports = withTM({})
```

After that your project should be able to use our amazing primitives building blocks (hoooray ✨).