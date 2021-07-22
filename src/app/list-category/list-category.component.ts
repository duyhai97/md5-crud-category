import { Component, OnInit } from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categoryList : Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryList = categoryService.getAll();
  }

  ngOnInit(): void {
  }


}
