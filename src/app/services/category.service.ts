import { Injectable } from '@angular/core';
import {Category} from "../category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: Category[] = [
    {id:1,
    name:'danh muc 3',
    description: 'mo ta 3'},
    {id:2,
      name:'danh muc 2',
      description: 'mo ta 2'},
    {id:3,
      name:'danh muc 3',
      description: 'mo ta 3'},
  ]

  constructor() { }

  getAll(){
    return this.categoryList;
  }

  findById(id: number ) {
    let category :Category = {}
    for (let i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].id == id) category = this.categoryList[i];
    }
    return category
  }
}
