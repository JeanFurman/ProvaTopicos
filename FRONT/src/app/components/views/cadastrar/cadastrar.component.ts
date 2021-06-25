import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MedicoService } from "src/app/services/medico.service";
import { Medico } from "src/app/models/Medico";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {

  nomeMedico!: string;
  crmMedico!: string;
  especialidadeMedico!: string;

  constructor(private medico: MedicoService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {
    
  }

  cadastrar(): void {
    let medico = new Medico();
    medico.nome = this.nomeMedico;
    medico.crm = this.crmMedico;
    medico.especialidade = this.especialidadeMedico;
    this.medico.cadastrar(medico).subscribe(medico => {
      this.snack.open("Médico cadastrado", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });  
  }

}
