import { Component, OnInit } from '@angular/core';
import { DemPayChequeService } from '../../shared/Services/Cheques/dem-pay-cheque.service';
import { ArticlePayChequeService } from '../../shared/Services/Cheques/article-pay-cheque.service';
import { DemPayCheque } from '../../shared/Models/Cheques/dem-pay-cheque.model';
import { ArticlePayCheque } from '../../shared/Models/Cheques/article-pay-cheque.model';

@Component({
  selector: 'app-dem-pay-cheque-list-refuse',
  templateUrl: './dem-pay-cheque-list-refuse.component.html',
  styleUrls: ['./dem-pay-cheque-list-refuse.component.css']
})
export class DemPayChequeListRefuseComponent implements OnInit {

  constructor(private demandeService: DemPayChequeService,
    private articleService: ArticlePayChequeService,
  ) { }

  ngOnInit(): void {
    this.getDemPayList();
  }

  p: Number = 1;
  count: Number = 5;
  //Get Dem pay ListProject
  dem5: DemPayCheque[] = [];
  dem6: DemPayCheque[] = [];
  arlis: ArticlePayCheque[] = [];
  arlis2: ArticlePayCheque[] = [];
  getDemPayList() {
    this.demandeService.Get().subscribe(res => {
      this.dem5 = res
      this.dem6 = this.dem5.filter(item => item.etatgeneral == "مرفوضة")

    })
  }

  //PopulateForm
  per: DemPayCheque = new DemPayCheque();


  populateForm(conge: DemPayCheque) {
    this.per = Object.assign({}, conge)
    this.articleService.Get().subscribe(res => {
      this.arlis2 = res;
      this.arlis = this.arlis2.filter(item => item.idDem == this.per.id)
    })
  }
}
