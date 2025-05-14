export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

enum specialItems {
  BRIE = "Aged Brie",
  BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
}

enum standardItems {
  ELIXIR = "Elixir of the Mongoose"
}

enum conjuredItems {
  CAKE = "Conjured Mana Cake"
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let itemExists;

    for (let i = 0; i < this.items.length; i++) {
      let itemName = this.items[i].name;
      const item = this.items[i];
      const itemIsStandard = Object.values(standardItems).includes(itemName as standardItems);
      const itemIsSpecial = Object.values(specialItems).includes(itemName as specialItems);
      const itemIsConjured = Object.values(conjuredItems).includes(itemName as conjuredItems);

        if (itemIsStandard) {
          if (item.quality > 0) {
            this.decreaseStandardItemQuality(item);
          }
        } else if (itemIsConjured) {
          this.decreaseConjuredItemQuality(item);
        } else if (itemIsSpecial && itemName != specialItems.SULFURAS) {
          if (item.quality < 50) {
            this.increaseSpecialItemQuality(item);
            if (itemName === specialItems.BACKSTAGE) {
              this.increaseBackstagePassQuality(item);
            }
          }
        }

        if (itemName != specialItems.SULFURAS) {
          this.adjustSellIn(item)
        }

        let sellInDatePassed = item.sellIn < 0;
        if (sellInDatePassed){
            if (itemIsStandard && item.quality > 0) {
              this.decreaseStandardItemQuality(item);
            } else if (itemIsConjured) {
              this.decreaseConjuredItemQuality(item)
            } else if (itemName === specialItems.BACKSTAGE) {
              this.reduceQualityToZero(item);
            }
        }
    }
    return this.items;
  }

  decreaseStandardItemQuality(item: Item) {
    item.quality = item.quality - 1;
  } 

  decreaseConjuredItemQuality(item: Item) {
    item.quality = item.quality >= 2 ? item.quality - 2: item.quality = 0;
  } 

  reduceQualityToZero(item: Item) {
    item.quality = 0;
  }

  increaseSpecialItemQuality(item: Item) {
    item.quality = item.quality + 1;
  }

  increaseBackstagePassQuality(item: Item) {
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && (item.quality < 50)) {
      item.quality = item.quality + 1;
    }
  }

  adjustSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }
}
