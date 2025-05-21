import { Equipamento } from '../../../models/interface/equipamentoInterface';
import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from './equipamento.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-equipamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipamento.component.html',
})
export class EquipamentoComponent implements OnInit {
  public equipamentos: Equipamento[] = [];

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
