import axios from 'axios';

const accessToken = document.cookie.split('=')[1];
const api = axios.create({
	baseURL: 'http://3.34.140.51',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
		'X-AUTH-TOKEN': `${accessToken}`,
	},
});

const loginapi = axios.create({
	baseURL: 'http://3.34.140.51',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

export const apis = {
	// article
	add: (contents) => api.post('/api/articles', contents),
	edit: (id, contents) => api.put(`api/articles/${id}`, contents),
	del: (id) => api.delete(`api/articles/${id}`),
	articles: () => api.get('/api/articles'),
	article: (id) => api.get(`/api/articles/${id}`),
	search: (value) => api.get(`/api/articles/search?query=${value}`),

	// comment
	addComment: (id, content) =>
		api.post(`/api/articles/${id}/comments`, { content }),
	comments: (id) => api.get(`/api/articles/${id}/comments`),
	delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
	editComment: (id, coId, content) =>
		api.put(`/api/articles/${id}/comments/${coId}`, { content }),

	// user
	login: (id, pw) =>
		loginapi.post('/user/login', { username: id, password: pw }),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user/signup', {
			username: id,
			email: email,
			password: pw,
			repassword: pwcheck,
		}),
};
