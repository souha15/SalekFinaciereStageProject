import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../../../shared/Services/Rh/equipement.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../../shared/Services/User/user-service.service';
import { TbListeningService } from '../../../shared/Services/Evenements/tb-listening.service';
import { TbListening } from '../../../shared/Models/Evenements/tb-listening.model';
import { UserDetail } from '../../../shared/Models/User/user-detail.model';
import { Equipement } from '../../../shared/Models/RH/equipement.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.css']
})
export class EquipementListComponent implements OnInit {

  constructor(private congeService: EquipementService,
    private toastr: ToastrService,
    private UserService: UserServiceService,
    private tblService: TbListeningService,) { }

  ngOnInit(): void {
    this.getNomEquipementList();
    this.getTypeEquipementList();
    this.getUserConnected();
    this.CongeList();
    this.resetForm();
    this.UserList();
  }

  //Type Equipement

  typeEquipement: TbListening[] = [];
  getTypeEquipementList() {
    this.tblService.GetE().subscribe(res => {
      this.typeEquipement = res
    })
  }


  //Type Equipement

  nomEquipement: TbListening[] = [];
  getNomEquipementList() {
    this.tblService.GetN().subscribe(res => {
      this.nomEquipement = res
    })
  }

  //Get Users List
  user: UserDetail[] = [];
  UserList() {
    this.UserService.GetUsersList().subscribe(res => {
      this.user = res;
    })
  }

  //Get UserConnected

  UserIdConnected: string;
  UserNameConnected: string;
  adminisgtrationName: any;
  userc: UserDetail = new UserDetail();

  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.userc = res
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })

  }


  //Get Conge Demand Lis

  congeList: Equipement[] = [];
  filtredCongeList: Equipement[] = [];
  CongeList() {
    this.congeService.Get().subscribe(res => {
      this.congeList = res
      this.filtredCongeList = this.congeList.filter(item => item.idUserCreator == this.UserIdConnected)
    })
  }


  delete(id: number) {


    if (confirm('???? ?????? ?????????? ???? ?????? ?????? ????????????')) {
      this.congeService.Delete(id)
        .subscribe(res => {
          this.CongeList();
          this.toastr.success("???? ??????????  ??????????", "????????");
        },

          err => {
            console.log(err);
            this.toastr.warning('???? ?????? ??????????  ', ' ??????');
          }
        )

    }

  }

  //Edit Administration
  congeId: number;
  onSubmit(form: NgForm) {
    this.updateRecord(form)
  }

  conge: Equipement = new Equipement();
  updateRecord(form: NgForm) {
    this.conge = Object.assign(this.conge, form.value);
    this.congeId = this.conge.id;
 
    if (this.conge.etatdir == "???? ????????????????") {
      this.congeService.Edit().subscribe(res => {
        this.toastr.success('???? ?????????????? ??????????', '????????')
        this.resetForm();
        this.CongeList();
      },
        err => {
          this.toastr.error('???? ?????? ??????????????  ', ' ??????');
        }


      )
    } if (this.conge.etatdir == '??????????') {
      this.toastr.error('?????? ?????? ???????????????? ?????? ?????? ??????????', ' ???? ?????? ??????????????');
    } if (this.conge.etatdir == '??????') {
      this.toastr.error('?????? ???? ?????? ?????? ??????????', ' ???? ?????? ??????????????');
    }
  }


  populateForm(conge: Equipement) {
    this.congeService.formData = Object.assign({}, conge)
    this.congeId = conge.id

  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.congeService.formData = {
      id: null,
      type: '',
      nom: '',
      email: '',
      tel: '',     
      transfert: '',      
      remarque: '',
      etatdir: '',      
      date: '',
      datedir: '',
      iddir: '',
      nomdir:'',
      attribut1: null,
      attribut2: '',
      attribut3: '',
      attribut4: '',
      attribut5: '',
      attribut6: '',
      dateenreg: '',
      userNameCreator: '',
      idUserCreator: '',

    }
  }
}
