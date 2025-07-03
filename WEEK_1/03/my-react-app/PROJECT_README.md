# Universal Search App

Một ứng dụng tìm kiếm toàn diện được xây dựng bằng **Vite + React + TypeScript + ESLint** với cấu trúc file chuẩn và hệ thống phân trang.

## 🏗️ Cấu trúc dự án

```
src/
├── components/           # Các component tái sử dụng
│   ├── SearchInput/     # Component input tìm kiếm với nhiều variant
│   ├── Pagination/      # Component phân trang
│   ├── SearchResultCard/ # Card hiển thị kết quả tìm kiếm
│   ├── LoginContainer/ # Container đăng nhập
│   └── index.ts        # Export tất cả components
├── pages/               # Các trang chính
│   ├── SearchPage/     # Trang tìm kiếm chính
│   └── index.ts        # Export tất cả pages
├── hooks/               # Custom React hooks
│   ├── useSearch.ts    # Hook quản lý tìm kiếm và phân trang
│   └── index.ts        # Export tất cả hooks
├── services/            # API services
│   └── api.ts          # Mock API cho tìm kiếm
├── types/               # TypeScript type definitions
│   └── index.ts        # Tất cả interfaces và types
├── App.tsx             # Component chính
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Tính năng chính

### 🔍 Search Input Components
- **Default Search**: Tìm kiếm cơ bản
- **Web Search**: Tìm kiếm web với icon globe
- **Crypto Search**: Tìm kiếm crypto với icon star
- **Phone Input**: Input số điện thoại với validation

### 📄 Pagination System
- Phân trang thông minh với dots (...)
- Responsive design cho mobile
- Hiển thị thông tin "Showing X to Y of Z results"
- Navigation buttons (Previous/Next)

### 🎨 UI/UX Features
- **Responsive Design**: Hoạt động mượt mà trên mọi thiết bị
- **Modern Styling**: Glass morphism và gradient effects
- **Smooth Animations**: Hover effects và transitions
- **Loading States**: Spinner và error handling
- **Type Safety**: Full TypeScript support

## 🚀 Công nghệ sử dụng

- **Vite**: Build tool nhanh và hiện đại
- **React 19**: Framework UI với hooks
- **TypeScript**: Type safety và IntelliSense
- **ESLint**: Code quality và consistency
- **CSS3**: Modern styling với flexbox/grid

## 📱 Responsive Breakpoints

```css
/* Desktop Large */
@media (min-width: 1024px) { /* Spacious layout */ }

/* Tablet */  
@media (max-width: 768px) { /* Medium layout */ }

/* Mobile */
@media (max-width: 480px) { /* Compact layout */ }
```

## 🔧 Cài đặt và chạy

```bash
# Cài đặt dependencies
pnpm install

# Chạy development server
pnpm dev

# Build cho production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 📦 Components API

### SearchInput
```tsx
<SearchInput
  placeholder="Search anything..."
  variant="default" | "web" | "crypto" | "phone"
  onSearch={(query: string) => void}
  type="text" | "search" | "tel"
/>
```

### Pagination
```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  totalItems={100}
  onPageChange={(page: number) => void}
/>
```

### SearchResultCard
```tsx
<SearchResultCard
  result={{
    id: "1",
    title: "React Documentation",
    description: "A JavaScript library...",
    url: "https://reactjs.org",
    type: "web"
  }}
  onClick={(result) => void}
/>
```

## 🎪 Demo Features

- **View Switcher**: Chuyển đổi giữa Login và Search page
- **Live Search**: Tìm kiếm real-time với mock API
- **Error Handling**: Xử lý lỗi và loading states
- **Mobile Preview**: Test responsive trên nhiều device

## 🌟 Best Practices

1. **Component Separation**: Mỗi component có thư mục riêng với CSS và index.ts
2. **TypeScript**: Tất cả props và state đều có type definitions
3. **Custom Hooks**: Logic tái sử dụng được extract thành hooks
4. **Error Boundaries**: Xử lý lỗi graceful
5. **Performance**: Lazy loading và memoization khi cần

## 📝 Scripts

```json
{
  "dev": "vite",                    // Development server
  "build": "tsc -b && vite build", // Production build
  "lint": "eslint .",               // Code linting
  "preview": "vite preview"         // Preview build
}
```

## 🎉 Kết quả

Ứng dụng hiện tại có:
- ✅ Cấu trúc file chuẩn và có tổ chức
- ✅ Hệ thống phân trang hoàn chỉnh
- ✅ Multiple search input variants
- ✅ Full TypeScript support
- ✅ Responsive design
- ✅ Modern UI/UX
- ✅ Error handling và loading states
