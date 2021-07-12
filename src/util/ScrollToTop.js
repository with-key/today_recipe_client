import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ScrollToTop = () => {
	const { pathname } = useSelector((store) => store.router.location);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return <></>;
};
export default ScrollToTop;
