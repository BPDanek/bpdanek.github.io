import * as React from 'react';
import './styles.css';

//images
import image_of_me_at_beach from '../assets/IMG_5685.jpeg';
import github_logo from '../assets/github_logo.jpeg';
import twitter_logo from '../assets/twitter_logo.jpeg';
import linkedin_logo from '../assets/linkedin_logo.jpeg';

//content
import data from '../assets/data.tsx';

interface Props {};

interface State {};

export default class MeController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"me-page-flexbox-wrapper"}>
                <div className={"me-bio-column"}>
                    <div>
                        <img className={"me-bio-column-image"} src={image_of_me_at_beach} alt={"photo of me on the pacific coast"} />
                    </div>
                    <div className={"me-bio-column-bio"}>
                        <p>Creator, student, scholar, engineer, in that order.</p>
                        <p>Seeking Full-stack, Front-end, Machine Learning, Research early career engineering roles</p>
                        <div className={"me-bio-column-links"}>
                          <div>
                            <a href={"https://github.com/BPDanek"}>
                                <img className={"Github-link"} src={github_logo} />
                            </a>
                          </div>
                          <div>
                            <a href={"https://www.linkedin.com/in/benjaminpdanek/"}>
                                <img className={"LinkedIn-link"} src={linkedin_logo} />
                            </a>
                          </div>
                          <div>
                            <a href={"https://twitter.com/Benjamindanek"}>
                                <img className={"Twitter-link"} src={twitter_logo} />
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className={"me-content-column"}>
                    <div className={"me-navigator-for-content-column"}>
                        <a href={"#about"}>
                            <h3>About</h3>
                        </a>
                        <a href={"#courses"}>
                            <h3>Courses</h3>
                        </a>
                        <a href={"#goals"}>
                            <h3>Goals</h3>
                        </a>
                    </div>
                    <div id={"#about"}>
                        <h2>About</h2>
                        <p>{data.about_section}</p>
                    </div>
                    <div id={"#courses"}>
                        <h2>Courses</h2>
                        <p>this is where i flex my classes</p>
                    </div>
                    <div id={"#goals"}>
                        <h2>Goals</h2>
                        <p>this is where i show you my long term objectives</p>
                    </div>
                </div>
            </div>
        );
    }
}