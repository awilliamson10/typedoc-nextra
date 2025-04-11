**This project has been replaced by [micro-docgen](https://github.com/neplextech/micro-docgen)**

---

# typedoc-nextra

Generate markdown/simple json from TypeDoc.

## Installation

```bash
npm install typedoc-nextra
# or
yarn add typedoc-nextra
```

## Requirements
- Node.js 16 or higher
- TypeScript 5.0 or higher
- TypeDoc 0.28.2 or higher

## ESM Migration Notice
As of version 0.2.0, this package has been migrated to ESM (ECMAScript Modules) to align with the latest TypeDoc version which now uses ESM. If you're upgrading from an earlier version, you'll need to ensure your project is compatible with ESM:

1. Make sure your `package.json` includes `"type": "module"` or use the `.mjs` extension for your files.
2. Update your import statements to use the `.js` extension with relative imports (e.g., `import { example } from './example.js'`).
3. If you were using CommonJS `require()`, you'll need to migrate to ESM `import` syntax.

## Usage

```typescript
import { createDocumentation } from 'typedoc-nextra';

const documentation = await createDocumentation({
  input: ['./src/index.ts'], // Input files (TypeScript)
  output: './docs', // Output directory for markdown (optional)
  markdown: true, // Generate markdown
  spaces: 2 // JSON spaces
});

console.log(documentation);
```

## License

MIT

# Output Directory Structure

-   output/
    -   classes/
        -   module/
            -   class.mdx
    -   types/
        -   module/
            -   type.mdx
    -   custom/
        -   file.mdx

# Example

```js
import { createDocumentation } from 'typedoc-nextra';

await createDocumentation({
    // use existing typedoc json output (leave it blank to auto generate)
    jsonInputPath: `${__dirname}/data.json`,
    // output location
    output: `${__dirname}/pages`,
    // output markdown
    markdown: true
});
```
