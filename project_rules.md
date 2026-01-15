# Project Rules: OneNews

## I. Global Requirements
1.  **Language**: Vietnamese for communication, English for Code/Comments/UI Text.
2.  **Tech Stack**: React + Vite + Tailwind CSS.
3.  **Compatibility**: Ensure compatibility with Lovable/AI agent dev tools (clean code, standard structures).

## II. UI/UX Guidelines (Vision-to-Code)
1.  **Aesthetics**: 
    - Modern, energetic, and premium feel.
    - Glassmorphism, blurred backgrounds, and subtle gradients.
    - High contrast text for readability.
2.  **Responsiveness**: 
    - Mobile-first approach.
    - Smooth scaling from mobile -> tablet -> desktop.
3.  **Animation & Interaction**:
    - **Smoothness**: All hover states, transitions, and page loads must be silky smooth (use `transition-all duration-300 ease-in-out` as a baseline).
    - **Micro-interactions**: Button hovers, card lifts, and focus states should feel "alive".
    - Avoid stiff/jerky movements.
4.  **Theming System**:
    - Support multiple themes (e.g., "Cyber Emerald", "Rose Gold", "Midnight Blue").
    - Use CSS Variables (`:root`) for primary, secondary, background, and foreground colors to allow instant theme switching.
    - Tailwind config should reference these CSS variables (e.g., `bg-primary` -> `var(--color-primary)`).

## III. Code Standards
1.  **Tailwind CSS**: Use utility classes primarily. Abstract complex components only when necessary.
2.  **Components**: Modular, reusable components (e.g., `Button`, `Card`, `Section`).
3.  **File Structure**:
    - `src/components`: UI Components
    - `src/layouts`: Page layouts
    - `src/pages`: Route pages
    - `src/styles`: Global CSS and Theme definitions

## IV. Logo & Assets
- Logo should reflect "OneNews": Connection, Speed, Modernity.
- Minimalist, scalable SVG preferred or high-quality PNG.
