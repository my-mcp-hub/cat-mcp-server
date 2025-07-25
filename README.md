# Cat MCP Server

A cat mcp server

[![][npm-release-shield]][npm-release-link]
[![][codecov-shield]][codecov-link]
[![][github-release-date-shield]][github-release-date-link]
[![][github-action-build-shield]][github-action-build-link]
[![][github-license-shield]][github-license-link]

## Setup

### Usage
To use with `Desktop APP`, such as Claude, VSCode, [Cline](https://cline.bot/mcp-marketplace), Cherry Studio, Cursor, and so on, add the MCP server config below.

On Mac system:
```json
{
  "mcpServers": {
    "cat-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "cat-mcp-server"
      ]
    }
  }
}
```

On Window system:

```json
{
  "mcpServers": {
    "cat-mcp-server": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "cat-mcp-server"
      ]
    }
  }
}
```

## License
[MIT](LICENSE)

[npm-release-link]: https://www.npmjs.com/package/cat-mcp-server
[npm-release-shield]: https://img.shields.io/npm/v/cat-mcp-server?color=1677FF&labelColor=black&logo=npm&logoColor=white&style=flat-square
[codecov-link]: https://coveralls.io/github/my-mcp-hub/cat-mcp-server?branch=main
[codecov-shield]: https://img.shields.io/coverallsCoverage/github/my-mcp-hub/cat-mcp-server?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[github-release-date-link]: https://github.com/my-mcp-hub/cat-mcp-server/releases
[github-release-date-shield]: https://img.shields.io/github/release-date/my-mcp-hub/cat-mcp-server?color=1677FF&labelColor=black&style=flat-square
[github-action-build-link]: https://github.com/my-mcp-hub/cat-mcp-server/actions/workflows/build.yml
[github-action-build-shield]: https://img.shields.io/github/actions/workflow/status/my-mcp-hub/cat-mcp-server/build.yml?branch=main&color=1677FF&label=build&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-license-link]: https://github.com/my-mcp-hub/cat-mcp-server/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/my-mcp-hub/cat-mcp-server?color=1677FF&labelColor=black&style=flat-square
