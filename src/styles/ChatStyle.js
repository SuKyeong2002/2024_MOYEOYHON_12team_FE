import styled from "styled-components";



export const ChatApp = styled.div`
    display: flex;
    flex-direction: column;

    width: 700px;
    height: 520px;

    border-radius: 10px;
    background-color: #F7E8BD;
`

export const ChatBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: auto;
    height: 460px;

    margin: 10px;
`

export const textBox = styled.div`
    display: flex;
    width: max-content;
    padding: 10px 20px;
    margin: 10px;

    background-color: #C3B18D;
    border-radius: 10px 10px 10px 0;

`

export const SearchBar = styled.div`
    display: flex;
    padding: 20px 30px;
    width: auto;
    position: relative;

    form{
        width: 100%;
    }
    input{
        background-color: #FFFAEC;
        border: none;
        padding: 10px 30px;
        border-radius: 18px;
        width: 100%;
        height: 44px;
        font-size: 17px;
    }

    button:hover {
        background-color: #E6E6E6;
        border-radius: 5px;
        transition: ease-in-out;
        transition-duration: 0.5s;
    }

    img{
        width: 25px;
    }
`

export const SubmitBtn = styled.button`
    position: absolute;
    top: 30px;
    right: 48px;
    background-color: #FFFAEC;
    border: none;
    border-radius: 20px;
`

export const CongratsBtn = styled.button`
    position: absolute;
    top: 30px;
    right: 92px;
    height: 30px;
    width: 50px;
    background-color: #FFFAEC;
    border: none;
    border-radius: 20px;
`