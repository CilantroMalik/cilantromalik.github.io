import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router";

export const Books = () => {
    const navigate = useNavigate()

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
            <div style={{padding: "1vh", width: "48%"}}>
                <h3 style={{color: "cornflowerblue"}}><strong>fiction ——————</strong></h3>

                <h5 style={{color: "cornflowerblue"}}><strong>Midnight's Children</strong>, <em>by Salman Rushdie</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>lengthy, intricately wrought, flowing prose and a healthy dose of magical realism: a transformative chronicle of india from past to present.</li></ul>

                <h5 style={{color: "cornflowerblue"}}><strong>The Satanic Verses</strong>, <em>by Salman Rushdie</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>rushdie's trademark elements of form and style, with multiple densely interwoven plots converging on a tale of otherness and transplantation.</li></ul>
                
                <h5 style={{color: "cornflowerblue"}}><strong>Native Speaker</strong>, <em>by Chang-Rae Lee</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>a hauntingly accurate portrayal of the asian-american experience and the eternal tension between the model minority and the perpetual foreigner.</li></ul>
                
                <h5 style={{color: "cornflowerblue"}}><strong>If You See Me, Don't Say Hi</strong>, <em>by Neel Patel</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>a collection of anecdotes at once rough and crystalline, disjoint yet unified, moving too quickly to process yet too slowly to let pass by.</li></ul>
                
                <h5 style={{color: "cornflowerblue"}}><strong>Ficciones</strong>, <em>by Jorge Luís Borges</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>utterly mind-bending short stories that play with the philosophical, mathematical, and metaphysical underpinnings of the world: reimagining, reinventing, rediscovering.</li></ul>
                
            </div>
            <div style={{padding: "1vh", width: "48%"}}>
                <h3 style={{color: "pink"}}><strong>nonfiction ——————</strong></h3>

                <h5 style={{color: "pink"}}><strong>The Emperor of All Maladies: A Biography of Cancer</strong>, <em>by Siddhartha Mukherjee</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>simultaneously a rich historical narrative, a deep scientific exploration, and a heartbreaking personal tale: the many sides of humanity's eternal dilemma.</li></ul>

                <h5 style={{color: "pink"}}><strong>99 Variations on a Proof</strong>, <em>by Philip Ording</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>a friendly exposition of the scope and versatility of math, stretching the concept of proof to its limits: for what matters isn't the answer, but how we ask the question.</li></ul>
                
                <h5 style={{color: "pink"}}><strong>How Not to Be Wrong</strong>, <em>by Jordan Ellenberg</em></h5>
                <ul><li style={{color: "#d1d1d1"}}>a literally and figuratively eye-opening look at math's everyday disguises. made me incredulously say all of the question words, to nobody in particular, multiple times.</li></ul>
                
                {/*<h5 style={{color: "pink"}}><strong>e</strong>, <em>by f</em></h5>*/}
                {/*<ul><li style={{color: "#d1d1d1"}}>e</li></ul>*/}
                
                {/*<h5 style={{color: "pink"}}><strong>e</strong>, <em>by f</em></h5>*/}
                {/*<ul><li style={{color: "#d1d1d1"}}>e</li></ul>*/}
                
            </div>
        </div>
        <hr style={{width: "95%"}}/>
        <br/><br/>
        <div className="flex-row">
            <button className="muted-button" style={{marginBottom: "1rem"}} onClick={() => navigate("/", {state: {skipIntro: true}})}>return</button>
        </div>
        </>
    )
}