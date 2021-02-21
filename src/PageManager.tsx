import "./declaration.d.ts";
import React from "react";
import "./styles.css";
import About from "./pages/About";

import about_banner from "./assets/mEngine.jpg";
import project_banner from "./assets/mSteerShift.jpg"; //todo: add
import timeline_banner from "./assets/pipes.jpg"; //todo: add

import about_icon from "./assets/about.png";
import projects_icon from "./assets/projects.png";
import timeline_icon from "./assets/timeline.png";

// enum for switching pages. Gives us valid pages to display on this personal website
enum ServablePages {
    about ,
    projects,
    timeline
}

// todo: resolve this at some point
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {

}

interface State {
    displayedPage: ServablePages,
    banner: string
}

export default class PageManager extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)

        this.state = {
                displayedPage: ServablePages.about, // default page
                banner: about_banner // default banner
        };
    }

    // updates state variables {displayedPage, banner} according to parameter
    // note: this doesnt have the fancy declaration in the
    // constructor: "this.handleStateChange = this.handleStateChange.bind(this)" or whatever
    handleStateChange(page: ServablePages): void {
        // doing my best to write clean code!

        let new_banner = about_banner
        if (page == ServablePages.about) {
            new_banner = about_banner
        }
        else if (page == ServablePages.projects) {
            new_banner = project_banner
        }
        else if (page == ServablePages.timeline) {
            new_banner = timeline_banner
        }

        this.setState({displayedPage: page, banner: new_banner})
    }

    renderHeader(): JSX.Element {
        return (
            <div>
                <img src={this.state.banner} className={"header_img"}/>
            </div>
        )
    }

    renderNav(): JSX.Element {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <img src={about_icon} alt={"About Page navigation icon"} className={"nav_image"}
                                 onClick={
                                     () => {this.handleStateChange(ServablePages.about)}
                                 }
                            />
                        </li>
                        <li>
                            <img src={projects_icon} alt={"Projects Page navigation icon"} className={"nav_image"}
                                 onClick={
                                     () => {this.handleStateChange(ServablePages.projects)}
                                 }
                            />
                        </li>
                        <li>
                            <img src={timeline_icon} alt={"Timeline Page navigation icon"} className={"nav_image"}
                                 onClick={
                                     () => {this.handleStateChange(ServablePages.timeline)}
                                 }
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    renderSiteBody(): JSX.Element {
        return (
            <div><h3>site body</h3></div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderNav()}
                {this.renderSiteBody()}
            </div>
        );
    }
}