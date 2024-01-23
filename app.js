import { Character, Characters, Hutao, Skyward_Spine, Weapons } from "./char.js";

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      team : [],
      selected_char : Hutao,
      all_characters: Characters,
      weapons: Weapons,
      result: "",
    }
  },
  methods : {
    addChar () {
      this.team.push(new Character(this.selected_char));
      this.selected_char = Hutao;
    },
    removeChar(char) {
      this.team = this.team.filter((t) => t.character.name != char.character.name)
    }
  }
}).mount('#app')