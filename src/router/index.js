
import {createWebHistory, createRouter} from 'vue-router'
import LandingPage from "@/views/LandingPage";
import mainSection from "@/views/mainSection";
import search from "@/components/search";
import reminders from "@/components/reminders";
import NoteContainer from "@/components/NoteContainer";

const history = createWebHistory();
const router =  createRouter({
    history,
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/main',
            component: mainSection,
            children: [
                {
                    path: 'search',
                    component: search
                },
                {
                    path:'Home',
                    component: NoteContainer
                },
                {
                    path: 'reminders',
                    component: reminders
                }
            ]
        },


    ]
})
export default router
