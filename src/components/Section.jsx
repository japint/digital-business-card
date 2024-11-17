import React from "react";

const Section = ({ title, content }) => {
  return (
    <>
      <h1 className="about--title">{title}</h1>
      <p className="about--content">{content}</p>
    </>
  );
};

export default Section;
