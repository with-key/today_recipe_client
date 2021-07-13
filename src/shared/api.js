import axios from 'axios';

// api 인스턴스 생성
// api가 많아서 인스턴스 생성하는 방식으로 해서 중복코드 줄일게요!
// const accessToken = document.cookie.split('=')[1]

const api = axios.create({
	// 인스턴스
	baseURL: 'http://3.34.140.51', // 저희 서버 아이피로 변경하세요!
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
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

// api.defaults.headers.common['Authorization'] = `${accessToken}`;

export const apis = {
	// article
	add: (contents) => api.post('/api/articles', contents),
	edit: () => {},
	articles: () => api.get('/posts'),
	article: (id) => api.get(`/posts/${id}`),

	// comment
	addComment: (comment) => api.post('/comments', comment),
	comments: (id) =>
		api.get('/comments/', {
			params: {
				postId: id,
			},
		}),
	
	login: (id,pw) => api.post('/user/login', {username:id, password:pw}),
	// login: (id, pw) => loginApi.post('/user/login',`username=${id}&password=${pw}`,{ withCredentials:true }),
	signup: (id, email, pw, pwcheck) =>
		api.post('/user/signup', {
			username: id,
			email: email,
			password: pw,
			repassword: pwcheck,
		}),
};
