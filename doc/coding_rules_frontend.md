# Frontend Coding Rules & Best Practices

## 🧱 Project Structure Guidelines
```
app/
├── pages/              # Next.js page routes (App Router)
├── layout.tsx          # Global layout structure
├── components/         # Reusable UI components
│   ├── atoms/          # Primitive components (buttons, icons)
│   ├── molecules/      # Composed components (form fields)
│   └── organisms/      # Complex components (navigation bars)
├── docs/               # MDX documentation pages
└── styles/             # Global Tailwind CSS configurations
```

## ✅ Coding Standards
1. **Component Architecture**
   - Use atomic design pattern (atoms/molecules/organisms)
   - Single responsibility principle: 1 component = 1 purpose
   - Follow Shadcn UI component naming conventions

2. **State Management**
   - Prefer React hooks (`useState`, `useContext`) over global state
   - Use `useRouter` for navigation instead of manual routing
   - Avoid prop drilling - use context API when needed

3. **Styling**
   - Mandatory: Tailwind CSS with dark mode support
   - No inline styles
   - Use Shadcn UI components for consistent design system
   - Custom styles should be in `styles/tailwind.config.js`

4. **MDX Documentation**
   - Always use MDX files for documentation pages
   - Follow semantic markdown structure with proper headers
   - Use code blocks with language annotations
   - Include meta frontmatter for SEO

## 🧠 SOLID Principles Implementation
1. **Single Responsibility**  
   Each component should handle one distinct task  
   ✅ Example: `Button.tsx` only handles button UI  
   ❌ Avoid combining form handling and UI in same component

2. **Open/Closed Principle**  
   Components should be open for extension, closed for modification  
   Use composition over inheritance where possible

3. **Liskov Substitution**  
   Ensure base classes can be substituted with derived classes without breaking code  
   Maintain consistent interface patterns across components

4. **Interface Segregation**  
   Create focused interfaces instead of fat ones  
   Example: Split `IButtonProps` into `IButtonBaseProps` and `IButtonVariants`

5. **Dependency Inversion**  
   Depend on abstractions, not concrete implementations  
   Use React Context API for shared state management

## 🚀 Best Practices
- Use TypeScript for type safety
- Follow 200-line rule for component files
- Write unit tests for complex components
- Optimize images and assets for production
- Use `next/image` for all image assets
- Implement lazy loading for non-critical resources
- Follow accessibility guidelines (ARIA attributes)
- Keep package.json dependencies up to date

## 📌 Naming Conventions
- Components: PascalCase (`NavigationBar`)
- Hooks: camelCase with `use` prefix (`useDarkMode`)
- Types: PascalCase (`UserType`)
- Constants: SNAKE_CASE (`MAX_ITEMS_PER_PAGE`)
- Files: kebab-case (`navigation-bar.tsx`)

## 📈 Performance Guidelines
1. Use React.memo for pure components
2. Implement infinite scrolling for long lists
3. Optimize server components with `next-mdx-remote`
4. Use `useOptimistic` for optimistic UI updates
5. Implement proper loading states for API calls

## 🧪 Testing Requirements
- All public APIs must have unit tests
- Component snapshots should be version-controlled
- Integration tests for complex workflows
- End-to-end tests for critical user paths
- Use React Testing Library for component testing

## 📄 Documentation Standards
1. Every major component must have a MDX documentation file
2. Include usage examples with code blocks
3. Document props with TypeScript interfaces
4. Add accessibility notes for complex components
5. Maintain up-to-date changelog in README.md

This document follows the same structure and principles as the project's core architecture, ensuring consistency across all front-end implementations.
