'use client';

import React, { useMemo } from 'react';

export default function HeroBackground() {
  const { lines, nodes } = useMemo(() => {
    const w = 1200;
    const h = 700;
    const nodeList: { x: number; y: number }[] = [];
    const cols = 8;
    const rows = 5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodeList.push({
          x: (c / (cols - 1)) * w + (r % 2 ? 40 : 0),
          y: (r / (rows - 1)) * h,
        });
      }
    }

    const lineList: { x1: number; y1: number; x2: number; y2: number }[] = [];
    nodeList.forEach((n, i) => {
      nodeList.forEach((m, j) => {
        if (j <= i) return;
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        if (Math.sqrt(dx * dx + dy * dy) < 190) {
          lineList.push({ x1: n.x, y1: n.y, x2: m.x, y2: m.y });
        }
      });
    });

    return { lines: lineList, nodes: nodeList };
  }, []);

  return (
    <div className="hero-bg" id="heroBg">
      <svg
        viewBox="0 0 1200 700"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {lines.map((l, idx) => (
          <line
            key={idx}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, idx) => (
          <circle
            key={idx}
            cx={n.x}
            cy={n.y}
            r="2.4"
            fill="var(--accent)"
            opacity="0.55"
          />
        ))}
      </svg>
    </div>
  );
}
