import * as React from 'react';
import './styles.css';

import SiteNavigator from "./SiteNavigator/SiteNavigator";
import MeController from './page_me/MeController';
import PostsController from './page_posts/PostsController';
import ProjectsController from './page_projects/ProjectsController';

export const pages = {
    ME: 'Me',
    POSTS: 'Posts',
    PROJECTS: 'Projects'
}

interface State {
    page: string;
};

export default class Page extends React.Component<State> {
    constructor(props) {
        super(props);
        this.state = {page: pages.PROJECTS}
        this.handlePageChange = this.handlePageChange.bind(this) // bind this function to specifically this class, if referenced it will come back to here
    }

    //page should be element of const pages (defined above)
    handlePageChange(newPageAsString: string): void {
        if (newPageAsString === pages.ME ||
            newPageAsString === pages.POSTS ||
            newPageAsString === pages.PROJECTS) {
            this.setState({page: newPageAsString})
        }
    }

    render() {
        let currentPageAsComponent = <div></div>;

        switch(this.state.page) {
            case pages.ME:
                currentPageAsComponent = <MeController />
                break;
            case pages.POSTS:
                currentPageAsComponent = <PostsController />
                break;
            case pages.PROJECTS:
                currentPageAsComponent = <ProjectsController />
                break;
            default:
                break;
        }

        return (
            <div className={"site-navigator"}>
                <SiteNavigator pageChangeParentReference={this.handlePageChange} />
                {currentPageAsComponent}
            </div>
        )
    }
}