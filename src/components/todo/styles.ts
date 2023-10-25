import styled from "styled-components";

type CheckType = {
  checked?: boolean;
}

export const Container = styled.div<CheckType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  border-bottom: 1px solid #aaa;
  padding: 0.8rem 0;
  background-color: ${(props) => props.checked ? "#aac" : "#fff"};
  padding: 1rem;
`

export const Task = styled.span<CheckType>`
 text-decoration: ${(props) => props.checked ? "line-through" : "none"};

`

export const Options = styled.div`
  display: flex;
  gap: 8px;

`

export const Option = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #aaa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`