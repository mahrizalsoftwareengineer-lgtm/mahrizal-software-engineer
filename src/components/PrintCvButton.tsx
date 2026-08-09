"use client";

export function PrintCvButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn btn-primary text-sm"
    >
      Print / Save PDF
    </button>
  );
}
