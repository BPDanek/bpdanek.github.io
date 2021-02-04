import "./declaration.d.ts";
import React from "react";
import "./styles.css";
import About from "./pages/About";

import about_banner from "./assets/mEngine.jpg";
import project_banner from "./assets/mSteerShift.jpg";
import timeline_image from "./assets/pipes.jpg";

import about_icon from "./assets/about.png";
import projects_icon from "./assets/projects.png";
import timeline_icon from "./assets/timeline.png";

// enum for switching pages. Gives us valid pages to display on this personal website
enum ServablePages {
    about ,
    projects,
    timeline
}

// todo: add to class header
// what the state should look like
interface State {
    displayedPage: ServablePages
}

export default class PageManager extends React.Component {
    constructor(props: any) {
        super(props)

        this.state = {displayedPage: ServablePages.about}; // default page

        // bind function handlePageChange (implemented lower) to field defined in the current class "handlePageChange".
        // The similar names makes this a bit confusing.
        this.handlePageChange = this.handlePageChange.bind(this);

    }

    handlePageChange(): void {
        console.log("handled page change")
    }

    renderHeader(): JSX.Element {
        return (
            <div>
                <h3>The current website is under construction!</h3>
                <h4>Benjamin Danek is swamped with school work for now, please check out his
                    <a href={"https://www.linkedin.com/in/benjaminpdanek/"}>LinkedIn</a>
                </h4>
            </div>
        )
    }

    // Router navigator for navigating across site w/ state + url
    renderNav(): JSX.Element {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <img src={about_icon} alt={"About Page navigation icon"}
                                 onClick={
                                     () => {console.log("clicked About")}
                                 }
                            />
                        </li>
                        <li>
                            <img src={projects_icon} alt={"Projects Page navigation icon"}
                                 onClick={
                                     () => {console.log("clicked Projects")}
                                 }
                            />
                        </li>
                        <li>
                            <img src={timeline_icon} alt={"Timeline Page navigation icon"}
                                 onClick={
                                     () => {console.log("clicked Timeline")}
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