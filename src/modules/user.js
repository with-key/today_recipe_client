// sample 입니다 ㅎㅎ 수정해서 사용하세요!

import { createAction, handleActions } from 'redux-actions';

// action
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

// action creator
let nextId = 0; // 이건 필요 없는 코드에요. 그냥 예시에서 아이디 만드려고 있는 코드니까 지워도 됩니다.
const insert = createAction(INSERT, (text) => ({
	id: nextId++,
	text,
	done: false,
}));
const remove = createAction(REMOVE, (id) => id);
const toggle = createAction(TOGGLE, (id) => id);

// Thunk function
const insertThunk =
	(text, { history }) =>
	(dispatch) => {
		// 하고 싶은 작업 .. 파이어베이스 뭐 연결을 한다던가.. 뭐 그런거?
		dispatch(insert(text)); // 2차 디스패치 (무조건 있어야죠) - 파라미터로 최종적으로 실행되야하는 액션크리에이터 넣어요.
	};

// reducer
const todos = handleActions(
	{
		[INSERT]: (state, action) => ({
			...state,
			todos: state.todos.concat(action.payload), // 리덕스액션을 사용하면 action 내에 있는 데이터를 무조건 'payload'로 불러옵니다.
		}),

		[TOGGLE]: (state, action) => ({
			...state,
			todos: state.todos.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
			),
		}),
		[REMOVE]: (state, action) => ({
			...state,
			todos: state.todos.filter((todo) => todo.id !== action.payload),
		}),
	},
	{ todos: [] }, // handleActions()의 두번째 파라미터는 이니셜스테이트입니다. 저는 따로 선언안하고 바로 넣는걸 좋아해서....
);

export { insert, remove, toggle }; // 액션크리에이터 깔끔하게 내보내기
export default todos;
