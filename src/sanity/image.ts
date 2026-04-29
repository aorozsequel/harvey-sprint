import createImageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from './env'

const builder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export function urlFor(source: SanityImageSource) {
  return builder ? builder.image(source).auto('format').fit('max') : null
}
