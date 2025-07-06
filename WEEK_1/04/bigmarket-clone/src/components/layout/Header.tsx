import React from 'react'
import { Search, ShoppingCart, Phone, Menu } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { useCart } from '../../hooks/useCart'
import { useSearch } from '../../hooks/useSearch'

interface HeaderProps {
  onToggleMenu?: () => void
}

export function Header({ onToggleMenu }: HeaderProps) {
  const { getTotalItems } = useCart()
  const { query, handleSearch } = useSearch()
  const totalItems = getTotalItems()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar - giống như BigMarket */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span>Tin tức</span>
              <span>Hệ thống cửa hàng</span>
              <span>Chính sách thanh toán</span>
              <span>Chính sách đổi trả</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Gọi mua hàng 0963662226</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header - giống BigMarket */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo - giống BigMarket */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-primary-600">
                <span className="text-primary-600">BIG</span>
                <span className="text-gray-700">MARKET</span>
              </span>
            </div>
          </div>

          {/* Search bar - giống BigMarket */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative flex">
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg text-gray-700 text-sm flex items-center">
                <Menu className="h-4 w-4 mr-2" />
                Danh mục sản phẩm
              </button>
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="rounded-none border-l-0 border-r-0 focus:ring-0 focus:border-gray-300"
                />
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 border border-primary-600 rounded-r-lg text-white">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Cart - giống BigMarket */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative text-gray-700 hover:text-primary-600">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <div className="ml-2 text-sm">
                <div className="font-medium">Giỏ hàng của bạn</div>
                <div className="text-xs text-gray-500">({totalItems}) sản phẩm</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Categories navigation - giống BigMarket */}
      <nav className="bg-gray-50 border-t">
        <div className="container py-2">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <a href="#" className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full font-medium">
              Gia Vị
            </a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-full">
              Gạo, bún, phở, miến
            </a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-full">
              Đồ hộp, thực phẩm sơ chế đông giá
            </a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-full">
              Bột các loại
            </a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-full">
              Bánh đa nem, rau
            </a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-full">
              Hạt các loại
            </a>
            <a href="#" className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-full">
              Mộc nhĩ, măng, nấm khô
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
