export const SITE_CONFIG = {
  name: 'BigMarket',
  description: 'Thực phẩm khô chất lượng cao',
  url: 'https://bigmarket.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/bigmarket',
    facebook: 'https://facebook.com/bigmarket',
    instagram: 'https://instagram.com/bigmarket',
  },
} as const;

export const NAVIGATION_ITEMS = [
  {
    id: 'gia-vi',
    name: 'Gia vị',
    href: '/category/gia-vi',
  },
  {
    id: 'gao-bun-pho-mien',
    name: 'Gạo, bún, phở, miến',
    href: '/category/gao-bun-pho-mien',
  },
  {
    id: 'do-hop-thuc-pham-so-che-dong-goi',
    name: 'Đồ hộp, thực phẩm sơ chế đóng gói',
    href: '/category/do-hop-thuc-pham-so-che-dong-goi',
  },
  {
    id: 'bot-cac-loai',
    name: 'Bột các loại',
    href: '/category/bot-cac-loai',
  },
  {
    id: 'banh-da-nem-ram',
    name: 'Bánh đa nem, rằm',
    href: '/category/banh-da-nem-ram',
  },
  {
    id: 'hat-cac-loai',
    name: 'Hạt các loại',
    href: '/category/hat-cac-loai',
  },
  {
    id: 'moc-nhi-mang-nam-kho',
    name: 'Mộc nhĩ, măng, nấm khô',
    href: '/category/moc-nhi-mang-nam-kho',
  },
] as const;

export const CONTACT_INFO = {
  phone: '0963662226',
  email: 'support@bigmarket.com',
  address: 'Hà Nội, Việt Nam',
} as const;

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'price-asc', label: 'Giá tăng dần' },
  { value: 'price-desc', label: 'Giá giảm dần' },
  { value: 'name-asc', label: 'Tên A-Z' },
  { value: 'name-desc', label: 'Tên Z-A' },
  { value: 'rating', label: 'Đánh giá cao' },
] as const;

export const PAGINATION_CONFIG = {
  defaultPageSize: 12,
  pageSizeOptions: [12, 24, 48],
} as const;
