import { AUPDATEINFO, UPDATEINFO } from '@/store/mutations-types';
export default {
    //提交一个异步方法并在完成后返回信息。
    [AUPDATEINFO](context, payload) {
        return new Promise(resolve => {
            setTimeout(() => {
                context.commit(UPDATEINFO);
                console.log(payload);
                resolve('通知已提交完成');
            }, 1000);
        });
    }
};
