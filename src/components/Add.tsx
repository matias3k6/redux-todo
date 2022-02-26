import { FC, useState } from "react";

interface AddItemProps {
  onClick: (text: string) => void;
}

export const AddItem: FC<AddItemProps> = ({ onClick }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <h2>Create a task</h2>
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={() => onClick(inputText)}>Add +</button>
    </div>
  );
};
