class Bonus {

    constructor(val) {
      this.val = val;
    }

}

class HPP extends Bonus {

    equips(char) {
      char.hpp += this.val;
    }
}

class BaseATK extends Bonus {
    equips(char) {
      char.base_atk += this.val;
    }
}

class ATKP extends Bonus {

    equips(char) {
      char.atkp += this.val;
    }
}
  
class Character {
    constructor(name, base_atk, base_hp, burst_cost, skill_energy) {
      this.name = name;
      this.base_atk = base_atk;
      this.base_hp = base_hp;
      this.hpp = 0;
      this.atkp = 0;
      this.burst_cost = burst_cost;
      this.skill_energy  = skill_energy;
    }

    equip (item) {
      item.equips(this)
    }

    equips (items) {
      items.forEach (item => {
        this.equip(item)
      })
    }
  
    hp() {
      return this.base_hp * (1 + this.hpp / 100);
    }

    atk() {
      return this.base_atk * (1 + this.atkp / 100);
    }
}

export const Xiao = new Character("Xiao", 349, 12735, 70, 3);
const Xianyun = new Character("Xianyun", 335, 10409, 70, 5);
const Faruzan = new Character("Faruzan", 196, 9570, 80, 2);
const Xiangling = new Character("Xiangling", 225, 10894, 80, 4);


function compute (char) {
    const table = document.getElementById("results");
    const row = table.insertRow();
    row.insertCell().textContent = char.name;
    row.insertCell().textContent = char.burst_cost;
}

function dropdownToggle() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
  compute(dropdownContent.value);
}

// Define the options for the dropdown
const options = [Xiao, Faruzan, Xianyun, Xiangling];

// Populate the dropdown with options
options.forEach(option => {
  const optionElement = document.createElement("a");
  optionElement.textContent = option.name;
  optionElement.href = "#";
  dropdownContent.appendChild(optionElement);
});
