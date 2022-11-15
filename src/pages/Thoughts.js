import React, { useState } from 'react';
import {useNavigate} from "react-router";

export const Thoughts = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [modal, setModal] = useState("")
    const navigate = useNavigate()

    return (<>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", filter: modal !== "" ? "blur(30px)" : "blur(0)", opacity: modal === "" ? 1 : 0.4, transition: "filter 0.6s ease-out"}}>
            <h1>[thoughts]</h1>
            <p style={{textAlign: "center"}}>contained here are thoughts, ramblings, mental snapshots, and the like, on various topics. <br /> select a topic to view a piece of writing of some nonzero length.</p>
            <hr style={{width: "95%"}} />
            <br/>
            <h3 style={{color: hover1 ? "white" : "#8a8a8a", transition: "color 0.6s ease-in-out", backgroundColor: "#323757", borderRadius: "10px", padding: "2vh 8vh", marginBottom: 0}} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} onClick={() => setModal("weather")}>reflections on weather</h3>
            <h3 style={{color: hover2 ? "white" : "#8a8a8a", transition: "color 0.6s ease-in-out", backgroundColor: "#323757", borderRadius: "10px", padding: "2vh 8vh", marginBottom: 0}} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} onClick={() => setModal("gender")}>reflections on gender</h3>
            <h3 style={{color: hover3 ? "white" : "#8a8a8a", transition: "color 0.6s ease-in-out", backgroundColor: "#323757", borderRadius: "10px", padding: "2vh 8vh"}} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} onClick={() => setModal("time")}>reflections on time</h3>
            <br/>
            <h4>[more to come, subject to the inconstant ebb and flow of words]</h4>
            <br/>
            <button className="muted-button" onClick={() => navigate("/", {state: {skipIntro: true}})}>return</button>
        </div>
        { modal !== "" &&
            <div style={{borderRadius: "2rem", position: "absolute", top: "2vh", left: "24vw", width: "50%", backgroundColor: "#262a41", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2vh",  opacity: modal !== "" ? 1 : 0, transition: "opacity 0.6s ease-in"}}>
                <h2 style={{textAlign: "center", fontFamily: "IBM Plex Serif", fontWeight: "800"}}>{modal === "weather" && "reflections on weather"}{modal === "gender" && "reflections on gender"}{modal === "time" && "reflections on time"}</h2>
                <hr style={{width: "95%"}}/>
                <br/>
                <div style={{fontSize: "1.2rem", fontWeight: "600", fontFamily: "IBM Plex Serif", color: "#b0b0b0", lineHeight: "2rem"}}>
                    {modal === "gender" && <p>
                        we live in a world of binaries. man and woman, black and white, asian and american, a vast array of interdependent pillars that form a rigid structure whose foundations are built upon the core human desire for organization, for neatness, for simplicity. bearing the immense weight of the millenia of history that constructed it, this structure stands firm in the pantheon of modern society, an idyllic monument to humanity’s greatest achievement: its relentless, unfeeling, absolute classification of continuous, infinite-dimensional humans into discrete, finite-dimensional spaces. mathematics does not permit unjustified morphisms of the continuous into the discrete nor of the infinite into the finite; yet the unspoken logic of our society, which we tacitly accept as infallible, fails to abide by the very axioms of reason on which it claims to base itself.
                        <br/>indeed, gender falls prey to the very same foundational hypocrisies. whether conflicting standards of clothing that create obvious contradictions when considering multicultural perspectives, or profoundly harmful expectations of behavior that cause irreparable damage to young and old people alike, gender presents a coldly efficient guise under which to exercise control, to propagate the desires of a few through the nameless vessels of the societal collective, an infinity of individual infinitesimals that sum through the magic of mathematics to an omnipotent whole.
                        <br/>in quantum mechanics, a superposition state lies neither at 0 nor 1, but somewhere in the dimensionless space between. this is my state of being, a being suspended in limbo, constantly pulled by omnipresent forces to collapse into the stability of the binary but desperate to resist, to find certainty and resolution in this fundamentally uncertain state. yet, i still find solace in the fact that now, having made the quantum leap, at least my desperation has directionality: some sense of momentum, inertia, those fundamental properties of matter i had failed to possess, for after all, a collection of amalgamated falsehoods cannot matter.
                        <br/>—
                        <br/>you stumble upon a fork in the road. it’s getting dark, the sun lighting up the sky oranges and turquoises and purples, and you realize you’ve been out a bit too late. you want to look up and admire the sunset, just for a brief moment, but you can only look forward, your mind locked in an unseen embrace, hopelessly enthralled with the bifurcating path before you. standing, contemplating, you stare deep into the waning day, your eyes following the twin roads as they slowly diverge, each vanishing into their own slice of the horizon. paralyzed, your mind an infinity mirror reflecting on itself, refracting your already jumbled thoughts into something naggingly familiar yet frustratingly unrecognizable, you resolve to make a decision.
                        <br/>thus you resolve, but you were never cut out for assertiveness. sensing that you may not truly have the strength to decide, you look to the chromatic skies for guidance. but the moment’s gone: the forsaken heavens dark now, fading to gray and inexorably to black, you realize that time will not stop for you, that the light will continue to recede faster than you could ever run. yet, you were never one to stay within the boundaries. you slowly look forward once again, because there’s nothing for you up there anymore. you missed this moment, but, you tell yourself, you won’t miss the next. so, taking one last look at the horizon, the bifurcating paths in front of you winding away past that ethereal boundary, you close your eyes, turn around, and run the other way. run fast, as fast as the light that passed you by, so maybe you can catch its chromaticism one last time.
                        <br/>—
                        <br/>the uncertainty coalesces into a cloud, blinding yet comforting, enveloping me in a warmth that creeps into my soul, thawing it only to freeze it still. evaporating just as quickly, it leaves behind a crystalline lattice caught between two states of matter, mattering and not mattering, buoyant with the jet stream of newfound freedom but chained by the dread of ghosts unsatisfied, ghosts born of incompleteness but unwilling to accept incompleteness for an answer. they cry, restless, clamoring to be heard, demanding to be listened to, begging for resolution, but they may never find it: because certainty is a human right, but they are not human.
                    </p>}
                    {modal === "weather" && <p>
                        rising from bed, i gaze half-awake out of my window. the wind blew fiercely last night, its insistent exhales scaring the feeble leaves off the trees, the last remnants of color in this fading world falling to the shivering ground. their incendiary reds and yellows and oranges, fueled by the unrelenting wind, set the forest ablaze, a faint beacon of light illuminating the still-dark sky. i don’t know it, but the crisp morning air is nearly freezing, starved for heat despite the fire raging below, and when i step outside, i too find myself wishing for the sun to alleviate the dread seeping into my bones.
                        <br/>—
                        <br/>halfway across the world, india is experiencing its own dread as the thundering monsoons envelop its coasts in an impossibly vast deluge of water. they don’t know it, but in a few days, their streets will be flooded, their homes engulfed, their schools overrun with water, the creator, preserver, and destroyer of life. and when they step outside, their knees barely above the surface, they will look up at the sky and contemplate their place in such an unfathomably massive world. inundated with thirty inches of rain, with months more on the way, they’ll turn their eyes forward and continue on, wading through the floodwaters. because looking up won’t do any good—it’ll only let the elusive sun burn their eyes.
                        <br/>—
                        <br/>hours pass, and the sun finally rises, then sets just as quickly. the divinely ordained processes of the cosmos, on scales astronomically out of reach of the insignificant human realm, silently rob us of our daylight minute by minute, as the long days of summer inexorably cede to the fleeting transience of winter. can they really be called days if sixteen hours of twenty-four are spent in darkness?
                        <br/>weeks pass, and daylight hours wane shorter and shorter still. the cold seeps into the deepest recesses of my being, my heart dropping with the temperature readings on the forecast and its beat slowing in the frigid reality that has descended upon this corner of the world. from time to time, the world is blanketed in white, the bashful sun reflecting off of its newfound crystalline coating before quickly slipping below the horizon. time slows to an excruciating halt, the sun rising hours after i awake and setting long before i sleep, leaving me to face the enveloping darkness for heartbreakingly interminable months, my resolve sustained only by the paradoxically striking beauty of this post-apocalyptic winter, the tranquil landscape of snow-capped trees and glistening ice nearly making me forget the biting cold that birthed them. i wasn’t built for this - but just as the warmth of summer faded away, so will the winter. the snow will melt, the cold will recede, the days will lengthen, and having taken enough respite from its constant trek forward, time will begin to run again at its relentless pace.
                        <br/>months pass, and the rains pepper the worn ground, satiating once again the life that had been suffocated by snow and immobilized by cold for so long. just as the once-plentiful foliage emerges from the shells in which they have been hiding, unfurling their petals to the primal spring of water that gives them sustenance, i too cautiously peek out from my tightly wrapped scarf, regaining the strength to thrive again, to cast away the ghosts that i allowed inside with my walls weakened by the frigid fires of months past. now, with moisture-laden air carrying long-lost warmth and the promise of plentiful rain to nourish the budding flora, i look out of my window with a different kind of longing. for even though i have shed countless tears, i know that i’m not alone - because whether they’re tears of pain or tears of joy, the sky cries too.
                    </p>}
                    {modal === "time" && <p>
                        time should be charged with speeding by the relevant traffic authority.
                    </p>}
                </div>
                <br/>
                <hr style={{width: "95%"}}/>
                <br/>
                <div className="flex-row">
                    <button style={{fontFamily: "IBM Plex Serif"}} className="muted-button" onClick={() => setModal("")}>return</button>
                </div>
            </div>
        }
    </>)
}