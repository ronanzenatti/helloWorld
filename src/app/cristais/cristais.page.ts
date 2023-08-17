import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cristais',
  templateUrl: './cristais.page.html',
  styleUrls: ['./cristais.page.scss'],
})
export class CristaisPage implements OnInit {

  listaProdutos = [
    {
      nome: "Cristal rosa",
      descricao: "10cm - quadrado",
      valor: 35
    },
    {
      nome: "Cristal azul",
      descricao: "20cm - triangulo",
      valor: 15
    },
    {
      nome: "Cristal verde",
      descricao: "30cm - redondo",
      valor: 25
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
