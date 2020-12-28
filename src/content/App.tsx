import * as React from "react";
import Page from "./pages/Page";

interface AppProps {}

function App({}: AppProps): any {
    // Return the App component.
    return (
        <div className="App">
            <header className="App-header">
                <Page page={"Projects"}/>
            </header>
        </div>
    );
}

export default App;