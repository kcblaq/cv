import {
	Box,
	Typography,
	Card,
	CardActionArea,
	CardContent,
	Link,
} from '@mui/material';
import React from 'react';
import projects from '../projectdata';

export default function Work() {
	return (
		<Box
			sx={{
				color: '#fff',
				minHeight: '50vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Typography
				variant="h5"
				sx={{ color: 'primary.white', display: 'flex', mb: 4, mt: 2 }}>
				<Typography variant="h5" sx={{ color: 'primary.main' }}>
					{' '}
					03.{' '}
				</Typography>{' '}
				Few of my works
			</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'row',flexWrap:'wrap',maxWidth:{xs:'100%',sm:'100%', md:'70%',lg:'70%'} }}>
				{projects.map((project) => {
					return (<Box sx={{display:'flex',flexDirection:'column',
                     justifyContent:'space-evenly', alignItems:'center' }}>
						<Link underline='none' target='_blank' href={project.url}>
                        <Card sx={{ width: 245, height:250, overflow:'scroll', margin:2, 
                        '&:hover':{
                            width:260, transition: 'all 0.2s ease', backgroundColor:'primary.hue'
                        }  
                        }}>
					<CardActionArea>
						
						<CardContent sx={{}}>
							<Typography gutterBottom variant="h5" component="div" sx={{backgroundColor:'#000', padding:2, color:'primary.main'}}>
                            <Box sx={{ color: 'primary.white', '&:hover':{textDecoration:'none'} }}> {project.name}</Box>
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{project.description}
							</Typography>
						</CardContent>
                        <ul>
                            {project.tools.map((tool) => {
                                return (
                                    <li>{tool} </li>
                                )
                            })}
                        </ul>
					</CardActionArea>
				</Card>
							
						</Link>
                    </Box>
					);
				})}
				
			</Box>
		</Box>
	);
}
