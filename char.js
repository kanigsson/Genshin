
const Element = {
  Pyro: "Pyro",
  Hydro: "Hydro",
  Electro: "Electro",
  Cryo: "Cryo",
  Dendro: "Dendro",
  Anemo: "Anemo",
  Geo: "Geo"
}

const Weapon_Type = {
  Sword : "Sword",
  Claymore : "Claymore",
  Polearm : "Polearm",
  Catalyst : "Catalyst",
  Bow : "Bow"
}

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

class CR extends Bonus {
  equips(char) {
    char.cr += this.val;
  }
}

class ER extends Bonus {
  equips(char) {
    char.er += this.val;
  }
}

  
class Character {
    constructor(name, base_atk, base_hp, burst_cost, skill_energy, buffs) {
      this.name = name;
      this.base_atk = base_atk;
      this.base_hp = base_hp;
      this.hpp = 0;
      this.atkp = 0;
      this.burst_cost = burst_cost;
      this.skill_energy  = skill_energy;
      this.cr = 0.05;
      this.cd = 0.5;
      this.er = 1.0;
      this.equips(buffs);
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

const Xiao = new Character("Xiao", 349, 12735, 70, 3, []);
const Xianyun = new Character("Xianyun", 335, 10409, 70, 5, []);
const Faruzan = new Character("Faruzan", 196, 9570, 80, 2, []);
const Xiangling = new Character("Xiangling", 225, 10894, 80, 4, []);
const Raiden = new Character("Raiden", 337, 12907, 90, 5, [new ER(1.32)]);
const Hutao = new Character("Hutao", 106, 15552, 90, 5, []);


const Characters = [Xiao, Xianyun, Faruzan, Xiangling, Raiden, Hutao]

const Skyward_Spine = {
  name : "Skyward Spine",
  type : Weapon_Type.Polearm,
  buffs : [new BaseATK(674), new ER(0.368), new CR(0.08)],
}
const Weapons = [Skyward_Spine]

export { Element, Weapon_Type, Characters, Hutao, Skyward_Spine, Weapons}
