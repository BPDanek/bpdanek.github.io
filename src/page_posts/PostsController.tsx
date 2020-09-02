import * as React from 'react';

interface Props {};

interface State {};

export default class PostsController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Post Controller</h1>
        );
    }
}