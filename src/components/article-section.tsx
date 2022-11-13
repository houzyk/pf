import React from "react";
import { SectionHOC } from "./hoc";

interface ArticleSectionsPropsInterface {
  sectionTitle?: string;
}

const ArticleSection: React.FunctionComponent<ArticleSectionsPropsInterface> = ({
  sectionTitle
}) => {

  return (
    <SectionHOC 
      className="articles"
      sectionTitle={sectionTitle || ''}
    >
    </SectionHOC>
  );
}

export type { ArticleSectionsPropsInterface };
export default ArticleSection;
