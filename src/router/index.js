import { createWebHistory, createRouter} from "vue-router";
import Main from "../components/main.vue";
import Calculator from "../components/calculator.vue";
import Table from "../components/table.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main,
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator,
    },
    {
        path: '/table',
        name: 'Table',
        component: Table,
    }
]
