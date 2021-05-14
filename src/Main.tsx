import "./declaration.d.ts";
import React from "react";
import "./styles.css";
import Faceshot from "./assets/faceshot.png";
import LinkedIn from "./assets/linkedIn.png";
import GitHub from "./assets/github.png";
import Twitter from "./assets/twitter.png";

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
                    <img src={Faceshot} alt={"Profile Photo"} className={"profile-photo"}/>
                </div>
                <h2 className={"headline"}>Full stack software engineer, aspiring roboticist.</h2>
                <div className={"links"}>
                    <h3>Any of these are good contacts:</h3>
                    <a href={"https://www.linkedin.com/in/benjaminpdanek/"}>
                        <img className={"linkedin-image"} src={LinkedIn}/>
                    </a>
                    <a href={"https://github.com/BPDanek"}>
                        <img className={"github-image"} src={GitHub}/>
                    </a>
                    <a href={"https://twitter.com/Benjamindanek"}>
                        <img className={"twitter-image"} src={Twitter}/>
                    </a>
                </div>
            </div>
        );
    }
}