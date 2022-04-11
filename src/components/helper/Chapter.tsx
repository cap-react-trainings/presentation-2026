import React, { ReactNode } from 'react';
import Slide from '../../components/reveal/Slide';

export interface GenericChapterProps {
  title: string;
  index: number;
}

interface ChapterProps extends GenericChapterProps {
  subtitle?: ReactNode;
  children: ReactNode;
}

const Chapter: React.FC<ChapterProps> = (props: ChapterProps) => {
  return (
    <Slide id={'chapter' + props.index}>
      <Slide isMain>
        <h2>{`${props.index}. ${props.title}`}</h2>
        {props.subtitle}
      </Slide>
      {props.children}
    </Slide>
  );
};

export default Chapter;
