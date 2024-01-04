import { SignUpButtonList } from "./signUPButton";

export const SignUpButton: React.FC = () => {
  const SignUpButton = [{ id: 1, label: "SIGN UP" }];
  return (
    <div style={{ display: "flex", height: "5px" }}>
      <SignUpButtonList signUpButton={SignUpButton} />
    </div>
  );
};
