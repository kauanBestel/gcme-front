import { Injectable } from '@angular/core';
import { environment } from '../../../environments/api-routes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../../../models/interface/equipamentoInterface';

@Injectable({
  providedIn: 'root',
})
export class EquipamentoServiceService {
  private baseUrl = `${environment.ApiUrl}/equipamento`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.baseUrl);
  }

  getById(id: String): Observable<Equipamento> {
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
