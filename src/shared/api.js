import axios from 'axios';
import qs from 'query-string';

// api 인스턴스 생성
// api가 많아서 인스턴스 생성하는 방식으로 해서 중복코드 줄일게요!

const api = axios.create({
	// 인스턴스
	baseURL: 'http://3.34.140.51/', // 저희 서버 아이피로 변경하세요!
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

// export const login = (username, password) => {
// 	const userInfo = { username, password };
// 	console.log(userInfo);
// 	console.log(qs.stringify(userInfo));
// 	axios
// 		.post('http://3.34.140.51/user/login', qs.stringify(userInfo), {
// 			withCredentials: true,
// 		})
// 		.then((res) => console.log(res))
// 		.catch((e) => console.log(e));
// };

export const apis = {
	// article
	add: (id, contents) => api.post('/posts', contents),
	edit: () => {},
	articles: () => api.get('/api/articles'),
	article: (id) => api.get(`/api/articles/${id}`),

	// comment
	addComment: (id, content) =>
		api.post(`/api/articles/${id}/comments`, content),
	comments: (id) => api.get(`/api/articles/${id}/comments`),

	// login
	login: (username, password) => {
		console.log(JSON.stringify({ username, password }));
		console.log({ username, password });
		api
			.post('/user/login', { username, password })
			.then((res) => console.log(res));
	},
	logout: () => api.post('/user'),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user/signup', {
			username: id,
			email: email,
			password: pw,
			repassword: pwcheck,
		}),
};
