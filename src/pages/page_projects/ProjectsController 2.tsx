import React = require('react');
import './styles.css';

const data_asset = require('../../assets/Projects-Data/data.json');
import ProjectsData from '../../assets/Projects-Data/data_type_interface';

let projects_text_data: ProjectsData = data_asset

interface Props{};
interface State {
    current_post_index: number; // index of post to display
};

export default class ProjectsController extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        if (projects_text_data.projects.length > 0) {
            this.state = {current_post_index: 0}
        }
        else {
            this.state = {current_post_index: -1} // in case there are no projects to post about
        }
    }

    renderProjectsNavigatorColumn() {
        // need to check if there are any projects to list; ideally this never happens since we should always have a "home" post

        let projectsNavigationColumnElement = <h4>There are no projects</h4>

        if (this.state.current_post_index != -1) {
            projectsNavigationColumnElement =
                (<div>
                    {
                        projects_text_data.projects.map((post_data, post_index) => {
                            return(
                                <button className={"projects-page-navigation-column-button-tag"} onClick={
                                    () => {
                                        this.setState({current_post_index: post_index})
                                    }
                                }>
                                    <p className={"projects-page-navigation-column-button-sub-tag"}>{post_data[0]}</p>
                                </button>
                            );
                        })
                    }
                </div>)
        }

        return (projectsNavigationColumnElement);
    }

    // renders a post at the index
    renderPost() {
        return (
            <div>
                <h2>{projects_text_data.projects[this.state.current_post_index][0]}</h2>
                <p>{projects_text_data.projects[this.state.current_post_index][1]}</p>
            </div>
        );
    }

    render() {
        return (
            <div className={"projects-page-flexbox-wrapper"}>
                <div className={"projects-page-navigation-column"}>
                    {this.renderProjectsNavigatorColumn()}
                </div>
                <div className={"projects-page-content-column"}>
                    {this.renderPost()}
                </div>
            </div>
        );
    }
}