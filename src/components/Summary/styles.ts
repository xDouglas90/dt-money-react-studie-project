import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -7rem;

  div {
    background: var(--white);
    border-radius: 0.25rem;
    color: var(--text-title);
    padding: 1.5rem 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      margin-top: 1rem;
    }

    &.highlight-bg {
      background: var(--green);
      color: var(--white);
    }
  }
`;
