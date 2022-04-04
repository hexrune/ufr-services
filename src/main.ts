import 'dotenv/config';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import controllers from './modules/controllers';

const app = fastify();

const allowedOrigins = [
    'https://ufr.edu.br',
    'https://suap.ufr.edu.br',
    'https://sip.ufr.edu.br',
    'https://sei.ufr.edu.br',
];

app.register(fastifyCors, {
    origin: process.env.NODE_ENV === 'production' ? allowedOrigins : ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});

controllers.forEach((controller) => app.route(controller));

if (process.env.NODE_ENV === 'production') {
    app.listen(3000).then((url) => console.log(`Running with fastify on ${url}`));
}

export const seiScraper = app;
