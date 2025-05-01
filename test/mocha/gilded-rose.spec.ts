import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  // it('should foo', () => {
  //   const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).to.equal('fixme');
  // });

  it("GivenNonSpecialItem_WhenADayPasses_ThenQualityMinusOne", () => {
    // Given
    const gildedRose = new GildedRose([
      new Item("Elixir of the Mongoose", 5, 7),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(6);
  });

  it.only("GivenBackstagePasses_WhenSellinisOver10_ThenQualityPlusOne", () => {
    // Given
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 7),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(8);

  });

  it.only("GivenBackstagePasses_WhenSellinIsBetween10Days&6Days<_ThenQualityPlusTwo", () => {
    // Given
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 7),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 7),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality && items[1].quality).to.equal(9);
  });

  it.only("GivenBackstagePasses_WhenSellinIsBetween5Days&0Days<_ThenQualityPlusThree", () => {
    // Given
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 3),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 3),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality && items[1].quality).to.equal(6);

  });
});

// name: string;
// sellIn: number;  the number of days we have to sell the item
// quality: number; denotes how valuable the item is

// if (this.items[i].quality < 50) {
//   this.items[i].quality = this.items[i].quality + 1
//   if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {

// constructor(name, sellIn, quality) {
//   this.name = name;
//   this.sellIn = sellIn;
//   this.quality = quality;
