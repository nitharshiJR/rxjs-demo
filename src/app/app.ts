import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Posts } from './posts/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Posts],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {

  constructor() {
   
  }

  ngOnInit(): void {
    console.log('App component initialized ✅');
  }
}
