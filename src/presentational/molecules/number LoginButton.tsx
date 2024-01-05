import { LoginButtonList } from "./loginButton";

export const LoginButton: React.FC = () => {
  const loginButton = [{ id: 1, label: "login/logout" }];
  return (
    <div style={{ display: "flex", height: "5px" }}>
      <LoginButtonList loginButton={loginButton} />
    </div>
  );
};
