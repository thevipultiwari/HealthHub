import React from 'react';
import { styled, keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.bg_secondary};
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.9rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin: 0;
`;

const LoadingSpinner = ({ text = "Loading HealthHub..." }) => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
