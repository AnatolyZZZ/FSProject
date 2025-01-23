type MenuItem = { id: number, title: string; icon?: string } & ({ link: string } | { action: string })
export const regularUserItems: MenuItem[] = [
	{ id: 1, title: 'Logout', action: 'logout', icon: 'logout' }
]