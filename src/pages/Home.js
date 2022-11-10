import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import image1 from '../assets/nameFrames/001.png'; import image2 from '../assets/nameFrames/002.png'; import image3 from '../assets/nameFrames/003.png'; import image4 from '../assets/nameFrames/004.png'; import image5 from '../assets/nameFrames/005.png'; import image6 from '../assets/nameFrames/006.png'; import image7 from '../assets/nameFrames/007.png'; import image8 from '../assets/nameFrames/008.png'; import image9 from '../assets/nameFrames/009.png'; import image10 from '../assets/nameFrames/010.png'
import image11 from '../assets/nameFrames/011.png'; import image12 from '../assets/nameFrames/012.png'; import image13 from '../assets/nameFrames/013.png'; import image14 from '../assets/nameFrames/014.png'; import image15 from '../assets/nameFrames/015.png'; import image16 from '../assets/nameFrames/016.png'; import image17 from '../assets/nameFrames/017.png'; import image18 from '../assets/nameFrames/018.png'; import image19 from '../assets/nameFrames/019.png'; import image20 from '../assets/nameFrames/020.png'
import image21 from '../assets/nameFrames/021.png'; import image22 from '../assets/nameFrames/022.png'; import image23 from '../assets/nameFrames/023.png'; import image24 from '../assets/nameFrames/024.png'; import image25 from '../assets/nameFrames/025.png'; import image26 from '../assets/nameFrames/026.png'; import image27 from '../assets/nameFrames/027.png'; import image28 from '../assets/nameFrames/028.png'; import image29 from '../assets/nameFrames/029.png'; import image30 from '../assets/nameFrames/030.png'
import image31 from '../assets/nameFrames/031.png'; import image32 from '../assets/nameFrames/032.png'; import image33 from '../assets/nameFrames/033.png'; import image34 from '../assets/nameFrames/034.png'; import image35 from '../assets/nameFrames/035.png'; import image36 from '../assets/nameFrames/036.png'; import image37 from '../assets/nameFrames/037.png'; import image38 from '../assets/nameFrames/038.png'; import image39 from '../assets/nameFrames/039.png'; import image40 from '../assets/nameFrames/040.png'
import image41 from '../assets/nameFrames/041.png'; import image42 from '../assets/nameFrames/042.png'; import image43 from '../assets/nameFrames/043.png'; import image44 from '../assets/nameFrames/044.png'; import image45 from '../assets/nameFrames/045.png'; import image46 from '../assets/nameFrames/046.png'; import image47 from '../assets/nameFrames/047.png'; import image48 from '../assets/nameFrames/048.png'; import image49 from '../assets/nameFrames/049.png'; import image50 from '../assets/nameFrames/050.png'
import image51 from '../assets/nameFrames/051.png'; import image52 from '../assets/nameFrames/052.png'; import image53 from '../assets/nameFrames/053.png'; import image54 from '../assets/nameFrames/054.png'; import image55 from '../assets/nameFrames/055.png'; import image56 from '../assets/nameFrames/056.png'; import image57 from '../assets/nameFrames/057.png'; import image58 from '../assets/nameFrames/058.png'; import image59 from '../assets/nameFrames/059.png'; import image60 from '../assets/nameFrames/060.png'
import image61 from '../assets/nameFrames/061.png'; import image62 from '../assets/nameFrames/062.png'; import image63 from '../assets/nameFrames/063.png'; import image64 from '../assets/nameFrames/064.png'; import image65 from '../assets/nameFrames/065.png'; import image66 from '../assets/nameFrames/066.png'; import image67 from '../assets/nameFrames/067.png'; import image68 from '../assets/nameFrames/068.png'; import image69 from '../assets/nameFrames/069.png'; import image70 from '../assets/nameFrames/070.png'
import image71 from '../assets/nameFrames/071.png'; import image72 from '../assets/nameFrames/072.png'; import image73 from '../assets/nameFrames/073.png'; import image74 from '../assets/nameFrames/074.png'; import image75 from '../assets/nameFrames/075.png'; import image76 from '../assets/nameFrames/076.png'; import image77 from '../assets/nameFrames/077.png'; import image78 from '../assets/nameFrames/078.png'; import image79 from '../assets/nameFrames/079.png'; import image80 from '../assets/nameFrames/080.png'
import image81 from '../assets/nameFrames/081.png'; import image82 from '../assets/nameFrames/082.png'; import image83 from '../assets/nameFrames/083.png'; import image84 from '../assets/nameFrames/084.png'; import image85 from '../assets/nameFrames/085.png'; import image86 from '../assets/nameFrames/086.png'; import image87 from '../assets/nameFrames/087.png'; import image88 from '../assets/nameFrames/088.png'; import image89 from '../assets/nameFrames/089.png'; import image90 from '../assets/nameFrames/090.png'
import image91 from '../assets/nameFrames/091.png'; import image92 from '../assets/nameFrames/092.png'; import image93 from '../assets/nameFrames/093.png'; import image94 from '../assets/nameFrames/094.png'; import image95 from '../assets/nameFrames/095.png'; import image96 from '../assets/nameFrames/096.png'; import image97 from '../assets/nameFrames/097.png'; import image98 from '../assets/nameFrames/098.png'; import image99 from '../assets/nameFrames/099.png'; import image100 from '../assets/nameFrames/100.png'
import image101 from '../assets/nameFrames/101.png'; import image102 from '../assets/nameFrames/102.png'; import image103 from '../assets/nameFrames/103.png'; import image104 from '../assets/nameFrames/104.png'; import image105 from '../assets/nameFrames/105.png'; import image106 from '../assets/nameFrames/106.png'; import image107 from '../assets/nameFrames/107.png'; import image108 from '../assets/nameFrames/108.png'; import image109 from '../assets/nameFrames/109.png'; import image110 from '../assets/nameFrames/110.png'
import image111 from '../assets/nameFrames/111.png'; import image112 from '../assets/nameFrames/112.png'; import image113 from '../assets/nameFrames/113.png'; import image114 from '../assets/nameFrames/114.png'; import image115 from '../assets/nameFrames/115.png'; import image116 from '../assets/nameFrames/116.png'; import image117 from '../assets/nameFrames/117.png'; import image118 from '../assets/nameFrames/118.png'; import image119 from '../assets/nameFrames/119.png'; import image120 from '../assets/nameFrames/120.png'
import image121 from '../assets/nameFrames/121.png'; import image122 from '../assets/nameFrames/122.png'; import image123 from '../assets/nameFrames/123.png'; import image124 from '../assets/nameFrames/124.png'; import image125 from '../assets/nameFrames/125.png'; import image126 from '../assets/nameFrames/126.png'; import image127 from '../assets/nameFrames/127.png'; import image128 from '../assets/nameFrames/128.png'; import image129 from '../assets/nameFrames/129.png'; import image130 from '../assets/nameFrames/130.png'
import image131 from '../assets/nameFrames/131.png'; import image132 from '../assets/nameFrames/132.png'; import image133 from '../assets/nameFrames/133.png'; import image134 from '../assets/nameFrames/134.png'; import image135 from '../assets/nameFrames/135.png'; import image136 from '../assets/nameFrames/136.png'; import image137 from '../assets/nameFrames/137.png'; import image138 from '../assets/nameFrames/138.png'; import image139 from '../assets/nameFrames/139.png'; import image140 from '../assets/nameFrames/140.png'
import image141 from '../assets/nameFrames/141.png'; import image142 from '../assets/nameFrames/142.png'; import image143 from '../assets/nameFrames/143.png'; import image144 from '../assets/nameFrames/144.png'; import image145 from '../assets/nameFrames/145.png'; import image146 from '../assets/nameFrames/146.png'; import image147 from '../assets/nameFrames/147.png'; import image148 from '../assets/nameFrames/148.png'; import image149 from '../assets/nameFrames/149.png'; import image150 from '../assets/nameFrames/150.png'
import arrow from '../assets/arrow.png'

const images = [image1,   image2,   image3,   image4,   image5,   image6,   image7,   image8,   image9,   image10,
                image11,  image12,  image13,  image14,  image15,  image16,  image17,  image18,  image19,  image20,
                image21,  image22,  image23,  image24,  image25,  image26,  image27,  image28,  image29,  image30,
                image31,  image32,  image33,  image34,  image35,  image36,  image37,  image38,  image39,  image40,
                image41,  image42,  image43,  image44,  image45,  image46,  image47,  image48,  image49,  image50,
                image51,  image52,  image53,  image54,  image55,  image56,  image57,  image58,  image59,  image60,
                image61,  image62,  image63,  image64,  image65,  image66,  image67,  image68,  image69,  image70,
                image71,  image72,  image73,  image74,  image75,  image76,  image77,  image78,  image79,  image80,
                image81,  image82,  image83,  image84,  image85,  image86,  image87,  image88,  image89,  image90,
                image91,  image92,  image93,  image94,  image95,  image96,  image97,  image98,  image99,  image100,
                image101, image102, image103, image104, image105, image106, image107, image108, image109, image110,
                image111, image112, image113, image114, image115, image116, image117, image118, image119, image120,
                image121, image122, image123, image124, image125, image126, image127, image128, image129, image130,
                image131, image132, image133, image134, image135, image136, image137, image138, image139, image140,
                image141, image142, image143, image144, image145, image146, image147, image148, image149, image150]

const s = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
const s5 = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

export const Home = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [treeProgress, setTreeProgress] = useState(0);
    const [nameProgress, setNameProgress] = useState(0);
    const [showingInst, setShowingInst] = useState(false);
    const [hoverPage, setHoverPage] = useState("")
    const [hoverShowing, setHoverShowing] = useState(false)
    const [introDone, setIntroDone] = useState(false);
    const [introInProg, setIntroInProg] = useState(false);
    const [navigating, setNavigating] = useState(false)

    const navigate = useNavigate()
    const lb = "/books"
    const lt = "/thoughts"
    const lp = "/projects"
    const la = "/about"
    
    const updateHover = (str) => {
        setHoverPage(str)
        setHoverShowing(true)
    }

    const updatePos = () => {
        setScrollPos(Math.round(window.scrollY))
        console.log(scrollPos)
        if (!introDone && !introInProg && scrollPos > 200) {
            setIntroDone(true)
        }
        if (introDone && scrollPos < 800) {
            setShowingInst(false)
        } else if (introDone && scrollPos > 800) {
            setShowingInst(true)
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', updatePos)
        updatePos()
        return () => window.removeEventListener('scroll', updatePos)
    })

    useEffect(() => {
        console.log("effecting")
        window.scrollTo({top: 0, behavior: "instant"})
    }, [])

    const traverseTree = (link) => {
        window.scrollTo({top: 1300, behavior: "instant"})
        window.scrollTo({top: 0, behavior: "smooth"})
        setTimeout(() => {
            setNavigating(true)
        }, 400)
        setTimeout(() => {
            navigate(link)
        }, 1000);
    }

    const scrollDown = async () => {
        setIntroInProg(true)
        setNameProgress(0)
        setTreeProgress(0)
        setIntroDone(false)
        window.scrollTo({top: 600, behavior: "smooth"})
        const int = setInterval(() => {
            setTreeProgress(t => t+1)
        }, 75)
        setTimeout(async () => {
            clearInterval(int)
            const int2 = setInterval(() => {
                setNameProgress(n => n+3)
            }, 40)
            setTimeout(() => {
                setNameProgress(149)
                clearInterval(int2)
                setShowingInst(true)
                window.scrollTo({top: 1300, behavior: "smooth"})
                setTimeout(() => { 
                    setIntroDone(true)
                    setIntroInProg(false)
                }, 1000);
            }, 2000)
        }, 3000);
    }

    const g = (str) => { return <span style={{color: "#70db70"}}>{str}</span> }
    const p = (str, link) => { return <span style={{color: "#ff99dd"}} onClick={() => traverseTree(link)} onMouseEnter={() => updateHover("[" + link.substring(1) + "]")} onMouseLeave={() => setHoverShowing(false)}><strong>{str}</strong></span> }

    //const a = (el, n, len) => { return <>{scrollPos > 120 + 90*n ? el : <>{'\u00A0'.repeat(len)}</>}</> }
    const a = (el, n, len) => { return introDone ? <>{scrollPos > 120 + 30*n ? el : <>{'\u00A0'.repeat(len)}</>}</> : <>{treeProgress > n ? el : <>{'\u00A0'.repeat(len)}</>}</> }
    // {a(<></>,)}

    // 100 characters per line, 20 lines
    return (<>
        <br /><br /><br /><br /><br />
        <div style={{opacity: navigating ? 0 : 1}}>
            <h1 style={{textAlign: "center", opacity: scrollPos > 30 ? 0 : 1, transition: "opacity 0.5s ease-out"}}>welcome!</h1>
            <h4 style={{textAlign: "center", opacity: scrollPos > 70 ? 0 : 1, transition: "opacity 0.5s ease-out"}}>i'm glad to see you here.</h4>
            <p style={{textAlign: "center", opacity: scrollPos > 110 ? 0 : 1, transition: "opacity 0.5s ease-out", marginLeft: "1rem", marginRight: "1rem"}}>this page houses my various projects-in-being, projects-to-be, and projects-once-were, as well as assorted thoughts and ramblings i've projected into cyberspace that found their way here. please enjoy your stay, and wherever your next destination may be, enjoy the journey :)</p>
            <br />
            <hr style={{width: "95%", opacity: scrollPos > 150 ? 0 : 1, transition: "opacity 0.5s ease-out"}} />
            <br /><br />
            <div style={{alignItems: "center", display: "flex", flexDirection: "column", opacity: scrollPos > 90 ? 0 : 1, transition: "opacity 0.5s ease-out"}}>
                <img style={{width: "8vh"}} src={arrow} alt="" />
                <br />
                <p><em>[scroll down, or]</em></p>
                <button style={{zIndex: "27", width: "8vw", height: "8vh", fontSize: "3vh"}} onClick={scrollDown}>enter</button>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        <div style={{width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, opacity: navigating ? 0 : 1, transition: "opacity 0.8s ease-out"}}>
            <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "fixed", bottom: 0, left: 0, padding: "2vh"}}>
                <p style={{fontFamily: "Menlo", fontSize: "1.5vw", textAlign: "left", marginTop: 0, marginBottom: 0, lineHeight: "3.3vh", color: "#7e5935"}}>
                    <span> {s}{s}{s}&nbsp;&nbsp;&nbsp;{a(<>_</>,26,1)}{a(<>____</>,25,4)}{a(<>====</>,24,4)}{a(<>==__</>,23,4)}{a(<>__</>,22,2)}{s}{s}{s}{s}{s}&nbsp;&nbsp; </span> <br />  
                    <span> {s}{s}{s}&nbsp;&nbsp;{a(<>//</>,26,2)}{a(<>====</>,25,4)}{a(<>====</>,24,4)}{a(<>====</>,23,4)}{a(<>==\</>,22,3)}{s5}&nbsp;{a(<>======</>,22,6)}{a(<>___</>,23,3)}{s}{s}{s}{s5}&nbsp; </span> <br />
                    <span> {s}{s}{s5}&nbsp;&nbsp;&nbsp;{a(<>__—</>,27,3)}{a(<>///</>,26,3)}{a(<>====</>,25,4)}{a(<>----</>,24,4)}{a(<>--==</>,23,4)}{a(<>====</>,22,4)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>//</>,21,2)}&nbsp;&nbsp;{a(<>`==</>,22,3)}{a(<>====</>,23,4)}{a(<>===</>,24,3)}{s}{s}{s}&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}{s5}&nbsp;&nbsp;{a(<>===</>,27,3)}{a(<>===</>,26,3)}&nbsp;&nbsp;&nbsp;{a(<>__/</>,25,3)}{s5}&nbsp;&nbsp;&nbsp;{a(<>\\\\__//</>,21,8)}{s5}&nbsp;{a(<>\</>,24,1)}&nbsp;&nbsp;&nbsp;{a(<>`=====</>,24,6)}{a(<>==–––</>,25,5)}{s}{s}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>===</>,28,3)}{a(<>===</>,27,3)}{a(<>=</>,26,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>/</>,26,1)}{s}{a(<>——</>,21,2)}{a(<>\|||||</>,20,6)}{s5}&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,25,1)}{s5}{a(<>|_</>,25,2)}{s5}&nbsp;{a(<>\</>,26,1)}{s}{s}&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;&nbsp;{a(<>=====</>,28,5)}{s5}&nbsp;{a(<>{g("##")}</>,27,2)}{s}{a(<>/</>,21,1)}&nbsp;&nbsp;&nbsp;{a(<>|||||\</>,19,6)}{s5}&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,26,1)}{s5}&nbsp;{a(<>\</>,25,1)}{s5}{a(<>{p("*",lp)}</>,27,1)}{a(<>\</>,26,1)}{a(<>{p("*",lp)}</>,27,1)}{s}{s}&nbsp; </span> <br />  
                    <span> {s}{s}{a(<>===</>,29,3)}&nbsp;&nbsp;&nbsp;{a(<>/</>,29,1)}{s5}{a(<>{g("#")}</>,28,1)}{s}{a(<>{g("##")}</>,22,2)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>\||||\</>,18,6)}{s}{s5}{a(<>{g("#")}</>,26,1)}{s5}{a(<>{p("*",lp)}</>,28,1)}{a(<>{p("*",lp)}</>,27,1)}{a(<>{p("*",lp)}</>,28,1)}{s}{s}&nbsp; </span> <br />
                    <span> {s}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>//</>,29,2)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>|</>,29,1)}{s5}&nbsp;{a(<>{g("#")}</>,29,1)}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,23,1)}{s5}&nbsp;&nbsp;&nbsp;{a(<>\\\\\__&nbsp;_____</>,17,13)}{s}{s}{s}{s5}&nbsp; </span> <br />
                    <span> {s}{s5}&nbsp;&nbsp;&nbsp;{a(<>//</>,30,2)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("##")}</>,30,2)}{s5}{a(<>{g("#")}</>,30,1)}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,24,1)}{s}{a(<>||||||//</>,16,8)}&nbsp;&nbsp;{a(<>`==</>,17,3)}{a(<>====__</>,18,6)}{s}{s}{s5}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s5}&nbsp;&nbsp;{a(<>||</>,30,2)}{s5}{a(<>{g("#")}</>,31,1)}{s5}{a(<>{g("#")}</>,31,1)}{s}{a(<>{g("#")}</>,25,1)}{s}{a(<>||||||/</>,15,7)}{s5}{a(<>\</>,18,1)}&nbsp;&nbsp;{a(<>=====</>,18,5)}{a(<>===</>,19,3)}{s}{s}{s5} </span> <br />
                    <span> {s}{s5}{a(<>{p("*",la)}</>,32,1)}{a(<>{p("*",la)}</>,31,1)}{a(<>|</>,30,1)}{a(<>{p("*",la)}</>,31,1)}{a(<>{p("*",la)}</>,32,1)}&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,32,1)}{s}{s5}&nbsp;{a(<>{g("#")}</>,26,1)}{s}&nbsp;{a(<>||||/\|</>,14,7)}{s5}{a(<>|</>,18,1)}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>\\</>,19,2)}{s}{s}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s5}{a(<>{p("*",la)}</>,33,1)}{a(<>{p("*",la)}</>,32,1)}{a(<>{p("*",la)}</>,31,1)}{a(<>{p("*",la)}</>,32,1)}{a(<>{p("*",la)}</>,33,1)}&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,33,1)}{s}{a(<>{g("##")}</>,18,2)}{a(<>{g("##")}</>,17,2)}{s5}&nbsp;&nbsp;{a(<>====</>,13,4)}&nbsp;&nbsp;&nbsp;{a(<>||||\/|</>,13,7)}{s5}{a(<>{g("##")}</>,19,2)}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>\\</>,20,2)}{a(<>___</>,21,3)}{a(<>{p("*",lt)}</>,22,1)}{a(<>{p("*",lt)}</>,23,1)}{s}{s5}&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s5}&nbsp;{a(<>{p("*",la)}</>,33,1)}{a(<>{p("*",la)}</>,33,1)}{a(<>{p("*",la)}</>,33,1)}{s}{a(<>{g("###")}</>,20,3)}{a(<>{g("##")}</>,19,2)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>\</>,16,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>_//</>,14,3)}&nbsp;&nbsp;{a(<>\\</>,13,2)}{a(<>__|||||||</>,12,9)}{s5}&nbsp;&nbsp;{a(<>{g("#")}</>,20,1)}{s}&nbsp;&nbsp;&nbsp;{a(<>{p("*",lt)}</>,22,1)}{a(<>{p("*",lt)}</>,23,1)}{s}{s5}&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}{s5}&nbsp;{a(<>{g("###")}</>,21,3)}{s5}&nbsp;&nbsp;{a(<>__====</>,15,6)}{a(<>===</>,14,3)}{s5}&nbsp;{a(<>\\\\\\\\\</>,11,9)}{s5}&nbsp;{a(<>{g("#")}</>,21,1)}{s5}{a(<>{g("##")}</>,11,2)}{s}{s}{s5}&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("##")}</>,22,2)}{s5}{a(<>__===</>,16,5)}{a(<>======</>,15,6)}{a(<>=´</>,14,2)}{s5}&nbsp;&nbsp;&nbsp;{a(<>|||||||||</>,10,9)}{s}{a(<>{g("#")}</>,10,1)}&nbsp;&nbsp;{a(<>{g("##")}</>,12,2)}{s}{s}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}{s5}{a(<>__==</>,17,4)}{a(<>======´</>,16,7)}&nbsp;&nbsp;&nbsp;{a(<>//</>,16,2)}{s5}&nbsp;&nbsp;&nbsp;{a(<>_</>,11,1)}{a(<>---</>,10,3)}{a(<>\\\\\\\\\_</>,9,10)}{s5}&nbsp;{a(<>__|</>,9,3)}{a(<>___</>,10,3)}{s5}{a(<>{g("####")}</>,13,4)}{s}{s5}&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;&nbsp;&nbsp;{a(<>_////´</>,17,6)}&nbsp;&nbsp;&nbsp;{a(<>/</>,17,1)}{s5}{a(<>{g("#")}</>,17,1)}{a(<>|</>,16,1)}{s5}&nbsp;&nbsp;&nbsp;{a(<>/</>,11,1)}{s5}{a(<>\\\\\\\\\\&nbsp;&nbsp;&nbsp;/=</>,8,15)}{a(<>===</>,9,3)}{a(<>===</>,10,3)}{a(<>\\</>,11,2)}&nbsp;{a(<>{g("##")}</>,12,2)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("##")}</>,14,2)}{s}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;&nbsp;{a(<>_///´</>,18,5)}{s5}{a(<>{g("#")}</>,18,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("##")}</>,18,2)}{s5}&nbsp;{a(<>{g("#")}</>,13,1)}{a(<>{g("##")}</>,12,2)}{s5}&nbsp;&nbsp;{a(<>\\\\\\\\\\&nbsp;//</>,7,13)}&nbsp;&nbsp;{a(<>{g("#")}</>,10,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>`--</>,11,3)}{a(<>__</>,12,2)}{s5}&nbsp;{a(<>{g("#")}</>,15,1)}{s}&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;&nbsp;{a(<>|--|</>,18,4)}{s5}&nbsp;{a(<>{g("#")}</>,19,1)}&nbsp;&nbsp;&nbsp;{a(<>{g("##")}</>,19,2)}{s5}&nbsp;{a(<>{g("#")}</>,14,1)}{a(<>{g("#")}</>,13,1)}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>||||||||||//</>,6,12)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,11,1)}{s5}&nbsp;{a(<>`\\</>,12,3)}{s5}&nbsp;{a(<>{g("#")}</>,16,1)}{s}&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}&nbsp;{a(<>//</>,19,2)}&nbsp;&nbsp;{a(<>\\</>,19,2)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,20,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{g("#")}</>,20,1)}{s5}&nbsp;&nbsp;{a(<>{g("#")}</>,14,1)}{s}{a(<>||/&nbsp;\|||||/</>,5,11)}{s5}&nbsp;{a(<>{g("#")}</>,12,1)}{s5}&nbsp;&nbsp;{a(<>|</>,13,1)}{s5}&nbsp;{a(<>{g("#")}</>,16,1)}{a(<>{g("#")}</>,17,1)}{s}&nbsp; </span> <br /> 
                    <span> {s}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{p("*",lb)}</>,20,1)}{a(<>/</>,19,1)}{a(<>{p("*",lb)}</>,20,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{p("*",lb)}</>,20,1)}{a(<>\</>,19,1)}{a(<>{p("*",lb)}</>,20,1)}{s5}&nbsp;&nbsp;{a(<>{g("#")}</>,21,1)}{s5}&nbsp;{a(<>{g("##")}</>,15,2)}{s}{a(<>||&nbsp;~&nbsp;||||||</>,4,11)}{s5}&nbsp;{a(<>{g("#")}</>,13,1)}{s5}&nbsp;{a(<>{p("*",lb)}</>,14,1)}{a(<>|</>,13,1)}{a(<>{p("*",lb)}</>,14,1)}{s5}&nbsp;{a(<>{g("#")}</>,17,1)}{s}&nbsp; </span> <br />
                    <span> {s}{s5}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{p("*",lb)}</>,21,1)}{a(<>{p("*",lb)}</>,20,1)}{a(<>{p("*",lb)}</>,21,1)}&nbsp;&nbsp;&nbsp;&nbsp;{a(<>{p("*",lb)}</>,21,1)}{a(<>{p("*",lb)}</>,20,1)}{a(<>{p("*",lb)}</>,21,1)}{s5}&nbsp;{a(<>{g("#")}</>,22,1)}{s5}&nbsp;{a(<>{g("#")}</>,16,1)}{s}&nbsp;&nbsp;{a(<>||\_/||||||</>,3,11)}{s}&nbsp;&nbsp;&nbsp;{a(<>{p("*",lb)}</>,15,1)}{a(<>{p("*",lb)}</>,14,1)}{a(<>{p("*",lb)}</>,15,1)}{s}{s5}&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}{s}{s}&nbsp;&nbsp;{a(<>{g("#")}</>,17,1)}{s}&nbsp;&nbsp;{a(<>|||||||||||</>,2,11)}{s}{s}{s}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}{s}{s}{s}&nbsp;&nbsp;&nbsp;{a(<>_////|||||\\\\_</>,1,15)}{s}{s}{s}&nbsp;&nbsp; </span> <br />
                    <span> {s}{s}{s}{s}{s}{a(<>__//////|||||\\\\\\__</>,0,21)}{s}{s}{s5}&nbsp;&nbsp;&nbsp;&nbsp; </span> <br />
                </p>
            </div>
        </div>
        <div style={{position: "fixed", top: "-8vh", right: "1rem"}}>
            {introDone ? <img src={images[Math.min(Math.max(Math.round((scrollPos-600)/4), 0), 149)]} alt="alt" style={{width: "32vw", height: "18vw"}}/>
            : <img src={images[Math.min(nameProgress, 149)]} alt="alt" style={{width: "32vw", height: "18vw"}}/> }
        </div>
        <div style={{position: "fixed", top: "8vh", left: "8vw", opacity: navigating ? 0 : 1, transition: "opacity 0.5s ease-out"}}>
            <h2 style={{opacity: hoverShowing ? 1 : 0, transition: "opacity 0.5s ease-in-out"}}><strong>{hoverPage}</strong></h2>
        </div>
        <div style={{position: "fixed", top: "18vh", right: "2vh"}}>
            <p style={{opacity: showingInst ? 1 : 0, transition: "opacity 0.5s ease-out", fontSize: "3vh"}}><em>(use the flowers to traverse the tree.)</em></p>
        </div>
    </>)
}