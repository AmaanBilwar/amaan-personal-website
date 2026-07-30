"use client";

import { useCallback, useEffect, useState } from "react";

type KeyDef = {
  id: string;
  label: string;
  layerLabel?: string;
  width?: number;
  muted?: boolean;
  /** Left Alt — hold to activate the lower layer. */
  layerHold?: boolean;
};

/** Matches ~/.config/kanata/config.kbd `deflayer lower`. */
const ROWS: KeyDef[][] = [
  [
    { id: "tab", label: "tab", muted: true },
    { id: "q", label: "Q", layerLabel: "1" },
    { id: "w", label: "W", layerLabel: "2" },
    { id: "e", label: "E", layerLabel: "3" },
    { id: "r", label: "R", layerLabel: "4" },
    { id: "t", label: "T", layerLabel: "5" },
    { id: "y", label: "Y", layerLabel: "6" },
    { id: "u", label: "U", layerLabel: "7" },
    { id: "i", label: "I", layerLabel: "8" },
    { id: "o", label: "O", layerLabel: "9" },
    { id: "p", label: "P", layerLabel: "0" },
    { id: "bsp", label: "bsp", width: 1.5, muted: true },
  ],
  [
    { id: "ctrl", label: "ctrl", width: 1.25, muted: true },
    { id: "a", label: "A", layerLabel: "!" },
    { id: "s", label: "S", layerLabel: "@" },
    { id: "d", label: "D", layerLabel: "#" },
    { id: "f", label: "F", layerLabel: "$" },
    { id: "g", label: "G", layerLabel: "%" },
    { id: "h", label: "H", layerLabel: "^" },
    { id: "j", label: "J", layerLabel: "&" },
    { id: "k", label: "K", layerLabel: "*" },
    { id: "l", label: "L", layerLabel: "(" },
    { id: "semi", label: ";", layerLabel: ")" },
    { id: "quote", label: "'", layerLabel: "\\", width: 1.25 },
  ],
  [
    { id: "shift", label: "shift", width: 1.5, muted: true },
    { id: "z", label: "Z", layerLabel: "<" },
    { id: "x", label: "X", layerLabel: ">" },
    { id: "c", label: "C", layerLabel: "=" },
    { id: "v", label: "V", layerLabel: "-" },
    { id: "b", label: "B", layerLabel: "_" },
    { id: "n", label: "N", layerLabel: "+" },
    { id: "m", label: "M", layerLabel: "{" },
    { id: "comma", label: ",", layerLabel: "}" },
    { id: "dot", label: ".", layerLabel: "[" },
    { id: "slash", label: "/", layerLabel: "]" },
    { id: "ent", label: "shift", muted: true },
  ],
  [
    { id: "esc-l", label: "esc", width: 1.25, muted: true },
    { id: "meta", label: "meta", width: 1.25, muted: true },
    { id: "lalt", label: "alt", width: 1.25, muted: true, layerHold: true },
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
        aria-label="Hold for lower layer"
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

export default function LowerLayerKeyboard() {
  const [pointerHeld, setPointerHeld] = useState(false);
  const [keyboardHeld, setKeyboardHeld] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const layerActive = pointerHeld || keyboardHeld;

  const setHeld = useCallback((held: boolean) => {
    setPointerHeld(held);
  }, []);

  // Physical Left Alt while hovering the board (matches the post copy).
  useEffect(() => {
    if (!pointerOver) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "AltLeft" || e.repeat) return;
      e.preventDefault();
      setKeyboardHeld(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pointerOver]);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "AltLeft") setKeyboardHeld(false);
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
        aria-label="Keyboard with holdable left alt for the lower layer"
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
          ? "lower layer — numbers and symbols"
          : "hold left alt (on the board, or your keyboard while hovering)"}
      </figcaption>
    </figure>
  );
}
