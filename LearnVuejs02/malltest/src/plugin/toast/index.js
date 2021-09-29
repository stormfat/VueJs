import Toast from './Toast';
import { createApp } from 'vue';
// const obj = {};

// obj.install = function(Vue) {
//     //1.创建组件构造器
//     const toastConstrutor = Vue.extend(Toast);

//     //2.用new的方式,创建一个组件对象
//     const toast = new toastConstrutor();

//     //3.将组件对象手动挂载到某一个元素上
//     toast.$mount(document.createElement('div'));

//     //4.将toast的el追加到body下.
//     document.body.appendChild(toast.$el);

//     //5.将Toast组件放到Vue的元素里
//     Vue.prototype.$toast = Toast;
// };

const plugin = {};
plugin.install = function(app) {
    //1.实例化并绑定组件且将它挂载到div节点
    const toast = createApp(Toast);
    const instance = toast.mount(document.createElement('div'));

    //2.将挂载的节点添加到body中
    document.body.appendChild(instance.$el);

    //定义全局
    app.config.globalProperties.$toast = instance;
};

export default plugin;
