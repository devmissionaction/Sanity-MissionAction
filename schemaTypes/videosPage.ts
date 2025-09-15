export default {
  name: 'videosPage',
  type: 'document',
  title: 'Page video',
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
