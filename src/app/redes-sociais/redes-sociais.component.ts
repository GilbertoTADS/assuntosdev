import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css']
})
export class RedesSociaisComponent implements OnInit {
  logotipo:string = './../assets/logo-antigo.png'
  redes_sociais = [
    {rede:'instagram',endereco:'https://www.instagram.com/assuntosdev/'}, 
    {rede:'whatsapp',endereco:'https://wa.me/message/EFLPAWQW7QVKN1'},
    {rede:'youtube',endereco:'https://www.youtube.com/channel/UCdkn7Ps55eiG3mBsmCgRTSQ'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
