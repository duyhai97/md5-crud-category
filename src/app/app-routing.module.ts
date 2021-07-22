import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCategoryComponent} from "./list-category/list-category.component";
import {DetailCategoryComponent} from "./detail-category/detail-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";

const routes: Routes = [
  {path:'list', component:ListCategoryComponent
  },
  {path:'details/:id', component:DetailCategoryComponent},
  {
    path: 'edit/:id',
    component: EditCategoryComponent
  },
  {
    path:'delete/:id',
    component: DeleteCategoryComponent
  },
  {
    path:'create',
    component: CreateCategoryComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
