import { Component } from '@angular/core';
import { EquipamentoService } from '../equipamento.service';
import { Equipamento } from '../../../../models/interface/equipamentoInterface';
import { FormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-addEquip-button',
  imports: [FormsModule],
  templateUrl: './addEquip-button.component.html',
})
export class AddEquipButtonComponent {
  @HostListener('document:keydown.escape', ['$event'])
  onEscPressed(event: KeyboardEvent) {
    if (this.modalAberto) {
      this.fecharModal();
    }
  }

  modalAberto: boolean = false;

  novoEquipamento: Equipamento = {
    nomeEquip: '',
    descricaoEquip: '',
    dataManutencao: new Date(),
    proximaManutencao: new Date(),
    codigoEquip: 0,
    marcaEquip: '',
    rangeTipo: 0,
    numeroSerie: '',
    modelo: '',
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
    // Conversões explícitas:
    this.novoEquipamento.codigoEquip = Number(this.novoEquipamento.codigoEquip);
    this.novoEquipamento.rangeTipo = Number(this.novoEquipamento.rangeTipo);

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
      codigoEquip: 0,
      marcaEquip: '',
      rangeTipo: 0,
      numeroSerie: '',
      modelo: '',
    };
  }
}
