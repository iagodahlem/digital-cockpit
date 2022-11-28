import { VitePluginFonts } from 'vite-plugin-fonts'

export default {
  plugins: [
    VitePluginFonts({
      custom: {
        families: {
          VWText: './src/assets/fonts/VWText*',
          VWHead: './src/assets/fonts/VWHead*',
        },
      },
    }),
  ],
}
