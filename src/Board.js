import styled from "styled-components";
import React from "react";
import left_arrow from './left_arrow.png';

const Container = styled.div`
    width: 100%;
    padding-bottom: 25px;
`;
const BoardContainer = styled.div`
    width: 93%;
    min-height: 80vh;
    border-radius: 15px;
    margin: 15px auto;
    color: #5a7cd3;
`;

const BoardChildContainer = styled.div`
    width: 90%;
    margin: 23px auto;
    margin-top: 30px;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #5a7cd3;

`;
const NavBot = styled.div`
    height: 20px;
    padding: 18px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-weight: bold;
    font-size: 20px;
    color: #5a7cd3;
`;

const BoardChildTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    float: left;

`;
const BoardChildContent = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    width: 93%;
    margin-bottom: 8px;
`;
const BoardChildDate = styled.div`
    float: right;
    font-size: 10px;
`;


const Board = () => {
    return (
        <Container>
            <NavBot style={{ textAlign: "center"}}>                 
            <img
                    src={left_arrow}
                    alt="융슝이"
                    style={{ width: "18px", float: "left", marginTop: "4px"}}
                  ></img>보낸 편지함</NavBot>
            <BoardContainer>
                <BoardChildContainer>
                    <BoardChildTitle>
                        보낸 사람
                    </BoardChildTitle>
                    <BoardChildDate>2022.02.21</BoardChildDate>
                    <BoardChildContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec eleifend sem. Proin iaculis iaculis erat ac faucibus. Vivamus malesuada feugiat purus ac venenatis. Quisque vitae dui rhoncus, pharetra neque congue, lacinia arcu. Donec urna nunc, maximus non cursus in, semper a orci. Nam euismod, lacus quis aliquet lobortis, ipsum arcu lacinia orci, sed lobortis sapien dolor eget purus. Nullam porta congue nunc, sit amet lacinia diam aliquet id. Donec pellentesque vel ante eget sodales. Pellentesque interdum lacinia risus, ut interdum libero pulvinar vel.
                    </BoardChildContent>
                </BoardChildContainer>
            </BoardContainer>
        </Container>
    )
  };
  export default Board;
  