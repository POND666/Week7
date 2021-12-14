import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProduct(): Product[]{
    return [ 
      new Product(1,"Fried Chicken",100,20,"https://www.drbirdcl.com/wp-content/uploads/2021/04/61589069.jpeg"),
      new Product(2,"Nugget",80,20,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVaWVZLh0ZLEqZ1imWC6WBIv5MB78l7ycxWUtIo7oXN6YzE2QmFyyG-kHC3C65rDgSGQ&usqp=CAU"),
      new Product(3,"Mashed Potato",30,20,"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F10%2F15%2Fleftover-mashed-potato-recipe-2000.jpg&q=85"),
      new Product(4,"Egg Tart",40,20,"https://media-cdn.tripadvisor.com/media/photo-s/17/55/3a/37/cotai-egg-tart.jpg"),
      new Product(5,"Chicken Burger",150,0,"https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe.jpg"),
      ];
  }
}
