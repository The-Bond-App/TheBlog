import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { categories } from '../constants/categories';

const primaryCategories = categories.slice(0, 4);
const secondaryCategories = categories.slice(4);

export default function Sitemap({ onClose, onSelectCategory }) {
  const modalRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Click outside to close (backdrop click)
  function handleBackdropClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose?.();
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onMouseDown={handleBackdropClick} // use mousedown so it closes before focus moves
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sitemap-title"
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-stone-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
          <h2 id="sitemap-title" className="text-2xl font-semibold text-stone-900">
            All Categories
          </h2>
          <button
            onClick={() => onClose?.()}
            aria-label="Close sitemap"
            className="p-2 hover:bg-stone-100 hover:cursor-pointer rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Categories */}
            <div>
              <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
                Main Topics
              </h3>
              <div className="space-y-3">
                {primaryCategories.map((cat) => (
                  <button
                    key={cat.uuid}
                    onClick={() => onSelectCategory?.(cat.uuid)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors">
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-stone-600 group-hover:text-black">
                          {cat.name}
                        </div>
                        <div className="text-sm text-stone-500 mt-1">{cat.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary Categories */}
            <div>
              <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
                More Topics
              </h3>
              <div className="space-y-3">
                {secondaryCategories.map((cat) => (
                  <button
                    key={cat.uuid}
                    onClick={() => onSelectCategory?.(cat.uuid)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors">
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-stone-600 group-hover:text-black">
                          {cat.name}
                        </div>
                        <div className="text-sm text-stone-500 mt-1">{cat.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Pages Section */}
          <div className="mt-8 pt-8 border-t border-stone-200">
            <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <a
                href="#subscribe"
                className="block p-3 rounded-lg hover:bg-stone-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#subscribe');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    onClose?.();
                  }
                }}
              >
                <div className="text-sm font-medium text-stone-900">Newsletter</div>
                <div className="text-sm text-stone-500 mt-0.5">Weekly insights in your inbox</div>
              </a>

              <a
                href="https://instagram.com/thebondcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg hover:bg-stone-50 transition-colors"
              >
                <div className="text-sm font-medium text-stone-900">Community</div>
                <div className="text-sm text-stone-500 mt-0.5">Join the bond community</div>
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-8 border-t border-stone-200">
            <p className="text-sm text-stone-500 text-center">Pick a path. Stay with intention.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
