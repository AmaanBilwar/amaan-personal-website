"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type KeyDef = {
  id: string;
  label: string;
  layerLabel?: string;
  width?: number;
  muted?: boolean;
  /** Tab — hold to activate the nav / arrow layer. */
  layerHold?: boolean;
};

/** Matches ~/.config/kanata/config.kbd `deflayer nav` — IJKL as arrows. */
const ROWS: KeyDef[][] = [
  [
    { id: "tab", label: "tab", muted: true, layerHold: true },
    { id: "q", label: "Q" },
    { id: "w", label: "W" },
    { id: "e", label: "E" },
    { id: "r", label: "R" },
    { id: "t", label: "T" },
    { id: "y", label: "Y" },
    { id: "u", label: "U" },
    { id: "i", label: "I", layerLabel: "↑" },
    { id: "o", label: "O", layerLabel: "`" },
    { id: "p", label: "P" },
    { id: "bsp", label: "bsp", width: 1.5, muted: true },
  ],
  [
    { id: "ctrl", label: "ctrl", width: 1.25, muted: true },
    { id: "a", label: "A" },
    { id: "s", label: "S" },
    { id: "d", label: "D" },
    { id: "f", label: "F" },
    { id: "g", label: "G" },
    { id: "h", label: "H", layerLabel: "BSP" },
    { id: "j", label: "J", layerLabel: "←" },
    { id: "k", label: "K", layerLabel: "↓" },
    { id: "l", label: "L", layerLabel: "→" },
    { id: "semi", label: ";" },
    { id: "quote", label: "'", width: 1.25 },
  ],
  [
    { id: "shift", label: "shift", width: 1.5, muted: true },
    { id: "z", label: "Z" },
    { id: "x", label: "X" },
    { id: "c", label: "C" },
    { id: "v", label: "V" },
    { id: "b", label: "B" },
    { id: "n", label: "N" },
    { id: "m", label: "M" },
    { id: "comma", label: "," },
    { id: "dot", label: "." },
    { id: "slash", label: "/" },
    { id: "ent", label: "shift", muted: true },
  ],
  [
    { id: "esc-l", label: "esc", width: 1.25, muted: true },
    { id: "meta", label: "meta", width: 1.25, muted: true },
    { id: "lalt", label: "alt", width: 1.25, muted: true },
    { id: "space", label: "space", width: 6.25, muted: true },
    { id: "enter", label: "enter", width: 1.25, muted: true },
    { id: "esc-r", label: "esc", width: 1.25, muted: true },
  ],
];

function Key({
  keyDef,
  layerActive,
  onLayerHoldChange,
}: {
  keyDef: KeyDef;
  layerActive: boolean;
  onLayerHoldChange: (held: boolean) => void;
}) {
  const { label, layerLabel, width = 1, muted, layerHold } = keyDef;
  const showingLayer = layerActive && layerLabel != null;
  const display = showingLayer ? layerLabel : label;

  const baseClass = [
    "flex h-10 select-none items-center justify-center rounded-[0.35rem] border font-sans text-[0.65rem] font-medium tracking-wide sm:h-12 sm:text-xs md:h-14 md:text-sm",
    showingLayer ? "normal-case" : "uppercase",
  ].join(" ");

  if (layerHold) {
    return (
      <button
        type="button"
        data-tab-layer-control="true"
        aria-label="Hold for arrow keys"
        aria-pressed={layerActive}
        onPointerDown={(e) => {
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          onLayerHoldChange(true);
        }}
        onPointerUp={() => onLayerHoldChange(false)}
        onPointerCancel={() => onLayerHoldChange(false)}
        onLostPointerCapture={() => onLayerHoldChange(false)}
        className={[
          baseClass,
          "cursor-pointer touch-none outline-none transition-colors duration-100",
          layerActive
            ? "border-stone-500 bg-stone-300 text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
            : "border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:text-black",
        ].join(" ")}
        style={{ flex: `${width} 1 0`, minWidth: 0 }}
      >
        <span className="truncate px-0.5">{label}</span>
      </button>
    );
  }

  return (
    <div
      className={[
        baseClass,
        showingLayer
          ? "border-stone-400 bg-stone-200 text-black"
          : muted
            ? "border-stone-200 bg-stone-50 text-stone-400"
            : "border-stone-300 bg-white text-stone-800",
        showingLayer ? "transition-colors duration-100" : "",
      ].join(" ")}
      style={{ flex: `${width} 1 0`, minWidth: 0 }}
      aria-hidden
    >
      <span className="truncate px-0.5">{display}</span>
    </div>
  );
}

export default function ArrowKeysKeyboard() {
  const [pointerHeld, setPointerHeld] = useState(false);
  const [keyboardHeld, setKeyboardHeld] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const figureRef = useRef<HTMLElement | null>(null);
  const layerActive = pointerHeld || keyboardHeld;

  const setHeld = useCallback((held: boolean) => {
    setPointerHeld(held);
  }, []);

  // Physical Tab while hovering the board.
  useEffect(() => {
    if (!pointerOver) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Tab" || e.repeat) return;

      const activeElement = document.activeElement;
      if (!(activeElement instanceof HTMLElement)) return;

      const insideDemo = figureRef.current?.contains(activeElement) ?? false;
      const onLayerControl = activeElement.matches(
        "[data-tab-layer-control='true']",
      );
      if (!insideDemo || !onLayerControl) return;

      e.preventDefault();
      setKeyboardHeld(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pointerOver]);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Tab") setKeyboardHeld(false);
    };
    const onBlur = () => {
      setKeyboardHeld(false);
      setPointerHeld(false);
    };

    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <figure
      ref={figureRef}
      className="my-8"
      onPointerEnter={() => setPointerOver(true)}
      onPointerLeave={() => setPointerOver(false)}
    >
      <div
        className={[
          "flex w-full flex-col gap-1.5 rounded-xl border bg-stone-50 p-3 sm:gap-2 sm:p-4",
          layerActive ? "border-stone-400" : "border-stone-200",
        ].join(" ")}
        role="group"
        aria-label="Keyboard with holdable tab for arrow keys"
      >
        {ROWS.map((row, i) => (
          <div key={i} className="flex w-full gap-1.5 sm:gap-2">
            {row.map((keyDef) => (
              <Key
                key={keyDef.id}
                keyDef={keyDef}
                layerActive={layerActive}
                onLayerHoldChange={setHeld}
              />
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center font-serif text-sm italic text-stone-500">
        {layerActive
          ? "nav layer — I J K L become arrows"
          : "hold tab (on the board, or your keyboard while hovering)"}
      </figcaption>
    </figure>
  );
}
