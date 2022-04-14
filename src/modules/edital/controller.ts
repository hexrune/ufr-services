import { Controller } from '../../types/module';
import { getEditals } from './service';

export const editalController: Controller = [
    {
        method: 'GET',
        url: '/editais',
        handler: async (_request, reply) => {
            try {
                const data = await getEditals();

                reply.send(data);
            } catch (e: any) {
                reply.code(500).send({ error: true, message: e?.message });
            }
        },
    },
];
