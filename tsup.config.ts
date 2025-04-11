import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ['./src/index.ts'],
    bundle: true,
    skipNodeModulesBundle: true,
    format: ['esm'],
    shims: true,
    silent: true,
    minify: false,
    keepNames: true
});