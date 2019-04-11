import React from "react";

function Background(props)  {
    return <body className="background-img" style={ {backgroundImage: `url(${props.backgroundImage})`}} />
}

export default Background;