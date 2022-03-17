import { Controller } from '../../types/module';
import { getRouteHelp } from './service';

export const helpController: Controller = [
    {
        method: 'GET',
        url: '/',
        handler: async (_request, reply) => {
            try {
                const data = await getRouteHelp();

                reply.send(data);
            } catch (e: any) {
                reply.code(500).send({ error: true, message: e?.message });
            }
        },
    },
];
