// Путь к твоему интерфейсу Product
export interface Product {
    id: string | number;
    name: string;
    description: string;
    price: number;
    discount: number;
    price_with_discount: number;
    category: { id: number; slug?: string; name: string };
    slug: string;
    inStock: boolean;
    isNew: boolean;
    isTopSale: boolean;
    image: string;
}

export interface ProductDetail extends Product {
  gallery?: string[];
//   cultures?: Culture[];
  subcategory?: { id: number; name: string };
  has_discount: boolean;

  // Любые другие специфичные поля детальной страницы
}

export interface Vendor {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
}
/**
 * Обогащает объект товара временными моковыми флагами (inStock, isNew, isTopSale, vendor),
 * пока их нет в реальном бэкенде.
 */
export function enrichProduct<T extends Product>(item: T, index: number = 0): T{
    const idNum = typeof item.id === 'number' ? item.id : Number(item.id) || index;

    return {
        ...item,
        inStock: item.inStock ?? (idNum % 4 !== 0),
        isNew: item.isNew ?? (idNum % 3 === 0),     
        isTopSale: item.isTopSale ?? (idNum % 6 === 0),
        // vendor: item.vendor ?? {
        //     id: 100 + idNum,
        //     name: 'AgroProtect SRL',
        //     avatar: '/images/vendor-avatar.jpg',
        //     rating: 4.8,
        //     reviewsCount: 15,
        // },
    };
}

/**
 * Обогащает массив товаров
 */
export function enrichProducts(items: Product[]): Product[] {
    return items.map((item, index) => enrichProduct(item, index));
}