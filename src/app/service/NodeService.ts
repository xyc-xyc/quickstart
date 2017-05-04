import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TreeNode } from 'primeng/primeng';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NodeService {

    constructor(private http: Http) { }

    getFilesystem() : Observable<TreeNode[]> {
        return this.http.get('/data/filesystem.json')
        .map(this.extractData)
    }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || [];
  }

}