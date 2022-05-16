import React, { useState } from "react";
import "../Frequentlyasked/faq.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactUs from "../../Components/ContactUs/contactus";
import CustomPopup from "../../Components/Popup/CustomPopup";

const Faq = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <>
      <div className="Faq">
        <div className="header">
          <h1>Frequently Asked Questions</h1>
        </div>

        <CustomPopup onClose={popupCloseHandler} show={visibility}>
          <ContactUs />
        </CustomPopup>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="button">
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="button">
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion className="accordion">
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton className="button">
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <div className="ask" onClick={(e) => setVisibility(!visibility)}>
          Ask your question now
        </div>
      </div>
    </>
  );
};

export default Faq;
