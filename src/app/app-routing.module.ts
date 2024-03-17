import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CricketersComponent } from './cricketers/cricketers.component';

const routes: Routes = [
  {component : CricketersComponent, path : "cricketers"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
