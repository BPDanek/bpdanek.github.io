import * as React from 'react';
import './styles.css';

interface Props {};

interface State {};

export default class PostsController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"posts-controller"}>
                <h3>
                    I have no posts to show off for now, come back soon because this will be the next Hacker News
                </h3>
            </div>
        );
    }
}