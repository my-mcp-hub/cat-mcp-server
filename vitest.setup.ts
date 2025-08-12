import 'dotenv/config'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

const stdioClientTransport = new StdioClientTransport({
  command: 'c8',
  args: ['--reporter=lcov', '--reporter=text', 'tsx', './src/index.ts'],
  env: {
    ...process.env as Record<string, string>,
    NODE_V8_COVERAGE: './coverage/tmp',
  },
})

const baseUrl = new URL('http://localhost:8401/mcp')
const streamableClientTransport = new StreamableHTTPClientTransport(
  new URL(baseUrl)
)
const client = new Client({
  name: 'test-mcp-client',
  version: '1.0.0',
})
await client.connect(stdioClientTransport)
await client.connect(streamableClientTransport)

global.client = client
