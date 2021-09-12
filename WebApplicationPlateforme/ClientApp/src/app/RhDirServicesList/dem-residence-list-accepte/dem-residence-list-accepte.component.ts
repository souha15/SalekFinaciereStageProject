import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../../shared/Services/User Services/residence.service';
import { Residence } from '../../shared/Models/User Services/residence.model';

@Component({
  selector: 'app-dem-residence-list-accepte',
  templateUrl: './dem-residence-list-accepte.component.html',
  styleUrls: ['./dem-residence-list-accepte.component.css']
})
export class DemResidenceListAccepteComponent implements OnInit {

  constructor(private residenceService: ResidenceService,) { }

  ngOnInit(): void {
    this.CongeList();
  }

  p: Number = 1;
  count: Number = 5;

  congeList: Residence[] = [];
  dem: Residence = new Residence();
  filtredCongeList: Residence[] = [];
  CongeList() {
    this.residenceService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.etatdir == "موافق")
    })
  }

  testEdit: boolean = false;
  populateForm(conge: Residence) {
    this.residenceService.formData = Object.assign({}, conge)
    this.dem = Object.assign({}, conge)

  }
}
