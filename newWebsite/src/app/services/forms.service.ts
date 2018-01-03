import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormsService {

  constructor(private http: HttpClient) { }

  postFormData(body: any) {
    const url = 'https://formspree.io/andrewvetovitz@gmail.com';

    return this.http.post(url, body);
  }
}
