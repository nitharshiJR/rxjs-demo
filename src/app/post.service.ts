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
      .get<any>(
        'https://rxjs-demo-92c5c-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
       map((posts) => {
   let postData: IPost[] = [];
  if (posts) {
    for (let id in posts) {
      postData.push({ ...posts[id], id });
    }
  }
  return postData;
})
      );
    }
  }

