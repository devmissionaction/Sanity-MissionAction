export default {
  name: 'teamMember',
  title: 'Membre de l’équipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom complet',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Fonction',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Présentation',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
