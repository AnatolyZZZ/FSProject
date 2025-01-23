import { Icon } from "@mui/material"
import { regularUserItems } from './entities/profileMenuItems'
import Button from '@mui/material/Button';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProfileMenu: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		console.log('anchorEl ->', anchorEl);
		console.log('open ->', open);
	};
	const handleClose = () => {
		setAnchorEl(null);
	  };
	return (<>
		<Button
			id="profile-menu-button"
			aria-controls={open ? 'profile-menu' : undefined}
			aria-haspopup="true"
			aria-expanded={open ? 'true' : undefined}
			onClick={handleClick}
		>
	Dashboard
		</Button>
		<Menu
			id="demo-positioned-menu"
			aria-labelledby="demo-positioned-button"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
		>	
			{regularUserItems.map(item => <MenuItem key={item.id}>{item.title}</MenuItem>)}.
			<MenuItem onClick={handleClose}>Profile</MenuItem>
			<MenuItem onClick={handleClose}>My account</MenuItem>
			<MenuItem onClick={handleClose}>Logout</MenuItem>
		</Menu>
	</>)}

export default ProfileMenu