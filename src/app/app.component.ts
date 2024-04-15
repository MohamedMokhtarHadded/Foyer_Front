import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontDevops';
  listEtudiants: any;

  constructor( private http: HttpClient ) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8181/etudiant/afficheetudiants').subscribe((data) => {
      console.log(data);
      this.listEtudiants = data;
    });
  }

}
