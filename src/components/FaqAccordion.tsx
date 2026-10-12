'use client';

import { useState } from 'react';
import { faqs, FaqItem } from '@/lib/data';

interface FaqAccordionProps {
  items?: FaqItem[];
}

export default function FaqAccordion({ items = faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-list" id="faqList">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-q"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="plus" />
            </button>
            <div
              className="faq-a"
              style={{
                maxHeight: isOpen ? '300px' : '0px',
                transition: 'max-height 0.35s ease',
                overflow: 'hidden',
              }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
