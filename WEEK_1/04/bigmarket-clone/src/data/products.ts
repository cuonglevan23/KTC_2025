import type { Product, Category } from '../types'

// Categories based on the BigMarket website
export const categories: Category[] = [
  { id: '1', name: 'Gia vị', slug: 'gia-vi', icon: '🧄' },
  { id: '2', name: 'Gạo, bún, phở, miến', slug: 'gao-bun-pho-mien', icon: '🍜' },
  { id: '3', name: 'Đồ hộp, thực phẩm sơ chế đông giá', slug: 'do-hop-thuc-pham-so-che-dong-gia', icon: '🥫' },
  { id: '4', name: 'Bột các loại', slug: 'bot-cac-loai', icon: '🌾' },
  { id: '5', name: 'Bánh đa nem, rau', slug: 'banh-da-nem-rau', icon: '🥬' },
  { id: '6', name: 'Hạt các loại', slug: 'hat-cac-loai', icon: '🥜' },
  { id: '7', name: 'Mộc nhĩ, măng, nấm khô', slug: 'moc-nhi-mang-nam-kho', icon: '🍄' },
]

// Products based on the BigMarket website
export const products: Product[] = [
  {
    id: '1',
    name: 'Tinh Dầu Ớt Trung Quốc 180ml/Chai',
    price: 23000,
    image: '/images/products/tinh-dau-ot.jpg',
    category: 'gia-vi',
    unit: 'chai',
    weight: '180ml',
    inStock: true,
    description: 'Tinh dầu ớt cay nồng từ Trung Quốc, dùng để tăng vị cay cho các món ăn'
  },
  {
    id: '2',
    name: 'Hạt Mắc Khén 1kg',
    price: 285000,
    image: '/images/products/hat-mac-khen.jpg',
    category: 'gia-vi',
    unit: 'kg',
    weight: '1kg',
    inStock: true,
    description: 'Hạt mắc khén thơm đặc trưng của vùng Tây Bắc'
  },
  {
    id: '3',
    name: 'Mì tôm phở mai Ottogi 75g',
    price: 14000,
    image: '/images/products/mi-tom-pho-mai.jpg',
    category: 'gao-bun-pho-mien',
    unit: 'gói',
    weight: '75g',
    inStock: true,
    description: 'Mì tôm phở mai Ottogi vị đậm đà, thơm ngon'
  },
  {
    id: '4',
    name: 'Hoa Hồi 1kg',
    price: 200000,
    image: '/images/products/hoa-hoi.jpg',
    category: 'gia-vi',
    unit: 'kg',
    weight: '1kg',
    inStock: true,
    description: 'Hoa hồi tự nhiên, thơm đặc trưng cho món ăn'
  },
  {
    id: '5',
    name: 'Mộc Nhĩ 1kg',
    price: 160000,
    image: '/images/products/moc-nhi.jpg',
    category: 'moc-nhi-mang-nam-kho',
    unit: 'kg',
    weight: '1kg',
    inStock: true,
    description: 'Mộc nhĩ khô chất lượng cao, giòn ngon'
  },
  {
    id: '6',
    name: 'Cá Viên Ngon 500g',
    price: 42000,
    image: '/images/products/ca-vien-ngon.jpg',
    category: 'do-hop-thuc-pham-so-che-dong-gia',
    unit: 'gói',
    weight: '500g',
    inStock: true,
    description: 'Cá viên tươi ngon, đông lạnh giữ nguyên vị'
  },
  {
    id: '7',
    name: 'Nước Mắm Nam Ngư 750ml',
    price: 47000,
    image: '/images/products/nuoc-mam-nam-ngu.jpg',
    category: 'gia-vi',
    unit: 'chai',
    weight: '750ml',
    inStock: true,
    description: 'Nước mắm Nam Ngư truyền thống, đậm đà'
  },
  {
    id: '8',
    name: 'Bột nàng Thành Phát gói 1kg',
    price: 22000,
    image: '/images/products/bot-nang-thanh-phat.jpg',
    category: 'bot-cac-loai',
    unit: 'gói',
    weight: '1kg',
    inStock: true,
    description: 'Bột nàng Thành Phát chất lượng cao'
  },
  {
    id: '9',
    name: 'Nước Cốt Mẹ Đức Anh 1.8kg',
    price: 72000,
    image: '/images/products/nuoc-cot-me-duc-anh.jpg',
    category: 'gia-vi',
    unit: 'hộp',
    weight: '1.8kg',
    inStock: true,
    description: 'Nước cốt mẹ đức anh chua ngọt tự nhiên'
  },
  {
    id: '10',
    name: 'Gạo Nếp Nhung 10kg',
    price: 270000,
    image: '/images/products/gao-nep-nhung.jpg',
    category: 'gao-bun-pho-mien',
    unit: 'bao',
    weight: '10kg',
    inStock: true,
    description: 'Gạo nếp nhung thơm dẻo, chất lượng cao'
  }
]

// Mock images for products (since we don't have actual images)
export const mockProductImages = [
  'https://images.unsplash.com/photo-1596040033229-a9821ebc227d?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1609501676725-7186f734b8bf?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563379091339-03246963d52a?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=300&fit=crop',
]

// Update products with mock images
export const productsWithImages = products.map((product, index) => ({
  ...product,
  image: mockProductImages[index % mockProductImages.length]
}))
