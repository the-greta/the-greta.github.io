import React from "react";

import styles from "./section-header.module.css";

interface SectionDescType extends React.HTMLAttributes<HTMLParagraphElement> {
  theme?: string;
}
interface SectionTitleType extends React.HTMLAttributes<HTMLHeadingElement> {
  theme?: string;
}

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} {...props} className={styles["section-header"]} />
));
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleType>(
  ({ theme, ...props }, ref) => {
    const styleClassName = [
      styles.title,
      theme == "dark" && styles["title-dark"],
    ].join(" ");
    return <h2 ref={ref} {...props} className={styleClassName} />;
  }
);
SectionTitle.displayName = "SectionTitle";

const SectionDesc = React.forwardRef<HTMLParagraphElement, SectionDescType>(
  ({ theme, ...props }, ref) => {
    const styleClassName = [
      styles.desc,
      theme == "dark" && styles["desc-dark"],
    ].join(" ");
    return <p ref={ref} {...props} className={styleClassName} />;
  }
);
SectionDesc.displayName = "SectionDesc";

export { SectionDesc, SectionHeader, SectionTitle };
