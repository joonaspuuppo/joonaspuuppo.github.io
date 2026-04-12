import { VStack } from '@chakra-ui/react'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Talk Like Tifa',
    description:
      'Random lines of dialogue from Final Fantasy VII presented as in-game text boxes. Edit the text and share your creation.',
    image: '/talkliketifa.jpg',
    tags: ['React', 'TypeScript', 'Chakra UI'],
    href: '/talkliketifa',
  },
  {
    title: 'Speak Like Sephiroth',
    description:
      'Bluesky bot @speaklikesephiroth that posts images from the Talk Like Tifa project every six hours.',
    image: '/speaklikesephiroth.webp',
    tags: ['TypeScript', 'Fly.io', 'Social media automation'],
    href: 'https://bsky.app/profile/speaklikesephiroth.bsky.social',
  },
  {
    title: 'Lintuinfluencer',
    description:
      'Twitter bot that tweets the musings of wild birds as they stomp around on a keyboard. Created by Joonas Ahtikallio and I in 2021. Tweets @lintuinfluencer on X. Currently inactive.',
    image: '/lintuinfluencer_profilepic-edited-1.jpg',
    tags: ['Python', 'Raspberry Pi', 'Social media automation'],
    href: 'https://x.com/lintuinfluencer',
  },
  {
    title: 'Flounder',
    description:
      'Web installation that explores social awkwardness. The system tries to engage with the outside world by analysing and interpreting small cues from the video feed and the conversations it has with the audience. Created in 2021 by me, Lauri Hei, Marloes van Son, Pyry Rouvila, Santeri Salmirinne and Veera Jussila. Currently inactive.',
    image: '/flounder.png',
    tags: ['Python', 'Graphic design'],
    href: 'https://nokturno.fi/poem/flounder/',
  },
]

const Projects = () => (
  <VStack align="stretch" gap={4}>
    {projects.map((p) => (
      <ProjectCard key={p.title} {...p} />
    ))}
  </VStack>
)

export default Projects
