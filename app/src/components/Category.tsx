import { useState } from 'react';
import Word from './Word';

interface Props {
  category: any;
}

function Category({ category }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='category'>
      <button
        className='category-header'
        onClick={() => setExpanded(!expanded)}>
        <h2>{category.category}</h2>
        <span>{expanded ? '-' : '+'}</span>
      </button>

      {expanded && (
        <div className='category-child'>
          {category.description && <p>{category.description}</p>}
          {category.children.map((child: any, index: number) => (
            <div key={index}>
              {child.word ? (
                <Word word={child} />
              ) : (
                <Category category={child} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
