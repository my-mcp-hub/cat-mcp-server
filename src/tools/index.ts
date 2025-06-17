import { z } from 'zod'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

export const registerTools = (server: McpServer) => {
  server.tool(
    'GenerateCatImage',
    'Generate a cat image with optional text, font size, and font color.',
    {
      text: z.string().optional().describe('Optional text to display on the cat image'),
      fontSize: z.string().optional().describe('Font size for the text, e.g., 20'),
      fontColor: z
        .enum([
          'black',
          'white',
          'red',
          'green',
          'blue',
          'yellow',
          'orange',
          'purple',
          'pink',
          'brown',
          'gray',
          'cyan',
          'magenta',
        ])
        .optional()
        .describe('Font color using named CSS color values (e.g., "red", "blue")'),
    },
    async ({ text, fontSize, fontColor }) => {
      const url = new URL('https://cataas.com/cat/gif')
      if (text) {
        url.pathname += `/says/${text}`
      }
      if (fontSize) {
        url.searchParams.append('fontSize', fontSize)
      }
      if (fontColor) {
        url.searchParams.append('fontColor', fontColor)
      }
      return {
        content: [
          {
            type: 'text',
            text: url.toString(),
          },
        ],
      }
    },
  )
}
