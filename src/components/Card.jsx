import React,{useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Setcard from "./Setcard";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";


const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "#999",
  display: `${(props) => props.type === "sm" && "none"}`
}

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  const [size,setSize]=useState({});
  const[like, setLike]=useState(false);
  
  function Likes(){
    setLike(!like)
  }
  const fetchData = () => {

  let api_key = "AIzaSyDFAa0gPHF-ID5lUR7yoWeUhlrPTupXVDw";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
fetch(video_http + new URLSearchParams ({
key: api_key,
part: 'snippet',
chart: 'mostPopular',
maxResults: 50,
regionCode: 'IN'}))
.then (res => res.json ())
.then (data => {setSize(data);
 console.log(data)
}
)
  }
useEffect(() => {fetchData()}, []);

  return (
    <div>
      {size?.items?.map((item,i)=>{
        return(
          <div style={{float:"right"}}>
          
      <Container type={type}>
      
      <Setcard key={i} id={item.id} />
      
            <div style={{color:"white"}}>
              <ThumbUpOutlinedIcon  style={{marginLeft:"12px"}} /> Like
              <ThumbDownOffAltOutlinedIcon style={{marginLeft:"12px"}} /> Dislike
              <ReplyOutlinedIcon style={{marginLeft:"12px"}}/> Share
              <AddTaskOutlinedIcon style={{marginLeft:"12px"}}/> Save
              </div>
          
        <Details type={type}> 
        
          <img style={ChannelImage} key={i}
            type={type}
            src={item.snippet.thumbnails.high.url}
          />
          <Texts>
            <ChannelName key={i}>{item.snippet.localized.title}</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
         </Details>
      </Container>
    </div>
       ) }
          )
      }
    </div>
  )
}
  
export default Card;
