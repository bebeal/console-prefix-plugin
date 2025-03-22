import type { Plugin } from 'vite';

// Color map for easy reference
const COLORS = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  reset: '\x1b[0m',
};

export default function consolePrefix(prefix: string, color: string = 'magenta'): Plugin {
  let originalConsoleLog: (...args: unknown[]) => void;

  // Get color - check if it's a key in our color map, otherwise use as is
  const getColor = () => {
    return COLORS[color as keyof typeof COLORS] || color;
  };

  return {
    name: 'console-prefix-plugin',
    apply: 'build',
    configResolved() {
      // Save the original console.log function
      originalConsoleLog = console.log;
      // Override the console.log function to inject the prefix
      console.log = (...args) => {
        const prefixColor = getColor();
        originalConsoleLog(`${prefixColor}${prefix}${COLORS.reset}`, '   ', ...args);
      };
    },
    closeBundle() {
      // Restore the original console.log function
      console.log = originalConsoleLog;
    },
  };
}
