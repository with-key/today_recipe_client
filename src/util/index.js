export const dateConvert = (getTimeFromServer) => {
	const s = (Date.now() - Date.parse(getTimeFromServer)) / 1000;

	if (s <= 60) {
		return `${~~s}초 전`;
	} else if (s > 60 && s < 3600) {
		return `${~~(s / 60)}분 전`;
	} else if (s >= 3600 && s < 86400) {
		return `${~~(s / 3600)}시간 전`;
	} else if (s >= 86400) {
		return `${~~(s / 86400)}일 전`;
	}
};
