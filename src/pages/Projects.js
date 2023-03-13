import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";

export const Projects = () => {
    const [proj, setProj] = useState("")
    const [proj2, setProj2] = useState("")
    const navigate = useNavigate()
    const [mainOpacity, setMainOpacity] = useState(0)

    useEffect(() => {
        setTimeout(() => setMainOpacity(1), 300)
    }, [setMainOpacity])

    const returnHome = () => {
        setMainOpacity(0)
        setTimeout(() => navigate("/", {state: {skipIntro: true}}), 600)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", opacity: mainOpacity, transition: "opacity 0.5s ease"}}>
            <h1 style={{fontWeight: "800"}}>[projects]</h1>
            <p style={{textAlign: "center"}}>here are brief descriptions of a few projects i've done and/or been a part of.<br /> feel free to explore, and if any of these interest you, feel free to reach out! i'm always down to talk about anything :)</p>
            <hr style={{width: "95%"}} />
            <br/>
            <div style={{backgroundColor: "#2b3d24", borderRadius: "1rem", height: proj === "qm" ? "30vh" : "10vh", width: "70%", fontSize: "1rem", padding: "0 2vh", transition: "height 0.5s ease-in-out"}}
                 onMouseEnter={() => {setProj("qm"); setTimeout(() => setProj2("qm"), 500)}} onMouseLeave={() => {setProj(""); setTimeout(() => setProj2(""), 500)}}>
                <h4 style={{fontSize: "1.3rem", textAlign: "center"}}>QuantumMessenger</h4>
                {proj === "qm" &&
                <p style={{opacity: proj2 === "qm" ? 1 : 0, transition: "opacity 1s ease"}}>A quantum-powered proof of concept messaging client that uses the BB84 protocol for quantum key distribution to ensure end-to-end encryption for messages. Built under the mentorship of Dr. Francisco Martín at IBM Quantum Research, and powered by <a href="https://qiskit.org/">Qiskit</a>. <br/> <br/> <em>QuantumMessenger can be found <a href="https://qm.twdl.us">here</a>.</em></p>
                }
            </div>
            <br/>
            <div style={{backgroundColor: "#2b3d24", borderRadius: "1rem", height: proj === "isfl" ? "30vh" : "10vh", width: "70%", fontSize: "1rem", padding: "0 2vh", transition: "height 0.5s ease-in-out"}}
                 onMouseEnter={() => {setProj("isfl"); setTimeout(() => setProj2("isfl"), 500)}} onMouseLeave={() => {setProj(""); setTimeout(() => setProj2(""), 500)}}>
                <h4 style={{fontSize: "1.3rem", textAlign: "center"}}>ISFL Fencing</h4>
                {proj === "isfl" &&
                <p style={{opacity: proj2 === "isfl" ? 1 : 0, transition: "opacity 1s ease"}}>A platform for viewing, reporting, and managing fencing league results and standings. With a minimalist interface that shows stats for teams, meets, and fencers, as well as enabling coaches to keep a record of completed meets, it provides a lightweight platform for fencers to scout opponents, see their hard-earned place in the rankings, and look back on the season once it's over. <br/><br/> <em>Testing build can be viewed <a href="https://rohanmalikrcds.github.io/ISFLFencingSite">here</a>.</em></p>
                }
            </div>
            <br/>
            <div style={{backgroundColor: "#2b3d24", borderRadius: "1rem", height: proj === "wyc" ? "30vh" : "10vh", width: "70%", fontSize: "1rem", padding: "0 2vh", transition: "height 0.5s ease-in-out"}}
                 onMouseEnter={() => {setProj("wyc"); setTimeout(() => setProj2("wyc"), 500)}} onMouseLeave={() => {setProj(""); setTimeout(() => setProj2(""), 500)}}>
                <h4 style={{fontSize: "1.3rem", textAlign: "center"}}>WatchYourCalendar</h4>
                {proj === "wyc" &&
                <p style={{opacity: proj2 === "wyc" ? 1 : 0, transition: "opacity 1s ease"}}>A multi-use iPhone and Apple Watch scheduling app that tries to be as convenient as possible while also being as specific and information-rich as possible. Designed for high school environments, it allows mindful management of classes, meetings, and other co-curricular activities while maintaining a minimalist UI and lightweight footprint — both in your pocket and at a glance on your wrist.<br/>Currently in use at Rye Country Day School, but can be adapted for nearly any schedule.</p>
                }
            </div>
            <br/>
            <hr style={{width: "90%"}}/>
            <h3>future endeavors</h3>
            <div style={{backgroundColor: "#2b3d24", borderRadius: "1rem", height: proj === "math" ? "30vh" : "10vh", width: "70%", fontSize: "1rem", padding: "0 2vh", transition: "height 0.5s ease-in-out"}}
                 onMouseEnter={() => {setProj("math"); setTimeout(() => setProj2("math"), 500)}} onMouseLeave={() => {setProj(""); setTimeout(() => setProj2(""), 500)}}>
                <h4 style={{fontSize: "1.3rem", textAlign: "center"}}>High-Dimensional Sandbox</h4>
                {proj === "math" &&
                <p style={{opacity: proj2 === "math" ? 1 : 0, transition: "opacity 1s ease"}}>A collection of mathematical curiosities, implemented as interactive sandboxes ripe for hands-on exploration. Really as much a reflection of my fascination with the little undiscovered wonders of math as of my desire to share that and put my own touch on it.<br/><br/><em>[coming soon to an internet near you.]</em></p>
                }
            </div>
            <br/><br/>
            <div className="flex-row">
                <button className="muted-button" style={{marginBottom: "2rem"}} onClick={returnHome}>return</button>
            </div>
        </div>
    )
}