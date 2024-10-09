import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artista',
  title: 'Artista',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'rg',
        type: 'string',
    }),
    defineField({
        name: 'cpf',
        type: 'string',
    }),
  ],
})