import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

const enum appRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

const RoutePaths: Record<appRoutes, string> = {
    [appRoutes.MAIN]: '/',
    [appRoutes.ABOUT]: '/about',
    [appRoutes.NOT_FOUND]: '*'

}
export const RouteConfig: Record<appRoutes, RouteProps> = {
    [appRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [appRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage/>
    },
    [appRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage/>
    }
}
