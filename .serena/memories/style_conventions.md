# Style and Conventions

## CSS
- Use CSS custom properties (variables) defined in `:root`
- HSL color format: `hsl(var(--variable-name))`
- BEM-like naming: `.component-name`, `.component-name-element`, `.component.modifier`
- Mobile-first responsive design with `@media (min-width: ...)` breakpoints
- Transition effects on interactive elements

## JavaScript
- IIFE pattern for modules to avoid global scope pollution
- Modern ES6+ syntax (const, let, arrow functions)
- DOM queries using `querySelector` / `querySelectorAll`
- Event delegation where appropriate

## HTML
- Semantic HTML5 elements
- Accessibility attributes (aria-label, etc.)
- SVG icons inlined for platform logos
- Section-based page structure with id anchors

## Naming Conventions
- CSS classes: kebab-case (e.g., `hero-section`, `nav-logo`)
- JavaScript variables: camelCase
- File names: kebab-case (except for special files like CLAUDE.md)
