/**
 * Interactive Terminal Emulator for Paulob0t Shell v2.7
 */
export class InteractiveShell {
  private readonly outputEl: HTMLElement;
  private readonly onSpawnSand: () => void;
  private readonly commands: Record<string, () => string[]>;

  constructor(outputEl: HTMLElement, onSpawnSand: () => void) {
    this.outputEl = outputEl;
    this.onSpawnSand = onSpawnSand;

    this.commands = {
      help: () => [
        'Comandos disponibles en Paulob0t Shell:',
        '  neofetch   -> Muestra resumen del sistema y perfil técnico',
        '  projects   -> Lista los 8 proyectos principales con sus stacks',
        '  stack      -> Muestra lenguajes, frameworks y bases de datos',
        '  contact    -> Información de contacto directo y GitHub',
        '  sand       -> Lanza una pieza extra en el simulador Sand-Tetris',
        '  clear      -> Limpia la pantalla de la terminal'
      ],
      neofetch: () => [
        '       /\\         paulobot@arch-wicode',
        '      /  \\        --------------------',
        '     /\\   \\       OS: Arch Linux x86_64 (Hyprland / Wayland)',
        '    /      \\      Role: Full Stack Developer @ WiCode & Software Architect',
        '   /   ,,   \\     Focus: High-Concurrency, Multi-Tenant CMS, Go Daemons',
        '  /   |  |  -\\    Backend: Go 1.23+, Java 21 (Spring Boot), Python (FastAPI), TS',
        ' /_-""    ""-_\\   Frontend: React 19, Vue 3.5, Angular 22, Flutter, Tailwind v4',
        '                  DB & Infra: PostgreSQL 16, MariaDB, Redis 7, Podman, Systemd'
      ],
      projects: () => [
        '[01] Paulobot Daemon   :: 100% Go (0 deps, 1.5MB RAM) + AGY/Claude Stream + /proc Kill',
        '[02] SeatLock Engine   :: Java 21 (Loom) + Spring Boot 3 + PG16 + Redis 7 + React 19',
        '[03] PuvloBuilder CMS  :: Fastify 5 + Prisma + React 19 + Live Resize Canvas + Dual JWT',
        '[04] FreelancerHub     :: Node 22 + Prisma 6 + PG16 + React + Flutter (Escrow & MDP)',
        '[05] Puvnex CRM        :: Python (FastAPI + SQLAlchemy 2) + Vue 3.5 + MariaDB',
        '[06] PauloBot Store v2 :: FastAPI (Python 3.12) + Angular 22 + OpenAPI Gen + Podman',
        '[07] Tetris-Qt6 Engine :: C++20 + Qt 6 + Cellular Automata Sand Physics (60 FPS)',
        '[08] Godot 4 3D Lab    :: GDScript + Wavefront (.obj) Mesh + Custom CollisionShape3D'
      ],
      stack: () => [
        '>> LENGUAJES  : Go, TypeScript, Python 3.12, Java 21, C++20, PHP 8+, Kotlin, GDScript',
        '>> BACKEND    : FastAPI, Spring Boot 3, Fastify 5, Node.js 22, Express, Rails 8',
        '>> FRONTEND   : React 19, Vue 3.5 (Pinia/PrimeVue), Angular 22, Flutter, Qt 6',
        '>> DATA/INFRA : PostgreSQL 16, MariaDB, Redis 7, Prisma 6, SQLAlchemy 2, Podman, Linux'
      ],
      contact: () => [
        '[@] Email  : pauloessau32@gmail.com',
        '[#] GitHub : https://github.com/Paulob0t',
        '[+] Work   : Full Stack Developer @ WiCode (México)'
      ],
      sand: () => {
        this.onSpawnSand();
        return ['[+] Tetrominó de arena lanzado en sand_physics.ts!'];
      }
    };
  }

  public execute(rawInput: string): void {
    const cmd = rawInput.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      this.outputEl.innerHTML = '';
      return;
    }

    const handler = this.commands[cmd];
    if (handler) {
      this.print(rawInput, handler());
    } else {
      this.print(rawInput, [
        `zsh: command not found: ${cmd}. Escribe 'help' para ver la lista de comandos.`
      ]);
    }
  }

  private print(cmdText: string, lines: string[]): void {
    if (cmdText) {
      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-line cmd';
      cmdLine.textContent = `paulobot@wicode:~$ ${cmdText}`;
      this.outputEl.appendChild(cmdLine);
    }

    for (const line of lines) {
      const div = document.createElement('div');
      div.className = 'term-line';
      div.textContent = line;
      this.outputEl.appendChild(div);
    }

    this.outputEl.appendChild(document.createElement('br'));
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }
}
