import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
    height: 39px;
    width: 39px;
    align-self: flex-end;
    cursor: pointer;
    padding: 1rem 1rem 1rem 0;
  }
  border-bottom: 1px solid #aaa;
`

export const SearchBox = styled.div`
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    background-color: #ccc;
    width: 1px;
    height: 80px;
    right: -20px;
  }
`

export const FilterBox = styled.div`
  align-self: flex-end;
  margin-right: 2.3rem;
  
`