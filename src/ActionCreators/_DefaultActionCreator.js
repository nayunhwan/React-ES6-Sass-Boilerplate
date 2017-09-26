/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import * as WebRequestUtil from '../Utils/WebRequestUtil';

export const DEFAULTACTION = 'DEFAULTACTION';

export const action = () => {
	return action_request();
};

const action_request = () => {
	const url = 'path/your/url';
	return WebRequestUtil.getJson(url, action_response);
};

const action_response = (json) => {
	return {
		type: DEFAULTACTION,
		actionResult: json,
	};
};
