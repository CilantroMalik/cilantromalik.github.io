import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";

export const About = () => {
    const navigate = useNavigate()
    const [aboutHover, setAboutHover] = useState(false)
    const [aboutHover2, setAboutHover2] = useState(false)
    const [aboutHover3, setAboutHover3] = useState(false)
    const [aboutHover4, setAboutHover4] = useState(false)
    const [appear, setAppear] = useState([0, 0, 0, 0])
    const [mainOpacity, setMainOpacity] = useState(0)

    useEffect(() => {
        setTimeout(() => setMainOpacity(1), 300)
        setTimeout(() => {
            setAppear([1, 0, 0, 0])
            setTimeout(() => {
                setAppear([1, 1, 0, 0])
                setTimeout(() => {
                    setAppear([1, 1, 1, 0])
                    setTimeout(() => {
                        setAppear([1, 1, 1, 1])
                    }, 400)
                }, 400)
            }, 400)
        }, 600)
    }, [setAppear])

    const returnHome = () => {
        setMainOpacity(0)
        setTimeout(() => navigate("/", {state: {skipIntro: true}}), 600)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2vh", opacity: mainOpacity, transition: "opacity 0.5s ease"}}>
            <h1 style={{fontWeight: "800"}}>[about]</h1>
            <p style={{textAlign: "center"}}>here are a few quick facts about me, scattered all over the map!</p>
            <hr style={{width: "95%"}} />
            <br/>
            <div className="flex-row">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: aboutHover ? "51vw" : (aboutHover2 ? "21vw" : "41vw"), marginRight: "2vw", borderRadius: "1rem", border: "2px solid cornflowerblue", padding: "0.5rem", transition: "all 0.5s ease", opacity: appear[0] === 1 ? "1" : "0"}}
                     onMouseEnter={() => setAboutHover(true)} onMouseLeave={() => setAboutHover(false)}>
                    <h3 style={{fontSize: "4vmin"}}>nouns</h3>
                    <ul style={{fontSize: "2vmin", fontWeight: "500"}}>
                        <li>nonbinary indian-american</li>
                        <li>scarf enthusiast</li>
                        <li>amateur pianist</li>
                        <li>math & CS nerd</li>
                        <li>urbanism nerd</li>
                        <li>linguistics nerd</li>
                        <li>game design nerd</li>
                        <li>devourer of books of all sorts</li>
                    </ul>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: aboutHover ? "31vw" : (aboutHover2 ? "61vw" : "41vw"), marginLeft: "2vw", borderRadius: "1rem", border: "2px solid cornflowerblue", padding: "0.5rem", transition: "all 0.5s ease", opacity: appear[1] === 1 ? "1" : "0"}}
                     onMouseEnter={() => setAboutHover2(true)} onMouseLeave={() => setAboutHover2(false)}>
                    <h3 style={{fontSize: "4vmin"}}>verbs</h3>
                    <ul style={{fontSize: "2vmin", fontWeight: "500"}}>
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
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: aboutHover3 ? "51vw" : (aboutHover4 ? "16vw" : "31vw"), marginRight: "2vw", borderRadius: "1rem", border: "2px solid cornflowerblue", padding: "0.5rem", transition: "all 0.5s ease", opacity: appear[2] === 1 ? "1" : "0"}}
                     onMouseEnter={() => setAboutHover3(true)} onMouseLeave={() => setAboutHover3(false)}>
                    <h3 style={{fontSize: "4vmin"}}>adjectives</h3>
                    <ul style={{fontSize: "2vmin", fontWeight: "500"}}>
                        <li>curious</li>
                        <li>quietly loud</li>
                        <li>optimistic</li>
                        <li>pessimistic</li>
                        <li>indecisive</li>
                        <li>slightly perfectionist</li>
                        <li>or perhaps not</li>
                    </ul>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: aboutHover3 ? "31vw" : (aboutHover4 ? "66vw" : "51vw"), marginLeft: "2vw", borderRadius: "1rem", border: "2px solid cornflowerblue", padding: "0.5rem", transition: "all 0.5s ease", opacity: appear[3] === 1 ? "1" : "0"}}
                     onMouseEnter={() => setAboutHover4(true)} onMouseLeave={() => setAboutHover4(false)}>
                    <h3 style={{fontSize: "4vmin"}}>favorites</h3>
                    <ul style={{fontSize: "2vmin", fontWeight: "500"}}>
                        <li>favorite tree: weeping cherry</li>
                        <li>favorite herb: cilantro</li>
                        <li>favorite highway interchange: diverging diamond</li>
                        <li>favorite worst interstate: I-95</li>
                        <li>favorite letter: e (2.7182818459045...)</li>
                        <li>favorite origami paper: tissue-foil</li>
                    </ul>
                </div>
            </div>
            <br/><br/>
            <hr style={{width: "95%"}}/>
            <br/><br/>
            <button className="muted-button" style={{marginBottom: "1rem"}} onClick={returnHome}>return</button>
        </div>
    )
}