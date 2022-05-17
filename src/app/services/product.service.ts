import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get('http://localhost:3000/comments');
  }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getProduct(id: number) {
    return this.http.get('http://localhost:3000/products/'+id);
  }

  deleteProduct(id: number) {
    this.http.delete('http://localhost:3000/products/' + id)
      .subscribe({
        next: (data) => console.log(data),
        error: (er) => console.error(er),
        complete: () => console.warn('Successfully deleted.')
      });
  }

  getProductsLength() {
    return this.http.get('http://localhost:3000/products');
  }

  createProduct(product: any) {
    return this.http.post('http://localhost:3000/products', product);
  }
}
