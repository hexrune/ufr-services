const { defineConfig } = require('vite');
const { VitePluginNode } = require('vite-plugin-node');

module.exports = defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5000,
    },

    plugins: [
        ...VitePluginNode({
            adapter: 'fastify',
            appPath: 'src/main.ts',
            exportName: 'ufrServices',
        }),
    ],
});
