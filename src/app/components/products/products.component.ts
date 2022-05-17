import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommentModel } from 'src/app/models/Comment';
import { ProductModel } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isAddProduct = 'none';

  products: ProductModel[] = [];
  comments: CommentModel[] = [];

  options = [
    { value: 'ASC', viewValue: 'ascending' },
    { value: 'DESC', viewValue: 'descending' },
  ]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getComments()
      .subscribe((data: any) => this.comments = data);
    this.productService.getProducts()
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this Product ?')) {
      this.productService.deleteProduct(id);
      this.productService.getProducts()
        .subscribe((data: any) => {
          this.products = data;
        });
    }
    return;
  }

  openModal() {
    this.isAddProduct = 'block';
  }

  closeModal(ev: Event) {
    this.isAddProduct = 'none';
  }
}
