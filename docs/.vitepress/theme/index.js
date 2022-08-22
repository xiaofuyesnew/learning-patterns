import DefaultTheme from "vitepress/theme"

import './custom.scss'
import 'highlight.js/styles/github-dark-dimmed.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin/dist/highlightjs-vue.esm.min.js'

hljs.registerLanguage('javascript', javascript)

export default {
  ...(DefaultTheme || {}),
  enhanceApp({ app }) {
    app.use(hljsVuePlugin)
  }
}
