import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 1120px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F7E8BD;
    padding: 20px;
    border: 1px solid #92856A;
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
`;

export const TodayRecommendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start; 
    width: 100%; 
    padding: 20px; 
`;

export const Title = styled.label`
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`;

export const Message = styled.div`
    font-size: 0.8rem;
    color: #000000;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px; 
`;

export const Divider = styled.hr`
    width: 12%;
    border: 2px solid #000000; 
    margin-bottom: 10px; 
    border-radius: 10px;
`;

export const RecommendationsContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const RecommendationItem = styled.div`
    font-size: 0.9rem;
    color: #444444;
    margin: 10px 0;
    padding: 10px;
    border-left: 4px solid #FBAF00;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ffecc2;
    }
`;

export const ButtonContainer = styled.div`
    display: flex; 
    gap: 20px; 
    margin-top: 20px; 
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
    justify-content: flex-start;
    background-color: #ffffff;
    padding-left: 10px; 


    &:hover {
        background-color: #C3B18D;
    }

    img {
        margin-right: 50px; 
    }
`;
