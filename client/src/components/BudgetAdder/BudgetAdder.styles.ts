import styled from "styled-components";
import { motion } from "framer-motion";
import { NumericFormat } from "react-number-format";

interface InputBoxModifier {
  long?: boolean;
}

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const EditorContainer = styled(motion.div)`
  width: 500px;
  height: 300px;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div`
  transition: 0.2s all ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const CreateBudgetForm = styled.form`
  padding: 1em;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const InputGroup = styled.div<InputBoxModifier>`
  flex: ${(props) => (props.long ? "2" : "1")};
  padding-bottom: 1em;
  position: relative;
`;

export const Label = styled.div`
  display: flex;
  font-weight: 700;
  gap: 0.5em;
`;

export const AmountInput = styled(NumericFormat)`
  font-size: 1rem;
  padding: 0.5em 0.2em;
  border: none;
  outline: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
  transition: 0.3s ease all;
  margin-top: 0.5em;

  &:focus {
    box-shadow: 0 0 15px rgba(211, 174, 139, 1);
    border-radius: 3px;
  }
`;

export const ErrorContainer = styled.div`
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 0.5em 1em;
  font-size: 1.5rem;
  background: none;
  border-radius: 2em;
  border: 2px solid black;
  cursor: pointer;
  transition: 0.2s ease all;
  text-align: center;
  margin-top: 1em;

  &:hover {
    background-color: black;
    color: white;
  }
`;
