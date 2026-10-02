import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLanguage = i18n.resolvedLanguage?.split('-')[0] || 'rw';
  const languages = [
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        type="button"
        lang={currentLanguage}
        aria-label={i18n.t('nav.chooseLanguage')}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-10 items-center gap-2 rounded-md px-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Globe2 aria-hidden="true" className="size-4 shrink-0" />
        <span>{languages.find(({ code }) => code === currentLanguage)?.name || 'Kinyarwanda'}</span>
        <ChevronDown
          aria-hidden="true"
          className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          id="language-menu"
          role="menu"
          aria-label={i18n.t('nav.chooseLanguage')}
          className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-48 overflow-hidden rounded-md border border-slate-200 bg-white py-1 text-slate-800 shadow-xl"
        >
          {languages.map(({ code, name }) => (
            <button
              key={code}
              type="button"
              lang={code}
              role="menuitemradio"
              aria-checked={currentLanguage === code}
              onClick={() => {
                i18n.changeLanguage(code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none ${
                currentLanguage === code ? 'font-semibold text-blue-800' : 'text-slate-700'
              }`}
            >
              <span>{name}</span>
              <span className="text-xs uppercase text-slate-500">{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
