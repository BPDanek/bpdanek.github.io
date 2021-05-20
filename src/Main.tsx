import "./declaration.d.ts";
import React from "react";
import "./styles.css";
import Faceshot from "./assets/faceshot.png";
import LinkedIn from "./assets/linkedIn.png";
import GitHub from "./assets/github.png";
import Twitter from "./assets/twitter.png";
import Resume from "./assets/resumeIcon.png";
import Timeline from "./assets/timelineImage.png";

interface Props {}

interface State {}

export default class PageManager extends React.Component<Props, State> {
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
                <h2 className={"headline"}>Full stack software engineer, aspiring roboticist.</h2>
                <div className={"timeline"}>
                    <img className={"timeline-image"} src={Timeline}/>
                </div>
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
                    <a href={"https://github.com/BPDanek/bpdanek.github.io/blob/99c881403f2eda45a566b418d04254333d334990/src/assets/Benjamin_Danek_Resume_General.pdf"}>
                        <img className={"resume-icon"} src={Resume} alt={"Resume"}/>
                    </a>
                </div>
            </div>
        );
    }
}