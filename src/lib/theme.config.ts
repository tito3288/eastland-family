export const theme = {
  colors: {
    navy: "#023a66",
    blue: "#0f7fd3",
    air: "#e4f4fe",
    porcelain: "#fffdf8",
    sand: "#efe6d7",
    eucalyptus: "#7d9a94",
    powder: "#edf3f6",
    white: "#ffffff",
    body: "#475569",
    caption: "#64748b",
    primary: "#023a66",
    secondary: "#0f7fd3",
    accent: "#efe6d7",
    background: "#fffdf8",
    foreground: "#023a66",
    muted: "#7d9a94",
  },
  fonts: {
    heading: "Georgia, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  radius: {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
    xl: "3.5rem",
    "4xl": "2rem",
    "5xl": "3rem",
    "6xl": "3.5rem",
  },
} as const;

export type Theme = typeof theme;
