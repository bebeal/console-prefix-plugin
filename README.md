# console-prefix-plugin

Adds colored prefixes to console.log messages in Vite builds.

## Install

```bash
npm install console-prefix-plugin --save-dev
```

## Usage

```ts
// vite.config.js
import { defineConfig } from 'vite'
import consolePrefix from 'console-prefix-plugin'

export default defineConfig({
  plugins: [
    consolePrefix('[server]') // Default color: magenta
  ]
})
```

With named color:

```ts
import { defineConfig } from 'vite'
import consolePrefix from 'console-prefix-plugin'

export default defineConfig({
  plugins: [
    consolePrefix('[api]', 'cyan'),
  ]
})
```

With raw ANSI color code:

```ts
import consolePrefix from 'console-prefix-plugin'

export default {
  plugins: [
    consolePrefix('[custom]', '\x1b[38;5;208m') // Custom orange color
  ]
}
```

## Available Colors

- black
- red
- green
- yellow
- blue
- magenta (default)
- cyan
- white
- gray
- reset

## License

MIT
