import { Component, OnInit } from "@angular/core";
import { MongodbService } from "../../services/mongodb.service";

@Component({
  selector: "app-list-hospitals",
  templateUrl: "./list-hospitals.component.html",
  styleUrls: ["./list-hospitals.component.css"],
})
export class ListHospitalsComponent implements OnInit {
  Hospitals: any;
  currentHospital = null;
  currentIndex = -1;
  title = "";
  district = "";

  constructor(private MongodbService: MongodbService) {}

  ngOnInit(): void {
    this.retrieveHospitals();
  }

  retrieveHospitals(): void {
    this.MongodbService.getAllHospitals().subscribe(
      (data) => {
        this.Hospitals = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

/*import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})*/
// export class HospitalsListComponent implements OnInit {
//   Hospitals: any;
//   currentHospital = null;
//   currentIndex = -1;
//   title = "";
//   district = "";

//   constructor(private MongodbService: MongodbService) {}

//   ngOnInit(): void {
//     this.retrieveHospitals();
//   }

//   retrieveHospitals() {
//     this.MongodbService.getAllHospitals().subscribe(
//       (data) => {
//         this.Hospitals = data;
//         console.log(data);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

//   refreshList(): void {
//     this.retrieveHospitals();
//     this.currentHospital = null;
//     this.currentIndex = -1;
//   }

//   setActiveHospital(Hospital, index): void {
//     this.currentHospital = Hospital;
//     this.currentIndex = index;
//   }

//   removeAllHospitals(): void {
//     this.MongodbService.deleteAll().subscribe(
//       (response) => {
//         console.log(response);
//         this.retrieveHospitals();
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

//   searchDistrict(): void {
//     this.MongodbService.findByDistrict(this.district).subscribe(
//       (data) => {
//         this.district = data;
//         console.log(data);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
// }
