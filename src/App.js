import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import {
  convertDateToString,
  convertStringToDate,
  DEFAULT_DATE,
} from "./utils/date";
import getUserName from "./utils/getUserName";

const menus = ["짜장면", "짬뽕"];
const menuList = Array.from({ length: 1000 }, (_, index) => `menu-index`);

const Child = ({ title }) => {
  // useEffect( 함수, 배열 );
  // 1) 함수: 배열(= dependencies)에 선언된 의존성이 변할때마다 실행할 코드.
  // 2) 배열: 의존성 리스트, 해당 리스트의 원소가 업데이트 되면 1) 함수가 실행됨.
  // => componentDidMount 라이프사이클은 useEffect의 비어있는 [] 의존성 리스트이다.
  useEffect(() => {
    // componentDidUpdate
    console.log("update title :", title);
  }, [title]);
  return <h2>{title}</h2>;
};

const Parent = () => {
  const [childTitle, setChildTitle] = useState("");

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setChildTitle(value);
  };

  useEffect(() => {
    console.log("childTitle state update: ", childTitle);
  }, [childTitle]);

  return (
    <>
      <input value={childTitle} onChange={handleChangeInput} />
      <Child title={childTitle} />
    </>
  );
};

const Section = () => {
  useEffect(() => {
    console.log("[Mounted] Section");

    return () => {
      console.log("[Unmounted] Section");
    };
  }, []);
  return <section>Section</section>;
};

function App() {
  const [email, setEmail] = useState("");
  const [sectionVisible, setSectionVisible] = useState(true);
  // useEffect( 함수, 배열 );
  // 1) 함수: 배열(= dependencies)에 선언된 의존성이 변할때마다 실행할 코드.
  // 2) 배열: 의존성 리스트, 해당 리스트의 원소가 업데이트 되면 1) 함수가 실행됨.
  // => componentDidMount 라이프사이클은 useEffect의 비어있는 [] 의존성 리스트이다.
  useEffect(() => {
    console.log("[Mounted] App");

    return () => {
      console.log("[Unmounted] App ");
    };
  }, []);

  const handleClickSectionVisible = () => {
    setSectionVisible(!sectionVisible);
  };

  return (
    <>
      <h2 className="" style={{ color: "red" }}>
        Admin Page
      </h2>
      <button onClick={handleClickSectionVisible}>
        section visible toggle
      </button>
      {sectionVisible ? <Section /> : null}
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Parent />
    </>
  );
}

export default App;

// Transpiling (Babel)
// => 같은 수준의 언어로 변환 JSX -> JS

// Compiling
// => 다른 수준의 언어로 변환 ex) Java, C, C#, Haskel, Rust, Go -> Assembly
