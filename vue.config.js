const { defineConfig } = require('@vue/cli-service')
publicPath: process.env.NODE_ENV === "production" ? "/mikolajhilgerthub.io/" : "/",
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
