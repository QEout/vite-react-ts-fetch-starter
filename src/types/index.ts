import type { ComponentType, ReactNode } from 'react';

export type IRoute = {
  title?: string;
  component?: ComponentType;
  children?: IRoute[];
  icon?: ReactNode;
  props?: any;
  visible?: boolean;
  flat?: boolean | number;
  type?: 'item' | 'text';
} & (
  | {
      index: true;
      path?: undefined;
    }
  | {
      index?: false;
      path?: string;
    }
);

export interface IRouteHandle {
  route: IRoute;
  [p: string]: any;
}