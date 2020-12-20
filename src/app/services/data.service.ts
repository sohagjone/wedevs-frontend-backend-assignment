import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { identifierName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {
   constructor(
  	private httpClient:HttpClient

  ) { }

  getData(data)
  {
  	return this.httpClient.post('http://127.0.0.1:8000/product/', data);
  }
  insertData(data)
  {
    return this.httpClient.post('http://127.0.0.1:8000/addproduct/',data);
  }
  deleteData(id)
  {
    return this.httpClient.delete('http://127.0.0.1:8000/deleteproduct/'+id);
  }
  getOneProduct(id)
  {
    return this.httpClient.get('http://127.0.0.1:8000/getoneproduct/'+id);
  }
  updateData(id, data)
  {
    return this.httpClient.patch('http://127.0.0.1:8000/updateproduct/'+id, data);
  }
  registerUser(data)
  {
    return this.httpClient.post('http://127.0.0.1:8000/user/', data);
  }
  login(data)
  {
    return this.httpClient.post('http://127.0.0.1:8000/api/login', data);
  }
}
