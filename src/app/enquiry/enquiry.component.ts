import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  productobj: { name: any; color: any; } | undefined;


  constructor(private http:HttpClient) { 
 var productobj:Object={};
   addNewProduct=(product: { name: any; color: any; }) =>{
    this.productobj={
      "name":product.name,
      "color":product.color,
    }
  this.http.post('http://localhost:4444/products/',this.productobj).subscribe((kum)=>{
    console.log(kum);
  })
  }
}
  ngOnInit(): void {
  }

}
