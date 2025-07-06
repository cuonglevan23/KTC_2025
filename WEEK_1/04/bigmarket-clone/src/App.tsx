import React from 'react'
import { Header } from './components/layout/Header'
import { ProductCard } from './components/features/ProductCard'
import { productsWithImages } from './data/products'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content - giống BigMarket */}
      <main className="container py-6">
        {/* Breadcrumb và Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Thực phẩm khô</h1>
          
          {/* Category Filter Buttons - giống BigMarket */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <button className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
              Gia Vị
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
              Gạo, bún, phở, miến
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
              Đồ hộp, thực phẩm sơ chế đông giá
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
              Bột các loại
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
              Bánh đa nem, rau
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
              Hạt các loại
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
              Mộc nhĩ, măng, nấm khô
            </button>
          </div>
        </div>

        {/* Filter và Sort Bar - giống BigMarket */}
        <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="font-medium">Thực phẩm khô</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-600">Sắp xếp theo:</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-gray-700">
              <option>Giá tăng dần</option>
              <option>Giá giảm dần</option>
              <option>Bán chạy</option>
              <option>Giảm giá</option>
            </select>
          </div>
        </div>

        {/* Products Grid - giống BigMarket */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {productsWithImages.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              className="bg-white"
            />
          ))}
        </div>

        {/* Pagination hoặc Load More */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Xem thêm sản phẩm
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
