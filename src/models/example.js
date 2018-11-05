import { delay } from "dva/saga";
export default {
  namespace: "example",

  state: {
    count: 13,
    aaa: "egeg"
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *asyncadd({ payload }, { call, put, select }) {
      // eslint-disable-line
      //const stor = yield select(state => state.example);//取数据
      //const stor2 = yield select(({example}) => example);//取数据
      const stor3 = yield select(_=> _.example);//取数据
      console.log(stor3)
      yield call(delay, 1000);//异步函数
      yield put({ type: "add" });//相当于dispatch
    }
  },

  reducers: {
    add(state, action) {
      return {
        count: state.count + 1
      };
    }
  }
};
