<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  localStorage.setItem('selectedTheme', newTheme);
}

const drawer = ref(null);
const dialog = ref(false);

const logout = () => {
    router.post(route('logout'));
    dialog.value = false;
}

</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        md="expand-on-hover"
    >
        <v-list>
          <v-list-item
            prepend-icon="mdi-account-circle"
            :subtitle="$page.props.auth.user.email"
            :title="$page.props.auth.user.name"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-apps"
            title="Dashboard"
            :href="route('dashboard')"
            :active="route().current('dashboard')"
          />
        </v-list>

        <template v-slot:append>
            <v-list density="compact" nav>
              <v-list-item
                prepend-icon="mdi-cog"
                title="Editar perfil"
                :href="route('profile.edit')"
                :active="route().current('profile.*')"
              />
                <v-list-item prepend-icon="mdi-logout" title="Logout" @click="dialog = !dialog"/>
            </v-list>
        </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title><slot name="header"/></v-app-bar-title>

      <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"/>
    </v-app-bar>

    <v-main>
        <v-dialog
        v-model="dialog"
        width="auto"
        >
            <v-card
                max-width="400"
                prepend-icon="mdi-logout"
                text="Tem certeza que deseja sair da sua conta?"
                title="Fazer Logout"
            >
                <template v-slot:actions>
                <v-btn
                    class="ms-auto"
                    text="cancelar"
                    @click="dialog = false"
                />
                <v-btn
                    color="error"
                    text="Sim, sair"
                    @click="logout"
                />
                </template>
            </v-card>
        </v-dialog>
      <slot />
    </v-main>
  </v-app>
</template>
