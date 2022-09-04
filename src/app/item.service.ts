import { Injectable } from '@angular/core';
import { MockData } from './mock-data/mock-item-data';
import { Item } from './models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  addItem(item: Item) {
    this.items.push(item);
  }

  items : Item[] = [];
  constructor() { 
    this.items = MockData.Items;
  }

  getItems() : Item[]{
    return this.items;
  }
}
