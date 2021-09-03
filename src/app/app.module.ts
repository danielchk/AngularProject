import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  //importado despues de creacion
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { GuardGuard } from './public/guard.guard';



@NgModule({
  declarations: [    //inyectar componentes o directivas
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ButtonsComponent,
    ProfileComponent,
    ContactComponent,
  ],
  imports: [    //inyectar modulos de angular o personalizados
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot([
      {path: "", component: ContentComponent},
      {path: "profile", component: ProfileComponent, canActivate: [GuardGuard] },
      {path: "contact", component: ContactComponent}
    ])
  ],
  providers: [],  //dependecias y servicios
  bootstrap: [AppComponent],
  exports: [MatSidenavModule]  //exportar componentes a modulos
})
export class AppModule { }
