# React + Vite + Tailwind CSS v4 + shadcn/ui

Modern React application scaffold with the latest versions of:

- **React 19.2** - Latest React with hooks and concurrent features
- **Vite 7** - Next generation frontend tooling
- **TypeScript 5.9** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework (latest version without config file)
- **shadcn/ui** - Beautiful, accessible component library (all components included)

## Getting Started

### Install dependencies

```bash
bun install
```

### Run development server

```bash
bun dev
```

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components (54 components)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Tailwind CSS imports and custom styles
├── public/              # Static assets
└── index.html           # HTML entry point
```

## Available shadcn/ui Components

All shadcn/ui components are already installed and ready to use:

- Accordion, Alert, Alert Dialog, Aspect Ratio
- Avatar, Badge, Breadcrumb, Button, Button Group
- Calendar, Card, Carousel, Chart, Checkbox
- Collapsible, Command, Context Menu, Dialog, Drawer
- Dropdown Menu, Empty, Field, Form
- Hover Card, Input, Input Group, Input OTP
- Item, Kbd, Label, Menubar, Navigation Menu
- Pagination, Popover, Progress, Radio Group
- Resizable, Scroll Area, Select, Separator
- Sheet, Sidebar, Skeleton, Slider
- Sonner (toast notifications), Spinner, Switch
- Table, Tabs, Textarea, Toggle, Toggle Group
- Tooltip

## Tailwind CSS v4

This project uses Tailwind CSS v4, which doesn't require a `tailwind.config.js` file. Configuration is done directly in CSS using the `@theme` directive in `src/index.css`.

## TypeScript Path Aliases

The project is configured with path aliases for cleaner imports:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```
