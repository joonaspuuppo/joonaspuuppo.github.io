import { useEffect } from 'react'

interface PageMeta {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

/**
 * Sets document title and Open Graph / Twitter Card meta tags for the current page.
 * Tags created by this hook are removed on unmount. Pre-existing tags have their
 * content updated and restored to the original value on unmount.
 */
const usePageMeta = ({
  title,
  description,
  image,
  url,
  type = 'website',
}: PageMeta) => {
  useEffect(() => {
    const prevTitle = document.title
    if (title) document.title = title

    const tags: Record<string, string> = {}
    if (title) {
      tags['og:title'] = title
      tags['twitter:title'] = title
    }
    if (description) {
      tags['og:description'] = description
      tags['twitter:description'] = description
    }
    if (image) {
      tags['og:image'] = image
      tags['twitter:image'] = image
      tags['twitter:card'] = 'summary_large_image'
    }
    if (url) tags['og:url'] = url
    if (type) tags['og:type'] = type

    const added: HTMLMetaElement[] = []
    const restored: Array<{ el: HTMLMetaElement; prev: string }> = []

    for (const [property, content] of Object.entries(tags)) {
      const attr = property.startsWith('twitter:') ? 'name' : 'property'
      let el = document.querySelector<HTMLMetaElement>(
        `meta[${attr}="${property}"]`
      )
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, property)
        document.head.appendChild(el)
        added.push(el)
      } else {
        restored.push({ el, prev: el.getAttribute('content') ?? '' })
      }
      el.setAttribute('content', content)
    }

    return () => {
      document.title = prevTitle
      added.forEach((el) => el.remove())
      restored.forEach(({ el, prev }) => el.setAttribute('content', prev))
    }
  }, [title, description, image, url, type])
}

export default usePageMeta
