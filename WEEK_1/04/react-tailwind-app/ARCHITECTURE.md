# React Event Handling Practice - Production Ready

Một project ReactJS + Vite + TypeScript + Tailwind được tổ chức theo chuẩn production với architecture sạch, dễ mở rộng và bảo trì.

## 🏗️ Architecture & Structure

### Cấu trúc thư mục

```
src/
├── types/          # Type definitions
├── hooks/          # Custom hooks (business logic)
├── components/
│   ├── ui/         # Reusable UI components
│   └── exercises/  # Exercise-specific components
└── ...
```

### Design Principles

1. **Separation of Concerns**: Logic tách biệt khỏi UI
2. **Custom Hooks**: Tái sử dụng state logic
3. **Reusable Components**: UI components có thể tái sử dụng
4. **TypeScript**: Type safety toàn bộ codebase
5. **Tailwind**: Utility-first CSS framework

## 🎯 Custom Hooks

### useCounter

```tsx
const { count, increment, decrement, reset, setValue } = useCounter(0, 1);
```

### useInputField

```tsx
const { value, handleChange, reset, error, isValid } = useInputField(
  "",
  validator
);
```

### useToggle

```tsx
const { isOn, toggle, turnOn, turnOff } = useToggle(false);
```

### useHover

```tsx
const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
```

### useTemporaryMessage

```tsx
const { message, isVisible, showMessage, hideMessage } =
  useTemporaryMessage(2000);
```

### useKeyboardTracker

```tsx
const { lastKey, handleKeyDown, reset } = useKeyboardTracker();
```

### useSearch

```tsx
const { searchTerm, filteredItems, handleSearchChange, reset } =
  useSearch(items);
```

## 🧩 UI Components

### Button

```tsx
<Button variant="primary" size="md" onClick={handleClick} disabled={isLoading}>
  Click me
</Button>
```

### Input

```tsx
<Input
  value={value}
  onChange={setValue}
  placeholder="Enter text..."
  error={error}
  label="Name"
  required
/>
```

### Select

```tsx
<Select
  value={selected}
  onChange={setSelected}
  options={options}
  placeholder="Choose option..."
/>
```

### Checkbox

```tsx
<Checkbox checked={isChecked} onChange={setChecked} label="Accept terms" />
```

### Card

```tsx
<Card title="Exercise Title">{/* Content */}</Card>
```

## 📝 Exercises Implemented

1. **ButtonClickCounter** - useCounter hook
2. **InputFieldTracker** - useInputField hook
3. **ToggleSwitch** - useToggle hook
4. **HoverHighlight** - useHover hook
5. **FormSubmissionAlert** - Form handling
6. **KeyPressDisplay** - useKeyboardTracker hook
7. **DoubleClickMessage** - useTemporaryMessage hook
8. **DropdownSelection** - Select component
9. **CheckboxToggle** - Checkbox component
10. **SearchFilter** - useSearch hook

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 💡 Best Practices Implemented

### 1. Type Safety

- Tất cả components và hooks đều có TypeScript interfaces
- Type definitions tách riêng trong `types/`
- Import types sử dụng `import type`

### 2. Performance Optimization

- `useCallback` cho event handlers
- `useMemo` cho computed values
- Tránh re-renders không cần thiết

### 3. Code Organization

- Logic tách khỏi UI (custom hooks)
- Reusable components trong `ui/`
- Single responsibility principle

### 4. Error Handling

- Input validation
- Error states
- Graceful degradation

### 5. Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support

### 6. Styling

- Consistent design system
- Responsive design
- Dark mode ready (có thể mở rộng)

## 🔧 Extension Guidelines

### Thêm Hook mới

1. Tạo file trong `hooks/`
2. Export từ `hooks/index.ts`
3. Tuân theo naming convention `useFeatureName`

### Thêm UI Component mới

1. Tạo file trong `components/ui/`
2. Export từ `components/ui/index.ts`
3. Bao gồm TypeScript props interface
4. Sử dụng Tailwind cho styling

### Thêm Exercise mới

1. Tạo file trong `components/exercises/`
2. Export từ `components/exercises/index.ts`
3. Sử dụng existing hooks và UI components
4. Wrap trong Card component

## 📚 Technologies Used

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **ESLint** - Code Quality

## 🎨 Design System

### Colors

- Primary: Blue (600-700)
- Secondary: Gray (600-700)
- Success: Green (600-700)
- Danger: Red (600-700)

### Spacing

- Consistent spacing scale (1-6)
- Grid system cho layout

### Typography

- Font weights: medium, semibold
- Text sizes: sm, base, lg

Codebase này được thiết kế để dễ dàng mở rộng, bảo trì và có thể sử dụng trong production với performance cao và UX tốt.
