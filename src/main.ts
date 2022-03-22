import 'dotenv/config';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import controllers from './modules/controller';

const app = fastify();

app.register(fastifyCors, {
    origin: (process.env.URL as string).split(','),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});

controllers.forEach((controller) => app.route(controller));

if (import.meta.env.PROD) {
    app.listen(3000).then((url) => console.log(`Running with fastify on ${url}`));
}

export const seiScraper = app;
