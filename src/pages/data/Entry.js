import React from 'react';
import { entry, title, imagebox } from './entry.scss';

const Images = ({ images }) => (
	<div className={imagebox}>
		{images.map((image, i) => (<img key={i} alt="" src={image} />))}
	</div>
);

const Entry = ({ name, images, description }) => (
	<div className={entry} name={name}>
		<div className={title}>
			<h2>{name}</h2>
			{images && <Images images={images} />}
		</div>
		<div>{description}</div>
	</div>
);

export default Entry;
