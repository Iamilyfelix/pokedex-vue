<script setup>

defineProps(['pokemon'])
defineEmits(['fechar'])
</script>

<template>
  <div class="detalhes-fixo">
    <div class="modal">
      <button class="btn-fechar" @click="$emit('fechar')">X</button>
      
      <h2 class="title">{{ pokemon.name }}</h2>
      
      <img 
        :src="pokemon.sprites.other['official-artwork'].front_default" 
        :alt="pokemon.name"
      >
      
      <div class="status">
        <p><strong>Peso:</strong> {{ pokemon.weight / 10 }} kg</p>
        <p><strong>Altura:</strong> {{ pokemon.height / 10 }} m</p>
        <hr>
        <p><strong>Habilidades:</strong></p>
        <div class="habilidades">
          <span v-for="h in pokemon.abilities" :key="h.ability.name">
            {{ h.ability.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detalhes-fixo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); 
  backdrop-filter: blur(5px); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
}


.modal {
  background: white;
  padding: 40px 20px;
  border-radius: 30px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}


.btn-fechar {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f0f0f0;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: #666;
  transition: 0.2s;
}

.btn-fechar:hover {
  background: #ff4444;
  color: white;
}


h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
  letter-spacing: 1px;
}


img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
  margin-bottom: 20px;
}


.status {
  background: #fdfdfd;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #eee;
}

.status p {
  margin: 8px 0;
  font-size: 1.1rem;
  color: #555;
}

hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 15px 0;
}


.habilidades {
  color: #333;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
</style>