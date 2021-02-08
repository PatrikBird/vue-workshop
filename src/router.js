import { createRouter, createWebHistory } from "vue-router";
import PeopleList from "@/pages/people/PeopleList";
import PeopleDetails from "@/pages/people/PeopleDetails";
import ContactPeople from "@/pages/requests/ContactPeople";
import PeopleRegistration from "@/pages/people/PeopleRegistration";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import NotFound from "@/pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/people" },
    { path: "/people", component: PeopleList },
    {
      path: "/people/:id",
      component: PeopleDetails,
      children: [{ path: "contact", component: ContactPeople }], // nested route
    },
    { path: "/register", component: PeopleRegistration },
    { path: "/requests", component: RequestsReceived },
    { path: "/notFound(.*)", component: NotFound },
  ],
});

export default router; // vanilla JS behaviour
