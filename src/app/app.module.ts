import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

const routes: Route[] = [
  { path: 'page1', component: Page1Component },
  { path: '**', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, Page1Component],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
