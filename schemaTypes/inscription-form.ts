import { defineField, defineType } from 'sanity'

export default defineType(
  {
    name: 'tallyId',
    title: 'ID du formulaire Tally',
    type: 'string',
    description: 'Le code à la fin de l’URL Tally (ex: wM7a8y)'
  }
)
