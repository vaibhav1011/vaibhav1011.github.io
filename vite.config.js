import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (vaibhav1011.github.io) is served from the domain root,
// so the base path is '/'. For a project site you'd use '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
