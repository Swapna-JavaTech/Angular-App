import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
   @Output() removedItem = new EventEmitter<Item>();
  constructor() {
    this.item = new Item();
   }
   delete(){
    this.removedItem.emit(this.item);
   }
  ngOnInit(): void {
  }

}
