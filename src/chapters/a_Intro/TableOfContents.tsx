import React from 'react';
import Slide from '../../components/reveal/Slide';

interface TableOfContentsProps {
  chapter: {
    title: string;
  }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = (props: TableOfContentsProps) => {
  return (
    <Slide isMain>
      <h2>Table of Contents</h2>
      <ol>
        {props.chapter.map((chapter, index) => (
          <li key={index}>
            <a href={`#/chapter${index + 1}`} style={{ color: 'white' }}>
              {chapter.title}
            </a>
          </li>
        ))}
      </ol>
    </Slide>
  );
};

export default TableOfContents;
