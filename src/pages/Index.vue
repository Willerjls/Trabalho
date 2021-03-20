<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input
        outlined
        v-model="nome"
        label="Nome"
        @keydown.enter="adicionar"
        />
      </div>

      <div class="q-gutter-md" style="max-width: 300px; padding: 15px 0 0 0">
        <q-btn
        color="primary"
        label="Adicionar"
        @click="adicionar"/>
      </div>

      <div class="q-gutter-md" style="max-width: 300px; padding: 15px 0 0 0">
      <div class="q-pt-md" style="max-width: 350px">

        <p class="text-h6" style="padding: 0;">Lista</p>
        <q-list
        dense
        bordered
        separator
        class="rounded-borders q-mt-md q-pb-sm">

          <q-item
          v-for="(item, index) in lista"
          :key="index"
          class="justify-between items-center">
            {{ item }}

            <q-icon
            @click="remover(index)"
            name="close"
            class="cursor-pointer hover"/>
          </q-item>
        </q-list>
        </div>
      </div>
    </div>

  </q-page>
</template>

<style>
.hover:hover{
  border: 1px solid red;
  border-radius: 10px;
  background-color: red;
  color: white;
}
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      nome: '',
      lista: []
    }
  },
  methods: {
    adicionar () {
      this.lista.push(this.nome)
      this.nome = ''
    },
    remover (pos) {
      this.lista.splice(pos, 1)
    }
  }
}
</script>
