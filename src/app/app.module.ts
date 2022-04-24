import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CidadesModule } from './pages/cidades/cidades.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    CidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
