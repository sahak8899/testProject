import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import './style.scss';

export default function HomeComponent({ name, counts, logo }) {
	return (
		<Card className="card">
			<div className="card-content-image">
				<img src={logo} alt="Our Logo" />
			</div>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{name.toUpperCase()}
				</Typography>
				<List component="nav" aria-label="main mailbox folders">
					{counts &&
						Object.keys(counts).map((item) => (
							<ListItem key={item}>
								<ListItemText primary={item} className="list-text" />
								<ListItemIcon>{counts[item]}</ListItemIcon>
							</ListItem>
						))}
				</List>
			</CardContent>
		</Card>
	);
}
