const homePage = {
  name: 'homePage',
  type: 'document',
  title: 'Page d’accueil',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Image d’en-tête',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroAlt',
      type: 'string',
      title: 'Texte alternatif pour l’image',
    },
  ],
}

export default homePage
