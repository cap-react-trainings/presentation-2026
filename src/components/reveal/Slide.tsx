import React, { ReactNode } from "react";

interface SlideProps {
    children: ReactNode;
    isMain?: boolean;
}

const Slide: React.FC<SlideProps> = (props: SlideProps) => {
    return (
        <section
            data-background-image={props.isMain ? "/bg1.svg" : undefined}
            // @ts-expect-error
            style={props.isMain ? { "--r-heading-color": "white", color: "white" } : {}}
        >
            {props.children}
        </section>
    );
};

export default Slide;
