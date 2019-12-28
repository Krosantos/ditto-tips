import React, { useMemo } from 'react';

const PokeImage = ({ image }) => {
	const src = useMemo(() => `static/${image}.png`, [image]);

	return (<img alt="" src={src} />);
};

export default PokeImage;
