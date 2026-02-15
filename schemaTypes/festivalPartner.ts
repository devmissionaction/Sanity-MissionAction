// Schéma Sanity pour les partenaires du festival
// À importer dans votre projet Sanity Studio

export default {
  name: 'festivalPartner',
  title: 'Partenaire Festival',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du partenaire',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'url',
      title: 'Site web (optionnel)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      description: 'Plus le nombre est petit, plus le partenaire apparaît en premier.',
    },
  ],
  orderings: [
    { title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Date de création', name: 'createdDesc', by: [{ field: '_createdAt', direction: 'desc' }] },
  ],
}
