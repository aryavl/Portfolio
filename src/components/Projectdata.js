
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Ecommerce from '../images/ecomm.png'
import Ip from '../images/iptracker.png'
const projectsData = [
    {
      title: "Responsive ECommerce App ",
      description:
        "A responsive (SPA) Ecommerce app created using React JS which displays carted items.",
      imageUrl:Ecommerce,
      imageAlt: "Project 1 Image",
      tags: ["Reactjs", "Material-UI", "Redux","Firebase"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/aryalechu98/e-commerce",
        },
        {
          icon: OpenInNewIcon,
          href: "https://my-e-commerce-shopping.web.app/",
        },
      ],
    },
    {
      title: "IP Address Tracker app",
      description:
        "A responsive  IP Address Tracker app which tracks the locations using the IP Geolocation API by IPify. Map is created using LeafletJS",
      imageAlt: "ip address tracker ",
      imageUrl:Ip,
      tags: ["ReactJS","React-Leaflet","IP Geolocation API","Tailwind CSS"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/aryavl/frontend-mentor-ip-address-tracker",
        },
        {
          icon: OpenInNewIcon,
          href: "https://ip-addresstracker-frontend.netlify.app/",
        },
      ],
    },
   
    
  ];
  
  
export default projectsData