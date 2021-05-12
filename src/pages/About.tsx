import React from "react";
import profile_photo from "../assets/profile_photo.png";
import "./page_styles.css"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {
}

export default class About extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    getName(): JSX.Element {
        return (
            <h2>
                Benjamin Danek
            </h2>
        )
    }

    getTitle(): JSX.Element {
        return (
            <div>
                <h4>
                    Student
                </h4>
                <h4>
                    Software Engineer
                </h4>
            </div>
        )
    }

    getAbstract(): JSX.Element {
        return(
            <div>
                <p>
                    I like to code, and show people how to code. Hey there where ya goin’, not exactly knowin’, who says you have to call just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear. He just keeps on movin’, ladies keep improvin’, every day is better than the last. New dreams and better scenes, and best of all I don’t pay property tax. Rollin’ down to Dallas, who’s providin’ my palace, off to New Orleans or who knows where. Places new and ladies, too, I’m B.J. McKay and this is my best friend Bear.

                    Hey there where ya goin’, not exactly knowin’, who says you have to call just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear. He just keeps on movin’, ladies keep improvin’, every day is better than the last. New dreams and better
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className={"body-container about-body-container"}>
                <img className={"profile-photo"} src={profile_photo} alt={"profile photo"}/>
                <div className={"get-name"}>{this.getName()}</div>
                <div className={"get-title"}>{this.getTitle()}</div>
                <div className={"get-abstract"}>{this.getAbstract()}</div>
            </div>);
    }
}