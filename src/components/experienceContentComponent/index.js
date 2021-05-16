import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExperienceMedia from '../experienceMedias';
import ExperienceForsquare from '../experienceForsquare';

export default function ExperienceContent({ experienceDetails, selectedLang, city }) {
	const { category, foursqaure_info, medias, tags } = experienceDetails;
	const dataInfo = experienceDetails[selectedLang];
	console.log(experienceDetails);
	return (
		<div>
			<Card className={''}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Category - {category}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						City - {city}
					</Typography>
				</CardContent>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Country - {dataInfo.country}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<span>Decription</span> - {dataInfo.description}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<span>Locality</span> - {dataInfo.locality}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						<span>Name</span> - {dataInfo.name}
					</Typography>
				</CardContent>
				<ExperienceForsquare foursqaure={foursqaure_info} />
			</Card>
			<ExperienceMedia medias={medias} tags={tags} />
		</div>
	);
}
