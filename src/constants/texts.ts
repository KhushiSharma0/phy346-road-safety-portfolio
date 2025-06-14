export const siteTexts = {
  siteTitle: "PHY346 Road Safety Dashboard",
  siteDescription: "Analyze school routes, collisions, and safety insights.",
  navbar: {
    brand: "Road Safety Project",
    links: {
      report: "Report",
      codes: "Codes & Guides",
      tools: "Interactive Tools",
      resources: "Resources",
      about: "About",
    },
  },
  homepage: {
    welcomeHeading: "Welcome to the South Yorkshire Road Safety Dashboard",
    welcomeText: "This platform showcases our project’s data, reports, tools, and team. Due to time constraints, only the Report page and the Codes & Guides Page work, apologies for any inconveniences! If any further information is required, please feel free to contact me at my email : khushisharma4775@gmail.com.",
  },


  reportPage: {
    title: "Report Section",
    description: "This page will host the project's analysis reports, data summaries, and key findings.",
  },


  codesPage: {
    title: "Codes & Guides",
    description: "Explore the project repositories, Jupyter notebooks, and technical guides related to our road safety analysis.",
    repos: [
      {
        name: 'STATS19_route_risk_analysis',
        topic: 'STATS19 Data Preparation & Analysis',
        owner: 'Khushi Sharma',
        description: 'Analysis scripts, data cleaning notebooks, and dataset analysis, routes integration, correlation analysis and machine learning',
        url: 'https://github.com/KhushiSharma0/STATS19_route_risk_analysis',
      },
      {
        name: 'PHY-Road-Safety',
        topic: 'Routes Generation from GoogleAPI, more',
        owner: 'Daniel W. Porges',
        description: 'route generation from googleAPI, origin points, etc.',
        url: 'https://github.com/dwporges/PHY-Road-Safety',
      },
      {
        name: 'Merging-STATS19-and-Google-API-route-datasets',
        topic: 'Merging STATS19 Collision Data and Google API Generated Routes, more',
        owner: 'Zofia Cywińska',
        description: 'Route formatting, Buffer generation, Merging STATS19 data with the generated routes',
        url: 'https://github.com/zmcywinska/Merging-STATS19-and-Google-API-route-datasets',
      },
    ],
  },
  


  toolsPage: {
    title: "Interactive Tools",
    description: "This section will provide interactive tools for exploring data and generating insights.",
    placeholderNote: "Placeholder page – content coming soon!",
  },


  resourcesPage: {
    title: "Resources",
    description: "This page will list external resources, datasets, papers, and documentation links.",
    placeholderNote: "Placeholder page – content coming soon!",
  },


  aboutPage: {
    title: "About",
    description: "This page will introduce the project team, goals, and background context.",
    placeholderNote: "Placeholder page – content coming soon!",
  },
};
