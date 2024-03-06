import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  @media(min-width: 768px) {
    width: 450px;
    margin: 0 auto;
  }
`;

export const LoginTitle = styled.h3`
  margin-bottom: 20px;
`;
export const LoginButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 40px;
`;

export const GitButton = styled.button`
  border: 1px solid #e1e5f0;
  background-color: #fff;
  width: 175px;
  height: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
  line-height: 0.1em;
  margin: 20px 0 40px 0;
  font-size: 12px;
  color: #ccc;

  span {
    background: #fff;
    padding: 0 6px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const LoginButton = styled.button<{cancel?: boolean}>`
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: ${props => props.cancel ? 'white' : '#316FEA'};
  color: ${props => props.cancel ? '#316FEA' : 'white'};
  border: ${props => props.cancel ? '1px solid #ccc' : 'none'};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: darkblue;
  }

`;
export const Forgot = styled(Link)`
  color: #316FEA;
  text-decoration: none;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const LoginErrorText = styled.span`
  color: red;
  margin-bottom: 10px;
`;
export const SignUpRow = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const SignUp = styled(Link)`
  color: #316FEA;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;
`