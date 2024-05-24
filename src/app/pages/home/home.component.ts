import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  nombre: string="Paulina";
  constructor(){}

  ngOnInit(): void {
    
  }

  cambiarnombre(){
    this.nombre='Maria Fernanda';
  }
}
