import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[] | undefined;
  constructor(private http:HttpClient) {
    
 this.http.get('http://localhost:4444/products').subscribe(
      (nanth) => {
        this.products = (nanth) as any

      }
     

    )
    }
  
  
        // deleteProduct=function(id){
        // const nan=`$('http://jsonplaceholder.typicode.com/users'/$(id)};
        // }
  ngOnInit(): void {

    
  }
}
