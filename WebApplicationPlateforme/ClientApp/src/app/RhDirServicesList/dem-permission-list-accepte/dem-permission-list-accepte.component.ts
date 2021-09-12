import { Component, OnInit } from '@angular/core';
import { PermissionUService } from '../../shared/Services/User Services/permission-u.service';
import { PermissionU } from '../../shared/Models/User Services/permission-u.model';

@Component({
  selector: 'app-dem-permission-list-accepte',
  templateUrl: './dem-permission-list-accepte.component.html',
  styleUrls: ['./dem-permission-list-accepte.component.css']
})
export class DemPermissionListAccepteComponent implements OnInit {

  constructor(private congeService: PermissionUService,) { }

  ngOnInit(): void {
    this.CongeList();
  }

  p: Number = 1;
  count: Number = 5;

  congeList: PermissionU[] = [];
  filtredCongeList: PermissionU[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.etatdir == "موافق")
    })
  }

  per: PermissionU = new PermissionU();

  populateForm(conge: PermissionU) {
    this.per = Object.assign({}, conge)
    this.congeService.formData = Object.assign({}, conge)
  }
}
