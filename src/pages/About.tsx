import React from "react";

interface Props {
    print: string
}

export default class PageManager extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div><h1>hello from {this.props}</h1></div>
    }
}