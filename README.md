# console-prefix-plugin

Adds colored prefixes to console.log messages in Vite builds.

## Install

```bash
npm install @bebeal/console-prefix-plugin --save-dev
```

## Usage

```ts
// vite.config.js
import { defineConfig } from 'vite'
import consolePrefix from '@bebeal/console-prefix-plugin'

export default defineConfig({
  plugins: [
    consolePrefix('[server]') // Default color: magenta
  ]
})
```

<div align="center">
  <img width="1233" alt="Screenshot 2025-03-22 at 4 04 05 PM" src="https://github.com/user-attachments/assets/d01e6040-09f7-4154-9854-1e6dc332703f" />
</div>

With named color:

```ts
import { defineConfig } from 'vite'
import consolePrefix from '@bebeal/console-prefix-plugin'

export default defineConfig({
  plugins: [
    consolePrefix('[api]', 'cyan'),
  ]
})
```

<div align="center">
  <img width="1233" alt="Screenshot 2025-03-22 at 4 05 25 PM" src="https://github.com/user-attachments/assets/411003e9-3366-4d35-ac73-e8f61e0005da" />
</div>

With raw ANSI color code:

```ts
import consolePrefix from '@bebeal/console-prefix-plugin'

export default {
  plugins: [
    consolePrefix('[custom]', '\x1b[38;5;208m') // Custom orange color
  ]
}
```

<div align="center">
  <img width="1233" alt="Screenshot 2025-03-22 at 4 05 47 PM" src="https://github.com/user-attachments/assets/98612f71-0f28-4361-bec6-73d6ff905fcb" />
</div>

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
