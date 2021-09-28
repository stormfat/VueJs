import Toast from './Toast';
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

export default {
    install: (app, options) => {
        app.component('toast', Toast);
    }
};
