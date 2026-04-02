<script setup>
import { onMounted } from 'vue'
import { usePokemonStore } from '../store/pokemon'

import DetalhePokemon from './DetalhesPokemon.vue'

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.buscarTodosOsPokemons()
})

const selecionarPokemon = (url) => {
  pokemonStore.buscarInformacoesDoPokemon(url)
}
</script>

<template>
  <div class="container">
    <div class="grid-pokemon">
      <div 
        v-for="poke in pokemonStore.pokemons" 
        :key="poke.name" 
        class="card"
        @click="selecionarPokemon(poke.url)" 
      >
        <img :src="poke.imagem" :alt="poke.name" />
        <h3>{{ poke.name }}</h3>
      </div>
    </div>

    <DetalhePokemon 
      v-if="pokemonStore.pokemonSelecionado"
      :pokemon="pokemonStore.pokemonSelecionado"
      @fechar="pokemonStore.pokemonSelecionado = null"
    />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}


.grid-pokemon {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}


.card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  position: relative;
  overflow: hidden;
}


.card:hover {
  box-shadow: 0 15px 30px rgba(255, 0, 0, 0.2); 
  border-color: #ff4444;
}


.card img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.1); 
}


.card h3 {
  color: #444;
  font-size: 1.3rem;
  margin: 10px 0;
}

.card p {
  color: #999;
  font-size: 0.8rem;
  font-weight: bold;
}
</style scoped>