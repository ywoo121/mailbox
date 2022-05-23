import styled from "styled-components";
import React from "react";
import left_arrow from './left_arrow.png';
import postage_stamp from './postage_stamp.png';
import siren from "./siren.png"
import bookmark from "./bookmark.png"

const Container = styled.div`
    width: 100%;
    // padding-bottom: 25px;
`;
const BoardContainer = styled.div`
    width: 93%;
    min-height: 80vh;
    border-radius: 5px;
    margin: 15px auto;
    color: #5a7cd3;
`;

const BoardChildContainer = styled.div`
    width: 90%;
    margin: 30px auto;
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

const BoardChildStamp = styled.img`
    width: 30%;
    height: 30%;
    margin: 10px;
`;

const BoardChildContent = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    width: 93%;
    margin: 10px;
`;
const BoardChildDate = styled.div`
    float: right;
    margin: 100px 10px 0px 0px;
    font-size: 13px;
`;

const SirenBtn = styled.img`
    width: 6%;
    float: right;
    margin: 2px 5px 5px 0px;
`;
const BookmarkBtn = styled.img`
    width: 5%;
    float: right;
    margin: 5px 8px 10px 3px;
    padding-bottom: 10px;
`;

const BtnDiv = styled.div`
    margin-bottom: 10px
`;
const Board = () => {
    return (
        <Container>
            <NavBot style={{ textAlign: "center"}}>                 
            <img
                    src={left_arrow}
                    alt="왼쪽 화살표"
                    style={{ width: "18px", float: "left", marginTop: "4px"}}
                  ></img>(보낸 사람)의 편지</NavBot>
            <BoardContainer>
                <BoardChildContainer style={{paddingBottom: "35px"}}>
                    <BoardChildStamp 
                        src={postage_stamp}
                        alt="우표">
                    </BoardChildStamp>
                    <BoardChildDate>2022.02.21</BoardChildDate>
                    <BoardChildContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec eleifend sem. Proin iaculis iaculis erat ac faucibus. Vivamus malesuada feugiat purus ac venenatis. Quisque vitae dui rhoncus, pharetra neque congue, lacinia arcu. Donec urna nunc, maximus non cursus in, semper a orci. Nam euismod, lacus quis aliquet lobortis, ipsum arcu lacinia orci, sed lobortis sapien dolor eget purus. Nullam porta congue nunc, sit amet lacinia diam aliquet id. Donec pellentesque vel ante eget sodales. Pellentesque interdum lacinia risus, ut interdum libero pulvinar vel.
                    </BoardChildContent>
                        <BookmarkBtn src={bookmark}/>
                        <SirenBtn src={siren}/>
                </BoardChildContainer>
            </BoardContainer>
        </Container>
    )
  };
  export default Board;
  