import { Component, OnInit } from '@angular/core';
import { RecrutementService } from '../../shared/Services/Rh/recrutement.service';
import { ToastrService } from 'ngx-toastr';
import { Recrutement } from '../../shared/Models/RH/recrutement.model';

@Component({
  selector: 'app-dem-recrutement-list-accepte',
  templateUrl: './dem-recrutement-list-accepte.component.html',
  styleUrls: ['./dem-recrutement-list-accepte.component.css']
})
export class DemRecrutementListAccepteComponent implements OnInit {

  constructor(private congeService: RecrutementService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.CongeList();
  }

  congeList: Recrutement[] = [];
  filtredCongeList: Recrutement[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item =>  item.attribut2 == "موافق")
    })
  }

  per: Recrutement = new Recrutement();

  populateForm(conge: Recrutement) {
    this.per = Object.assign({}, conge)
    this.congeService.formData = Object.assign({}, conge)
  }

}
