
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import './feature.scss';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb() {
    const breadcrumbs = [
        <Link underline="hover" className='link' key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Link
            underline="hover"
            className='link'
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Hosting for all
        </Link>,
        <Link underline="hover" className='link' key="1" color="inherit" href="/" onClick={handleClick}>
            Hosting
        </Link>,
        <Link underline="hover" className='link' key="1" color="inherit" href="/" onClick={handleClick}>
            Hosting6
        </Link>,
        <Link underline="hover" className='link' key="1" color="inherit" href="/" onClick={handleClick}>
            Hosting5
        </Link>,

    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb" className='breadcrumb-wrapper'>
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}

