import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../../services/api.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import moment from "moment-timezone";

@Component({
  selector: "app-login",
  templateUrl: "./commits.component.html",
  styleUrls: ["./commits.component.css"]
})
export class CommitsComponent implements OnInit {
  baseUrl: any = "http://localhost:3000";
  httpParam = new HttpParams();
  httpHeader = new HttpHeaders();
  commitsData: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    public http: HttpClient
  ) {}

  onSubmit() {}
  ngOnInit() {
    this.http.get(this.baseUrl + "/commits").subscribe(
      (response: any) => {
        response.response.forEach(element => {
          element.date = moment(element.date).format("LLLL");
          this.commitsData.push(element);
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
