import dva from 'dva';
// import { createBrowserHistory as createHistory } from 'history';
import './index.css';

// 1. 创建实例
const app = dva();
// const app = dva({
//   history: createHistory()
// });

// 2. Plugins
// app.use({});

// 3. Model
require('./models').default.forEach(key => app.model(key.default));
// app.model(require('./models/example').default);
// app.model(require('./models/table').default);
// 4. 路由
app.router(require('./router').default);

// 5. 启动
app.start('#root');