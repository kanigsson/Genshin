
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

class DMGB extends Bonus {
  equips(char) {
    char.dmg_bonus += this.val;
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

//const Xiao = new Character("Xiao", 349, 12735, 70, 3, []);
//const Xianyun = new Character("Xianyun", 335, 10409, 70, 5, []);
//const Faruzan = new Character("Faruzan", 196, 9570, 80, 2, []);
//const Xiangling = new Character("Xiangling", 225, 10894, 80, 4, []);

const Hutao = {
  name : "Hutao",
  element: Element.Pyro,
  weapon_type : Weapon_Type.Polearm,
  base_atk : 106,
  base_hp : 15552,
  burst_cost : 90,
  particles : 5,
  buffs : []
}

const Raiden = {
  name: "Raiden",
  element: Element.Electro,
  weapon_type : Weapon_Type.Polearm,
  base_atk : 337,
  base_hp : 12907,
  burst_cost : 90,
  particles : 5,
  buffs : [
    {
      name: "Ascension stat",
      buffs: [new ER(1.32)],
      active: true
    }
  ]
}

const Empty_Char = {
  name: "Empty",
  base_atk : 0,
  base_hp : 0,
  burst_cost : 0,
  particles : 0,
  buffs : []
}

const Empty_Weapon = {
  name: "Dull Blade",
  type: Weapon_Type.Polearm,
  buffs : [],
}

const Skyward_Spine = {
  name : "Skyward Spine",
  type : Weapon_Type.Polearm,
  buffs : [new BaseATK(674), new ER(0.368), new CR(0.08)],
}
  
const Deathmatch = {
  name : "Deathmatch",
  type : Weapon_Type.Polearm,
  buffs : [new BaseATK(454), new CR(0.368), new ATKP(0.16)],
}

const Solar_Pearl = {
  name : "Solar Pearl",
  type : Weapon_Type.Catalyst,
  buffs : [new BaseATK(510), new CR(27.6), new DMGB(0.20)],
}

class Character {
    constructor(character) {
      this.character = character;
      this.weapon = Empty_Weapon;
      this.cr = 0.05;
      this.cd = 0.5;
      this.er = 1.0;
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


const Characters = [Raiden, Hutao]

const Weapons = [Skyward_Spine, Deathmatch, Solar_Pearl]

export { Element, Weapon_Type, Character, Characters, Hutao, Skyward_Spine, Weapons}
