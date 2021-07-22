import { Component, OnInit ,} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {

  category: any;
  constructor(private categoryService: CategoryService,
              private ActivatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id: any = params.get("id");
      this.category = this.categoryService.findById(id);
    })
  }

}
