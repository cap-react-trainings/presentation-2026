import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  /**
   * The isMain attributes toggles between the main
   * page styling (Cap spade background and
   * white font) and the normal, basic page styling
   * (white background, black font).
   */
  isMain?: boolean;
  dataAutoAnimate?: boolean;
  id?: string;
}

const Slide: React.FC<SlideProps> = (props: SlideProps) => {
  return (
    <section
      data-background-image={props.isMain ? import.meta.env.BASE_URL + '/bg1.svg' : undefined}
      data-background-transition={props.isMain ? 'slide' : undefined}
      // @ts-expect-error not assignable to css props
      style={props.isMain ? { '--r-heading-color': 'white', color: 'white' } : {}}
      data-auto-animate={props.dataAutoAnimate}
      id={props.id || ''}
      {...props}
    >
      {props.children}
    </section>
  );
};

export default Slide;
