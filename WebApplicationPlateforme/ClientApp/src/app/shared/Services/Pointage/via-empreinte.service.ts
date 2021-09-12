import { Injectable } from '@angular/core';
import { PathSharedService } from '../../path-shared.service';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ViaEmpreinte } from '../../Models/Pointage/via-empreinte.model';

@Injectable({
  providedIn: 'root'
})
export class ViaEmpreinteService {

  constructor(private pathService: PathSharedService,
    private http: HttpClient) { }

  readonly rootURL = this.pathService.getPath();
  private apiDownloadUrl = this.rootURL + '/ViaEmpreintes/download';
  private apiDownloadUrlPresence = this.rootURL + '/ViaEmpreintes/downloadPresence';
  private apiDownloadUrlSearch = this.rootURL + '/ViaEmpreintes/GetByDate/';
  formData: ViaEmpreinte;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  //Create ViaEmpreinte

  Add(file) {
    return this.http.post<ViaEmpreinte>(this.rootURL + '/ViaEmpreintes/download', file, this.headers);

  }

  public downloadFile(file: string): Observable<HttpEvent<Blob>> {
    return this.http.request(new HttpRequest(
      'POST',
      `${this.apiDownloadUrl}?file=${file}`,
      null,
      {
        reportProgress: true,
        responseType: 'json'
      }));
  }


  public downloadFilePrensence(file: string): Observable<HttpEvent<Blob>> {
    return this.http.request(new HttpRequest(
      'POST',
      `${this.apiDownloadUrlPresence}?file=${file}`,
      null,
      {
        reportProgress: true,
        responseType: 'json'
      }));
  }

  getData(file: string): Observable<ViaEmpreinte[]> {
    return this.http.get<ViaEmpreinte[]>(this.rootURL + '/ViaEmpreintes/getData/'+file);
  }

  PutObservableE(Transaction: ViaEmpreinte) {
    return this.http.put<ViaEmpreinte>(this.rootURL + '/ViaEmpreintes/' + Transaction.id, Transaction, this.headers);

  }
  Post() {
    return this.http.post(this.rootURL + '/ViaEmpreintes', this.formData, this.headers);
  }

  //Get ViaEmpreinte List

  Get(): Observable<ViaEmpreinte[]> {
    return this.http.get<ViaEmpreinte[]>(this.rootURL + '/ViaEmpreintes');
  }

  //Get ViaEmpreinte By Id

  GetById(Id) {
    return this.http.get<ViaEmpreinte>(this.rootURL + '/ViaEmpreintes/' + Id);
  }

  //Edit ViaEmpreinte

  Edit() {
    return this.http.put(this.rootURL + '/ViaEmpreintes/' + this.formData.id, this.formData, this.headers);
  }


  //Delete ViaEmpreinte

  Delete(id) {
    return this.http.delete(this.rootURL + '/ViaEmpreintes/' + id);
  }

  getDataByDate(val) {
    return this.http.get<ViaEmpreinte>(this.rootURL + '/GetDataEmpreinte/' + val);
  }
}
