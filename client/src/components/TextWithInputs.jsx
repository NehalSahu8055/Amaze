import React, { useState } from "react";

export default function TextWithInputs({ text }) {
  const [editedText, setEditedText] = useState(text);

  const handlePlaceholderClick = (index) => {
    setEditedText((prevText) => {
      const before = prevText.substring(0, index);
      const after = prevText.substring(index + 7); // Assuming {#var#} is always 7 characters
      return `${before}<input type="text" />${after}`;
    });
  };

  const renderTextWithInputs = () => {
    const parts = editedText.split("{#var#}");

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <input
            type="text"
            onChange={(e) => {
              const updatedText =
                parts.slice(0, index + 1).join("{#var#}") +
                "{#var#}" +
                e.target.value +
                parts.slice(index + 2).join("{#var#}");
              setEditedText(updatedText);
            }}
          />
        )}
      </React.Fragment>
    ));
  };

  return <div>{renderTextWithInputs()}</div>;
}
