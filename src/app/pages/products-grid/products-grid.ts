import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-grid',
  imports: [],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export default class ProductsGrid {
  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear wireless headphones with long battery life.',
      price: 24999,
      imageUrl: 'https://via.placeholder.com/300x300?text=Headphones',
      rating: 4.5,
      reviewCount: 120,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Water-resistant smart watch with heart rate and sleep tracking.',
      price: 18999,
      imageUrl: 'https://via.placeholder.com/300x300?text=Smart+Watch',
      rating: 4.2,
      reviewCount: 85,
      inStock: true,
      category: 'Wearables',
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with deep bass and 12-hour playtime.',
      price: 9999,
      imageUrl: 'https://via.placeholder.com/300x300?text=Speaker',
      rating: 4.0,
      reviewCount: 60,
      inStock: false,
      category: 'Audio',
    },
    {
      id: '4',
      name: 'Laptop Backpack',
      description: 'Durable backpack suitable for 15-inch laptops with multiple compartments.',
      price: 5499,
      imageUrl: 'https://via.placeholder.com/300x300?text=Backpack',
      rating: 4.7,
      reviewCount: 210,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: '5',
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard with blue switches for tactile feedback.',
      price: 15999,
      imageUrl: 'https://via.placeholder.com/300x300?text=Keyboard',
      rating: 4.4,
      reviewCount: 140,
      inStock: true,
      category: 'Computers',
    },
  ]);

  filterdProducts = computed(() =>
    this.products().filter((p) => p.category === this.category().toLowerCase())
  );
}
