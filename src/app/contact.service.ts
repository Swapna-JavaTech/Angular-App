import { Injectable } from '@angular/core';
import { MockData } from './mock-data/mock-contact-data';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  saveData(contact: Contact) {
    this.contacts.push(contact);
  }

  contacts : Contact[] = [];
  constructor() { 
    this.contacts = MockData.contacts;
  }
}
