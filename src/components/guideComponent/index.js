import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './style.scss';

export default function GuideComponent({ name, description, coverUrl, cityes, experiences, explorers, language }) {
	return (
		<div>
			<Card className={''}>
				<CardMedia className={'guide-cover'} image={coverUrl} title="Contemplative Reptile" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</Card>
			<Card className={''}>
				<CardContent>
					<List>
						<ListItem>
							<ListItemText primary="City" secondary={cityes.name} />
						</ListItem>
						<ListItem>
							<ListItemText primary="Country" secondary={cityes.country} />
						</ListItem>
					</List>
				</CardContent>
			</Card>
			<h2>Experiences</h2>
			<Card className={'guide-experiences'}>
				{experiences.map((experience) => (
					<CardContent key={experience.id}>
						<Typography gutterBottom variant="h5" component="h2">
							{experience.category}({language})
						</Typography>
						<Typography variant="body2" color="textPrimary" component="p">
							{experience[language].name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{experience[language].description}
						</Typography>
					</CardContent>
				))}
			</Card>
			<h2>Explorer</h2>
			<Card className={'guide-experiences'}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{explorers.name}
					</Typography>
					<Typography variant="body2" color="textPrimary" component="p">
						Email - {explorers.email}
					</Typography>
					<Typography variant="body2" color="textPrimary" component="p">
						Username - {explorers.username}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
