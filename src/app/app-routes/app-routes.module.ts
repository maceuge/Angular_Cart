import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {WelcomeComponent} from "../components/welcome/welcome.component";
import {ProductComponent} from "../products/product/product.component";
import {DetailComponent} from "../products/detail_product/detail.component";
import {AuthComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {UserListComponent} from "../components/users_list/user.component";
import {MovieComponent} from "../components/movies/movie.component";
import {DribbleComponent} from "../components/adribble/adribble.component";
import {NewRegisterComponent} from "../new-register/new-register.component";

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'products', component: ProductComponent},
  { path: 'details/:id', component: DetailComponent},
  { path: 'login', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userlist', component: UserListComponent},
  { path: 'movielist', component: MovieComponent },
  { path: 'dribble', component: DribbleComponent },
  { path: 'newregister', component: NewRegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutesModule {}
