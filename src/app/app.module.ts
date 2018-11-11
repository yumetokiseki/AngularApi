import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page2DetailComponent } from './page2-detail/page2-detail.component';

const routes: Route[] = [
  { path: 'page1', component: Page1Component },
  {
    path: 'page2',
    children: [
      { path: '', component: Page2Component },
      { path: ':id', component: Page2DetailComponent }
    ]
  },
  { path: '**', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page2DetailComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
