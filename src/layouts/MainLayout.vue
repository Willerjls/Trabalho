<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <RouterLink
          v-for="link in routersLinks"
          :key="link.title"
          v-bind="link"
        />

      </q-list>

      <!--<router-link to="/">Principal</router-link>
      <br />
      <router-link to="/contato">Contato</router-link>
      <br />
      <router-link to="/empresa">Empresa</router-link>-->
    </q-drawer>

    <q-page-container>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>

    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import RouterLink from 'components/RouterLink.vue'

const linksData = [
  /*
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
  */
]

const routersData = [
  {
    title: 'Home',
    caption: 'Tela principal',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Empresa',
    caption: 'Dados dos serviços',
    icon: 'account_circle',
    link: '/empresa'
  },
  {
    title: 'Contato',
    caption: 'Fale conosco',
    icon: 'email',
    link: '/contato'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink, RouterLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      routersLinks: routersData
    }
  }
}
</script>
