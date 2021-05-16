import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../routes/config';
import { useSelector, shallowEqual } from 'react-redux';
import { mainDataSelector } from '../../store/selectors';
import './header.scss';
import { AppBar, Toolbar, List, ListItem, ListItemText, Container } from '@material-ui/core';
import LanguageComponent from '../../components/languageComponent';

export default function Header() {
	const { org_logo, counts } = useSelector(mainDataSelector, shallowEqual);
	return (
		<AppBar position="static">
			<Toolbar>
				<Container maxWidth="md" className="navbar">
					{org_logo && (
						<Link to="/">
							<img src={org_logo} alt="Logo" className="logo" />
						</Link>
					)}
					<List component="nav" aria-labelledby="main navigation" className="nav">
						{routes &&
							routes.map(
								(route) =>
									route.isMenuItem && (
										<NavLink
											exact
											to={route.path}
											key={route.path}
											className={`links `}
											activeClassName="active"
										>
											<ListItem button>
												<ListItemText primary={route.title} />
												<span className="counts">
													{counts && counts[route.title.toLowerCase()]}
												</span>
											</ListItem>
										</NavLink>
									)
							)}
						<LanguageComponent />
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
}
