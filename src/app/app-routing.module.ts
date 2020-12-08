import { MyMovieComponent } from './my-movie/my-movie.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: MyHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie/:id', component: MyMovieComponent },
  { path: '**', component: MyHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
