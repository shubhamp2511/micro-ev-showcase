// sanity/schemaTypes/vehicle.ts
import { defineType, defineField } from 'sanity';

export const vehicle = defineType({
  name: 'vehicle',
  title: 'EV Models',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Vehicle Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'mainImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'topSpeed', title: 'Top Speed (mph/kmh)', type: 'string' }),
    defineField({ name: 'range', title: 'Battery Range (miles/km)', type: 'string' }),
    defineField({ name: 'chargeTime', title: 'Charge Time (hours)', type: 'string' }),
    defineField({ name: 'motorPower', title: 'Motor Output (Watts)', type: 'string' }),
    defineField({ name: 'brochurePdf', title: 'Downloadable Spec Sheet (PDF)', type: 'file' }),
  ],
});