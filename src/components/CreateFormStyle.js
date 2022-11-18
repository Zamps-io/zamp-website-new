import styled from "styled-components";

export const CreateFormStyled = styled.div`
  background: #333;
  padding: 30px 10px;
  color: #fff;
  border-radius: 10px;
  input,
  textarea {
    background-color: #e2e1e5;
  }
  h2 {
    color: #fff;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tree {
      margin-left: 10px;
    }
  }
  button {
    width: 100%;
    background-color: var(--primary-color);
    font-weight: bold;
    border: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    form {
      flex-direction: column;
    }
    .tree {
      margin-left: 0px !important;
    }
  }
`;
