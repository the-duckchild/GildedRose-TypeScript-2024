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
    const gildedRose = new GildedRose([new Item("itemList.ELIXIR", 5, 7)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(6);
  });

  it("GivenNonSpecialItemWithMinusSellIn_WhenADayPasses_ThenQualityMinusTwo", () => {
    // Given
    const gildedRose = new GildedRose([new Item("itemList.ELIXIR", -1, 7)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(5);
  });

  it("GivenNonSpecialItemWithZeroQuality_WhenADayPasses_ThenQualityEqualsZero", () => {
    // Given
    const gildedRose = new GildedRose([new Item("itemList.ELIXIR", 7, 0)]);
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
      new Item("itemList.BACKSTAGE", 11, quality),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(quality + 1);
  });

  it("GivenBackstagePasses_WhenSellinIsBetween10Days&6Days<_ThenQualityPlusTwo", () => {
    // Given
    const gildedRose = new GildedRose([
      new Item("itemList.BACKSTAGE", 10, 7),
      new Item("itemList.BACKSTAGE", 6, 7),
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
      new Item("itemList.BACKSTAGE", 5, 3),
      new Item("itemList.BACKSTAGE", 1, 3),
    ]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality && items[1].quality).to.equal(6);
  });

  it("GivenBackstagePasses_WhenSellinDateIsPassed<_ThenQuality=0", () => {
    // Given
    const gildedRose = new GildedRose([new Item("itemList.BACKSTAGE", 0, 3)]);
    // When
    const items = gildedRose.updateQuality();
    // Then
    expect(items[0].quality).to.equal(0);
  });
});

// name: string;
// sellIn: number;  the number of days we have to sell the item
// quality: number; denotes how valuable the item is

// constructor(name, sellIn, quality) {
//   this.name = name;
//   this.sellIn = sellIn;
//   this.quality = quality;
