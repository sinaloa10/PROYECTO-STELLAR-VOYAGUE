import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PROYECTO STELLAR VOYAGUE/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'main.js', // Archivo principal de tu aplicación
        luna: 'luna/codigo.js', // Archivo JavaScript de la carpeta "luna"
        marte: 'marte/marte.js', // Archivo JavaScript de la carpeta "marte"
        menu: 'menu/menu.js', // Archivo JavaScript de la carpeta "menu"
        mercurio: 'mercurio/mercurio.js', // Archivo JavaScript de la carpeta "mercurio"
        venus: 'venus/venus.js', // Archivo JavaScript de la carpeta "venus"
      }
    }
  }
});

