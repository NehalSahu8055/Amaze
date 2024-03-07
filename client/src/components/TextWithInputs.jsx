import React, { useState } from "react";

export default function TextWithInputs({ text }) {
  const [editedText, setEditedText] = useState(text);
  const [inputValues, setInputValues] = useState(
    Array(text.split("{#var#}").length).fill(""),
  );

  const handlePlaceholderClick = (index) => {
    setEditedText((prevText) => {
      const before = prevText.substring(0, index);
      const after = prevText.substring(index + 7); // Assuming {#var#} is always 7 characters
      return `${before}<input type="text" />${after}`;
    });
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    const updatedText = editedText
      .split("{#var#}")
      .map((part, i) => (i === index ? value : part))
      .join("{#var#}");
    setEditedText(updatedText);
  };

  const renderTextWithInputs = () => {
    const parts = editedText.split("{#var#}");

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <input
            type="text"
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        )}
      </React.Fragment>
    ));
  };

  return <div>{renderTextWithInputs()}</div>;
}
