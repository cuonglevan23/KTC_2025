# Homework Projects - React + TypeScript

Bộ 3 project homework thực hành React + TypeScript + CSS Modules theo chuẩn production.

## 📁 Projects Structure

```
homework/
├── calculator/              # Calculator App
├── registration-form/       # User Registration Form
├── shopping-cart/          # Shopping Cart App
└── README.md              # This file
```

## 🧮 1. Calculator Project

**Location**: `./calculator/`

### Features

- Basic arithmetic operations (+, -, ×, ÷)
- Clear function and error handling
- Division by zero protection
- CSS Modules styling
- TypeScript with useReducer pattern

### Tech Stack

- React 18 + TypeScript
- Vite build tool
- CSS Modules
- useReducer for state management

### Run Calculator

```bash
cd calculator
npm install
npm run dev
```

### Key Files

- `src/components/Calculator.tsx` - Main calculator component
- `src/utils/calculatorLogic.ts` - Calculator logic with reducer
- `src/types/index.ts` - TypeScript interfaces
- `src/components/Calculator.module.css` - Styles

---

## 📝 2. Registration Form Project

**Location**: `./registration-form/`

### Features

- Complete user registration form
- Field validation (email, password, age, etc.)
- File upload for profile picture
- Responsive design
- Error display for each field

### Form Fields

- Full Name (min 3 chars)
- Email (valid format)
- Password (8+ chars, letters + numbers)
- Confirm Password (must match)
- Phone Number (10+ digits)
- Gender (radio buttons)
- Date of Birth (18+ years)
- Country (dropdown)
- Hobbies (checkboxes - at least 1)
- Profile Picture (jpg/jpeg/png)
- Bio (optional, max 300 chars)

### Tech Stack

- React 18 + TypeScript
- CSS Modules
- Custom validation functions
- File handling

### Run Registration Form

```bash
cd registration-form
npm install
npm run dev
```

### Key Files

- `src/components/RegistrationForm.tsx` - Main form component
- `src/utils/validation.ts` - Validation logic
- `src/types/index.ts` - Form interfaces
- `src/components/RegistrationForm.module.css` - Form styles

---

## 🛒 3. Shopping Cart Project

**Location**: `./shopping-cart/`

### Features

- Product grid display (4 columns)
- Add/remove items from cart
- Quantity control (+/- buttons)
- Cart dropdown with items list
- Real-time price calculation
- Vietnamese currency formatting

### Tech Stack

- React 18 + TypeScript
- CSS Modules
- useContext for cart state
- Custom hooks for cart logic

### Run Shopping Cart

```bash
cd shopping-cart
npm install
npm run dev
```

### Key Files

- `src/components/ProductGrid.tsx` - Products display
- `src/components/CartDropdown.tsx` - Cart UI
- `src/components/CartIcon.tsx` - Cart icon with counter
- `src/data/products.ts` - Product data
- `src/types/Product.ts` - Product interfaces

---

## 🎯 Learning Objectives

### TypeScript Skills

- Interface definitions
- Type safety
- Generic types
- Module declarations

### React Patterns

- Functional components
- Custom hooks
- useReducer pattern
- useContext for state management
- Event handling
- Form management

### CSS Modules

- Scoped styling
- Responsive design
- Component-based CSS
- TypeScript integration

### Best Practices

- Code organization
- Error handling
- Validation
- Performance optimization
- Accessibility considerations

## 🚀 Getting Started

1. Choose a project to work on
2. Navigate to the project folder
3. Install dependencies: `npm install`
4. Start development: `npm run dev`
5. Open in browser: `http://localhost:5173`

## 📋 Requirements Checklist

### Calculator ✅

- [x] Basic arithmetic operations
- [x] Clear function
- [x] Error handling (division by zero)
- [x] CSS Modules styling
- [x] TypeScript interfaces
- [x] Grid layout (4 columns)

### Registration Form ✅

- [x] All form fields implemented
- [x] Validation for each field
- [x] Error display
- [x] File upload handling
- [x] Responsive design
- [x] CSS Modules styling

### Shopping Cart ⏳

- [ ] Product grid (4 columns)
- [ ] Add/remove from cart
- [ ] Quantity controls
- [ ] Cart dropdown
- [ ] Price formatting
- [ ] Context state management

## 💡 Tips for Success

1. **Start Simple**: Begin with basic functionality, then add features
2. **TypeScript First**: Define interfaces before implementing
3. **Component Design**: Keep components small and focused
4. **Error Handling**: Always handle edge cases
5. **Testing**: Test in browser frequently
6. **Responsive**: Design for mobile and desktop
7. **Accessibility**: Use semantic HTML and ARIA labels

## 🔧 Troubleshooting

### Common Issues

- **CSS Modules not working**: Check vite-env.d.ts declarations
- **TypeScript errors**: Ensure all interfaces are properly defined
- **Build errors**: Check import/export statements
- **Styling issues**: Verify CSS Module class names

### Debug Tips

- Use React DevTools
- Check browser console for errors
- Verify file paths and imports
- Use TypeScript strict mode

---

**Happy Coding! 🎉**

Mỗi project đều có starter code và structure sẵn. Hãy hoàn thiện theo requirements trong `homeworks.md`!
