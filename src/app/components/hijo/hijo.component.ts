import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = "Esperando el nombre del padre"
  @Output() cambioNombreHijo = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
  }

  cambiarNombre() {
    this.nombreHijo = "Nombre del hijo";
    this.cambioNombreHijo.emit(this.nombreHijo);
  }
}
