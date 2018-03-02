// jsonp公用参数
export const commonParams = {
	g_tk: 411712635,
	format: 'jsonp',
	inCharset: 'utf-8',
	outCharset: 'uft-8',
	notice: 0,
	_: new Date() * 1
};

// jsonp callback的名称，这个要与https://m.y.qq.com/里的jsonp请求的键名一致
export const options = {
	param: 'jsonpCallback'
};

export const ERR_OK = 0