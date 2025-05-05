import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  // it('should foo', () => {
  //   const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).to.equal('fixme');
  // });

  // NON SPECIAL ITEMS
  it("GivenNonSpecialItem_WhenADayPasses_ThenQualityMinusOne", () => {
    // Given
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(6);
  });

  it("GivenNonSpecialItemWithMinusSellIn_WhenADayPasses_ThenQualityMinusTwo", () => {
    // Given
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", -1, 7)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    console.log(items[0].quality);
    expect(items[0].quality).to.equal(5);
  });

  it("GivenNonSpecialItemWithZeroQuality_WhenADayPasses_ThenQualityEqualsZero", () => {
    // Given
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 7, 0)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(0);
  });

  // BACK STAGE PASSES
  it("GivenBackstagePasses_WhenSellinisOver10_ThenQualityPlusOne", () => {
    // Given
    const quality = 7;
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, quality),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(quality + 1);
  });

  it("GivenBackstagePasses_WhenSellinIsBetween10Days&6Days<_ThenQualityPlusTwo", () => {
    // Given
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 7),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 7),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(9);
    expect(items[1].quality).to.equal(9);
  });

  it("GivenBackstagePasses_WhenSellinIsBetween5Days&0Days<_ThenQualityPlusThree", () => {
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

  it("GivenBackstagePasses_WhenSellinDateIsPassed<_ThenQuality=0", () => {
    // Given
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 3)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(0);
  });

  it("GivenBackstagePasses_WhenDayPassesAndQualityIs50<_ThenQuality=50", () => {
    // Given
    const quality = 50;
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 6, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(quality);
  });

  // BRIE
  it("GivenBrie_WhenDayHasPassed<_ThenQualityPlusOne", () => {
    // Given
    const quality = 6;
    const gildedRose = new GildedRose([new Item("Aged Brie", 7, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    console.log(items[0].quality);
    expect(items[0].quality).to.equal(quality + 1);
  });

  it("GivenBrie_WhenDaySellInDatePassed<_ThenQualityPlusOne", () => {
    // Given
    const quality = 6;
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    console.log(items[0].quality)
    expect(items[0].quality).to.equal(quality + 1);
  });

  it("GivenBrie_WhenDayPassesAndQualityIs50<_ThenQuality=50", () => {
    // Given
    const quality = 50;
    const gildedRose = new GildedRose([new Item("Aged Brie", 8, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(quality);
  });

  // SULFURAS
  it("GivenSULFURAS_WhenDayPasses<_ThenQualityIsSAME", () => {
    // Given
    const quality = 80;
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 100, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    console.log(items[0].quality)
    expect(items[0].quality).to.equal(quality);
  });

  // Conjured Cake

  it("GivenConjuredItem_WhenADayPasses_ThenQualityMinusTwo", () => {
    // Given
    let quality = 9;
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 5, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(quality - 2);
  });

  it("GivenConjuredItemWithMinusSellIn_WhenADayPasses_ThenQualityMinusFour", () => {
    // Given
    let quality = 9;
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -1, quality)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    console.log(items[0].quality);
    expect(items[0].quality).to.equal(quality - 4);
  });

});


// name: string;
// sellIn: number;  the number of days we have to sell the item
// quality: number; denotes how valuable the item is

// constructor(name, sellIn, quality) {
//   this.name = name;
//   this.sellIn = sellIn;
//   this.quality = quality;
