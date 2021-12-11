import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 4rem auto 0;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  table {
    border-spacing: 0.25rem;
    width: 100%;

    th {
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;
      color: var(--text-body);
      padding: 1rem 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.active {
        color: var(--green);
      }

      &.passive {
        color: var(--red);
      }
    }
  }
`;
