import { z } from 'zod'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { OptionsType } from '@/types'

export default function register(server: McpServer, options: OptionsType) {
  server.registerTool(
    'GenerateCatImage',
    {
      title: 'Generate Cat Image',
      description:
        'Generate a cat image. You can optionally add text, font size, and font color. All fields are optional and can be empty strings.',
      inputSchema: {
        text: z.string().optional().describe('Optional text to display on the cat image. Can be empty.'),
        fontSize: z.string().optional().describe('Font size for the text (e.g., "20"). Can be empty.'),
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
          .describe('Font color using named CSS values. Can be empty.'),
      },
    },
    async ({ text, fontSize, fontColor }) => {
      return {
        content: [
          {
            type: 'text',
            text: getCatImage(text, fontSize, fontColor),
          },
        ],
      }
    },
  )
}

export const getCatImage = (text?: string, fontSize?: string, fontColor?: string) => {
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
  return url.toString()
}
