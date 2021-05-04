import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';

import { MongodbService } from '../../services/mongodb.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { hospitals } from '../../models/hospital.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-by-district',
  templateUrl: './by-district.component.html',
  styleUrls: ['./by-district.component.css']
})

export class ByDistrictComponent implements OnInit {

  dataSource = new UserDataSource(this.mongoService);
  displayedColumns = ['S_No', 'District', 'Institution', 'Covid Beds Free'];

  constructor(private mongoService: MongodbService) { }

  ngOnInit(): void {
  }
}

export class UserDataSource extends MatTableDataSource<any> {
  constructor(private mongoService: MongodbService) {
    super();
  }
  connect1(): Observable<hospitals[]> {
    return this.mongoService.getAll();
  }
  disconnect() {}
}

