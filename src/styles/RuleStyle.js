import styled from "styled-components";


export const RuleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
    
    padding: 30px 30px;
    gap: 20px;
    background-color: #F7E8BD;

    border-radius: 10px;
    width: 385px;
    
    h2{
         font-size: 1.5rem;
    }
    h3{
        font-size: 1rem;
    }
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;

    #description{
        white-space: pre-line;
        text-align: center;
    }
`

export const Thumnail = styled.img`
    height: 150px;
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
    img{
        width: 30px;
    }
    p{
        font-size: 20px;
    }
`