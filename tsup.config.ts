import {defineConfig} from 'tsup';

export default defineConfig({
    entryPoints: ['src/index.ts'],
    bundle: true,
    dts: false,
    outDir: 'dist',
    target: ['node16', 'node18'],
    platform: 'node',
    minify: true,
});
