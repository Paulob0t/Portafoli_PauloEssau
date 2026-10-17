/**
 * Interactive Terminal Emulator for Paulob0t Shell v2.6
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
        '  neofetch   -> Muestra resumen del sistema y perfil de arquitecto',
        '  projects   -> Lista los 6 proyectos principales con sus stacks',
        '  stack      -> Muestra lenguajes, frameworks y bases de datos',
        '  contact    -> Información de contacto directo y GitHub',
        '  sand       -> Lanza una pieza extra en el simulador Sand-Tetris',
        '  clear      -> Limpia la pantalla de la terminal'
      ],
      neofetch: () => [
        '       /\\         paulobot@arch-wicode',
        '      /  \\        --------------------',
        '     /\\   \\       OS: Arch Linux x86_64 (Hyprland)',
        '    /      \\      Role: Full Stack Developer @ WiCode & Software Architect',
        '   /   ,,   \\     Focus: High-Concurrency, Multi-Tenant CMS, Cloud Suites',
        '  /   |  |  -\\    Backend: Java 21 (Spring Boot), Python (FastAPI), TS (Fastify)',
        ' /_-""    ""-_\\   Frontend: React 19, Vue 3.5, Angular 22, Tailwind CSS v4',
        '                  DB & Infra: PostgreSQL 16, MariaDB, Redis 7, Podman, Linux'
      ],
      projects: () => [
        '[01] SeatLock          :: Java 21 (Loom) + Spring Boot 3 + PG16 + Redis 7 + React 19',
        '[02] Puvnex CRM        :: Python (FastAPI + SQLAlchemy 2) + Vue 3.5 + MariaDB',
        '[03] PuvloBuilder CMS  :: Fastify 5 + Prisma ORM + React 19 + Dual JWT Auth',
        '[04] AGY Remote Bot    :: Python Asyncio + Telegram API + Cloudflare Tunnels + Linux',
        '[05] PauloBot Store v2 :: FastAPI (Python 3.12) + Angular 22 + OpenAPI Gen + Podman',
        '[06] Tetris-Qt6 Engine :: C++20 + Qt 6 + Cellular Automata Sand Physics (60 FPS)'
      ],
      stack: () => [
        '>> LENGUAJES  : TypeScript, Python, Java 21, C++20, JavaScript, PHP, Go, Ruby, Kotlin',
        '>> BACKEND    : FastAPI, Spring Boot 3, Fastify 5, Node.js, Express, Rails 8',
        '>> FRONTEND   : React 19, Vue 3.5 (Pinia/PrimeVue), Angular 22, Tailwind v4, Qt 6',
        '>> DATA/INFRA : PostgreSQL 16, MariaDB, Redis 7, Prisma, Hibernate, Podman, Systemd'
      ],
      contact: () => [
        '[@] Email  : pauloessau32@gmail.com',
        '[#] GitHub : https://github.com/Paulob0t',
        '[+] Work   : Full Stack Developer @ WiCode (México)'
      ],
      sand: () => {
        this.onSpawnSand();
        return ['[+] Tetrominó de arena lanzado en sand_physics.exe!'];
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
