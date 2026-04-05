import dialogue from '../../output.json'
import { DialogueLine } from '../types/talkLikeTifa'
import fs from 'fs'

const lines: DialogueLine[] = dialogue

const counts = lines.reduce<Record<string, number>>((acc, { name }) => {
  acc[name] = (acc[name] ?? 0) + 1
  return acc
}, {})

const sorted = Object.entries(counts).sort(([, a], [, b]) => b - a)

sorted.forEach(([name, count]) => console.log(`${name}: ${count}`))

fs.writeFileSync(
  'dialogueCounts.json',
  JSON.stringify(Object.fromEntries(sorted), null, 2),
  'utf8'
)
