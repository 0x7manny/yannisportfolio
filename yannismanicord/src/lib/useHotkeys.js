import { useEffect } from "react";

/**
 * Simple hotkeys:
 * - ignores input/textarea/contentEditable
 * - supports single keys like "g", "l", "t", "?"
 */
export function useHotkeys(map) {
  useEffect(() => {
    function onKeyDown(e) {
      const target = e.target;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (isTyping) return;

      const key = (e.key || "").toLowerCase();

      // "?" comes as "/" with shift on some keyboards, but e.key is "?" in most browsers.
      const handler = map[key];
      if (!handler) return;

      e.preventDefault();
      handler();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [map]);
}
