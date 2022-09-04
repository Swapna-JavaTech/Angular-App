import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { MockData } from '../mock-data/mock-item-data';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items : Item[] = [];
  constructor(public itemService:ItemService) { 
   this.items = itemService.getItems();
  }

  deleteItem(item:Item){
    let index = this.items.indexOf(item);
    if(index !== -1){
      this.items.splice(index,1)
    }
  }
  ngOnInit(): void {
  }

}
