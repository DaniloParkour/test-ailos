import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/elements/card/card.component';
import { ButtonComponent } from './components/form/button/button.component';
import { IConfig, provideEnvironmentNgxMask, provideNgxMask, NgxMaskDirective } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgxMaskDirective
  ],
  // providers: [provideEnvironmentNgxMask(maskConfigFunction)],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
