import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactFormSubmitted = false;
  contact: Contact = new Contact();
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

 saveData(contact:Contact){
    this.contactService.saveData(contact);
    this.contactFormSubmitted = true;
 }

}
