import styled, { css } from 'styled-components';
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';

const IconStyle = css`
  font-size: 3rem;
  margin-right: 2rem;

  @media (max-width: 950px) {
    font-size: 2.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 40rem;
  margin-bottom: 5rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div``;
export const Left = styled.div`
  width: 55%;
  height: 100%;
  background: rgba(93, 83, 74, 0.7);
  color: white;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    width: 100%;
    height: 55%;
    border-radius: 0;
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const Right = styled.div`
  width: 45%;
  height: 100%;
  background: ${({ theme }) => theme.colors.main};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
    height: 45%;
    border-radius: 0;
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const StyledImg = styled.img`
  width: 28rem;

  @media (max-width: 950px) {
    width: 20rem;
  }
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSize.L};

  @media (max-width: 950px) {
    font-size: ${({ theme }) => theme.fontSize.M};
  }
`;

export const EmailIcon = styled(AiOutlineMail)`
  ${IconStyle}
`;

export const PhoneIcon = styled(AiOutlinePhone)`
  ${IconStyle}
`;
export const SocialIcon = styled(AiOutlineInstagram)`
  ${IconStyle}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 3rem;

    @media (max-width: 950px) {
      margin-bottom: 2rem;
    }
  }
`;
