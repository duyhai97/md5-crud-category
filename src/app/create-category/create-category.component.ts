import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../services/category.service";
// import {MenuItem,MessageService} from 'primeng/api';
import {Category} from "../category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryList: Category[] = [];
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
  });
  constructor(private categoryService: CategoryService,
              private routers: Router) {
    this.categoryList = categoryService.getAll();
  }

  ngOnInit(): void {
  }

  create(){
    const category = this.categoryForm.value;
    this.categoryList.push(category);
    this.routers.navigate(["/list"]);
  }

}
