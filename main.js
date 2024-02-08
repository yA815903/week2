class Blacksmith {
  constructor() {
    this.inventory = {
      gold: 10,
      ore: 5,
      wood: 5,
      weapons: [],
    };
    this.fire = false;
  }

  fire() {
    if (this.fire) {
      this.fire = false;
      console.log("Fire stopped.");
    } else if (this.inventory.wood >= 1) {
      this.fire = true;
      this.inventory.wood--;
      console.log("Fire started.");
    } else {
      console.log("Not enough wood to start a fire.");
    }
  }

  buy(item) {
    if (this.fire) {
      console.log("Cannot buy items while the fire is burning.");
      return;
    }

    const cost = {
      ore: 2,
      wood: 1,
    };

    if (this.inventory.gold >= cost[item]) {
      this.inventory[item]++;
      this.inventory.gold -= cost[item];
      console.log(`Bought 1 ${item}.`);
    } else {
      console.log("Not enough gold to buy this item.");
    }
  }

  make(item) {
    if (!this.fire) {
      console.log("Cannot make items without a fire.");
      return;
    }

    const required = {
      ore: {
        sword: 2,
        axe: 3,
      },
      wood: {
        sword: 1,
        axe: 2,
      },
    };

    if (
      this.inventory.ore >= required.ore[item] &&
      this.inventory.wood >= required.wood[item]
    ) {
      this.inventory.weapons.push(item);
      this.inventory.ore -= required.ore[item];
      this.inventory.wood -= required.wood[item];
      console.log(`Made 1 ${item}.`);
    } else {
      console.log("Not enough ore or wood to make this item.");
    }
  }

  sell(item) {
    if (this.fire) {
      console.log("Cannot sell items while the fire is burning.");
      return;
    }

    const index = this.inventory.weapons.indexOf(item);

    if (index !== -1) {
      this.inventory.weapons.splice(index, 1);
      this.inventory.gold++;
      console.log(`Sold 1 ${item}.`);
    } else {
      console.log("Cannot sell this item as it is not in the inventory.");
    }
  }

  inventory() {
    console.log(this.inventory);
  }

  help() {
    console.log(
      `INSTRUCTIONS:

  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.

  COMMANDS:

  - fire()
  - buy(item)
  - make(item)
  - sell(item)
  - inventory()
  - help()`
    );
  }
}

const blacksmith = new Blacksmith();

// Example usage
blacksmith.fire();
blacksmith.buy("ore");
blacksmith.buy("wood");
blacksmith.make("sword");
blacksmith.sell("sword");
blacksmith.inventory();
blacksmith.help();