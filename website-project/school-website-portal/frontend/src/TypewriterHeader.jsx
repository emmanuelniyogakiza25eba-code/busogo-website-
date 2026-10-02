import { useEffect, useState } from 'react';

export default function TypewriterHeader({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let characterIndex = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      if (!isDeleting && characterIndex < text.length) {
        characterIndex += 1;
        setDisplayedText(text.slice(0, characterIndex));
        timer = window.setTimeout(tick, 60);
        return;
      }

      if (!isDeleting) {
        isDeleting = true;
        timer = window.setTimeout(tick, 2500);
        return;
      }

      if (characterIndex > 0) {
        characterIndex -= 1;
        setDisplayedText(text.slice(0, characterIndex));
        timer = window.setTimeout(tick, 30);
        return;
      }

      timer = window.setTimeout(() => {
        isDeleting = false;
        tick();
      }, 500);
    };

    timer = window.setTimeout(tick, 60);
    return () => window.clearTimeout(timer);
  }, [text]);

  return (
    <h1 className="hero-title" aria-label={text}>
      <span aria-hidden="true">{displayedText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </h1>
  );
}
