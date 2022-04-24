import { Component, OnInit } from '@angular/core';
import { Cidade } from './shared/cidade';
import { CidadeService } from './shared/cidade.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit{

  cidade = {
    nome: '',
    estado: '',
    id: null
  }
  edit = true;
  add = false;
  cidades: Cidade[];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.getCidades()
  }

  private getCidades() {
    this.cidadeService.getCidades().subscribe(cidades => this.cidades = cidades);
  }

  addCidade() {
    const data = {
      nome: this.cidade.nome,
      estado: this.cidade.estado,
      id: this.cidade.id
    };
    this.cidadeService.createCidade(data).subscribe(response => {
      console.log(response)
      this.getCidades();
    });
  }

  setCidadeEdit(cidade: Cidade) {
    this.cidade.nome = cidade.nome;
    this.cidade.estado = cidade.estado;
    this.cidade.id = cidade.id;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.cidade.nome = "";
    this.cidade.estado = "";
    this.cidade.id = null;
    this.edit = true;
    this.add = false;
  }

  removeCidade(cidade: Cidade) {
    const id = cidade.id;
    console.log(cidade)
    this.cidadeService.deleteCidade(id).subscribe(cidade => console.log(cidade));
    this.getCidades()
  }

  updateCidade(){
    this.cidadeService.editCidade(this.cidade).subscribe(response => console.log(response));
    this.getCidades()
    this.resetValues()
  }
}
