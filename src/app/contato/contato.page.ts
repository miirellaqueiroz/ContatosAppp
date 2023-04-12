import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { contatos } from '../models/contatos.model';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatoPage implements OnInit {
  contato: contatos | undefined


  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.contato = this.dadosService.pegarDados('contato');
    console.log('Contato enviado', this.contato)
  }

}
