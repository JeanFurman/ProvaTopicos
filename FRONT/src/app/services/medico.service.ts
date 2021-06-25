import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Medico } from "../models/Medico";

@Injectable({
  providedIn: "root",
})
export class MedicoService {

  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.baseURL}medico/listar`);
  }

  cadastrar(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${this.baseURL}medico/cadastrar`, medico);
  }

}