import axios from 'axios';

const accessToken = document.cookie.split(';')[0].split('=')[1]

const api = axios.create({
	// 인스턴스
	baseURL: 'http://3.34.140.51',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
		"X-AUTH-TOKEN": `${accessToken}`
	},
});

// JSESSION 방식
// const loginApi = axios.create({
// 	baseURL: 'http://3.34.140.51',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
// 		accept: 'application/json,',
// 	},
// })

// api.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;

export const apis = {
	// article
	add: (contents) => api.post('/api/articles', contents),
	edit: () => {},
	articles: () => api.get('/api/articles'),
	article: (id) => api.get(`/api/articles/${id}`),

	// comment
	addComment: (comment) => api.post('/comments', comment),
	comments: (id) =>
		api.get('/comments/', {
			params: {
				postId: id,
			},
		}),

	//user
	// login: (id, pw) => loginApi.post('/user/login',`username=${id}&password=${pw}`,{ withCredentials:true }),
	login: (id, pw) => api.post('/user/login', { username: id, password: pw }),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user/signup', {
			username: id,
			email: email,
			password: pw,
			repassword: pwcheck,
		}),
};
