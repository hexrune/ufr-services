import { helpController } from './help/controller';
import { footerLinksController } from './footerLinks/controller';
import { editalController } from './edital/controller';

export default [...helpController, ...editalController, ...footerLinksController];
