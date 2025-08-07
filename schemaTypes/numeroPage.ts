export default {
  name: 'numeroPage',
  type: 'document',
  title: 'Page Numéros',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Image de couverture',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        },
      ],
    },
  ],
}
