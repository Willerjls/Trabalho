<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-pa-md">
        <q-list bordered>
          <q-item
            clickable
            v-ripple
            v-for="(item, index) in lista"
            :key="item.codigo"
          >
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ index }}
              </q-avatar>
            </q-item-section>
            <q-item-section>{{ item.codigo }} - {{ item.nome }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <q-btn
    round
    color="primary"
    icon="add"
    class="fixed"
    @click="mudarTela('/')"
    style="right: 18px; bottom: 18px"
    />
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      codigo: '',
      nome: ''
    }
  },
  methods: {
    ...mapActions('lista', ['adicionarItem']),
    adicionar () {
      this.adicionarItem({ codigo: this.codigo, nome: this.nome })
      this.codigo = ''
      this.nome = ''
    },
    mudarTela (
      rota
    ) {
      this.$router.push(
        rota
      )
    }
  },
  computed: {
    ...mapGetters(
      'lista',
      ['lista']
    )
  }
}
</script>
