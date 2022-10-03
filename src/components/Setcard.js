import React from 'react'

const Setcard = (props) => {
    const ChannelName ={
  fontSize: "14px",
  color: `${({ theme }) => theme.textSoft}`,
  margin: "9px 0px"
    }


  return (
    <div>
    
<iframe
            width="90%"
            height="400"
            src={`https://www.youtube.com/embed/${props.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2 className='ChannelName'>{props.names}</h2>



    </div>
  )
}

export default Setcard