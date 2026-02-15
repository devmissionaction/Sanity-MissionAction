// Schéma Sanity pour la page "Le Festival"
// À importer dans votre projet Sanity Studio (sanity.config.ts ou schemas/index.ts)

export default {
  name: 'festivalPage',
  title: 'Page Le Festival',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Image hero',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Texte alternatif' },
      ],
    },
    {
      name: 'introduction',
      title: 'Présentation du festival',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Texte affiché à côté de l’affiche.',
    },
    {
      name: 'poster',
      title: 'Affiche du festival',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Texte alternatif' },
      ],
    },
    {
      name: 'programme',
      title: 'Programme',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Contenu du programme (dates, horaires, événements…).',
    },
    {
      name: 'inscriptionUrl',
      title: "Lien d'inscription",
      type: 'url',
      description: 'URL du formulaire d’inscription (Google Form, Typeform, etc.).',
    },
    {
      name: 'inscriptionLabel',
      title: "Texte du bouton d'inscription",
      type: 'string',
      description: 'Ex : "S\'inscrire en ligne". Laisser vide pour utiliser le texte par défaut.',
    },
  ],
}
