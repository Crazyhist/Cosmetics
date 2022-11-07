import {ADMIN_ROUTE, BASKET_ROUTE, COSMETIC_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import CosmeticsPage from "./pages/CosmeticsPage";
import Basket from "./pages/Basket";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: COSMETIC_ROUTE + '/:id',
        Component: CosmeticsPage
    },
]