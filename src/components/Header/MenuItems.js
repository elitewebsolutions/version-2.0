export const MenuItems = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        subMenu:false
       
    },
    {
        title: "Services",
        url: "/services/",
        cName: "nav-links",
        subMenu:true,
        sMenu: [
          {
            title: "WordPress Development",
            url: "/services/wordpress-development/",
            cName: "nav-links",
          },
          {
            title: "Learndash LMS Development",
            url: "/services/learndash-development/",
            cName: "nav-links",
          },
          {
            title: "Web Development",
            url: "/services/web-development/",
            cName: "nav-links",
          },
          {
            title: "UI/UX Development",
            url: "/services/ui-ux-development/",
            cName: "nav-links",
          },
          {
            title: "Web Maintenance",
            url: "/services/web-maintenance/",
            cName: "nav-links",
          },
          {
            title: "Search Engine Optimization",
            url: "/services/seo/",
            cName: "nav-links",
          },
          {
            title: "Web Hosting",
            url: "/services/web-hosting/",
            cName: "nav-links",
          }
        ]
    },
    {
      title: "Portfolio",
      url: "/portfolio/",
      cName: "nav-links",
      subMenu:false
    },
    {
        title: "About us",
        url: "/about-us/",
        cName: "nav-links",
        subMenu:false
    },
    {
        title: "Contact",
        url: "/contact/",
        cName: "nav-links",
        subMenu:false
    },
];
