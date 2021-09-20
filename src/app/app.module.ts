import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input.component';
import { commentFrame } from './component/commentFrame/app.commentFrame';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [commentFrame, AppComponent, InputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
