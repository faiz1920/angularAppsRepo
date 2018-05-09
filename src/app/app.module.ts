import { MoodRenderer } from './mood-renderer.component';
import { NumericEditor } from './numeric-editor.component';
import { MoodEditor } from './mood-editor.component';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    MoodEditor, MoodRenderer, NumericEditor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgGridModule.withComponents([MoodEditor, MoodRenderer, NumericEditor])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
