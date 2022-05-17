import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productsCount!: number;
  productId!: number;

  @Input()
  product!:any;

  @Input()
  isEditProduct = 'none';

  @Output()
  actModal = new EventEmitter();

  editForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.productService.getProductsLength().subscribe((data: any) => this.productsCount = data.length + 1);
    this.route.params.subscribe({
      next: data => this.productId = data['id'],
      error: er => console.error(er)
    });

    this.editForm = this.fb.group({
      id: this.fb.control(0),
      imageUrl: this.fb.control("http://placehold.jp/3d4070/ffffff/150x150.png"),
      name: this.fb.control('', [Validators.required]),
      count: this.fb.control(0, [Validators.required, Validators.min(1)]),
      size: this.fb.group({
        width: this.fb.control(0, [Validators.required, Validators.min(0.05)]),
        height: this.fb.control(0, [Validators.required, Validators.min(0.05)]),
      }),
      weight: this.fb.control('', Validators.required),
      comments: this.fb.control('', Validators.required)
    })

    this.setValues();
    
  }

  setValues() {
    console.log('lol');
    this.editForm.patchValue({
      name: 'Vlad'
    })
  }

  closeModal() {
    this.actModal.emit();
  }

  onSubmit() {
    // this.addForm.get('id')?.patchValue(this.productsCount);
    // this.productService.createProduct(this.addForm.value).subscribe();
  }


}
