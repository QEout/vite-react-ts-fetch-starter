import { IRoute } from '~/types';
import { createElement, ReactNode } from 'react';

interface IBaseRouteObject {
  element?: ReactNode;
  path?: string;
  handle?: any;
}

interface INoneIndexRouteObject extends IBaseRouteObject {
  children: IRouteObject[];
  index?: false;
}

interface IIndexRouteObject extends IBaseRouteObject {
  children?: undefined;
  index: true;
}

export type IRouteObject = INoneIndexRouteObject | IIndexRouteObject;

export default function parseRoutes(routes: IRoute[]) {
  const parseRoute = (route: IRoute): IRouteObject =>
    ({
      element: route.component
        ? createElement(route.component, {
            route,
            ...route.props,
          })
        : undefined,
      path: route.path,
      index: route.index,
      handle: {
        route: route,
      },
      children: route.children?.length
        ? route.children.filter((v) => v).map(parseRoute)
        : undefined,
    } as IRouteObject);
  return routes.filter((v) => v).map(parseRoute);
}
