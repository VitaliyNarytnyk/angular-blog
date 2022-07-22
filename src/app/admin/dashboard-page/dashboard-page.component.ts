import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'app/shared/interfaces';
import { PostsService } from 'app/shared/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub!: Subscription
  searchStr = ''

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  remove(id: string): void {

  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
