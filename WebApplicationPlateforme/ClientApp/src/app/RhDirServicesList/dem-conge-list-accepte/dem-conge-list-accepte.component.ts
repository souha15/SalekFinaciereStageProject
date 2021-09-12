import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../shared/Services/Rh/conge.service';
import { Conge } from '../../shared/Models/RH/conge.model';

@Component({
  selector: 'app-dem-conge-list-accepte',
  templateUrl: './dem-conge-list-accepte.component.html',
  styleUrls: ['./dem-conge-list-accepte.component.css']
})
export class DemCongeListAccepteComponent implements OnInit {

  constructor(private congeService: CongeService,) { }

  ngOnInit(): void {
    this.CongeList();
  }

  p: Number = 1;
  count: Number = 5;

  congeList: Conge[] = [];
  filtredCongeList: Conge[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.attribut2 == "موافق")
    })
  }


  per: Conge = new Conge();

  populateForm(conge: Conge) {
    this.per = Object.assign({}, conge)
    this.congeService.formData = Object.assign({}, conge)
  }
}
