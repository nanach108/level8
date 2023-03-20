import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private http: HttpClient) { }

  obj:any;

  ngOnInit(): void {
    this.obj=this.http.get("http://127.0.0.1:8000/allmyproducts").subscribe(
      data => this.obj = data
    )

  }

}
