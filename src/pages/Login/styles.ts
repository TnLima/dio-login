import styled from 'styled-components';



export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .lembraAjuda {
    display: flex;
    width: 80%;
    justify-content: space-between;
    color: #b3b3b3;
    font-size: 14px;
    margin-top: 8px;
  }

  .background{
    position: absolute;
    z-index: -1;
    height: 160%;
    opacity: 40%;
  }

  .assineAgora {
    width: 80%;
    color: gray;
    margin-top: 80px;
    font-size: 13px;

    .linkAssine {
      text-decoration: none;
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }

    .linkSaiba {
      color: #0071eb;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .reCaptcha{
      margin-top: 14px;
    }
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 20px;

  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  padding: 20px;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .Title{
      color: white;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      width: 100%;
    }
`
export const Spacing = styled.div`
    margin: 10px 0;
`

export const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;

  .customButton {
    background-color: #e50914;
    width: 80%;
    height: 52px;
    border-radius: 6px;
    font-weight: bold;
    color: white;
    font-size: 15px;
    border: none;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;