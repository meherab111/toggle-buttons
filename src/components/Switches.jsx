import styled from "styled-components";

const SwitchStyle = styled.div`
  gap: 3.8rem;

  .switch-outer-box {
    background-color: ${({ theme }) => theme.colors.switchColorSecondary};
    width: 170px;
    height: 70px;
    border-radius: 50rem;
    -webkit-border-radius: 50rem;
    -moz-border-radius: 50rem;
    -ms-border-radius: 50rem;
    -o-border-radius: 50rem;
    cursor: pointer;
  }

  .switch {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    width: 60px;
    height: 60px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;

    &:hover {
      opacity: 0.9;
    }
  }

  .switch-off {
    transform: translateX(-50px);
    -webkit-transform: translateX(-50px);
    -moz-transform: translateX(-50px);
    -ms-transform: translateX(-50px);
    -o-transform: translateX(-50px);
  }

  .switch-on {
    transform: translateX(50px);
    -webkit-transform: translateX(50px);
    -moz-transform: translateX(50px);
    -ms-transform: translateX(50px);
    -o-transform: translateX(50px);
  }
`;

export const Switches = ({ toggle1, setToggle1, toggle2, setToggle2 }) => {
  const handleOnClick1 = () => {
    setToggle1(() => (toggle1 ? false : true));
  };

  const handleOnClick2 = () => {
    setToggle2(() => (toggle2 ? false : true));
  };

  const toggleBgColor1 = { backgroundColor: toggle1 ? "#15A7A2" : "#9F9F9F" };

  const toggleBgColor2 = { backgroundColor: toggle2 ? "#15A7A2" : "#9F9F9F" };

  return (
    <>
      <SwitchStyle className="flex flex-column">
        <div
          onClick={handleOnClick1}
          className={"switch-outer-box flex"}
          style={toggleBgColor1}
        >
          <div
            className={`switch ${toggle1 ? "switch-on" : "switch-off"}`}
          ></div>
        </div>
        <div
          onClick={handleOnClick2}
          className="switch-outer-box flex"
          style={toggleBgColor2}
        >
          <div
            className={`switch ${toggle2 ? "switch-on" : "switch-off"}`}
          ></div>
        </div>
      </SwitchStyle>
    </>
  );
};
