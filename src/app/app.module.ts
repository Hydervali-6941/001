import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { SubheaderComponent } from './subheader/subheader.component';
// import { HomeComponent } from './home/home.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
// import { AppRoutingModule, routingcomponents} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    SubheaderComponent,
     routingcomponents,
    ContactusComponent,
    FooterComponent,
    CoursesComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
