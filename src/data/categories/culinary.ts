import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const culinary: Category = {
  id: 'culinary',
  name: 'Medidas culinárias',
  group: 'everyday',
  baseUnitId: 'mL',
  units: [
    linear('mL', 'mL', 'Mililitro', 1),
    linear('L', 'L', 'Litro', 1000),
    linear('tsp_br', 'cc BR', 'Colher de chá (BR)', 5),
    linear('tbsp_br', 'cs BR', 'Colher de sopa (BR)', 15),
    linear('cup_br', 'xíc BR', 'Xícara (BR)', 240),
    linear('tsp_us', 'cc US', 'Colher de chá (EUA)', 4.92892159375),
    linear('tbsp_us', 'cs US', 'Colher de sopa (EUA)', 14.78676478125),
    linear('cup_us', 'xíc US', 'Xícara (EUA)', 236.5882365),
    linear('floz_us', 'fl oz', 'Onça fluida (EUA)', 29.5735295625),
    linear('floz_uk', 'fl oz UK', 'Onça fluida (UK)', 28.4130625),
    linear('pint_us', 'pt US', 'Pinta (EUA)', 473.176473),
    linear('pint_uk', 'pt UK', 'Pinta (UK)', 568.26125),
    linear('dash', 'dash', 'Dash', 0.616115),
    linear('pinch', 'pinch', 'Pinch', 0.3080575),
  ],
};
