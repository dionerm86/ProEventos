import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;
    
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();

  }

  public getEventos(): void{
    this.httpClient.get("http://localhost:5183/api/eventos").subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }

}
