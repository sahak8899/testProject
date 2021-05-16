import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ExperienceForsquare({ foursqaure }) {
	return (
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				Name - {foursqaure.name}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				<span>Address</span> - {foursqaure.address}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				<span>Phone number</span> - {foursqaure.phone_number}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				<span>Website</span> -{' '}
				<a href={`${foursqaure.name}`} target="__blank">
					{foursqaure.name}
				</a>
			</Typography>
		</CardContent>
	);
}
