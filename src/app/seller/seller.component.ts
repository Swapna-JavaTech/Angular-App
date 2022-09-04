import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  items : Item[] = [];
  constructor(public itemService:ItemService) { 
    this.items = itemService.getItems();
  }

  ngOnInit(): void {
  }

}
