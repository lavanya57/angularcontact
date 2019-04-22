import { Component, OnInit } from '@angular/core';
import { Contact } from '../comp/comp.model';
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})

export class CompComponent implements OnInit {
  constructor() {
  }
  private Contacts: Contact[] = [];
  private name: string;
  private phone: string;

  ngOnInit() {
  }
  get() {
    const contact = {name: this.name, phone: this.phone};
    this.Contacts.push(contact);
  }
}
