import { Component,OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { IPost } from '../Ipost';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.scss']
})
export class Posts implements OnInit , OnDestroy {
  posts: IPost[] = [];
  postsSubscription!:Subscription;
  limitedPosts=  this.posts.slice(0,5); // Limit to first 10 posts
  constructor(private postService:PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      console.log('Posts fetched:', posts);
      this.posts = posts;
    })
  }
  ngOnDestroy(): void {
       this.postsSubscription && this.postsSubscription.unsubscribe();
  }
}
