export const menuItemsData = [
  {
	title: "Home",
	url: "/",
  },
  {
	title: "About us",
	url: "/about-us",
  },
  {
	title: "Services",
	url: "/services",
	submenu: [
	  {
		title: "Pumping Repairs",
		url: "/services/pumping",
	  },
	  {
		  title: "Sandblasting/Painting & orrosion Protection",
		  url: "/services/sandblasting",
	  },
	  {
		  title: "Construction Works",
		  url: "/services/construction",
	  },
	  
	],
  },
  {
	title: "Products",
	submenu: [
	  {
		title: "Pumps",
		url: "pumps",
		submenu: [
		  {
			title: "TRUFLO Pumping Systems",
			url: "/products/pumps/truflo",
		  },
		],
	  },
	  {
		title: "Drilling Additives",
		url: "/products/additives",
	  },
	  {
		title: "Lifting Gears/Equipment",
		url: "/products/gears",
	  },
	],
  },
  {
	  title: "Contact",
	  url: "/contact-us",
	},
];
