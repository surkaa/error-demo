/// <reference types="vite/client" />
declare module '*.vue' {
  // The solution 1 obtained from the internet
  import {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'element-plus';
