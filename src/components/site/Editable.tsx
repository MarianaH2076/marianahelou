import { Fragment } from "react";

/**
 * Renders text, highlighting any [bracketed placeholder] so it is obvious
 * which content still needs to be filled in.
 */
export function Editable({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="placeholder-mark" title="Conteúdo a preencher">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
