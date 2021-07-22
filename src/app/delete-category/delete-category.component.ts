import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Router,ActivatedRoute } from "@angular/router";
import {Category} from "../category";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  categoryList: Category[] = [];
  category:any;
  constructor(private categoryService: CategoryService,
              private ActivatedRoute: ActivatedRoute,
              private router:Router,) {
        this.categoryList = categoryService.getAll();
  }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id: any = params.get("id");
      this.category = this.categoryService.findById(id);
    })
  }



    delete(){

      for(let i = 0; i < this.categoryList.length; i++){
        if (this.categoryList[i].id === this.category.id){
          this.categoryList.splice(this.categoryList.indexOf(this.category),1);
          this.router.navigate(["/list"]);
        }
      }
    }

  back(){
    this.router.navigate(["/list"]);
  }

}
