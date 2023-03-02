import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api-services/api.service';
import { people } from '../api-services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleComponent implements OnInit {

  data: people[] = [];
  state: string = '';
  columnsToDisplay = ['name', 'gender', 'age', 'eye_color', 'hair_color', 'id'];

  constructor(private api: ApiService) {
    
  }

  ngOnInit(): void {
    this.state = 'submitted';
    this.api.GetPeople().subscribe({
      next: (x) => {
        this.data = x;
        this.state = 'success';
        console.log(this.data);
      },
      error: ( error ) => {
        this.state = 'failed';
      }
    });
  }
}
