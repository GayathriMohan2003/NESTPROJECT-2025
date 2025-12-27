import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,          // ✅ REQUIRED
  imports: [CommonModule, RouterLink],   // ✅ REQUIRED for *ngFor
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  products: any[] = [];

  constructor(private apiservice: Apiservice) {}

  ngOnInit() {
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data;
    });
  }
}
