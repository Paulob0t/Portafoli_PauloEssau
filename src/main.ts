import './style.css';
import { PROJECTS } from './data/projects';
import { SandPhysicsEngine } from './engine/sandPhysics';
import { InteractiveShell } from './terminal/shell';
import type { ProjectCategory, ProjectItem, ThemeOption } from './types';

const TECH_ICONS: Record<string, string> = {
  'Java 21 (Loom)': 'devicon-java-plain colored',
  'Spring Boot 3': 'devicon-spring-original colored',
  'PostgreSQL 16': 'devicon-postgresql-plain colored',
  'Redis 7': 'devicon-redis-plain colored',
  'Flyway': 'devicon-postgresql-plain colored',
  'React 19': 'devicon-react-original colored',
  'TypeScript': 'devicon-typescript-plain colored',
  'Python 3.11+': 'devicon-python-plain colored',
  'Python 3.12': 'devicon-python-plain colored',
  'Python Asyncio': 'devicon-python-plain colored',
  'FastAPI': 'devicon-fastapi-plain colored',
  'SQLAlchemy 2.0': 'devicon-sqlalchemy-plain',
  'Vue 3.5': 'devicon-vuejs-plain colored',
  'PrimeVue 4': 'devicon-vuejs-line colored',
  'MariaDB': 'devicon-mariadb-original colored',
  'Node.js': 'devicon-nodejs-plain colored',
  'Fastify 5': 'devicon-fastify-plain',
  'Prisma ORM': 'devicon-prisma-original',
  'Tailwind v4': 'devicon-tailwindcss-original colored',
  'Zod': 'devicon-typescript-plain colored',
  'Telegram Bot API': 'devicon-python-plain colored',
  'Cloudflare Tunnels': 'devicon-cloudflare-plain colored',
  'Linux IPC / Systemd': 'devicon-linux-plain',
  'Wayland / Hyprland': 'devicon-archlinux-plain colored',
  'Angular 22': 'devicon-angular-plain colored',
  'OpenAPI CodeGen': 'devicon-openapi-plain colored',
  'Podman': 'devicon-podman-plain colored',
  'C++20': 'devicon-cplusplus-plain colored',
  'Qt 6': 'devicon-qt-original colored',
  'CMake': 'devicon-cmake-plain colored',
  'Cellular Automata': 'devicon-cplusplus-plain colored',
  'Particle System': 'devicon-qt-original colored'
};

function renderProjectCard(project: ProjectItem): string {
  const pillsHtml = project.techStack
    .map((tech) => {
      const iconClass = TECH_ICONS[tech];
      const iconHtml = iconClass ? `<i class="${iconClass}"></i> ` : '';
      return `<span>${iconHtml}${tech}</span>`;
    })
    .join('');
  const linksHtml = project.links
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank" rel="noopener" class="pixel-link">${link.label}</a>`
    )
    .join('');

  return `
    <article class="pixel-window project-card" data-category="${project.category}">
      <div class="window-bar">
        <span class="window-title">${project.windowTitle}</span>
        <span class="project-type-badge">${project.badge}</span>
      </div>
      <div class="window-body project-body">
        <div class="project-top">
          <h3 class="project-name">${project.name}</h3>
          <p class="project-desc">${project.descriptionHtml}</p>
        </div>

        <div class="arch-box">
          <div class="arch-title">&gt; ARQUITECTURA CLAVE:</div>
          <pre class="arch-diagram">${project.archDiagram}</pre>
        </div>

        <div class="tech-pills">${pillsHtml}</div>
        <div class="project-links">${linksHtml}</div>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  /* 1. Render Projects from Typed Catalog */
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = PROJECTS.map(renderProjectCard).join('');
  }

  /* 2. System Clock */
  const sysClock = document.getElementById('sysClock');
  const updateClock = (): void => {
    if (sysClock) {
      sysClock.textContent = new Date().toTimeString().split(' ')[0];
    }
  };
  updateClock();
  window.setInterval(updateClock, 1000);

  /* 3. Theme & CRT Switchers */
  const themes: ThemeOption[] = [
    { id: 'phosphor', label: 'PHOSPHOR' },
    { id: 'amber', label: 'AMBER_CRT' },
    { id: 'paper', label: 'PAPER_1BIT' }
  ];
  let currentThemeIdx = 0;

  const themeBtn = document.getElementById('themeBtn');
  const themeLabel = document.getElementById('themeLabel');
  themeBtn?.addEventListener('click', () => {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    const selected = themes[currentThemeIdx];
    document.documentElement.setAttribute('data-theme', selected.id);
    if (themeLabel) themeLabel.textContent = selected.label;
  });

  const crtBtn = document.getElementById('crtBtn');
  const crtLabel = document.getElementById('crtLabel');
  const scanlines = document.getElementById('scanlines');
  let crtEnabled = true;

  crtBtn?.addEventListener('click', () => {
    crtEnabled = !crtEnabled;
    scanlines?.classList.toggle('off', !crtEnabled);
    if (crtLabel) crtLabel.textContent = crtEnabled ? 'ON' : 'OFF';
  });

  /* 4. Category Filtering */
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedFilter = (btn.dataset.filter || 'all') as ProjectCategory;
      const cards = document.querySelectorAll<HTMLElement>('.project-card');
      cards.forEach((card) => {
        const category = card.dataset.category;
        if (selectedFilter === 'all' || category === selectedFilter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* 5. Initialize Cellular Automata Sand-Tetris Engine */
  const sandCanvas = document.getElementById('sandCanvas') as HTMLCanvasElement | null;
  let sandEngine: SandPhysicsEngine | null = null;
  if (sandCanvas) {
    sandEngine = new SandPhysicsEngine(sandCanvas);
    sandEngine.start();

    document.getElementById('clearSandBtn')?.addEventListener('click', () => {
      sandEngine?.clear();
    });

    document.getElementById('spawnPieceBtn')?.addEventListener('click', () => {
      sandEngine?.spawnTetromino();
    });
  }

  /* 6. Initialize Interactive Terminal Shell */
  const termOutput = document.getElementById('termOutput');
  const termForm = document.getElementById('termForm') as HTMLFormElement | null;
  const termInput = document.getElementById('termInput') as HTMLInputElement | null;

  if (termOutput) {
    const shell = new InteractiveShell(termOutput, () => sandEngine?.spawnTetromino());

    termForm?.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      if (!termInput) return;
      const value = termInput.value;
      termInput.value = '';
      shell.execute(value);
    });

    document.querySelectorAll<HTMLButtonElement>('.cmd-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset.cmd;
        if (cmd) shell.execute(cmd);
      });
    });

    shell.execute('neofetch');
  }
});
