import { html } from "lit-element";
import {BaseView} from "./base-view.js";

class StatsView extends BaseView {
    render() {
        return html `
            <h1>StatsView</h1>
        `;
    }
}

customElements.define('stats-view', StatsView);