const React = require('react');
const pages = require( '../Page');
require('./styles.css');

interface Props {
    pageChangeParentReference: (newPageAsString: string) => void;
};

export default class SiteNavigator extends React.Component<Props> {
    constructor(props: any) {
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