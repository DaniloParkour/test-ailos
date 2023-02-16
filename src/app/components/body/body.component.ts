import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InfoFields } from 'src/app/dos/card';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Output() cardDataChanged = new EventEmitter();

  cpfValue: string = '';
  cardsData: any;

  checkCpf() {

    //Mask and Validation
    this.cardsData = this.getData();

    this.cardDataChanged.emit(this.cardsData);
    
  }

  getData() {

    return [
      {
        title: "Situação cadastral do CPF",
        subTitle: "Consulta na receita federal",

        infos: [
          {
            icon: 'user-large',
            label: 'Nome',
            text: 'Mariane de Sousa Oliveira'
          },
          {
            icon: 'circle-check',
            label: 'Situação do CPF',
            text: 'Regular'
          }
        ]
      },
      {
        title: "Conta aplicação",
        subTitle: "Conta Viacredi",

        infos: [
          {
            icon: 'credit-card',
            label: 'Número da conta',
            text: '557932-4'
          },
          {
            icon: '',
            label: '',
            text: 'Duplicar conta'
          }
        ]
      },
      {
        title: "Conta corrente",
        subTitle: "Cooperativa Viacredi",

        infos: [
          {
            icon: 'credit-card',
            label: 'Número da conta',
            text: '778461-8'
          },
          {
            icon: '',
            label: '',
            text: 'Duplicar conta'
          }
        ]
      }
    ];
  }

}

class CardData {
  info: Array<InfoFields> = [];
  icon: string = '';
  label: string = '';
  text: string = '';
}
