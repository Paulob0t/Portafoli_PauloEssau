/**
 * Cellular Automata Sand-Tetris Simulation Engine in TypeScript
 * Inspired by Paulob0t's C++20 / Qt6 Sand-Tetris project.
 */
export class SandPhysicsEngine {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly width: number;
  private readonly height: number;
  private grid: (string | null)[];
  private isPointerDown = false;
  private pointerColor = '#00f59b';

  private readonly palette: readonly string[] = [
    '#00f59b', // Phosphor Mint
    '#ffb000', // Amber Gold
    '#38bdf8', // Cyan Pixel
    '#f43f5e', // Coral Red
    '#a855f7', // Retro Purple
    '#facc15'  // Arcade Yellow
  ];

  private readonly tetrominoes: readonly number[][][] = [
    // T-piece
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // L-piece
    [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    // Z-piece
    [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // O-piece
    [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // I-piece
    [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not initialize 2D context for SandPhysicsEngine');
    }
    this.ctx = context;
    this.width = canvas.width;
    this.height = canvas.height;
    this.grid = new Array<string | null>(this.width * this.height).fill(null);

    this.bindEvents();
  }

  public start(): void {
    this.spawnTetromino(25);
    window.setTimeout(() => this.spawnTetromino(55), 700);
    window.setTimeout(() => this.spawnTetromino(80), 1400);

    window.setInterval(() => {
      let occupiedTop = 0;
      for (let x = 0; x < this.width; x++) {
        if (this.grid[15 * this.width + x]) occupiedTop++;
      }
      if (occupiedTop < this.width * 0.4) {
        this.spawnTetromino();
      }
    }, 4500);

    const loop = (): void => {
      this.step();
      this.render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  public clear(): void {
    this.grid.fill(null);
    this.spawnTetromino();
  }

  public spawnTetromino(customX?: number): void {
    const shape = this.tetrominoes[Math.floor(Math.random() * this.tetrominoes.length)];
    const color = this.palette[Math.floor(Math.random() * this.palette.length)];
    const cellSize = 6;
    const startX =
      customX !== undefined
        ? Math.max(4, Math.min(this.width - 28, customX - 10))
        : Math.floor(Math.random() * (this.width - 32)) + 6;
    const startY = 4;

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (shape[r][c]) {
          for (let dy = 0; dy < cellSize; dy++) {
            for (let dx = 0; dx < cellSize; dx++) {
              const px = startX + c * cellSize + dx;
              const py = startY + r * cellSize + dy;
              if (px >= 0 && px < this.width && py >= 0 && py < this.height) {
                this.grid[py * this.width + px] = color;
              }
            }
          }
        }
      }
    }
  }

  private bindEvents(): void {
    const pourAtPoint = (clientX: number, clientY: number): void => {
      const rect = this.canvas.getBoundingClientRect();
      const x = Math.floor(((clientX - rect.left) / rect.width) * this.width);
      const y = Math.floor(((clientY - rect.top) / rect.height) * this.height);

      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          if (Math.random() < 0.75) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
              this.grid[ny * this.width + nx] = this.pointerColor;
            }
          }
        }
      }
    };

    this.canvas.addEventListener('mousedown', (e: MouseEvent) => {
      this.isPointerDown = true;
      this.pointerColor = this.palette[Math.floor(Math.random() * this.palette.length)];
      pourAtPoint(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      this.isPointerDown = false;
    });

    this.canvas.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isPointerDown) {
        pourAtPoint(e.clientX, e.clientY);
      }
    });

    this.canvas.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        if (e.touches.length > 0) {
          this.isPointerDown = true;
          this.pointerColor = this.palette[Math.floor(Math.random() * this.palette.length)];
          pourAtPoint(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    this.canvas.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        if (this.isPointerDown && e.touches.length > 0) {
          pourAtPoint(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true }
    );
  }

  private step(): void {
    const W = this.width;
    const H = this.height;

    for (let y = H - 2; y >= 0; y--) {
      const leftToRight = y % 2 === 0;
      for (let i = 0; i < W; i++) {
        const x = leftToRight ? i : W - 1 - i;
        const idx = y * W + x;
        const color = this.grid[idx];
        if (!color) continue;

        const belowIdx = (y + 1) * W + x;
        if (!this.grid[belowIdx]) {
          this.grid[belowIdx] = color;
          this.grid[idx] = null;
        } else {
          const dir1 = Math.random() < 0.5 ? -1 : 1;
          const dir2 = -dir1;
          const nx1 = x + dir1;
          const nx2 = x + dir2;

          if (nx1 >= 0 && nx1 < W && !this.grid[(y + 1) * W + nx1]) {
            this.grid[(y + 1) * W + nx1] = color;
            this.grid[idx] = null;
          } else if (nx2 >= 0 && nx2 < W && !this.grid[(y + 1) * W + nx2]) {
            this.grid[(y + 1) * W + nx2] = color;
            this.grid[idx] = null;
          }
        }
      }
    }
  }

  private render(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const color = this.grid[y * this.width + x];
        if (color) {
          this.ctx.fillStyle = color;
          this.ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }
}
