import { VStack } from '@chakra-ui/react'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Talk Like Tifa',
    description:
      'Random lines of dialogue from Final Fantasy VII presented as in-game text boxes. Edit the text and share your creation.',
    image: '/ffvii_bg_tifa.jpg',
    tags: ['React', 'TypeScript', 'Chakra UI'],
    href: '/talkliketifa',
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
