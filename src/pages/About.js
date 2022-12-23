import React, { useState } from 'react';
import {useNavigate} from "react-router";

export const About = () => {
    const navigate = useNavigate()

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh"}}>
            <h1>[about]</h1>
            <p style={{textAlign: "center"}}>here are a few quick facts about me, scattered all over the map!</p>
            <hr style={{width: "95%"}} />
            <br/>
            <div className="flex-row">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "40vw", marginRight: "3vw", borderRadius: "1rem", border: "2px solid cornflowerblue"}}>
                    <h3 style={{fontSize: "4vh"}}>verbs</h3>
                    <ul style={{fontSize: "2vh", fontWeight: "500", columns: 2}}>
                        <li>nonbinary indian-american</li>
                        <li>scarf enthusiast</li>
                        <li>amateur pianist</li>
                        <li>math & CS nerd</li>
                        <li>climatology nerd</li>
                        <li>linguistics nerd</li>
                        <li>queer theory nerd</li>
                        <li>game design nerd</li>
                        <li>devourer of books of all sorts</li>
                        <li><strong>rohan_malik@ryecountryday.org</strong></li>
                    </ul>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "40vw", marginLeft: "3vw", borderRadius: "1rem", border: "2px solid cornflowerblue"}}>
                    <h3 style={{fontSize: "4vh"}}>verbs</h3>
                    <ul style={{fontSize: "2vh", fontWeight: "500"}}>
                        <li>thinks too much (or maybe enough)</li>
                        <li>loves cats (and dogs, and birds, and turtles, and everything)</li>
                        <li>has a stutter</li>
                        <li>doesn't love new york city (except central park)</li>
                        <li>spends far too long folding paper into various forms</li>
                        <li>enjoys indie game soundtracks</li>
                    </ul>
                </div>
            </div>
            <br/>
            <br/>
            <div className="flex-row">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "30vw", marginRight: "3vw", borderRadius: "1rem", border: "2px solid cornflowerblue"}}>
                    <h3 style={{fontSize: "4vh"}}>adjectives</h3>
                    <ul style={{fontSize: "2vh", fontWeight: "500"}}>
                        <li>curious</li>
                        <li>quietly loud</li>
                        <li>optimistic</li>
                        <li>pessimistic</li>
                        <li>indecisive</li>
                        <li>slightly perfectionist</li>
                        <li>or perhaps not</li>
                    </ul>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "50vw", marginLeft: "3vw", borderRadius: "1rem", border: "2px solid cornflowerblue"}}>
                    <h3 style={{fontSize: "4vh"}}>favorites</h3>
                    <ul style={{fontSize: "2vh", fontWeight: "500"}}>
                        <li>favorite tree: weeping cherry</li>
                        <li>favorite herb: cilantro</li>
                        <li>favorite freeway interchange: diverging diamond</li>
                        <li>favorite worst interstate: I-95</li>
                        <li>favorite letter: e (2.7182818459045...)</li>
                        <li>favorite origami paper: tissue-foil</li>
                    </ul>
                </div>
            </div>
            <br/><br/>
            <hr style={{width: "95%"}}/>
            <br/><br/>
            <button className="muted-button" style={{marginBottom: "1rem"}} onClick={() => navigate("/", {state: {skipIntro: true}})}>return</button>
        </div>
    )
}