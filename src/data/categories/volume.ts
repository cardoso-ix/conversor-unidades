import type { Category } from '../../lib/types';
import { linear } from '../../lib/unitHelpers';

export const volume: Category = {
  id: 'volume',
  name: 'Volume',
  group: 'mechanics',
  baseUnitId: 'm3',
  units: [
    linear('m3', 'm³', 'Metro cúbico', 1),
    linear('L', 'L', 'Litro', 0.001),
    linear('mL', 'mL', 'Mililitro', 1e-6),
    linear('cm3', 'cm³', 'Centímetro cúbico', 1e-6),
    linear('mm3', 'mm³', 'Milímetro cúbico', 1e-9),
    linear('kL', 'kL', 'Quilolitro', 1),
    linear('gal_us', 'gal US', 'Galão americano', 0.003785411784),
    linear('gal_uk', 'gal UK', 'Galão imperial', 0.00454609),
    linear('qt_us', 'qt US', 'Quarto americano', 0.000946352946),
    linear('pt_us', 'pt US', 'Pinta americana', 0.000473176473),
    linear('cup_us', 'xíc US', 'Xícara americana', 0.0002365882365),
    linear('floz_us', 'fl oz US', 'Onça fluida americana', 2.95735296e-5),
    linear('floz_uk', 'fl oz UK', 'Onça fluida imperial', 2.84130625e-5),
    linear('tbsp_us', 'cs US', 'Colher de sopa americana', 1.478676478125e-5),
    linear('tsp_us', 'cc US', 'Colher de chá americana', 4.92892159375e-6),
    linear('ft3', 'ft³', 'Pé cúbico', 0.028316846592),
    linear('in3', 'pol³', 'Polegada cúbica', 1.6387064e-5),
    linear('yd3', 'yd³', 'Jarda cúbica', 0.764554857984),
    linear('barrel', 'bbl', 'Barril de petróleo', 0.158987294928),
    linear('bushel_us', 'bu US', 'Bushel americano', 0.03523907016688),
  ],
};
