import { useState } from "react";
import Button from "../Button/Button";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

const Keyboard = () => {
  const [phoneNumberShow, setPhoneNumberShow] = useState([]);

  const addNumber = (number) => {
    setPhoneNumberShow([...phoneNumberShow, number]);
  };
  console.log(phoneNumberShow);
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <ol className="keyboard">
      {numberList.map((number) => {
        return (
          <Button
            text={number}
            key={number}
            actionOnClick={() => {
              addNumber({ number });
            }}
          />
        );
      })}

      <li>
        <button className="key big">delete</button>
      </li>
    </ol>
  );
};
export default Keyboard;
