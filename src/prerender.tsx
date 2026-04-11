interface PrerenderData {
  url: string
}

const routeMeta: Record<
  string,
  {
    title: string
    description: string
    image: string
  }
> = {
  '/': {
    title: 'Joonas Puuppo',
    description: 'Software developer. Creative coder.',
    image: '',
  },
  '/talkliketifa': {
    title: 'Talk Like Tifa',
    description:
      'Random lines of dialogue from Final Fantasy VII (1997) presented as in-game text boxes.',
    image: 'https://joonaspuuppo.dev/ffvii_bg_aeris_4.jpg',
  },
}

export async function prerender({ url }: PrerenderData) {
  const meta = routeMeta[url] ?? routeMeta['/']
  const baseUrl = 'https://joonaspuuppo.dev'

  return {
    html: '',
    links: new Set(Object.keys(routeMeta)),
    head: {
      title: meta.title,
      lang: 'en',
      elements: new Set([
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        {
          type: 'meta',
          props: { property: 'og:description', content: meta.description },
        },
        { type: 'meta', props: { property: 'og:image', content: meta.image } },
        {
          type: 'meta',
          props: { property: 'og:url', content: `${baseUrl}${url}` },
        },
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        {
          type: 'meta',
          props: { name: 'twitter:card', content: 'summary_large_image' },
        },
        { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
        {
          type: 'meta',
          props: { name: 'twitter:description', content: meta.description },
        },
        { type: 'meta', props: { name: 'twitter:image', content: meta.image } },
      ]),
    },
  }
}
