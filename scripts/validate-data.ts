// Standalone data validation runner (also used by npm run check:content).
// Imports the central data module, which throws on any schema violation.
import { services, specialties, locations, software, payers, solutions, costPages, comparisons, combos } from '../src/data/index';

console.log('✓ All content data validated');
console.log(`  services: ${services.length}`);
console.log(`  specialties: ${specialties.length}`);
console.log(`  locations: ${locations.length}`);
console.log(`  software: ${software.length}`);
console.log(`  payers: ${payers.length}`);
console.log(`  solutions: ${solutions.length}`);
console.log(`  cost pages: ${costPages.length}`);
console.log(`  comparisons: ${comparisons.length}`);
console.log(`  combos: ${combos.length} (indexable: ${combos.filter(c => c.indexable).length})`);
