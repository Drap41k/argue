'use strict';

import Koa from 'koa';
import config from  'config';
import err from './middleware/error';
import {routes, allowedMethods} from './middleware/routes';

const app = new Koa();

app.use(err);
app.use(routes());
app.use(allowedMethods());

app.listen(config.get('port'), function () {
	console.log('%s listening at port %d', config.get('app.name'), config.get('port'));
});