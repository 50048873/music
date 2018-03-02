import originJSONP from 'jsonp'
import {options} from '@src/api/config'

export default function jsonp(url, data) {
	url = urlAppendParams(url, data)
	return new Promise((resolve, reject) => {
		originJSONP(url, options, (err, data) => {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}

function urlAppendParams(url, data) {
	let search = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		search += `&${k}=${encodeURIComponent(value)}`
	} 
	search = search ? search.substring(1) : ''
	url += (url.indexOf('?') < 0 ? "?" : '&') + search
	return url
}