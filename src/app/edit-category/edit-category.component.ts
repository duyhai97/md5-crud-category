import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../category";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id:new FormControl(""),
    name :new FormControl(""),
    description :new FormControl("")
  });

  categoryList: Category[] = [];


  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private routers: Router) {
    this.categoryList = categoryService.categoryList

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      let id: any = paramMap.get("id");
      let category;

      if( (category = this.categoryService.findById(id))!=null){
        console.log(category);
        this.categoryForm.controls['id'].setValue(category.id);
        this.categoryForm.controls['name'].setValue(category.name);
        this.categoryForm.controls['description'].setValue(category.description);
      }
    })
  }

  // edit(){
  //   console.log("vào đây");
  //   let category = this.categoryForm.value;
  // }

  edit(){
      console.log("vào đây");
      let category = this.categoryForm.value;
    for(let i = 0; i < this.categoryList.length; i++){
      if (this.categoryList[i].id === category.id){
        this.categoryList[i] = category;
        this.routers.navigate(["/list"]);
      }
    }
  }

}
