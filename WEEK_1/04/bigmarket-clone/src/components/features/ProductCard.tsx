import React from 'react'
import { Plus, Minus } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utils'
import type { Product } from '../../types'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart, cart, updateQuantity } = useCart()
  
  // Tìm sản phẩm trong giỏ hàng
  const cartItem = cart.find(item => item.product.id === product.id)
  const quantity = cartItem?.quantity || 0

  const handleAddToCart = () => {
    addToCart(product, 1)
  }

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1)
    } else {
      updateQuantity(product.id, 0) // Xóa khỏi giỏ hàng
    }
  }

  return (
    <Card className={`group hover:shadow-md transition-shadow duration-200 border border-gray-200 ${className}`}>
      {/* Product Image - giống BigMarket */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      {/* Product Info - giống BigMarket */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        {/* Price - giống BigMarket */}
        <div className="mb-3">
          <span className="text-lg font-bold text-red-600">
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button - giống BigMarket */}
        {quantity === 0 ? (
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 flex items-center justify-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Thêm vào giỏ hàng</span>
          </Button>
        ) : (
          <div className="flex items-center justify-between border border-primary-600 rounded-lg">
            <button
              onClick={handleDecrement}
              className="p-2 text-primary-600 hover:bg-primary-50 rounded-l-lg"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 text-center font-medium text-primary-600 min-w-[3rem]">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-2 text-primary-600 hover:bg-primary-50 rounded-r-lg"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
        
        {!product.inStock && (
          <div className="mt-2 text-center">
            <span className="text-red-500 text-sm font-medium">Hết hàng</span>
          </div>
        )}
      </div>
    </Card>
  )
}
