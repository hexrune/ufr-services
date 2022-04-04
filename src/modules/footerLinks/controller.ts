import { Controller } from '../../types/module';
import { getLinks } from './service';

export const footerLinksController: Controller = [
    {
        method: 'GET',
        url: '/footer-links',
        handler: async () => getLinks(),
    },
];
