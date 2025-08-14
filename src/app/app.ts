import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {

  constructor() {
   
  }

  ngOnInit(): void {
    console.log('App component initialized ');
  }
}
