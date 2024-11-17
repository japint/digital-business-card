import React from "react";
import Section from "./Section";

const Main = ({ name, title, website, sections, buttons }) => {
  return (
    <main>
      <div className="main--info">
        <h1 className="main--name">{name}</h1>
        <h2 className="main--title">{title}</h2>
        <h3 className="main--website">{website}</h3>
        <div className="main--contact">
          {buttons.map((button, index) => (
            <button key={index} onClick={button.onClick}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <div className="about">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </main>
  );
};

export default Main;
