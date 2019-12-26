import React from 'react';
import Anchor from '@shared/Anchor';
import {
	entry, title, imagebox,
} from './entry.scss';

const Images = ({ images }) => (
	<div className={imagebox}>
		{images.map((image) => (<img key={image} alt="" src={image} />))}
	</div>
);

const Entry = ({
	link, name, images, description,
}) => (
	<div className={entry}>
		<div className={title}>
			<Anchor id={link} />
			<h2>{name}</h2>
			{images && <Images images={images} />}
		</div>
		<div>{description}</div>
	</div>
);

export default Entry;
