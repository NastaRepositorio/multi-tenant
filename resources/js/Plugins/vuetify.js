import { createVuetify } from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const savedTheme = localStorage.getItem('selectedTheme') || 'dark';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: savedTheme,
  },
  defaults: {
    VTextField: {
        variant: 'outlined',
        clearable: true,
    },
  },
});

export default vuetify;