import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newsletterResponse } from '../interfaces/newsletter.inerface';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = "https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/";

  constructor(private http: HttpClient) { }

  sendData(name: string, email:string) : Observable<newsletterResponse> {
    const data = {name, email};

    return this.http.post<newsletterResponse>(this.endpointUrl, data)
  }
}
