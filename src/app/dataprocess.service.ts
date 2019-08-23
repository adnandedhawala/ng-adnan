import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class DataprocessService {
  private urlLink ='http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getData(name){
    return this.http.get(this.urlLink + name);
  }

  public obj_subjectClass = new Subject();

  setData(rec){
    // console.log(this.obj_subjectClass);
    this.obj_subjectClass.next(rec);
  }

  insertData(record,tableName){
    return this.http.post(this.urlLink+tableName,record);
  }

  smsApiProcess(url){
    return this.http.get(url);
  }

  public obj_subject_for_name = new Subject();
  passName(rec){
    this.obj_subject_for_name.next(rec);
  }
}
