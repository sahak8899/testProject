import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.scss';

export default function City({ data }) {
	return (
		<div>
			{data &&
				data.map((city) => (
					<Card className={'city-content'} key={city._id}>
						<CardMedia className={'city-cover'} image={city.cover} title="Contemplative Reptile" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{city.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{city.country} ({city.country_short})
							</Typography>
						</CardContent>
					</Card>
				))}
		</div>
	);
}
