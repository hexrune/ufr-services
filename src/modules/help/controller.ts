import { Controller } from '../../types/module';
import { getRouteListHelp } from './service';

const helpController: Controller = [
    {
        method: 'GET',
        url: '/',
        handler: async (_request, reply) => {
            try {
                const data = await getRouteListHelp();

                reply.send(data);
            } catch (e: any) {
                reply.code(500).send({ error: true, message: e?.message });
            }
        },
    },
];

export default helpController;
