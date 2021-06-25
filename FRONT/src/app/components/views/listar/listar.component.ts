import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Medico } from "src/app/models/Medico";
import { MedicoService } from "src/app/services/medico.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  medicos!: MatTableDataSource<Medico>;
  displayedColumns: string[] = ['id', 'nome','crm', 'especialidade' ,'criadoEm',];

  constructor(private service: MedicoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((medicos) => {
      this.medicos = new MatTableDataSource<Medico>(medicos);
    });
  }

}
