import styled, { keyframes } from 'styled-components';

import BackgroundHeader from "../../../assets/imgCadastro/cabecalho.svg";

export const Header = styled.header`
    background: url("${BackgroundHeader}") no-repeat center center/cover;
    width: 100%;
    height: 47vh;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 15vw;
    margin: auto;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-family: 'Lemon';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
    color: #000000;
`;

export const Input = styled.input`
    z-index: 0;
    padding-left: 15px;
    width: 25vw;
    height: 50px;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const ButtonCadastrar = styled.button`
  position: relative;
    padding-left: 15px;
    width: 25vw;
    height: 50px;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    overflow: hidden;
    font-family: 'Lemon', sans-serif;
    font-size: 16px;
    color: #000;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, #65BBAD 0%, #156B5D 100%);
        transition: width 0.3s;
        z-index: -1;
    }

    &:hover::before {
        width: 100%;
    }
`;




export const ButtonVoltar = styled.button`
    margin-top: 20px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-family: 'Lemon';
    font-style: normal;
    font-size: 17px;
    line-height: 39px;
    color: #000000;
    cursor: pointer;
    margin-bottom: 50px;
`;

export const Imagem = styled.img`
    height: 3vh;
    margin-right: 20px;
`;


export const PasswordContainer = styled.div`
    position: relative;
    width: 25vw;
    height: 50px;
    display: flex;
    align-items: center;
    background: #D9D9D9;
    box-shadow: 0px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
`;

export const TogglePasswordIcon = styled.div`
    position: absolute;
    right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;


const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const ImageMHome = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 4vh;
    cursor: pointer;
    animation: ${bounce} 2s infinite ease-in-out;
`;

export const ErrorMessage = styled.span`
    color:red;
    margin-top: 18px;
    margin-left: 8px;

`;


