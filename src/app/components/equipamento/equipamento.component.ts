import { Equipamento } from '../../../models/interface/equipamentoInterface';
import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from './equipamento.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-equipamento',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './equipamento.component.html',
})
export class EquipamentoComponent implements OnInit {
  public equipamentos: Equipamento[] = [];
  public equipamentoSelecionado: Equipamento | null = null;
  public modalAberto = false;

  constructor(private readonly equipamentoService: EquipamentoService) {}

  ngOnInit(): void {
    this.loadEquipments();
  }

  private async loadEquipments(): Promise<void> {
    this.equipamentoService.getAll().subscribe({
      next: (response: Equipamento[]) => (this.equipamentos = response),
      error: (error: any) => {
        console.log('erro ao listar equipamentos');
      },
    });
  }

  abrirModal(equipamento: Equipamento): void {
    this.modalAberto = true;
    this.equipamentoSelecionado = equipamento;
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.equipamentoSelecionado = null;
  }

  public calculateProgress(equipamento: Equipamento): number {
    const hoje = new Date().getTime();
    const inicio = new Date(equipamento.dataManutencao).getTime();
    const fim = new Date(equipamento.proximaManutencao).getTime();

    if (inicio >= fim) return 100;
    const total = fim - inicio;
    const atual = hoje - inicio;
    const progresso = Math.min(100, Math.max(0, (atual / total) * 100));
    return Math.round(progresso);
  }
}
