import * as React from 'react';
import { pages } from '../Page';
import './styles.css';

interface Props {
    pageChangeParentReference: (newPageAsString: string) => void;
};

interface State {};

export default class ProjectsController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="site-navigator-container">
                <ul>
                    {Object.keys(pages).map(
                        (pageKey: string, index: number) => { return <li>{pages[pageKey]}</li>; }
                    )}
                </ul>
            </div>
        );
    }
}