import styled from 'styled-components';
import { useToggleTheme } from './ThemeProvider';

const Switch = styled.label`
  /* The switch - the box around the slider */
  position: relative;
  display: inline-block;
  width: 230px;
  height: 34px;


  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 170px;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.primary};
  display:inline-block;
  margin-left: 60px;
  margin-top: 6px;
`;

const SwitchWrapper = styled.div`
  margin-left: 5px;
`;

export default function ThemeSwitch() {
  const { toggleTheme } = useToggleTheme();
  return (
    <SwitchWrapper>
      <Switch>
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider round"></span>
        <Text>Dark theme</Text>
      </Switch>
    </SwitchWrapper>
  );
}
