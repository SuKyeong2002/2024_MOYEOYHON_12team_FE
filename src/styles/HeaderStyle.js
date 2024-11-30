import styled from "styled-components";


export const Header = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;
    align-items: center;
    padding: 0 -50px;
    margin-right: 140px
`

export const Logo = styled.img`
    width: 200px;
`

export const HomeBtn = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 10px 35px;
    height: min-content;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
    background-color: #9C8D6D;
    border-radius: 10px;
    color: #fff;
    gap: 15px;
    border: 1px solid #fff;


    &:hover {
        background-color: #86785C;
    }
`