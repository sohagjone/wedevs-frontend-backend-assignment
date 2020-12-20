import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  product = new Product();
  data:any;
  constructor(
    private route:ActivatedRoute,
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData()
  {
    this.dataService.getOneProduct(this.id).subscribe(res=>{
      this.data=res;
      this.product=this.data; 
    })
  }
  updateData()
  {
    
    this.dataService.updateData(this.id, this.data).subscribe(res=>{
      this.product=this.data; 
    })
  }

}
