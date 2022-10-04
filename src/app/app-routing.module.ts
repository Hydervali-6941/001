import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
// import { SubheaderComponent } from './subheader/subheader.component';
// import { TopheaderComponent } from './topheader/topheader.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  // {path:'topheader',component:TopheaderComponent},
  // {path:'subheader',component:SubheaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'courses',component:CoursesComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [HomeComponent,AboutusComponent,CoursesComponent]
