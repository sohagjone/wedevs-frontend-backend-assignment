import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataArr:any;
  message:any;
  files : any;
  page:any = 1;
  limit: any = 5;
  skip : any;
  totalCount : any;
  imageDirectoryPath : any = 'http://127.0.0.1:8000/public/image/';
  product = new Product();
  constructor(
  	private dataService:DataService
  ) { }

  ngOnInit(): void {

  	this.getProductData();
  }
  getProductData()
  {
    if(this.page == 1){
      this.skip = 0;
    }
    else{
      this.skip = (this.page-1) * this.limit;
    }
    
  
    var requestObj = {
      
      'limit': this.limit,
      'skip' : this.skip
    }

  	this.dataService.getData(requestObj).subscribe((res:any)=>{
      this.dataArr = res.data;
      this.totalCount = res.totalRecord;
  	})
  }
  insertData()
  {
     let formdata = new FormData();
     formdata.append("file", this.files, this.files.name);
     formdata.append("data",JSON.stringify(this.product));
     this.dataService.insertData(formdata).subscribe(res=>{
     this.message = this.dataArr.message;
     this.product = new Product();
     this.getProductData();
     
        
     })
  }
  deleteData(id)
  {
    this.dataService.deleteData(id).subscribe(res=>{
      this.getProductData();
    })
  }
  imageUpload(event)
  {
        this.files = event.target.files[0];
      
  }
 

}
