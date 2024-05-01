import { ICategory } from '../types';
import Category from './Category';

interface Props {
  dictionary: any;
}

function Dictionary({ dictionary }: Props) {
  return (
    <div className='dictionary'>
      <h1>Onomatopoeia {dictionary.language} Dictionary</h1>
      {dictionary.description && <p>{dictionary.description}</p>}
      {dictionary.categories.map((category: ICategory, index: number) => (
        <Category
          key={index}
          category={category}
        />
      ))}
    </div>
  );
}

export default Dictionary;
