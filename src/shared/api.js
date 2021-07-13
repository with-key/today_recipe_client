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

export const apis = {
	// article
	add: (contents) => api.post('/api/articles', contents),
	edit: (id, contents) => api.put(`api/articles/${id}`, contents),
	del: (id) => api.delete(`api/articles/${id}`),
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

	// user
	login: (id, pw) => api.post('/user/login', { username: id, password: pw }),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user/signup', {
			username: id,
			email: email,
			password: pw,
			repassword: pwcheck,
		}),
};
