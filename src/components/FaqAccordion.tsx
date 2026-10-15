'use client';

import { useState } from 'react';
import { faqs, FaqItem } from '@/lib/data';

interface FaqAccordionProps {
  items?: FaqItem[];
}

export default function FaqAccordion({ items = faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`} data-reveal="up" style={{ ['--d' as string]: idx * 70 }}>
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-a-${idx}`}
              id={`faq-q-${idx}`}
            >
              <span>{item.q}</span>
              <span className="plus" aria-hidden="true" />
            </button>
            <div className="faq-a" id={`faq-a-${idx}`} role="region" aria-labelledby={`faq-q-${idx}`}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
