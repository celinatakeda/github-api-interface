import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProdider from "./providers/github-provider";

const Providers = () => {
    return (
        <main>
            <GithubProdider>
                <ResetCSS />
                <App />
            </GithubProdider>
        </main>
    );
};

export default Providers;
