import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { registerTools } from '@/tools'
import { stdioServer } from './stdio'
import { webServer } from './web'
import type { OptionsType } from '@/types'

const createServer = (options: OptionsType) => {
  const server = new McpServer({
    name: options.name,
    version: options.version,
  })
  registerTools(server, options)
  return server
}

export async function startStdioServer(options: OptionsType) {
  const server = createServer(options)
  await stdioServer(server)
}

export async function startWebServer(options: OptionsType) {
  const server = createServer(options)
  await webServer(server, options)
}
