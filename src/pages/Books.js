import React, { useState, useEffect } from 'react';

export const Books = () => {

    useEffect(() => {
      window.scrollTo({top: 0, behavior: "instant"})
    }, [])
    

    return (
        <>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>[books]</h1>
            <p style={{textAlign: "center"}}>these are some books i've read and loved over the years. <br /> if it isn't obvious from this list, my interests are as varied as the spontaneous forces that spark them.</p>
            <hr style={{width: "95%"}} />
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center"}}>
        </div>
        </>
    )
}