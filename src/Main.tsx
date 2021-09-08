import "./declaration.d.ts";
import React from "react";
import "./styles.css";
import Faceshot from "./assets/faceshot.png";
import LinkedIn from "./assets/linkedIn.png";
import GitHub from "./assets/github.png";
import Twitter from "./assets/twitter.png";
import Resume from "./assets/resumeIcon.png";

import About from "./subsection/About";

export default class Main extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2 className={"welcome-message"}>Welcome! This website is under construction. </h2>
                <h1 className={"name-name"}><b>Benjamin Danek</b></h1>
                <div className={"profile-photo-wrapper"}>
                    <img className={"profile-photo"} src={Faceshot} alt={"Profile Photo"} />
                </div>
                <h2 className={"headline"}>Full stack software engineer, aspiring entrepreneur.</h2>
                {/*<div className={"timeline"}>*/}
                {/*    <img className={"timeline-image"} src={Timeline}/>*/}
                {/*</div>*/}
                <div className={"links"}>
                    <h3>Any of these are good contacts:</h3>
                    <a href={"https://www.linkedin.com/in/benjaminpdanek/"}>
                        <img className={"linkedin-image"} src={LinkedIn} alt={"LinkedIn"}/>
                    </a>
                    <a href={"https://github.com/BPDanek"}>
                        <img className={"github-image"} src={GitHub} alt={"Github"}/>
                    </a>
                    <a href={"https://twitter.com/Benjamindanek"}>
                        <img className={"twitter-image"} src={Twitter} alt={"Twitter"}/>
                    </a>
                    <a href={"https://github.com/BPDanek/bpdanek.github.io/blob/fast_update/src/assets/Benjamin_Danek_Resume_General.pdf"}>
                        <img className={"resume-icon"} src={Resume} alt={"Resume"}/>
                    </a>
                </div>
                {/*<div className={"subsections"}>*/}
                {/*    <About />*/}
                {/*</div>*/}
                {/*<Skills />*/}
            </div>
        );
    }
}
