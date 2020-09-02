import * as React from 'react';

interface Props {};

interface State {};

export default class MeController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Me Controller</h1>
        );
    }
}