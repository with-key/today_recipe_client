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

const loginApi = axios.create({
	// 인스턴스
	baseURL: 'http://3.34.140.51/', // 저희 서버 아이피로 변경하세요!
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
	},
});

export const login = (username, password) => {
	const userInfo = { username, password };
	console.log(userInfo);
	console.log(qs.stringify(userInfo));
	axios
		.post('http://3.34.140.51/user/login', qs.stringify(userInfo), {
			withCredentials: true,
		})
		.then((res) => console.log(res))
		.catch((e) => console.log(e));
};

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
	// 	login: (username, password) => {
	// 		console.log(`username=${String(username)}&password=${String(password)}
	// `);
	// 		loginApi.post(
	// 			'/user/login',
	// 			`username=${username}&password=${password}`,
	// 			// { username, password },
	// 		);
	// 	},
	logout: () => api.post('/user'),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user/signup', {
			username: id,
			email: email,
			password: pw,
			repassword: pwcheck,
		}),
};

// let form = new FormData();
// form.append('id', 'Ee123');
// form.append('password', '1234');

// axios
// 	.post(`http://3.34.140.51/user/login`, form)
// 	.then((response) => {
// 		console.log('response : ', JSON.stringify(response, null, 2));
// 	})
// 	.catch((error) => {
// 		console.log('failed', error);
// 	});
