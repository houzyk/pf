import React from "react";

const RenderTechText = (accordionTechParagraph: string[]) => {
  return (
    <>
      {
        accordionTechParagraph.map((tech, index) => (
          <React.Fragment key={index}>
            {`  ${tech}  `}
            { index < accordionTechParagraph.length - 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={10} width={10} className="tech-paragraph-bullet" aria-hidden={true}>
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/>
              </svg>
            )}
          </React.Fragment>
        ))
      }
    </>
  );
}

export { RenderTechText };