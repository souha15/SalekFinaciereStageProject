import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/Services/User/user-service.service';
import { Router } from '@angular/router';
import { PrivilegesService } from '../shared/Services/User/privileges.service';
import { VoitureService } from '../shared/Services/voiture/voiture.service';
import { Voiture } from '../shared/Models/voiture/voiture.model';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { DemPayChequeService } from '../shared/Services/Cheques/dem-pay-cheque.service';
import { DemPayCheque } from '../shared/Models/Cheques/dem-pay-cheque.model';
import { NotifMsgInterneService } from '../shared/Services/Msg Interne/notif-msg-interne.service';
import { NotifMsgInterne } from '../shared/Models/Msg Interne/notif-msg-interne.model';
import { PointageService } from '../shared/Services/Pointage/pointage.service';
import { Pointage } from '../shared/Models/Pointage/pointage.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  userDetails;
  constructor(private UserService: UserServiceService,
    private router: Router,
    private notifmsgService: NotifMsgInterneService,
    private demandeService: DemPayChequeService,
    private pointageService: PointageService,
  ) {}

  ngOnInit(): void {
    this.getUser();
   //this.getVoiture();
    this.getUserConnected();
    this.getPointage();
    this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
       
               
      },
      err => {
        console.log(err);
      },
    );

    this.notifmsg();
  //  this.autoSave();
  }
  getUser() {
    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
    })
  }
  save: boolean = false;
  intervale;
  autoSave() {
    this.intervale = setInterval(() => {
      console.log('setTimeOut');
      this.save = true;
      if (this.UserIdConnected != null) {
        this.getUserConnected();
        this.notifmsg();
        this.getPointage();

      }

    }, 1000);
  }

  /// Msg Notif
  notifnb: number = 0;
  testnotifnb: boolean = false;
  notifMsgList: NotifMsgInterne[] = [];
  notifMsgList2: NotifMsgInterne[] = [];

  notifmsg() {
    this.notifmsgService.ListNotifMsgInterne().subscribe(res => {
      this.notifMsgList2 = res;
      this.notifMsgList = this.notifMsgList2.filter(item => item.userIdReceiver == this.UserIdConnected && item.seen == 0)
      this.notifnb = this.notifMsgList.length;
      if (this.notifnb != 0) {
        this.testnotifnb = true;
      } else {
        this.testnotifnb = false;
      }
    })
  }


  getUserProfile() {
   return  this.UserService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login-page');
  }


  // Get User Connected
  UserIdConnected: string;
  UserNameConnected: string;
  privtestaddTask: boolean = false;
  privtestfinance: boolean = false;
  privtesttransaction: boolean = false;
  privtestTasks: boolean = false;
  sexe: string;
  roleslist: any = [];
  testrole: boolean = false;
  testroledir: boolean = false;
  testroleadmin: boolean = false;
  demg1: DemPayCheque[] = [];
  demg2: DemPayCheque[] = [];
  getUserConnected() {

    this.UserService.getUserProfileObservable().subscribe(res => {
      this.UserIdConnected = res.id;
      this.UserNameConnected = res.fullName;
      this.sexe = res.sexe;
      this.UserService.getUserRoles(this.UserIdConnected).subscribe(res => {
        this.roleslist = res;
        this.roleslist.forEach(item => {
          if (item == "DIRECTORGENERAL" || item == "DIRECTORADMN" || item == "DIRECTORETAB" || item == "ADMINISTRATEUR") {
            this.testroledir = true;
          } else {
            this.testroledir = false;
          }

          this.demandeService.Get().subscribe(res => {
            this.dem1 = res
            if (this.testrole == true) {
              this.dem3 = this.dem2.filter(item => item.idparfinancier != this.UserIdConnected && item.idfinancier != this.UserIdConnected && item.idpart != this.UserIdConnected)
              this.demg1 = this.dem2.filter(item => +item.etatnum < 3);
              this.demg2 = this.dem1.filter(item => item.attribut5 == this.UserIdConnected && item.attribut3 == "editer");

              this.nbr = this.demg1.length + this.demg2.length
            }

            if (this.testroledir == true) {
              this.dem4 = this.dem1.filter(item => item.etatgeneral == "????????????" && +item.etatnum == 3);
              this.nbd = this.dem4.length;
            }

          
          })
        })

      })
    })
  }


  dem1: DemPayCheque[] = [];
  dem2: DemPayCheque[] = [];
  dem3: DemPayCheque[] = [];
  dem4: DemPayCheque[] = [];
  nbr: number = 0;
  nbd: number = 0;
  getDemPayList() {

  }
  List: Voiture[] = [];
  FList: Voiture[] = [];
  secondDate: Date;
  thirdDate: Date;
  nb: number=0;
 
  /*getVoiture() {
    let i: number = 0;
    this.carsService.Get().subscribe(res => {
      this.List = res;
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date();
      this.List.forEach(item => {

        this.secondDate = new Date(item.dateassurance);
        const diffDays = Math.round(Math.abs((firstDate.getTime() - this.secondDate.getTime()) / oneDay));
        if (diffDays == 11) {
          i = i + 1;
          this.nb = this.nb + 1;
 
        }
        if (diffDays == 30) {
          i = i + 1;
          this.nb = this.nb + 1;

        }


        this.thirdDate = new Date(item.datepermis);

        const diffDays2 = Math.round(Math.abs((firstDate.getTime() - this.thirdDate.getTime()) / oneDay));
        if (diffDays2 == 11) {
          i = i + 1;
          this.nb = this.nb + 1;

        }
        if (diffDays2 == 30) {
          i = i + 1;
          this.nb = this.nb + 1;
       
        }

      })

    })

  }*/

  point: Pointage = new Pointage();
  plist: Pointage[] = [];
  plist2: Pointage[] = [];
  fulldate = new Date().toLocaleDateString();
  pointer: boolean = false;

  getPointage() {
    this.pointageService.Get().subscribe(res => {
      this.plist2 = res
      this.plist = this.plist2.filter(item => item.idUserCreator == this.UserIdConnected && item.datePresence == this.fulldate)
      if (this.plist.length == 0) {
        this.pointer = true;

      } else {
        this.pointer = false;
        this.point = this.plist[0];
      }
    })
  }
}
