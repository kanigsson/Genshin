import { Characters, Hutao, Skyward_Spine, Weapons } from "./char.js";

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      selected_char: Hutao,
      characters: Characters,
      selected_weapon: Skyward_Spine,
      weapons: Weapons,
      result: "",
    }
  },
  methods : {
    compute () {
      const mychar = this.selected_char;
      mychar.equips(this.selected_weapon.buffs);
      this.result = mychar.atk();
    }
  }
}).mount('#app')