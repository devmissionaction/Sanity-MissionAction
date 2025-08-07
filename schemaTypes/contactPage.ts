export default {
  name: 'contactPage',
  type: 'document',
  title: 'Page contact',
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
