import { Characters, Hutao, Skyward_Spine, Weapons } from "./char.js";

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      characters : [],
      selected : Hutao,
      all_characters: Characters,
      result: "",
    }
  },
  methods : {
    compute () {
      const mychar = this.selected_char;
      mychar.equips(this.selected_weapon.buffs);
      this.result = mychar.atk();
    },
    addChar () {
      this.characters.push(this.selected_char);
      this.selected_char = Hutao;
    },
    removeChar(char) {
      this.characters = this.characters.filter((t) => t.name != char.name)
    }
  }
}).mount('#app')