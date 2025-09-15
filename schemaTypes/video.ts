import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Vidéo Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la vidéo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien vers la vidéo Instagram',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['https']
      }),
      description: 'Le lien complet vers le Reel ou la vidéo sur Instagram.'
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true, 
      },
      validation: (Rule) => Rule.required(),
      description: 'L\'image à afficher sur le site pour représenter la vidéo. Elle doit être au format 1:1 pour une meilleure présentation.'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
})