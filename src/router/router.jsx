import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

const RootPage = lazy(() => import('../pages/root'));
const DetailsPage = lazy(() => import('../pages/details'));

export default (
	<Switch>
		{
			/*
			* exact - булевый пропс, означает что маршрут должен отработать именно на указанном пути,
			* т.е. "/" как бы включен внутрь любого друго более широго урла, например "/details", соответственно
			* мы хотим сказать чтобы отработал ИМЕННО "/"
			*
			* path - путь URL в строке запроса в браузере
			*
			* component - компонент  React, который надо загрузить для данного урла
			* */
		}
		<Route exact path={ URL.ROOT } component={ RootPage } />
		<Route exact path={ URL.DETAILS_CODE } component={ DetailsPage } />
	</Switch>
);
