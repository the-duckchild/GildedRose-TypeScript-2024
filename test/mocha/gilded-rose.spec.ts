import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  // it('should foo', () => {
  //   const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).to.equal('fixme');
  // });

it('GivenNonSpecialItem_WhenADayPasses_ThenQualityMinusOne', ()=>  {
  // Given 
  const gildedRose = new GildedRose([new Item('Elixir of the Mongoose',5,7)]);
  // When
  const items = gildedRose.updateQuality();
  // Then
  expect(items[0].quality).to.equal(6);
  console.log(items)

});



});

// name: string; 
// sellIn: number;  the number of days we have to sell the item
// quality: number; denotes how valuable the item is



//  for (let i = 0; i < this.items.length; i++) {
//   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//     if (this.items[i].quality > 0) {
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].quality = this.items[i].quality - 1

// constructor(name, sellIn, quality) {
//   this.name = name;
//   this.sellIn = sellIn;
//   this.quality = quality;