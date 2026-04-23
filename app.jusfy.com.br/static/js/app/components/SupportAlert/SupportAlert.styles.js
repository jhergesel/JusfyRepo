import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#f0f5fc 0%, #fff 100%);
`;

export const Wrapper = styled.div `
  width: 600px;
  padding: 40px;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p `
  opacity: 0.7;
`;

export const LinkButton = styled.a `
  color: white;
  background-color: #41c78f;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

export const LogoutButton = styled.button `
  border: none;
  background: none;
  color: #41c78f;
`;