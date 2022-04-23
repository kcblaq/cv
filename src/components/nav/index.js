import React from 'react';
import { Box, Link, Button } from '@mui/material';
// import { makeStyles } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import MyButton from '../../design-patterns/MyButton';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { GitHub, LinkedIn, Twitter,Straight,WhatsApp } from '@mui/icons-material';



const useStyles = makeStyles({
	num: {
		color: '#60D5C6',
	},
});

export default function Nav() {
	const classes = useStyles();
	return (
		<Box>
			<Box
				sx={{
					justifyContent: 'space-between',
					pt: 6,
					alignItems: 'center',
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
				}}>
				<Box>
					<Link
						href="/"
						sx={{
							color: 'primary.main',
							textDecoration: 'none',
							display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
						}}>
						<CodeOffIcon />
					</Link>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
						alignContent: 'center',
					}}>
					<Link
						href="/"
						sx={{ color: '#ffffff', textDecoration: 'none', pr: 1.5 }}>
						{' '}
						<span className={classes.num}> 01.</span> Home{' '}
					</Link>
					<Link
						href="/about"
						sx={{ color: '#ffffff', textDecoration: 'none', pr: 1.5 }}>
						{' '}
						<span className={classes.num}> 02.</span> About{' '}
					</Link>
					<Link
						href="/work"
						sx={{ color: '#ffffff', textDecoration: 'none', pr: 1.5 }}>
						{' '}
						<span className={classes.num}> 03.</span> Work{' '}
					</Link>
					<Link
						href="/contact"
						sx={{ color: '#ffffff', textDecoration: 'none', pr: 1.5 }}>
						{' '}
						<span className={classes.num}> 04.</span> Contact{' '}
					</Link>
					<Box sx={{ mt: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
						<MyButton width={'20%'} text="Resume" 
						doSomething={() => window.open('https://docs.google.com/document/d/1wjvjJKSTnUIlTEsL0Yw2rwhv-K3pKMX4/edit?usp=sharing&ouid=113748523768525640600&rtpof=true&sd=true','_blank') } />
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: { md: 'flex', xs: 'none', sm: 'none' },
					flexDirection: 'column',
					position: 'absolute',
					top: 260,
					left: 40,
				}}>
				<Link
					href="https://github.com/kcblaq"
					sx={{ mt: 4, textDecoration: 'none', color: 'primary.hue' }}>
					{' '}
					<GitHub />{' '}
				</Link>
				<Link
					href="https://www.linkedin.com/in/kelechiugwu/"
					sx={{ mt: 4, textDecoration: 'none', color: 'primary.hue' }}>
					{' '}
					<LinkedIn />{' '}
				</Link>
				<Link
					href="https://twitter.com/kcblaqy"
					sx={{ mt: 4, textDecoration: 'none', color: 'primary.hue' }}>
					{' '}
					<Twitter />{' '}
				</Link>

				<Link
					href="https://wa.me/2348032465303"
					sx={{ mt: 4, textDecoration: 'none', color: 'primary.hue' }}>
					
                <WhatsApp />
				</Link>

                <Link
					href="/"
					sx={{ mt: 4, textDecoration: 'none', color: 'primary.hue' }}>
					
                <Straight />
				</Link>
			</Box>
            <Box sx={{position: 'absolute',
					top: 400,
					right: 0,
                    transform: 'rotate(90deg)',
                    display:{md:'flex',sm:'none',xs:'none'},
                    flexDirection:'column'
                    }} >
                <Button variant='text' sx={{ textTransform:'none',color:'primary.hue' }} onClick={() => window.location = 'mailto:kcblack22@gmail.com' }> kcblack22@gmail.com </Button>
               
            </Box>
		</Box>
	);
}
