import { Controller } from '../../types/module';
import { scrapForEditals } from './service';

const editalController: Controller = [
    {
        method: 'GET',
        url: '/edital',
        handler: async (_request, reply) => {
            try {
                const data = await scrapForEditals();

                reply.send(data);
            } catch (e: any) {
                reply.code(500).send({ error: true, message: e?.message });
            }
        },
    },
];

export default editalController;
