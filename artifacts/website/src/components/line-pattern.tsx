import React from "react";

export function LinePattern({ className = "" }: { className?: string }) {
  const paths = Array.from({ length: 16 }, (_, index) => {
    const offset = index * 28;
    return `M ${40 + offset} 520 C ${180 + offset * 0.4} ${300 - index * 8}, ${260 + offset * 0.7} ${130 - index * 3}, ${560 + offset} -40`;
  });

  return (
    <svg
      className={`line-pattern ${className}`}
      viewBox="0 0 980 620"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth="0.75" />
      ))}
    </svg>
  );
}
