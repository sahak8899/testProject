import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.scss';

export default function ExperienceMedia({ medias, tags }) {
	return (
		<div>
			<h2>Media</h2>
			<div className="experience-wrapper">
				{medias.map((media, index) => (
					<Card className={'experience-content'} key={index}>
						{media.video_download_url ? (
							<video width="320" height="240" controls>
								<source src={media.video_download_url} type="video/mp4" />
							</video>
						) : (
							<CardMedia
								className={'experience-cover'}
								image={media.standard_resolution}
								title="Contemplative Reptile"
							/>
						)}

						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{media.caption}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
			<p>tags - {tags.map((tag) => <span className="tags">#{tag},</span>)}</p>
		</div>
	);
}
