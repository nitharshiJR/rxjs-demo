import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.scss']
})
export class Posts {

  // Your posts object
  posts = {
    post1: { name: 'Nithar', role: 'Frontend Developer', age: 23, skills: ['Angular', 'React', 'RxJS'] },
    post2: { name: 'Piriyankan', role: 'Backend Developer', age: 27, skills: ['Node.js', 'MongoDB', 'Express'] },
    post3: { name: 'Meera', role: 'UI/UX Designer', age: 25, skills: ['Figma', 'Canva', 'Photoshop'] }
  };

  // Convert object to array for *ngFor
  postsArray = Object.values(this.posts);

  constructor() {}
}
