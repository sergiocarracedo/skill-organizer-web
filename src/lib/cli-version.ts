import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const cliVersionFilePath = resolve(process.cwd(), '../cli/VERSION')
const fallbackVersion = process.env.SKILL_ORGANIZER_VERSION?.trim() || 'dev'

const readCliVersion = () => {
  try {
    return readFileSync(cliVersionFilePath, 'utf8').trim()
  } catch {
    return fallbackVersion
  }
}

export const cliVersion = readCliVersion()
