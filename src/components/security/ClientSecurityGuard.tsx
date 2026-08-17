import { useEffect } from "react";

const EDITABLE = new Set(["INPUT", "TEXTAREA", "SELECT"]);

function isEditable(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el || !el.tagName) return false;
  return EDITABLE.has(el.tagName) || el.isContentEditable;
}

/**
 * Lightweight, non-destructive deterrents against casual inspection.
 * NOTE: frontend code can never be truly hidden — anything shipped to the
 * browser is inspectable. This only discourages casual copying and does not
 * break typing, keyboard navigation, accessibility or text selection.
 */
export function ClientSecurityGuard() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      if (isEditable(e.target)) return;
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.tagName === "IMG") e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditable(e.target)) return;
      const key = e.key.toLowerCase();
      const mod = e.ctrlKey || e.metaKey;
      const devtoolsCombo =
        key === "f12" ||
        (mod && (e.shiftKey || e.altKey) && ["i", "j", "c"].includes(key)) ||
        (mod && !e.shiftKey && !e.altKey && (key === "u" || key === "s"));

      if (devtoolsCombo) e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}