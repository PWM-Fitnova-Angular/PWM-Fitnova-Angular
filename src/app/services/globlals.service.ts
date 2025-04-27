import { Injectable } from '@angular/core';
import {getWebData } from '../../firebase/firestore_utils'
import {BehaviorSubject, from, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  private webDataSubject = new BehaviorSubject<any[]>([]);
  public webData$: Observable<any[]> = this.webDataSubject.asObservable();

  constructor() {
    this.loadWebData();
  }

  private async loadWebData() {
    const data = await getWebData();
    this.webDataSubject.next(data);
  }
}
