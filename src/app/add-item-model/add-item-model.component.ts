import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-add-item-model',
  templateUrl: './add-item-model.component.html',
  styleUrls: ['./add-item-model.component.css']
})
export class AddItemModelComponent implements OnInit {

  formSubmitted =false;
  itemForm!: FormGroup;

  //defining the Form Control Variables
  itemName!: FormControl;
  itemCategory!: FormControl;
  itemPrice !: FormControl;
    itemWeight !: FormControl;

  constructor(private itemService : ItemService
    ,private router:Router) { }

  ngOnInit(): void {
    this.itemName = new FormControl('',[Validators.required,Validators.minLength(3)
                                        ,Validators.pattern('[a-zA-Z]*')]);
    this.itemCategory = new FormControl('',[Validators.required,Validators.minLength(3)
                                        ,Validators.pattern('[a-zA-Z]*')]);
    this.itemPrice = new FormControl('',[Validators.required,Validators.min(3)]);
    this.itemWeight = new FormControl('',Validators.required);

    this.itemForm = new FormGroup({
      'itemName' : this.itemName,
      'itemCategory' : this.itemCategory,
      'itemPrice' : this.itemPrice,
      'itemWeight' : this.itemWeight
    });
  }
  
  addItem(item:Item){
    this.itemService.addItem(item);
    this.formSubmitted = true;
    this.router.navigateByUrl('/listitems');
  }

}
