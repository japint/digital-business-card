import React from "react";

const Section = ({ title, content }) => {
  return (
    <>
      <h2 className="about--title">{title}</h2>
      <p className="about--content">{content}</p>
    </>
  );
};

export default Section;
