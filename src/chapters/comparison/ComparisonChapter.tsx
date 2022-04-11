import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const ComparisonChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props}>
      <Slide>
        <h2>tbd</h2>
        <p>tbd</p>
        <aside className='notes'>
          Really use with care! Just if many components need all of the data. Resuability gets more difficult.
        </aside>
      </Slide>
    </Chapter>
  );
};

export default ComparisonChapter;
