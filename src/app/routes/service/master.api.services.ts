import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyMaster, ItemMaster } from '../domain';
import { MasterUrls } from './url.api';
import { environment } from 'src/environments/environment';
import { TreeNode } from 'primeng/api/treenode';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
@Injectable({
    providedIn: 'root'
  })
  export class MasterApiService {
    baseUrl: string = environment.apiRootURL;
    constructor(private httpClient: HttpClient) { }

    public GetAllCurrency() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<CurrencyMaster[]>(this.baseUrl + MasterUrls.GetAllCurrency);
    }
    // Save general Consent pdf  Data
    public InsertCurrency(data: CurrencyMaster) {
      return this.httpClient.post<CurrencyMaster[]>(this.baseUrl + MasterUrls.InsertCurrency, data, httpOptions);
    }

    public UpdateCurrency(data: CurrencyMaster) {
      return this.httpClient.post<CurrencyMaster[]>(this.baseUrl + MasterUrls.UpdateCurrency, data, httpOptions);
    }

    public DeleteCurrency(data: CurrencyMaster) {
      return this.httpClient.post<CurrencyMaster[]>(this.baseUrl + MasterUrls.DeleteCurrency, data, httpOptions);
    }

    public getItemTreeNode() {
      return this.httpClient.get('assets/demo/data/files.json')
                  .toPromise()
                  .then((res: {data: any}) => res.data as TreeNode[]);
  }

    public getItemsParentTreeNode() {
      return this.httpClient.get<ItemMaster[]>(this.baseUrl + MasterUrls.GetAllItem);
  }
    public getItemsChildrenByParentTreeNode(id: number) {
      return this.httpClient.get<ItemMaster[]>(this.baseUrl + MasterUrls.GetAllItemById + '/' + id );
    }
  }
