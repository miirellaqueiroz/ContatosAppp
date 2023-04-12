import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { contatos } from '../models/contatos.model';
import { DadosService } from '../services/dados.service';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  listaContatos: contatos[] = [
    {
      foto: 'assets/mirella.jpeg',
      nome: 'Mirella',
      email: 'mirellaqueiroz@gmail.com',
      id: 1,
      pagina: '/contato'
    },
    {
      foto: 'assets/kaua.jpeg',
      nome: 'Kaua',
      email: 'kauarafaeli@gmail.com',
      id: 2,
      pagina: '/contato'
    },
    {
      foto: 'assets/sarah.jpeg',
      nome: 'Sarah',
      email: 'sarahabreu@gmail.com',
      id: 3,
      pagina: '/contato'
    },
    {
      foto: 'assets/gabriel.jpeg',
      nome: 'Gabriel',
      email: 'gabrielhenrique@gmail.com',
      id: 4,
      pagina: '/contato'
    },
    {
      foto: 'assets/monique.jpeg',
      nome: 'Monique',
      email: 'monique@gmail.com',
      id: 5,
      pagina: '/contato'
    }
  ];


  constructor(public dadosService: DadosService, public route: Router) {}

  exibirContato(contato: contatos){
    this.dadosService.guardarDados('contato', contato);
    this.route.navigateByUrl('/contato')
  }


}

