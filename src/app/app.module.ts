import { NumericEditor } from './components/dynamic-table/numeric-editor.component';
import { MoodRenderer } from './components/dynamic-table/mood-renderer.component';
import { MoodEditor } from './components/dynamic-table/mood-editor.component';
import { AppRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodEditor, MoodRenderer, NumericEditor, DynamicTableComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([MoodEditor, MoodRenderer, NumericEditor])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
