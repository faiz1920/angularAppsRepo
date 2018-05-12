import { JsonDataService } from './../../services/json-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customersList: any;
  constructor(private _dataService: JsonDataService) { }

  ngOnInit() {
    this._dataService.getCustomersList().then(
      success => { this.customersList = (success); console.log(JSON.stringify(success)); },
      error => { console.error(JSON.stringify(error)); }
    );

  }
  getCustomerDetails(customer) {
    console.log(JSON.stringify(customer));
  }

}
