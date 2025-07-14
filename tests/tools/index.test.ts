import { describe, expect, test } from 'vitest'

describe('generate-cat-image-tool', () => {
  test('returns data for a valid input', async () => {
    const res = (await global.client.callTool({
      name: 'GenerateCatImage',
      arguments: {
        text: 'hello',
        fontSize: '20',
        fontColor: 'red',
      },
    }))
    expect(res).toStrictEqual({
      content: [
        {
          type: 'text',
          text: 'https://cataas.com/cat/gif/says/hello?fontSize=20&fontColor=red',
        }
      ],
    })
  })
})
