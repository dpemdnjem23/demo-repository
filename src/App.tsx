/** @format */

import { useState } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form, FormField, FormLabel } from "./components/ui/form/form";
import {
  ControllerRenderProps,
  FieldValues,
  ControllerFieldState,
  UseFormStateReturn,
  UseFormReturn,
} from "react-hook-form";
import { SignIn } from "./pages/auth/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>
        <Link to="/login">로그인페이지</Link>
      </Button>
      <Button>
        <Link to="/authEntry">로그인진입페이지</Link>
      </Button>
    </>
  );
}
export default App;
