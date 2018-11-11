// src/index.ts

import Vue from "vue";
import App from "./components/App.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <app />
    </div>
    `,
    data: { name: "QQQQQQOO" },
    components: {
        App
    }
});