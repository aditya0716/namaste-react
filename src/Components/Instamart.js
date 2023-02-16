import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="cursor-pointer underline"
      >
        {!isVisible ? "Show" : "Hide"}
      </button>
      {isVisible && <p>{description} </p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
      <Section
        title="About Instamart"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(isVisible) =>
          isVisible ? setVisibleSection("about") : setVisibleSection("")
        }
      />
      <Section
        title="Team Instamart"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(isVisible) =>
          isVisible ? setVisibleSection("team") : setVisibleSection("")
        }
      />
      <Section
        title="Career"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(isVisible) =>
          isVisible ? setVisibleSection("career") : setVisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;
