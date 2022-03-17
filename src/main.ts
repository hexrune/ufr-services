import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import controllers from './modules/controller';

const app = fastify();

app.register(fastifyCors, {
    origin: process.env.NODE_ENV === 'production' ? 'https://www.example.com' : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});

controllers.forEach((controller) => app.route(controller));

if (import.meta.env.PROD) {
    void app.listen(3000);
}

export const seiScraper = app;
