import ClassicPdf from "./classic/pdf.astro";
import SidebarPdf from "./sidebar/pdf.astro";
import TimelinePdf from "./timeline/pdf.astro";

export const pdfThemes = {
  classic: ClassicPdf,
  sidebar: SidebarPdf,
  timeline: TimelinePdf,
} as const;

export type ThemeName = keyof typeof pdfThemes;

export function resolvePdfTheme(themeName?: string) {
  const normalized = themeName?.trim().toLowerCase();
  if (normalized && normalized in pdfThemes) {
    return pdfThemes[normalized as ThemeName];
  }
  return pdfThemes.classic;
}
