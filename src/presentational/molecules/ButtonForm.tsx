import Button from "../atoms/button";

const ButtonForm = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <Button label="Button 1" onClick={handleButtonClick} />
      <Button label="Button 2" onClick={handleButtonClick} />
      {/* 必要なだけボタンを追加 */}
    </div>
  );
};

export default ButtonForm;
