import { defineConfig } from "windicss/helpers";
import formsPlugin from 'windicss/plugin/forms';

const windiConfig = defineConfig({
  darkMode: 'media',
  safelist: 'p-5',
  transformCSS: 'pre',
  alias: {
    'icon': 'w-12 h-12 fill-current'
  },
  screens: {
    s: '480px',
    m: '768px',
    l: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096'
        },
      },
    },
  },
  plugins: [formsPlugin],
});

export default windiConfig;