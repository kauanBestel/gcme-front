import { Component } from '@angular/core';
import { EquipamentoService } from '../equipamento/equipamento.service';
import { Equipamento } from '../../../models/interface/equipamentoInterface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  modalAberto: boolean = false;

  novoEquipamento: Equipamento = {
    nomeEquip: '',
    descricaoEquip: '',
    dataManutencao: new Date(),
    proximaManutencao: new Date(),
  };

  constructor(private equipamentoService: EquipamentoService) {}

  abrirModal(): void {
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.resetarFormulario();
  }

  adicionarEquipamento(): void {
    this.equipamentoService.create(this.novoEquipamento).subscribe({
      next: (res) => {
        console.log('Equipamento adicionado:', res);
        this.fecharModal();
      },
      error: (err) => {
        console.error('Erro ao adicionar equipamento:', err);
      },
    });
  }

  private resetarFormulario(): void {
    this.novoEquipamento = {
      nomeEquip: '',
      descricaoEquip: '',
      dataManutencao: new Date(),
      proximaManutencao: new Date(),
    };
  }
}
