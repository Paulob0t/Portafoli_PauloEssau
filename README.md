# Paulob0t — Pixel-Architect Portfolio

Portafolio de ingeniería y arquitectura de software de **Paulo Essau (Paulob0t)** construido con **TypeScript** y **Vite**, diseñado con estética bitmap pixel-art inspirada en gestores de ventanas tiling (`Hyprland` / `Waybar`) y cuadrículas técnicas.

---

## Arquitectura del Proyecto

```text
paulobot-portfolio/
├── index.html                  # Shell estructural tipo Tiling WM
├── package.json                # Scripts de desarrollo y compilación (Vite + TypeScript)
├── tsconfig.json               # Configuración estricta de TypeScript (ES2022)
├── vite.config.ts              # Configuración de bundler con rutas relativas
└── src/
    ├── main.ts                 # Punto de entrada, renderizado tipado y eventos UI
    ├── style.css               # Sistema de diseño Pixel-Art con 3 temas (Phosphor, Amber, Paper)
    ├── types.ts                # Contratos e interfaces TypeScript
    ├── data/
    │   └── projects.ts         # Catálogo tipado de proyectos y diagramas de arquitectura
    ├── engine/
    │   └── sandPhysics.ts      # Simulador de autómatas celulares Sand-Tetris en Canvas 2D
    └── terminal/
        └── shell.ts            # Emulador interactivo de consola (neofetch, projects, stack, etc.)
```

---

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar para producción (verifica tipos con tsc + empaqueta en dist/)
npm run build
```
