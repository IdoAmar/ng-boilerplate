import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiMap } from 'src/app/common/api.map';
import { DataService } from 'src/app/core/services/data.service';
import { TestModel } from './models/test.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute, public  translate : TranslateService) { }

  ngOnInit(): void {
    console.log("hello i am home component")
    this.data.request<TestModel[]>(ApiMap.test).subscribe(
      (o) => {
        console.log(o.body?.[0].text);
      });
      console.log(this.translate.currentLang)
  }
}
