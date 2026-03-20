const INTRO_HEADLINE_TEXT =
  "A lost tropical island, teeming with dinosaurs, becomes the epicenter of the adventure";

export function IntroHeadline() {
  const words = INTRO_HEADLINE_TEXT.split(" ");

  return (
    <h2 id="intro-headline" className="intro-headline">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="intro-word">
            {[...word].map((char, charIndex) => (
              <span key={`${char}-${charIndex}`} className="intro-char">
                {char}
              </span>
            ))}
          </span>
          {index < words.length - 1 && <span className="intro-space">&nbsp;</span>}
        </span>
      ))}
    </h2>
  );
}