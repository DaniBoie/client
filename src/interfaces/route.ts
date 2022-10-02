export default interface IRoute {
  path: string;
  name: string;
  exact: any;
  auth: boolean;
  component: any;
  props?: any;
}