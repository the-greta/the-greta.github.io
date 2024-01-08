import React from "react";

import PageTitle from "@/app/about/_components/page-title/page-title";
import { FAQ_LIST } from "@/app/solutions/faq/_const/const";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";

import styles from "./page.module.css";

const FAQPage = () => {
  return (
    <section className={styles.container}>
      <div>
        <PageTitle title="FAQ" desc="자주 묻는 질문" />

        <div className={styles.content}>
          <div>
            {/* <h3>제공 서비스</h3> */}
            <Accordion type="multiple">
              {FAQ_LIST.map((faq, si) => (
                <AccordionItem key={si} value={`${si}`}>
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent>{faq.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
