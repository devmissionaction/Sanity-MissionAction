export default {
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroAlt',
      title: 'Texte alternatif',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
