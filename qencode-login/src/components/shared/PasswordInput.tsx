import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const PasswordInputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  padding-right: 30px; 
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #5f6368;
`;
interface PasswordInputProps {
  password: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({password, onChange}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordInputWrapper>
      <Input
        value={password}
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={(e) => onChange(e.target.value)}
      />
      <Icon onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FiEye  />  : <FiEyeOff  />}
      </Icon>
    </PasswordInputWrapper>
  );
};

export default PasswordInput;
