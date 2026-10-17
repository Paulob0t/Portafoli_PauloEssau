export type ProjectCategory = 'all' | 'backend' | 'fullstack' | 'systems';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  windowTitle: string;
  badge: string;
  category: Exclude<ProjectCategory, 'all'>;
  name: string;
  descriptionHtml: string;
  archDiagram: string;
  techStack: string[];
  links: ProjectLink[];
}

export interface ThemeOption {
  id: 'phosphor' | 'amber' | 'paper';
  label: string;
}
