import type { Category, CategoryGroup, SearchResult } from '../lib/types';
import { GROUP_LABELS } from '../lib/types';

import { length } from './categories/length';
import { mass } from './categories/mass';
import { time } from './categories/time';
import { temperature } from './categories/temperature';
import { amountOfSubstance } from './categories/amountOfSubstance';
import { electricCurrent } from './categories/electricCurrent';
import { luminousIntensity } from './categories/luminousIntensity';
import { planeAngle } from './categories/planeAngle';
import { solidAngle } from './categories/solidAngle';

import { area } from './categories/area';
import { volume } from './categories/volume';
import { speed } from './categories/speed';
import { acceleration } from './categories/acceleration';
import { force } from './categories/force';
import { pressure } from './categories/pressure';
import { energy } from './categories/energy';
import { power } from './categories/power';
import { torque } from './categories/torque';
import { frequency } from './categories/frequency';
import { density } from './categories/density';
import { dynamicViscosity } from './categories/dynamicViscosity';
import { kinematicViscosity } from './categories/kinematicViscosity';
import { volumetricFlow } from './categories/volumetricFlow';
import { massFlow } from './categories/massFlow';
import { linearMomentum } from './categories/linearMomentum';
import { angularVelocity } from './categories/angularVelocity';
import { angularAcceleration } from './categories/angularAcceleration';
import { surfaceTension } from './categories/surfaceTension';

import { electricCharge } from './categories/electricCharge';
import { voltage } from './categories/voltage';
import { resistance } from './categories/resistance';
import { conductance } from './categories/conductance';
import { capacitance } from './categories/capacitance';
import { inductance } from './categories/inductance';
import { magneticField } from './categories/magneticField';
import { magneticFlux } from './categories/magneticFlux';
import { illuminance } from './categories/illuminance';
import { luminance } from './categories/luminance';
import { luminousFlux } from './categories/luminousFlux';

import { specificHeat } from './categories/specificHeat';
import { thermalConductivity } from './categories/thermalConductivity';
import { specificEntropy } from './categories/specificEntropy';

import { absorbedDose } from './categories/absorbedDose';
import { equivalentDose } from './categories/equivalentDose';
import { radioactivity } from './categories/radioactivity';

import { digitalStorage } from './categories/digitalStorage';
import { dataTransfer } from './categories/dataTransfer';
import { fuelConsumption } from './categories/fuelConsumption';
import { culinary } from './categories/culinary';

export const categories: Category[] = [
  length,
  mass,
  time,
  temperature,
  amountOfSubstance,
  electricCurrent,
  luminousIntensity,
  planeAngle,
  solidAngle,
  area,
  volume,
  speed,
  acceleration,
  force,
  pressure,
  energy,
  power,
  torque,
  frequency,
  density,
  dynamicViscosity,
  kinematicViscosity,
  volumetricFlow,
  massFlow,
  linearMomentum,
  angularVelocity,
  angularAcceleration,
  surfaceTension,
  electricCharge,
  voltage,
  resistance,
  conductance,
  capacitance,
  inductance,
  magneticField,
  magneticFlux,
  illuminance,
  luminance,
  luminousFlux,
  specificHeat,
  thermalConductivity,
  specificEntropy,
  absorbedDose,
  equivalentDose,
  radioactivity,
  digitalStorage,
  dataTransfer,
  fuelConsumption,
  culinary,
];

export const categoryMap = new Map(categories.map((c) => [c.id, c]));

export function getCategoryById(id: string): Category | undefined {
  return categoryMap.get(id);
}

export function getCategoriesByGroup(): { group: CategoryGroup; label: string; items: Category[] }[] {
  const groups = Object.keys(GROUP_LABELS) as CategoryGroup[];
  return groups.map((group) => ({
    group,
    label: GROUP_LABELS[group],
    items: categories.filter((c) => c.group === group),
  }));
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function searchCategoriesAndUnits(query: string): SearchResult[] {
  const q = normalize(query.trim());
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const category of categories) {
    const categoryMatch =
      normalize(category.name).includes(q) ||
      normalize(category.id).includes(q);

    if (categoryMatch) {
      results.push({
        categoryId: category.id,
        categoryName: category.name,
        matchType: 'category',
      });
    }

    for (const unit of category.units) {
      const unitMatch =
        normalize(unit.name).includes(q) ||
        normalize(unit.symbol).includes(q) ||
        normalize(unit.id).includes(q);

      if (unitMatch) {
        results.push({
          categoryId: category.id,
          categoryName: category.name,
          unitId: unit.id,
          unitName: unit.name,
          unitSymbol: unit.symbol,
          matchType: 'unit',
        });
      }
    }
  }

  return results.slice(0, 20);
}

export function getTotalUnitCount(): number {
  return categories.reduce((sum, c) => sum + c.units.length, 0);
}
