import axios from 'axios';

// api 인스턴스 생성
// api가 많아서 인스턴스 생성하는 방식으로 해서 중복코드 줄일게요!

const api = axios.create({
	// 인스턴스
	baseURL: 'http://localhost:4000/',
});

export const apis = {
	articles: () => api.get('/posts'),
	add: (title, content) =>
		api.post('/posts', { title: title, content: content }),
	article: (id) => api.get(`/posts/${id}`),
	login: () => api.post('/posts'),
	signup: (id, nick, pw, pwcheck) =>
		api.post('/posts', { id: id, nick: nick, pw: pw, pwcheck: pwcheck }),
	addComment: (comment) => api.post('/comments', comment),
	comments: (id) =>
		api.get('/comments/', {
			params: {
				postId: id,
			},
		}),
};
