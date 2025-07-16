import React from "react";
import FocusInput from "./Component/FocusInput";
import RegistrationForm from "./Component/RegistrationForm";
import { ThemeProvider } from "./Component/SharedTheme/ThemeContext";
import Header from "./Component/SharedTheme/Header";
import Content from "./Component/SharedTheme/Content";
import PreviousValueTracker from "./Component/PreviousValueTracker";
import LoginForm from "./Component/LoginForm";
import { AuthProvider, AuthStatus } from "./Component/AuthDisplay";
import CharacterLimitTextArea from "./Component/CharacterLimitTextArea";
import Control_Uncontrol from "./Component/Control_Uncontrol";
import InputForm from "./Component/CustomHook/InputForm";
import MultiStepForm from "./Component/MultiStepForm";
const App = () => {
  return (
    <div>
      {/*Task 01  */}
      <h2 style={{ color: "red" }}>Task 01 Registration Form </h2>
      <RegistrationForm />
      {/*Task 02  */}
      <h2 style={{ color: "red" }}>Task 02 FocusInput </h2>
      <FocusInput />
      {/*Task 03  */}
      <h2 style={{ color: "red" }}>Task 03 Previous Value Tracker</h2>
      <PreviousValueTracker />
      {/*Task 04  */}
      <h2 style={{ color: "red" }}>Task 04 Theme Provider </h2>
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
      {/*Task 05  */}
      <h2 style={{ color: "red" }}>Task 05 Login Form </h2>
      <LoginForm />
      {/*Task 06  */}
      <h2 style={{ color: "red" }}>Task 06 Auth Provider </h2>
      <AuthProvider>
        <AuthStatus />
      </AuthProvider>
      {/*Task 07  */}
      <h2 style={{ color: "red" }}>Task 07 Character Limit Area </h2>
      <CharacterLimitTextArea />
      {/*Task 08  */}
      <h2 style={{ color: "red" }}>Task 08 Control - Uncontrol </h2>
      <Control_Uncontrol />
      {/*Task 09  */}
      <h2 style={{ color: "red" }}>Task 09 Input Form </h2>
      <InputForm />
      {/*Task 10  */}
      <h2 style={{ color: "red" }}>Task 10 Multi Step Form </h2>
      <MultiStepForm />
    </div>
  );
};

export default App;
