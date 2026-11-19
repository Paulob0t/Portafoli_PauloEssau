import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'agy-bot',
    windowTitle: '01 // paulobot_daemon.go',
    badge: '100% GO DAEMON',
    category: 'systems',
    name: 'Paulobot: Go Telegram Daemon (AGY & Claude)',
    descriptionHtml:
      'Demonio de control remoto, gestor de sesiones y monitor de cuotas escrito <strong>100% en Go puro</strong> (0 dependencias externas, 0 Python, consumo de <strong>1.5 MB a 10 MB RAM</strong>). Alterna en vivo entre Antigravity CLI (<code>agy</code>) y Claude Code (<code>claude</code>) por <code>stream-json</code>, mata árboles de subprocesos leyendo <code>/proc/&lt;pid&gt;/task/*/children</code> en &lt;50 ms e integra Waybar, Rofi y pipeline de PDFs hacia Obsidian/WiCode.',
    archDiagram: `Telegram API ──► Go Single Binary (sync.RWMutex + FIFO Queue)
                   ├──► Dual Stream-JSON (agy / claude) + /proc Killer
                   └──► Waybar & Rofi Quota JSON + Obsidian PDF Pipeline`,
    techStack: [
      'Go 1.23+',
      'Zero Deps (1.5MB RAM)',
      'Linux /proc & Systemd',
      'Wayland / Hyprland',
      'Telegram Bot API'
    ],
    links: [
      { label: '[VER REPOSITORIO ↗]', url: 'https://github.com/Paulob0t/bot_telegram_agy' }
    ]
  },
  {
    id: 'seatlock',
    windowTitle: '02 // seatlock_engine.java',
    badge: 'HIGH CONCURRENCY',
    category: 'backend',
    name: 'SeatLock: Reservation Engine',
    descriptionHtml:
      'Motor de reservas concurrentes diseñado para garantizar <strong>cero sobreventas (zero overbooking)</strong> bajo ráfagas masivas de tráfico simultáneo. Combina bloqueos pesimistas (<code>SELECT ... FOR UPDATE</code>), control optimista (<code>@Version</code>), índice único parcial en PostgreSQL 16, Janitor Task automático y mapa interactivo en tiempo real.',
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
    id: 'puvlobuilder',
    windowTitle: '03 // puvlobuilder_cms.ts',
    badge: 'MULTI-TENANT CMS',
    category: 'fullstack',
    name: 'PuvloBuilder: Multi-Tenant CMS',
    descriptionHtml:
      'CMS modular multi-tenant con constructor visual en lienzo (tiradores de redimensionamiento en vivo, ajuste magnético 0% gap y sincronización exacta entre editor y vista pública). Incluye módulo CRUD de clientes, autenticación JWT de doble nivel (SuperAdmin maestro y Sub-Admin por tenant) y almacenamiento aislado.',
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
      'MariaDB'
    ],
    links: [
      { label: '[BACKEND REPO ↗]', url: 'https://github.com/Paulob0t/PuvloBuilder_Back' },
      { label: '[FRONTEND REPO ↗]', url: 'https://github.com/Paulob0t/PuvloBuilder_Front' }
    ]
  },
  {
    id: 'freelancer-hub',
    windowTitle: '04 // freelancer_hub_escrow.ts',
    badge: 'ESCROW & MDP',
    category: 'fullstack',
    name: 'FreelancerHub: Escrow & Governance',
    descriptionHtml:
      'Plataforma de intermediación y gobernanza para proyectos freelance con custodia de pago (<strong>Escrow</strong>) y módulos de decisión algorítmica (MDP). Construida bajo Clean/Onion Architecture con API en Node.js 22 LTS, cliente web en React y aplicación móvil en Flutter.',
    archDiagram: `React Web & Flutter App ──► Node.js 22 (Clean / Onion Arch)
                              ├──► Escrow & MDP Decision Engine
                              └──► Prisma 6 ──► PostgreSQL 16 (Podman)`,
    techStack: [
      'Node.js 22 LTS',
      'TypeScript',
      'Prisma 6',
      'PostgreSQL 16',
      'React 19',
      'Flutter',
      'Podman'
    ],
    links: [
      { label: '[BACKEND ↗]', url: 'https://github.com/IDGS1004-23001526/freelancer_hub_backend' },
      { label: '[WEB ↗]', url: 'https://github.com/IDGS1004-23001526/freelancer_hub_frontend' },
      { label: '[MÓVIL ↗]', url: 'https://github.com/IDGS1004-23001526/freelancer_hub_frontend_movil' }
    ]
  },
  {
    id: 'puvnex',
    windowTitle: '05 // puvnex_crm_cloud.py',
    badge: 'ENTERPRISE SUITE',
    category: 'backend',
    name: 'Puvnex CRM: Cloud Hosting Suite',
    descriptionHtml:
      'Sistema asíncrono para administración de clientes, infraestructura cloud (dominios y hosting), facturación recurrente, tickets de soporte técnico y portal de autogestión con control de acceso basado en roles (RBAC).',
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
    id: 'paulobot-store',
    windowTitle: '06 // paulobot_store_v2.py',
    badge: 'VENDING & POS',
    category: 'fullstack',
    name: 'PauloBot Store v2: Vending POS',
    descriptionHtml:
      'Comercio automatizado y punto de venta 24/7 para máquinas expendedoras. Arquitectura desacoplada con conversión automática de imágenes a WebP, contratos OpenAPI 3.0 con generación de cliente HTTP tipado (<code>ng-openapi-gen</code>) y contenedores Podman.',
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
    windowTitle: '07 // sand_tetris_qt6.cpp',
    badge: 'C++20 ENGINE',
    category: 'systems',
    name: 'Tetris-Qt6 & Sand Physics',
    descriptionHtml:
      'Motor de juego nativo a 60 FPS desarrollado en C++20 y Qt 6. Incluye modo competitivo clásico (7-Bag Randomizer, Lock Delay, Ghost Piece, Hold) y <strong>Modo Arena (Sand Tetris)</strong> con física de autómatas celulares, sistema de partículas y <em>screen shake</em>.',
    archDiagram: `GameLoop (60 FPS QTimer) ──► Cellular Automata Grid
                              ├──► BFS Flood-Fill Line Clear
                              └──► Particle & Shake Renderer`,
    techStack: ['C++20', 'Qt 6', 'CMake', 'Cellular Automata', 'Particle System'],
    links: [{ label: '[VER REPOSITORIO ↗]', url: 'https://github.com/Paulob0t/Tetris-Qt6' }]
  },
  {
    id: 'godot-3d',
    windowTitle: '08 // godot4_3d_physics.gd',
    badge: '3D GAME LAB',
    category: 'systems',
    name: 'Godot 4: 3D Mesh & Collision Lab',
    descriptionHtml:
      'Laboratorio de física 3D en Godot 4 enfocado en importación y estructuración de mallas personalizadas (<code>.obj</code>), cinemática con <code>CharacterBody3D</code> y volúmenes de colisión a medida.',
    archDiagram: `Wavefront (.obj) Mesh ──► Godot 4 Scene Tree
                            ├──► CharacterBody3D Kinematics
                            └──► Custom CollisionShape3D`,
    techStack: ['Godot 4', 'GDScript', '3D Physics'],
    links: [
      {
        label: '[VER REPOSITORIO ↗]',
        url: 'https://github.com/Paulob0t/Aprendiendo-a-crear-un-videojuego'
      }
    ]
  }
];
