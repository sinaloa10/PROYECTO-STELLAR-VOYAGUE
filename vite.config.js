import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PROYECTO STELLAR VOYAGUE/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'src/main.js', // Archivo principal de tu aplicación
        luna: 'src/luna/luna.js', // Archivo JavaScript de la carpeta "luna"
        marte: 'src/marte/marte.js', // Archivo JavaScript de la carpeta "marte"
        menu: 'src/menu/menu.js', // Archivo JavaScript de la carpeta "menu"
        mercurio: 'src/mercurio/mercurio.js', // Archivo JavaScript de la carpeta "mercurio"
        venus: 'src/venus/venus.js', // Archivo JavaScript de la carpeta "venus"
      }
    }
  }
});

