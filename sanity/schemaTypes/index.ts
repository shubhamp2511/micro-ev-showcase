import { type SchemaTypeDefinition } from 'sanity'
// sanity/schemaTypes/index.ts
import { vehicle } from './vehicle';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vehicle],
}
