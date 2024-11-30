import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 665px;
    height: 523px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F7E8BD;
    padding: 30px 20px;
    border: 1px solid #92856A;
    border-radius: 10px;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
    gap: 15px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7E8BD;
    gap: 20px;
`;

export const Title = styled.label`
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 30px;
`;

export const LabelContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 50px;
    margin-bottom: 50px
`;

export const NicknameContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
`;

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px;
`;

export const FireIconWrapper = styled.div`
    width: 120px; 
    height: 120px;
    border-radius: 50%;
    background-color: #000000;
    display: inline;  
    align-items: center;  
    justify-content: center;  

    img {
        width: 300px;  
        height: 300px;  
        margin-right: 50px;
        margin-bottom: 100px;
        }
`;

export const Input = styled.input`
    width: 360px;
    height: 50px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background-color: #ECECEC;

    &:focus {
        outline: none;
        border-color: #F5835F;
    }
`;

export const Button = styled.button`
    width: 220px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background-color: #ffffff;

    &:hover {
        background-color: #C3B18D;
    }

    img {
        width: 30px;  
        height: 30px;  
        margin-right: 10px;
        }
`;

export const Message = styled.div`
    font-size: 1rem;
    color: #333333;
    font-weight: bold;
    text-align: center;
`;

export const Profile = styled.img`
    width: 200px;
    height: 200px;
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    button{
        background-color: transparent;
        border: none;
    }
    .Btnimg{
        width: 30px;
    }
`