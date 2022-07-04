import { useState } from 'react';
import { AddCategory, GifGrid, NoSearchs } from './components/';

const GiftExpert = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if ( categories.includes( newCategory ) ) return;
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory onNewCategory={ event => onAddCategory(event) } />
      {
        categories.length > 0 ? ( categories.map( category => <GifGrid key={ category } category={ category } /> ) ) : ( <NoSearchs /> )
      }
    </>
  )
}

export default GiftExpert;