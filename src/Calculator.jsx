import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const Button = ({ value, onClick, extraClasses }) => (
    <button
      onClick={onClick}
      className={`rounded-full w-16 h-16 text-xl bg-gray-200 hover:bg-gray-300 ${extraClasses}`}
    >
      {value}
    </button>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-c1">
      <div className="bg-white rounded-3xl shadow-lg w-80 h-[90%]">
        <input
          type="text"
          value={input}
          className="px-4 w-full h-48 bg-c3 rounded-3xl text-center text-5xl mb-4 focus:outline-none"
          readOnly
        />
        <div className="px-4 py-4 grid grid-cols-4 grid-rows-5 gap-3">
          <Button
            value="AC"
            onClick={handleClear}
            extraClasses="text-c4 bg-c6"
          />
          <Button
            value="%"
            onClick={() => handleButtonClick("%")}
            extraClasses="bg-c6 text-c1"
          />
          <Button
            value="÷"
            onClick={() => handleButtonClick("/")}
            extraClasses="bg-c6 text-c1"
          />
          <Button
            value="×"
            onClick={() => handleButtonClick("*")}
            extraClasses="bg-c6 text-c1"
          />

          <Button value="7" onClick={() => handleButtonClick("7")} />
          <Button value="8" onClick={() => handleButtonClick("8")} />
          <Button value="9" onClick={() => handleButtonClick("9")} />
          <Button
            value="-"
            onClick={() => handleButtonClick("-")}
            extraClasses="bg-c6 text-c1"
          />

          <Button value="4" onClick={() => handleButtonClick("4")} />
          <Button value="5" onClick={() => handleButtonClick("5")} />
          <Button value="6" onClick={() => handleButtonClick("6")} />
          <Button
            value="+"
            onClick={() => handleButtonClick("+")}
            extraClasses="bg-c6 text-c1"
          />

          <Button value="1" onClick={() => handleButtonClick("1")} />
          <Button value="2" onClick={() => handleButtonClick("2")} />
          <Button value="3" onClick={() => handleButtonClick("3")} />

          <Button
            value="="
            onClick={handleCalculate}
            extraClasses="bg-c6 text-c1 row-span-2 h-full"
          />

          <Button value="0" onClick={() => handleButtonClick("0")} />
          <Button value="." onClick={() => handleButtonClick(".")} />
          <Button
            value="DEL"
            onClick={handleDelete}
            extraClasses="bg-c6 text-c1"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
