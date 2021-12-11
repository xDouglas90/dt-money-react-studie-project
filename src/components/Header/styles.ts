import styled from "styled-components";

export const Container = styled.header`
  background: var(--dark-slate-blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1140px;
  padding: 2rem 1rem 12rem;

  img {
    filter: drop-shadow(-4px 3px 0 rgba(0, 0, 0, 0.2));

    transition: all ease-out 0.4s;

    &:hover {
      filter: drop-shadow(-4px 9px 0 rgba(0, 0, 0, 0.4));
      transform: scale(1.05);
    }
  }

  button {
    background: var(--slate-blue);
    border: none;
    border-radius: 0.25rem;

    color: var(--white);
    font-size: 1rem;
    font-weight: 600;

    height: 3rem;
    padding: 0 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
