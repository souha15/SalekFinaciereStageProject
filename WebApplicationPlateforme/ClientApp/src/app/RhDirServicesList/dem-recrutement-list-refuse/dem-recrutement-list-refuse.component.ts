import { Component, OnInit } from '@angular/core';
import { RecrutementService } from '../../shared/Services/Rh/recrutement.service';
import { ToastrService } from 'ngx-toastr';
import { Recrutement } from '../../shared/Models/RH/recrutement.model';

@Component({
  selector: 'app-dem-recrutement-list-refuse',
  templateUrl: './dem-recrutement-list-refuse.component.html',
  styleUrls: ['./dem-recrutement-list-refuse.component.css']
})
export class DemRecrutementListRefuseComponent implements OnInit {


  constructor(private congeService: RecrutementService,
    private toastr: ToastrService, ) { }

  ngOnInit(): void {
    this.CongeList();
  }

  congeList: Recrutement[] = [];
  filtredCongeList: Recrutement[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.attribut2 == "رفض")
    })
  }

  per: Recrutement = new Recrutement();

  populateForm(conge: Recrutement) {
    this.per = Object.assign({}, conge)
    this.congeService.formData = Object.assign({}, conge)
  }

}
