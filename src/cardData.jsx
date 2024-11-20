import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

export const cardData = {
  name: "Angelo Centeno",
  title: "Frontend Developer",
  website: "apcenteno.website",
  sections: [
    {
      title: "About",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fugit
perferendis aperiam ab dicta velit! Aliquam sint minima labore
eligendi, illum quam natus rem reprehenderit, excepturi perferendis
distinctio!`,
    },
    {
      title: "Interest",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fugit
        perferendis aperiam ab dicta velit! Aliquam sint minima labore
        eligendi.`,
    },
  ],
  buttons: [
    {
      text: "Email",
      icon: <MdEmail />,
      onClick: () => console.log("Email clicked"),
    },
    {
      text: "Linkedin",
      icon: <FaLinkedinIn />,
      onClick: () => console.log("Linkedin clicked"),
    },
  ],
};
