import Home from "~/Pages/Home";
import Login from "~/Pages/Login";
import { IRoute } from "~/types";


export const loginRoute: IRoute[] = [
  {
    path: '/login',
    component: Login,
    // children: [
    //   {
    //     index: true,
    //     component: passport.SignIn,
    //   },
    // ],
  },
];

export const mainRoute: IRoute[] = [
  {
    path: '/',
    component: Home
  },
];