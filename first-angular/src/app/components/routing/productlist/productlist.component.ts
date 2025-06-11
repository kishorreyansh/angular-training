import { Component } from '@angular/core';
import productData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [NgxPaginationModule, FormsModule,FontAwesomeModule,RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
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
