import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
// export class App implements OnInit {
//   ngOnInit() {
  //   const promise = new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve('promise resolved');
  //     },2000);
  //   });
  //   promise.then((value)=>console.log(value));
  
  export class App implements OnInit {
  protected readonly title = signal('rxjs-demo');

  ngOnInit() {
    const observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('observable value 1');
        observer.complete();
      }, 2000);
    });

    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('observable completed')
    });
  }
}
