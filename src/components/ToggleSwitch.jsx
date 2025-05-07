import { useState } from "react";
import styled from "styled-components";
import { Switches } from "./Switches";
import { GlobalStyle } from "../styles/Global";

const SectionStyle = styled.section`
  gap: 4.2rem;
  padding: 17.2rem 20.2rem;
  background-color: #ebfff7;
  border-radius: 5rem;
  -webkit-border-radius: 5rem;
  -moz-border-radius: 5rem;
  -ms-border-radius: 5rem;
  -o-border-radius: 5rem;

  .infos {
    align-items: start;
  }

  .infos {
    gap: 5.4rem;
  }
`;

export const ToggleSwitch = () => {
  const [toggle1, setToggle1] = useState(false);

  const [toggle2, setToggle2] = useState(false);

  return (
    <>
    <GlobalStyle  toggle1={toggle1}/>
      <SectionStyle  className="flex">
        <div className="infos flex flex-column">
          <p>Dark Mode</p>
          <p>Notifications</p>
        </div>
        <Switches
          toggle1={toggle1}
          toggle2={toggle2}
          setToggle1={setToggle1}
          setToggle2={setToggle2}
        />
      </SectionStyle>
    </>
  );
};
