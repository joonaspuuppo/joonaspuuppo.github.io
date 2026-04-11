---
inclusion: manual
---

# New Page Checklist

When adding a new page/route to this project, make sure to:

## 1. Add a route in `src/App.tsx`

```tsx
<Route path="/my-new-page" element={<MyNewPage />} />
```

## 2. Add metadata to `src/prerender.tsx`

The site uses `vite-prerender-plugin` to bake meta tags into static HTML at build time for social media link previews. Add an entry to the `routeMeta` object:

```ts
'/my-new-page': {
  title: 'Page Title',
  description: 'Short description for link previews.',
  image: 'https://joonaspuuppo.dev/some-image.jpg',
},
```

Also add the route to the `links` set returned from `prerender()` if it isn't already discovered automatically.

## 3. Use `usePageMeta` in the page component

```tsx
usePageMeta({
  title: 'Page Title',
  description: 'Short description.',
  image: 'https://joonaspuuppo.dev/some-image.jpg',
  url: 'https://joonaspuuppo.dev/my-new-page',
})
```

This handles the document title and meta tags at runtime (for users navigating within the SPA). The prerender step handles crawlers.

## 4. Add the project to the home page

If it's a project, add it to the `projects` array in `src/pages/Home.tsx`:

```ts
{
  name: 'My New Page',
  description: 'One line description.',
  path: '/my-new-page',
},
```
