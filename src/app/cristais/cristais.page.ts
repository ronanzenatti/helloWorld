import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-cristais',
  templateUrl: './cristais.page.html',
  styleUrls: ['./cristais.page.scss'],
})
export class CristaisPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome: "Cristal rosa",
      descricao: "10cm - quadrado",
      valor: 6535.554,
      foto: 'https://th.bing.com/th/id/R.5ca02b084174e2649b19836f8df91c67?rik=wO2J8aYoFhqIrw&pid=ImgRaw&r=0'
    },
    {
      nome: "Cristal azul",
      descricao: "20cm - triangulo",
      valor: 15,
      foto: 'https://th.bing.com/th/id/R.265246aab2471da20a07634ef3e91f52?rik=Jt0cminfheTnUw&pid=ImgRaw&r=0'
    },
    {
      nome: "Cristal verde",
      descricao: "30cm - redondo",
      valor: 25,
      foto: 'https://i.pinimg.com/originals/60/99/d2/6099d2ef5407e2d7d99f46cdd9235f12.jpg'
    },

  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }

}
