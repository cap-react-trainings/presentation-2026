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
  const chapterTitle = `${props.index}. ${props.title}`;
  return (
    <Slide id={'chapter' + props.index}>
      {/* Chapter title that is shown on all slides */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          color: '#0070ad',
          opacity: 0.5,
          fontSize: '1rem'
        }}
      >
        {chapterTitle}
      </div>
      {/* First slide in chapter */}
      <Slide isMain>
        <h2>{chapterTitle}</h2>
        {props.subtitle}
      </Slide>
      {/* All other chapter slides */}
      {props.children}
    </Slide>
  );
};

export default Chapter;
