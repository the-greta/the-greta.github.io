import React from "react";

import styles from "./section-header.module.css";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} {...props} className={styles["section-header"]} />
));
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => <h2 ref={ref} {...props} className={styles.title} />);
SectionTitle.displayName = "SectionTitle";

const SectionDesc = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ ...props }, ref) => <p ref={ref} {...props} className={styles.desc} />);
SectionDesc.displayName = "SectionDesc";

export { SectionDesc, SectionHeader, SectionTitle };
