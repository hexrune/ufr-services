const path = require('path');
const { defineConfig } = require('vite');
const { VitePluginNode } = require('vite-plugin-node');

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'sei-scraper',
            fileName: (format) => `sei-scraper.${format}.js`,
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'fastify',
            appPath: 'src/main.ts',
            exportName: 'seiScraper',
        }),
    ],
});
