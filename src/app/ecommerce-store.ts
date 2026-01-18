import { computed, inject } from '@angular/core';
import { Product } from './models/product';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';
import { Toaster } from './services/toaster';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' }, //this becouse of we creating globle state.
  withState({
    products: [
      //  Electronics
      {
        id: 'el-1',
        name: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear wireless headphones.',
        price: 24999,
        imageUrl: 'https://picsum.photos/id/180/400/400',
        rating: 4.5,
        reviewCount: 120,
        inStock: false,
        category: 'Electronics',
      },
      {
        id: 'el-2',
        name: 'Smart TV Box',
        description: '4K streaming TV box with voice control.',
        price: 15999,
        imageUrl: 'https://picsum.photos/id/1/400/400',
        rating: 4.3,
        reviewCount: 90,
        inStock: true,
        category: 'Electronics',
      },
      {
        id: 'el-3',
        name: 'Security Camera',
        description: 'Wi-Fi enabled indoor security camera.',
        price: 12999,
        imageUrl: 'https://picsum.photos/id/250/400/400',
        rating: 4.1,
        reviewCount: 75,
        inStock: true,
        category: 'Electronics',
      },
      {
        id: 'el-4',
        name: 'Power Bank',
        description: '20000mAh fast-charging power bank.',
        price: 6999,
        imageUrl: 'https://picsum.photos/id/1060/400/400',
        rating: 4.6,
        reviewCount: 210,
        inStock: true,
        category: 'Electronics',
      },

      //  Wearables
      {
        id: 'we-1',
        name: 'Smart Watch',
        description: 'Fitness smart watch with heart-rate tracking.',
        price: 18999,
        imageUrl: 'https://picsum.photos/id/1080/400/400',
        rating: 4.2,
        reviewCount: 85,
        inStock: true,
        category: 'Wearables',
      },
      {
        id: 'we-2',
        name: 'Fitness Band',
        description: 'Lightweight fitness band with sleep tracking.',
        price: 8999,
        imageUrl: 'https://picsum.photos/id/433/400/400',
        rating: 4.0,
        reviewCount: 60,
        inStock: true,
        category: 'Wearables',
      },
      {
        id: 'we-3',
        name: 'VR Headset',
        description: 'Immersive virtual reality headset.',
        price: 34999,
        imageUrl: 'https://picsum.photos/id/903/400/400',
        rating: 4.4,
        reviewCount: 45,
        inStock: false,
        category: 'Wearables',
      },
      {
        id: 'we-4',
        name: 'Smart Glasses',
        description: 'Bluetooth-enabled smart glasses.',
        price: 27999,
        imageUrl: 'https://picsum.photos/id/823/400/400',
        rating: 3.9,
        reviewCount: 30,
        inStock: true,
        category: 'Wearables',
      },

      //  Audio
      {
        id: 'au-1',
        name: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with deep bass.',
        price: 9999,
        imageUrl: 'https://picsum.photos/id/21/400/400',
        rating: 4.0,
        reviewCount: 60,
        inStock: false,
        category: 'Audio',
      },
      {
        id: 'au-2',
        name: 'Soundbar',
        description: 'Dolby Audio soundbar for TVs.',
        price: 29999,
        imageUrl: 'https://picsum.photos/id/367/400/400',
        rating: 4.6,
        reviewCount: 140,
        inStock: true,
        category: 'Audio',
      },
      {
        id: 'au-3',
        name: 'Studio Headphones',
        description: 'Professional studio monitoring headphones.',
        price: 21999,
        imageUrl: 'https://picsum.photos/id/292/400/400',
        rating: 4.7,
        reviewCount: 95,
        inStock: true,
        category: 'Audio',
      },
      {
        id: 'au-4',
        name: 'Wireless Earbuds',
        description: 'True wireless earbuds with noise isolation.',
        price: 13999,
        imageUrl: 'https://picsum.photos/id/1005/400/400',
        rating: 4.3,
        reviewCount: 110,
        inStock: true,
        category: 'Audio',
      },

      //  Accessories
      {
        id: 'ac-1',
        name: 'Laptop Backpack',
        description: 'Durable backpack for laptops.',
        price: 5499,
        imageUrl: 'https://picsum.photos/id/1011/400/400',
        rating: 4.7,
        reviewCount: 210,
        inStock: true,
        category: 'Accessories',
      },
      {
        id: 'ac-2',
        name: 'Phone Case',
        description: 'Shockproof mobile phone case.',
        price: 1999,
        imageUrl: 'https://picsum.photos/id/103/400/400',
        rating: 4.1,
        reviewCount: 80,
        inStock: true,
        category: 'Accessories',
      },
      {
        id: 'ac-3',
        name: 'Wireless Charger',
        description: 'Fast wireless charging pad.',
        price: 4499,
        imageUrl: 'https://picsum.photos/id/30/400/400',
        rating: 4.4,
        reviewCount: 65,
        inStock: true,
        category: 'Accessories',
      },
      {
        id: 'ac-4',
        name: 'USB-C Hub',
        description: 'Multi-port USB-C hub.',
        price: 7999,
        imageUrl: 'https://picsum.photos/id/24/400/400',
        rating: 4.5,
        reviewCount: 90,
        inStock: true,
        category: 'Accessories',
      },

      //  Computers
      {
        id: 'pc-1',
        name: 'Mechanical Keyboard',
        description: 'RGB mechanical keyboard.',
        price: 15999,
        imageUrl: 'https://picsum.photos/id/96/400/400',
        rating: 4.4,
        reviewCount: 140,
        inStock: true,
        category: 'Computers',
      },
      {
        id: 'pc-2',
        name: 'Gaming Mouse',
        description: 'High-precision gaming mouse.',
        price: 6999,
        imageUrl: 'https://picsum.photos/id/1084/400/400',
        rating: 4.6,
        reviewCount: 170,
        inStock: true,
        category: 'Computers',
      },
      {
        id: 'pc-3',
        name: '27-inch Monitor',
        description: 'QHD monitor with 144Hz refresh rate.',
        price: 89999,
        imageUrl: 'https://picsum.photos/id/1015/400/400',
        rating: 4.8,
        reviewCount: 60,
        inStock: true,
        category: 'Computers',
      },
      {
        id: 'pc-4',
        name: 'External SSD',
        description: '1TB portable external SSD.',
        price: 34999,
        imageUrl: 'https://picsum.photos/id/64/400/400',
        rating: 4.7,
        reviewCount: 105,
        inStock: true,
        category: 'Computers',
      },
    ],
    category: 'all',
    wishlistItems: [],
  } as EcommerceState),
  withComputed(({ category, products, wishlistItems }) => ({
    filterdProducts: computed(() => {
      if (category() === 'all') return products();

      return products().filter((p) => p.category.toLocaleLowerCase() === category().toLowerCase());
    }),
    wishlistCount: computed(() => wishlistItems().length),
  })),
  withMethods((store, toaster = inject(Toaster)) => ({
    setCategory: signalMethod<string>((category) => {
      patchState(store, { category });
    }),
    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if (!draft.find((p) => p.id === product.id)) {
          draft.push(product);
        }
      });

      patchState(store, { wishlistItems: updatedWishlistItems });
      toaster.success('Product added to wishlist');
    },

    removeFromWishlist: (product: Product) => {
      patchState(store, {
        wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id),
      });
      toaster.success('Product removed from wishlist');
    },
  })),
);
