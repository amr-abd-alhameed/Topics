// "use client";// import React from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// export function AccordionS() {
//   //   const [open, setOpen] = React.useState(1);

//   //   const handleOpen = (value) => setOpen(open === value ? 0 : value);
//   const [open, setOpen] = React.useState(0);
//   const [alwaysOpen, setAlwaysOpen] = React.useState(true);

//   const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
//   const handleOpen = (value) => setOpen(open === value ? 0 : value);

//   return (
//     <>
//       <Accordion open={alwaysOpen}>
//         <AccordionHeader className="text-2xl" onClick={() => handleOpen(1)}>
//           What is topics listing?
//         </AccordionHeader>
//         <AccordionBody className="text-lg text-p-color">
//           Topic Listing is free Bootstrap 5 CSS template. You are not allowed to
//           redistribute this <span className="font-normal">template </span>on any
//           other template collection website without our permission. Please
//           contact TemplateMo for more detail. Thank you.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 2}>
//         <AccordionHeader className="text-2xl" onClick={() => handleOpen(2)}>
//           How to find a topics?
//         </AccordionHeader>
//         <AccordionBody className="text-lg text-p-color">
//           You can search on Google with keywords such as templatemo portfolio,
//           templatemo one-page layouts, photography, digital marketing, etc.ur
//           dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 3}>
//         <AccordionHeader className="text-2xl" onClick={() => handleOpen(3)}>
//           Does it need a paid?
//         </AccordionHeader>
//         <AccordionBody className="text-lg text-p-color">
//           You can modify any of this with custom CSS or overriding our default
//           variables. It's also worth noting that just about any HTML can go
//           within the .accordion-body, though the transition does limit overflow.
//           dreams.
//         </AccordionBody>
//       </Accordion>
//     </>
//   );
// }
