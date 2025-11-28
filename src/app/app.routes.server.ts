import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'recipe/:id', // <--- This tells Angular: "Don't build this on the server"
    renderMode: RenderMode.Client
  },
  {
    path: '**', // All other pages will still be built as static HTML
    renderMode: RenderMode.Prerender
  }
];