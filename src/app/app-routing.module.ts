import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';

const routes: Routes = [
  { path:'redes-sociais', component:RedesSociaisComponent },
  {  path:'',redirectTo:'redes-sociais', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
