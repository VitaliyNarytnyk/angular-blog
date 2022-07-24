import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './post-page.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    QuillModule
  ],
  exports: [PostPageComponent]
})
export class PostPageModule { }
