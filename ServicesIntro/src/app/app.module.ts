import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostService } from './Services/post.service';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
