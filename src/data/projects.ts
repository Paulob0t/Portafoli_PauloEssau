import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'seatlock',
    windowTitle: '01 // seatlock_engine.java',
    badge: 'HIGH CONCURRENCY',
    category: 'backend',
    name: 'SeatLock — Reservation Engine',
    descriptionHtml:
      'Motor de reservas concurrentes de alto rendimiento diseñado para garantizar <strong>cero sobreventas (zero overbooking)</strong> bajo ráfagas masivas de tráfico simultáneo. Combina bloqueos pesimistas (<code>SELECT ... FOR UPDATE</code>), control optimista (<code>@Version</code>), Janitor Task automático y UI reactiva en vivo.',
    archDiagram: `React 19 ──► Spring Boot 3 (Java 21 Virtual Threads)
               ├──► @Lock(PESSIMISTIC_WRITE) ──► PostgreSQL 16
               └──► TTL Hold & Cache ──────────► Redis 7`,
    techStack: [
      'Java 21 (Loom)',
      'Spring Boot 3',
      'PostgreSQL 16',
      'Redis 7',
      'Flyway',
      'React 19',
      'TypeScript'
    ],
    links: [
      { label: '[BACKEND REPO ↗]', url: 'https://github.com/Paulob0t/seatlock-back' },
      { label: '[FRONTEND REPO ↗]', url: 'https://github.com/Paulob0t/seatlock-front' }
    ]
  },
  {
    id: 'puvnex',
    windowTitle: '02 // puvnex_crm_cloud.py',
    badge: 'ENTERPRISE SUITE',
    category: 'backend',
    name: 'Puvnex CRM — Cloud Suite',
    descriptionHtml:
      'Suite ejecutiva y motor asíncrono para la administración integral de clientes, infraestructura cloud (dominios y hosting), facturación recurrente, tickets de soporte técnico y portal de autogestión con control de acceso basado en roles (RBAC).',
    archDiagram: `Vue 3.5 + Pinia ──► FastAPI Async Router (JWT RBAC)
                      └──► SQLAlchemy 2.0 ──► MariaDB`,
    techStack: [
      'Python 3.11+',
      'FastAPI',
      'SQLAlchemy 2.0',
      'Vue 3.5',
      'PrimeVue 4',
      'TypeScript',
      'MariaDB'
    ],
    links: [
      { label: '[BACKEND REPO ↗]', url: 'https://github.com/Paulob0t/Puvnex_backend' },
      { label: '[FRONTEND REPO ↗]', url: 'https://github.com/Paulob0t/Puvnex_frontend' }
    ]
  },
  {
    id: 'puvlobuilder',
    windowTitle: '03 // puvlobuilder_cms.ts',
    badge: 'MULTI-TENANT CMS',
    category: 'fullstack',
    name: 'PuvloBuilder — Dynamic CMS',
    descriptionHtml:
      'CMS modular multi-tenant y constructor visual de páginas (Page Builder) mediante bloques configurables. Implementa autenticación JWT independiente de doble nivel (SuperAdmin maestro y Sub-Admin por proyecto/tenant) con almacenamiento físico aislado.',
    archDiagram: `Page Builder (React 19) ──► Fastify 5 + Zod Schemas
                              ├──► Guard Dual JWT (Super/Tenant)
                              └──► Prisma ORM ──► MariaDB`,
    techStack: [
      'Node.js',
      'Fastify 5',
      'Prisma ORM',
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'Zod'
    ],
    links: [
      { label: '[BACKEND REPO ↗]', url: 'https://github.com/Paulob0t/PuvloBuilder_Back' },
      { label: '[FRONTEND REPO ↗]', url: 'https://github.com/Paulob0t/PuvloBuilder_Front' }
    ]
  },
  {
    id: 'agy-bot',
    windowTitle: '04 // agy_remote_devops.py',
    badge: 'DEVOPS & AI OPS',
    category: 'systems',
    name: 'AGY Remote DevOps Control',
    descriptionHtml:
      'Centro de mando remoto en Linux (Wayland/Hyprland) y orquestador de Antigravity CLI vía Telegram. Gestiona colas concurrentes FIFO con aislamiento de árboles de procesos (<code>os.killpg</code>), túneles Cloudflare al vuelo, servicios fullstack + Cloud SQL Proxy y capturas con <code>grim</code>.',
    archDiagram: `Telegram API ──► Asyncio FIFO Queue (Process Groups)
                   ├──► AGY CLI JSON Stream + State Persist
                   └──► Cloudflared Tunnel / DBus / Grim`,
    techStack: [
      'Python Asyncio',
      'Telegram Bot API',
      'Cloudflare Tunnels',
      'Linux IPC / Systemd',
      'Wayland / Hyprland'
    ],
    links: [
      { label: '[VER REPOSITORIO ↗]', url: 'https://github.com/Paulob0t/bot_telegram_agy' }
    ]
  },
  {
    id: 'paulobot-store',
    windowTitle: '05 // paulobot_store_v2.py',
    badge: 'VENDING & POS',
    category: 'fullstack',
    name: 'PauloBot Store v2 — Vending POS',
    descriptionHtml:
      'Evolución del ecosistema inteligente de máquinas expendedoras y comercio automatizado 24/7. Migrado a una arquitectura desacoplada con conversión automática de imágenes a WebP, contratos estrictos OpenAPI 3.0 con generación de cliente tipado y despliegue en contenedores Podman.',
    archDiagram: `Angular 22 (ng-openapi-gen) ──► FastAPI (Python 3.12)
                                  ├──► Pillow WebP Engine
                                  └──► PostgreSQL 16 (Podman)`,
    techStack: [
      'Python 3.12',
      'FastAPI',
      'Angular 22',
      'Tailwind v4',
      'PostgreSQL 16',
      'OpenAPI CodeGen',
      'Podman'
    ],
    links: [
      { label: '[BACKEND REPO ↗]', url: 'https://github.com/Paulob0t/PauloBotStore_Back' },
      { label: '[FRONTEND REPO ↗]', url: 'https://github.com/Paulob0t/PauloBotStore_Front' }
    ]
  },
  {
    id: 'tetris-qt6',
    windowTitle: '06 // sand_tetris_qt6.cpp',
    badge: 'C++20 ENGINE',
    category: 'systems',
    name: 'Tetris-Qt6 & Sand Physics',
    descriptionHtml:
      'Implementación moderna y multiplataforma en C++20 a 60 FPS que combina el modo competitivo clásico (7-Bag Randomizer, Lock Delay, Ghost Piece, Hold) con <strong>Modo Arena (Sand Tetris)</strong>: un motor de física de autómatas celulares donde los bloques se derriten en miles de granos de arena interactivos.',
    archDiagram: `GameLoop (60 FPS QTimer) ──► Cellular Automata Grid
                              ├──► BFS Flood-Fill Line Clear
                              └──► Particle & Shake Renderer`,
    techStack: ['C++20', 'Qt 6', 'CMake', 'Cellular Automata', 'Particle System'],
    links: [{ label: '[VER REPOSITORIO ↗]', url: 'https://github.com/Paulob0t/Tetris-Qt6' }]
  }
];
