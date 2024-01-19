const { createApp } = Vue
    
class Character {
  constructor (name, id) {
    this.name = name;
    this.id = id;
  }
}

const Hutao = new Character("Hutao", 1)
const characters = [Hutao, new Character("Xianyun", 2), new Character("Yelan", 3)]

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      selected: Hutao,
      characters: characters,
    }
  }
}).mount('#app')