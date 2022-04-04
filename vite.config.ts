import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: [
          {
            /**
             * Family name (required)
             */
            name: 'Source+Sans+Pro',

            /**
             * Family styles
             */
            styles: 'wght@300;400;700;900&display=swap',

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
        ],
      },
    }),
  ],
});
