import styled from 'styled-components';
import { LoginButton, LoginContainer, LoginErrorText, LoginForm, LoginInput, LoginTitle } from '../Login/Login.styles';

export const ForgotPasswordContainer = styled(LoginContainer)`
  /* Inherits styles from LoginContainer and you can add or override here */
`;

export const ForgotTitle = styled(LoginTitle)`
  /* Inherits styles from LoginTitle and you can add or override here */
`;

export const ForgotForm = styled(LoginForm)`
  /* Inherits styles from LoginForm and you can add or override here */
`;

export const Input = styled(LoginInput)`
  /* Inherits styles from Input and you can add or override here */
`;

export const Button = styled(LoginButton)`
  /* Inherits styles from Button and you can add or override here */
`;

export const CancelButton = styled(LoginButton)`
  margin-top: 20px;
`;

export const ErrorText = styled(LoginErrorText)`
  /* Inherits styles from ErrorText and you can add or override here */
`;