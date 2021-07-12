import axios from 'axios';

// api 인스턴스 생성
// api가 많아서 인스턴스 생성하는 방식으로 해서 중복코드 줄일게요!

const api = axios.create({
	// 인스턴스
	baseURL: 'http://localhost:4000/',
});

export const apis = {
	articles: () => api.get('/posts'),
	add: (contents) => api.post('/posts', contents),
	article: (id) => api.get(`/posts/${id}`),
	login: (id, pw) => api.post('/user', { username: id, password: pw }),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user', {
			username: id,
			email: email,
			password: pw,
			passwordCheck: pwcheck,
		}),
	logout: () => api.post('/user'),
	addComment: (comment) => api.post('/comments', comment),
	comments: (id) =>
		api.get('/comments/', {
			params: {
				postId: id,
			},
		}),
};
