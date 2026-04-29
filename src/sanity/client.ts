import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

const isDev = process.env.NODE_ENV === 'development'

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: !isDev })
  : null

export async function sanityFetch<T>(query: string): Promise<T[]> {
  if (!client) return []
  return client.fetch<T[]>(query, {}, { next: { revalidate: isDev ? 0 : 60 } })
}
