import styled from "styled-components";

export const InputContainer = styled.div`
  width: 80%;
  height: 52px;
  color: #fff;

  border-radius: 4px;
  overflow: hidden;
  padding: 0 10px;
  background-color: #333333;
  & input {
    text-indent: 12px;
    width: 100%;
    height: 42px;
    border-radius: 21px;
    background-color: transparent;
    border: 0;
    outline: none;
    color: white;
    font-size: 15px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
`;
