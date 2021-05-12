import "./declaration.d.ts";
import React from "react";
import "./styles.css";
import About_page from "./pages/About";
import Projects_page from "./pages/Projects";
import Timeline_page from "./pages/Timeline";

import about_header from "./assets/pixel_mEngine.jpg";
import project_header from "./assets/pixel_mSteerShift.jpg";
import timeline_header from "./assets/pixel_pipes.jpg";

import about_icon from "./assets/about.png";
import projects_icon from "./assets/projects.png";
import timeline_icon from "./assets/timeline.png";

// enum for switching pages. Gives us valid pages to display on this personal website
enum ServablePages {
    about ,
    projects,
    timeline
}

// default pages
const DEFAULTDISPLAYPAGE = ServablePages.about
const DEFAULTHEADER = about_header
const DEFAULTBODY = <About_page />

// todo: resolve this at some point
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {

}

interface State {
    displayedPage: ServablePages,
    header: string // really its the path to an image
    body: any
}

export default class PageManager extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)

        this.state = {
            displayedPage: DEFAULTDISPLAYPAGE, // default page
            header: DEFAULTHEADER, // default HEADER
            body: <About_page />
        };
    }

    handlePageChange(new_page: ServablePages): void {

        let new_header = DEFAULTHEADER // an image
        let new_body = DEFAULTBODY //.tsx element

        if (new_page == ServablePages.about) {
            new_header = about_header
            new_body = <About_page />
        }
        else if (new_page == ServablePages.projects) {
            new_header = project_header
            new_body = <Projects_page />
        }
        else if (new_page == ServablePages.timeline) {
            new_header = timeline_header
            new_body = <Timeline_page />
        }

        this.setState({displayedPage: new_page, header: new_header, body: new_body})
    }

    renderHeader(): JSX.Element {
        return (
            <div className={"header_img_container"}>
                <img src={this.state.header} className={"header_img"}/>
            </div>
        )
    }

    renderBody(): JSX.Element {
        return (
            <div>{this.state.body}</div>
        );
    }

    renderNav(): JSX.Element {
        return (
            <div>
                <nav className={"pagemanager_nav"}>
                    <ul>
                        <li className={"navbar_li"}>
                            <img src={about_icon} alt={"About Page navigation icon"} className={"nav_image"}
                                 onClick={
                                     () => {this.handlePageChange(ServablePages.about)}
                                 }
                            />
                        </li>
                        <li className={"navbar_li"}>
                            <img src={projects_icon} alt={"Projects Page navigation icon"} className={"nav_image"}
                                 onClick={
                                     () => {this.handlePageChange(ServablePages.projects)}
                                 }
                            />
                        </li>
                        <li className={"navbar_li"}>
                            <img src={timeline_icon} alt={"Timeline Page navigation icon"} className={"nav_image"}
                                 onClick={
                                     () => {this.handlePageChange(ServablePages.timeline)}
                                 }
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderNav()}
                {this.renderBody()}
            </div>
        );
    }
}