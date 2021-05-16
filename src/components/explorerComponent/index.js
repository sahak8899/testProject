import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.scss';

export default function ExplorerComponent({ explorer, bio }) {
	const { username, email, name, profile_picture } = explorer;
	return (
		<div className="experience-wrapper">
			<Card className={'experience-content'}>
				<CardMedia className={'experience-cover'} image={profile_picture} title="Contemplative Reptile" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Username - {username}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Email - {email}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
