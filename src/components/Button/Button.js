const Button = ({ text, actionOnClick }) => {
  return (
    <li>
      <button className={"key"} onClick={actionOnClick}>
        {text}
      </button>
    </li>
  );
};
export default Button;
