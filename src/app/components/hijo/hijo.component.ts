import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = "Esperando a cargar el nombre"
  constructor() { }
  ngOnInit(): void {
  }
  cambiarNombreH() {
    this.nombreHijo = "El hijo está cambiando el nombre";
  }
}
