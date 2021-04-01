import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css']
})
export class RedesSociaisComponent implements OnInit {
  logotipo:string = './../assets/logo-antigo.png'
  redes_sociais = ['instagram', 'whatsapp', 'youtube', 'telegram']
  constructor() { }

  ngOnInit(): void {
  }

}
