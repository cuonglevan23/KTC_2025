import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  className?: string;
}

export function ProductGrid({ products, title, className }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className={`text-center py-12 ${className || ''}`}>
        <p className="text-gray-500">Không có sản phẩm nào được tìm thấy.</p>
      </div>
    );
  }

  return (
    <section className={className}>
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
