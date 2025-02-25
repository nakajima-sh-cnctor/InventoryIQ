import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#a83d49',
          secondary: '#4c4951',
          accent: '#9a9c97',
          background: '#ece7e9',
        },
      },
    },
  },
  defaults: {
    VDataTable: {
      hideDefaultFooter: true,
      class: 'text-secondary',
    },
  },
})
