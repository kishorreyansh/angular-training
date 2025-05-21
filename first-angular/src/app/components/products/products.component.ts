import { Component } from '@angular/core';
import productData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ZoominDirective } from '../../directives/zoomin.directive';

@Component({
  selector: 'app-products',
  imports: [NgxPaginationModule, FormsModule,FontAwesomeModule,ZoominDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArray = productData;
  p: number = 1;
  searchProduct: string = '';
  faStar = faStar;

  sortAscending() {
    this.productsArray.sort((a, b) => a.price - b.price);
  }

  sortDescending(){
    this.productsArray.sort((a,b) => b.price - a.price);
  }

  get searchProducts(){
    let findProduct = this.searchProduct.toLowerCase();
    return this.productsArray.filter((product => product.title.toLowerCase().includes(findProduct)));
  }
}