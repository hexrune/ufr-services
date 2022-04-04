import { scrapEditaisController } from './scrapEditais/controller';
import { helpController } from './help/controller';
import { footerLinksController } from './footerLinks/controller';

export default [...helpController, ...scrapEditaisController, ...footerLinksController];
