export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/admin', label: 'Admin', pageFile: 'AdminPage' },
  { path: '/editor', label: 'Super Editor', pageFile: 'EditorPage' },
];
