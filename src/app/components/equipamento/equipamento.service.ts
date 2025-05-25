import { Injectable } from '@angular/core';
import { environment } from '../../../environments/api-routes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../../../models/interface/equipamentoInterface';

@Injectable({
  providedIn: 'root',
})
export class EquipamentoService {
  private baseUrl = `${environment.ApiUrl}/equipamento`;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.baseUrl);
  }

  getById(id: number): Observable<Equipamento> {
    return this.http.get<Equipamento>(`${this.baseUrl}/${id}`);
  }

  create(equipamento: Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(`${this.baseUrl}`, equipamento);
  }

  update(equipamento: Equipamento): Observable<Equipamento> {
    return this.http.put<Equipamento>(
      `${this.baseUrl}/${equipamento.id}`,
      equipamento
    );
  }

  delete(id: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
