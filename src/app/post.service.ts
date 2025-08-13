import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IPost } from "./Ipost";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http
      .get<{ [id: string]: IPost }>(
        'https://rxjs-demo-92c5c-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        map((users) => {
          let postData: IPost[] = [];
          if (users) { 
            for (let id in users) {
              postData.push({ ...users[id], id });
            }
          }
          return postData;
        })
      );
  }
}
