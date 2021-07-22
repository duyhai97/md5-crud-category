import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    DetailCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    CreateCategoryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
