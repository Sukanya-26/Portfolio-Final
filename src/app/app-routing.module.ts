import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'portfolio', component:PortfolioPageComponent},
  {path:'resume', component:ResumeComponent},
  {path:'contact', component:ContactComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
