import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // When root is changed to app, the dynamic imports to node_modules fails
  // http://localhost:3000/node_modules/i18n-iso-countries/langs/en.json?import fails
  root: path.resolve(__dirname, './app'),

  plugins: [react()],
})
