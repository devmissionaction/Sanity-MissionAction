export default {
  name: 'issue',
  title: 'Numéro',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
    name: 'description',
    title: 'Description du numéro',
    type: 'array',
    of: [{ type: 'block' }],
    },
    {
      name: 'articles',
      title: 'Articles dans ce numéro',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    },
    {
    name: 'stripePriceId',
    type: 'string',
    title: 'ID du prix Stripe',
    description: 'Copiez-collez ici l’identifiant du prix Stripe'
    }
    { name: 'pdfFile', 
      type: 'file', 
      title: 'PDF du numéro' 
    }

  ],
}
