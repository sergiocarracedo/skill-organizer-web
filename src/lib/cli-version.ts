import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const cliVersionFilePath = resolve(process.cwd(), '../cli/VERSION')

export const cliVersion = readFileSync(cliVersionFilePath, 'utf8').trim()
