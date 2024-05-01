import { useState } from 'react';
import { IWord } from './../types';

interface Props {
  word: IWord;
}
function Word({ word }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='word'>
      <button
        className='word-header'
        onClick={() => setExpanded(!expanded)}>
        <h3>{word.word}</h3>
        {word.onomatopoeia.length > 0 && (
          <div className='word-onomatopoeia'>
            {word.onomatopoeia.map((sound, index) => (
              <>
                <span key={index}>{sound},</span>{' '}
              </>
            ))}
          </div>
        )}
      </button>
      {expanded && <>{word.description && <p>{word.description}</p>}</>}
    </div>
  );
}

export default Word;
