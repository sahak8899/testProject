import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Experience({ currentExp, selectedLang }) {
	return (
		<div className="experience-wrapper">
			{currentExp.map((item) => (
				<Card className={'experience-content'} key={item.id}>
					<CardMedia
						className={'experience-cover'}
						image={item.medias[0].standard_resolution}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{item[selectedLang].name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{item[selectedLang].description}
						</Typography>
					</CardContent>
					<Link to={`experiences/${item.id}`}>More details</Link>
				</Card>
			))}
		</div>
	);
}
