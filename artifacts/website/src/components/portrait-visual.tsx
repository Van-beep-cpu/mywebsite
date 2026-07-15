import React from "react";
import { LinePattern } from "./line-pattern";

export function PortraitVisual({ label = "Vanessa Truong" }: { label?: string }) {
  return (
    <div className="portrait-wrap" aria-label={label}>
      <LinePattern className="portrait-lines" />
      <div className="portrait-circle">
        <div className="portrait-initials">VT</div>
        <p>Portrait</p>
      </div>
    </div>
  );
}
