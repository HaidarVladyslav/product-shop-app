import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  isEditProduct = 'none';
  product!: ProductModel;
  productId!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: data => this.productId = data['id'],
      error: er => console.error(er)
    });
    this.productService.getProduct(this.productId)
    .subscribe({
      next: (data: any) => this.product = data,
      error: er => console.error(er)
    })
  }

  openModal() {
    this.isEditProduct = 'block';
  }

  closeModal(ev: Event) {
    this.isEditProduct = 'none';
  }
}
