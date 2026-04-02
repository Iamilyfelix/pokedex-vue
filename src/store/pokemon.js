import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        pokemons: [],           
        pokemonSelecionado: null,     
    }),

    actions: {
        async buscarTodosOsPokemons() {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')

                this.pokemons = res.data.results.map((item) => {
                    const id = item.url.split('/')[6]

                    return {
                        name: item.name,
                        url: item.url,
                        id: id,
                        imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                    }
                })
            } catch (error) {
                console.error("Erro ao buscar lista:", error)
            }
        },

        async buscarInformacoesDoPokemon(url) {
            try {
                const response = await axios.get(url)
                this.pokemonSelecionado = response.data
            } catch (error) {
                console.error("Erro ao buscar detalhes:", error)
            }
        }
    } 
})