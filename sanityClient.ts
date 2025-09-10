import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2025-08-14', 
  useCdn: false, // toujours false pour les données à jour
  token: process.env.SANITY_API_TOKEN, // nécessaire pour lire les fichiers
})
