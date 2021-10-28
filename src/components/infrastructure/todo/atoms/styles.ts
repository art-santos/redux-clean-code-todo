import styled from "styled-components";

export const Button = styled("button")<{ side: string }>`
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  box-shadow: ${(props) =>
    props.disabled
      ? "0px 0px 0px rgba(0, 0, 0, 0.0)"
      : "0px 4px 4px rgba(0, 0, 0, 0.50)"};
  background-color: ${(props) =>
    props.side === "right" ? "#218d1f" : "#c20b0b"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60px;
  width: 50px;
  border-radius: 5px;
  border: 0px;
  font-size: 60px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    transition: 0.5s;
  }
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 0px 50px 0px;
  height: 100%;
  min-width: 300px;
  margin: auto;
  width: 98%;
`;

export const Input = styled("input").attrs({
  type: "text",
  placeholder: "Add Task",
})`
  height: 40px;
  width: 250px;
  padding: 10px;
  font-size: 18px;
`;

export const Submit = styled("input").attrs({
  type: "submit",
  value: "+",
})`
  background-color: #0066ff;
  color: #fff;
  height: 65px;
  width: 100px;
  margin: 5px;
  padding: 5px;
  border: 0px;
  border-radius: 5px;
  padding: 5px;
  font-size: 40px;
  cursor: pointer;
`;
