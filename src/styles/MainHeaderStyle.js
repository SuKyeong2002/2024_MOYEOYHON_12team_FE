import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px; 
    margin-right: -400px; 

    #empty {
        width: 0px;
    }         
`;


export const Logo = styled.img`
    width: 200px;
`;

export const StyledSelect = styled.select`
    width: 100px; 
    padding: 8px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    background-color: #fff; 
    color: #333; 
    font-size: 16px; 
    margin-left: auto;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);

    &:hover {
        border-color: #888; 
    }

    &:focus {
        outline: none;
        border-color: #007bff; 
    }
`;
