# OneNews Project - Development Roadmap

> **Hướng dẫn sử dụng**: File này theo dõi tiến độ phát triển dự án. Đánh dấu `[x]` cho task đã hoàn thành, `[ ]` cho task chưa làm.

---

## Phase 1: Project Setup & Foundation
- [ ] Initialize React + Vite project structure
- [ ] Configure Tailwind CSS
- [ ] Setup Supabase project and connection
- [ ] Configure routing (React Router)
- [ ] Setup environment variables
- [ ] Create base folder structure (Lovable compatible)

---

## Phase 2: Public Website (MVP Priority)
- [ ] Design and implement landing page
- [ ] Create About page
- [ ] Create Features showcase page
- [ ] Implement responsive navigation
- [ ] Add footer with links
- [ ] Implement SEO optimization

---

## Phase 3: Authentication System
- [ ] Setup Supabase Auth
- [ ] Create Login page
- [ ] Create Signup page
- [ ] Implement password recovery
- [ ] Setup user roles (Guest, Customer, Admin, OneApp)
- [ ] Create protected routes
- [ ] Implement OneApp SSO integration

---

## Phase 4: Core Layout Components
- [ ] Create Sidebar component (collapsible)
- [ ] Create Headerbar component with profile dropdown
- [ ] Create Main content area wrapper
- [ ] Implement theme switcher (light/dark)
- [ ] Create responsive layout system

---

## Phase 5: Customer Features

### AI Hub
- [ ] AI models listing
- [ ] AI tools directory
- [ ] Pricing comparison
- [ ] Performance benchmarks
- [ ] AI news feed

### News Section
- [ ] Category-based news feed
- [ ] Tech-focused content (Crypto, AI, OpenAI, Google)
- [ ] Article detail view
- [ ] Search and filter

### Socials Section
- [ ] Blog listing
- [ ] Blog detail with comments
- [ ] Comment system

### Forum Section
- [ ] Topic creation
- [ ] Discussion threads
- [ ] Reply system

---

## Phase 6: Admin Features

### Admin Dashboard
- [ ] Stats overview page

### User Management
- [ ] List all users
- [ ] Edit user roles
- [ ] Ban/Unban users

### Content Management
- [ ] Manage news articles
- [ ] Manage blog posts
- [ ] Manage forum topics
- [ ] Moderate comments

### Settings
- [ ] Site configuration
- [ ] API integrations
- [ ] Email templates

---

## Phase 7: Profile & Settings
- [ ] User Profile page (Customer & Admin)
- [ ] Profile editing
- [ ] Avatar upload
- [ ] Settings page
  - [ ] Theme preferences
  - [ ] Account settings
  - [ ] Security settings (2FA, password change)
  - [ ] Notification preferences

---

## Phase 8: Testing & Optimization
- [ ] Unit testing for components
- [ ] Integration testing
- [ ] Performance optimization
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing

---

## Phase 9: Deployment & Documentation
- [ ] Setup deployment pipeline
- [ ] Deploy to production
- [ ] Create user documentation
- [ ] Create admin documentation
- [ ] Setup monitoring and analytics

---

## Current Sprint Focus

**Sprint**: Foundation + Public Website  
**Timeline**: Week 1-2  
**Priority Tasks**:
1. Initialize project structure
2. Configure Tailwind CSS
3. Build landing page
4. Create navigation and footer

---

## Notes & Blockers

### Blockers
- [ ] Cần Supabase credentials (URL, ANON_KEY)
- [ ] Cần OneApp SSO documentation (cho Phase 3)

### Technical Decisions
- Using Tailwind CSS for styling (compatible with Lovable)
- React Router v6 for routing
- Supabase for backend (Auth + Database + Storage)
- Vercel for deployment

### Future Considerations
- SaaS features (subscription tiers, payment integration)
- AI-powered news summarization
- Mobile app (React Native)
