import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 30px;
    gap: 20px;
    background-color: #F7E8BD;
    width: 350px;
    border-radius: 10px;
`;

export const PlayerItem = styled.div`
    width: 300px;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 50px 0 0 50px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

    img {
        width: 40px;
        height: 40px;
    }
`;

export const Name = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #333333;
`;

export const HostBadge = styled.div`
    margin-left: auto;
    font-size: 1.2rem;
    color: #FFD700; /* 금색 */
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.label`
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px;
`;

export const Title2 = styled.label`
    font-family: "Baloo 2", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #333333;
`;

export const BottomDiv = styled.div`
    margin-top: auto; /* 자동으로 컨테이너 하단에 위치하도록 설정 */
    text-align: center;
    width: 100%;
`;

export const InviteButton = styled.button`
    width: 220px;
    height: 50px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    &:hover {
        background-color: #C3B18D;
    }
`;
