import * as React from 'react';
import {pages} from '../Page';
import './styles.css';

interface Props {
    pageChangeParentReference: (newPageAsString: string) => void;
};

interface State {
};

export default class ProjectsController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"site-navigator-container"}>
                <div className={"site-navigator-flex-wrapper"}>
                    {Object.keys(pages).map(
                        (pageKey: string, index: number) => {
                            return (<div className={"site-navigator-individual-button"}>
                                <button className={"site-navigator-individual-button-tag"} onClick={() => {
                                    return this.props.pageChangeParentReference(pages[pageKey])
                                }}>
                                    {<p className={"site-navigator-individual-button-sub-tag"}>{pages[pageKey]}</p>}
                                </button>
                            </div>)
                        }
                    )}
                </div>
            </div>
        );  
    }
}