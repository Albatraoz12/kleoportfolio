interface Project {
  id: number;
  title: string;
  introImg: string;
  sideTitle: string;
  Introduction: string;
  Role: string;
  Impact: string;
  Features: string;
  Images: { title: string; image: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SEB Nexus',
    introImg: '/portfolio/IntroCase.png',
    sideTitle: 'An innovative tool for the employees of SEB',
    Introduction:
      "Nexus is SEB's comprehensive, web-based internal tool designed to streamline and enhance the efficiency of various banking operations. By integrating seamlessly with all internal application tones, Nexus provides a unified platform that supports multiple internal teams across the bank. Its primary objective is to build common functions and provide consistent support to roles such as advisors and service managers, ensuring these tools are efficient and user-friendly. By centralizing these functions, Nexus aims to improve overall workflow, data accuracy, and customer service across SEB.",
    Role: "As the UX Design Lead for Nexus, I ensure the cohesiveness of all products integrated into Nexus, maintaining a consistent design language across internal tools for advisors and service managers. My responsibilities include conducting UX research, presenting key findings for our stakeholders and the agile team, wireframing, prototyping, and user testing. I innovate within Nexus, creating or improving features based on user feedback. Utilizing Figma and motion design, I collaborate closely with other UX designers, visual designers, developers, product owners, and managers to align design efforts. My role is crucial in maintaining the consistency and quality of Nexus, ensuring all our micro frontends follow SEB's design guidelines and accessibility standards.",
    Impact:
      "My role has a profound impact on the platform by ensuring a cohesive and consistent user experience across all integrated products. I drive enhancements through UX research, wireframing, and prototyping, which leads to user-centered innovations and improvements. My adherence to SEB’s design guidelines ensures that all features meet high standards of quality and accessibility. Additionally, my collaborative efforts with UX designers, developers, and product teams foster effective alignment and integration, which enhances the overall functionality and user satisfaction of Nexus. This holistic approach contributes to maintaining Nexus as a unified, intuitive, and continuously evolving tool that effectively supports SEB's employees",
    Features:
      'In my role, I have worked on several key features of Nexus. I contributed to the development of new solutions, which allows advisors and service managers to help private and corporate customers and assist them with their banking errands. I worked on the admin tool, which allows developers and product owners to view and manage micro frontends (MFEs) across different channel environments and add new MFEs. I contributed to the customer selector feature, allowing internal users to efficiently search for private or corporate customers, streamlining the process of accessing customer information. Furthermore, I worked close to other UX designers and visual designers to create a smart and effective navigation through the external and internal channels in SEB.',
    Images: [
      {
        title: 'Admin tool',
        image: '/portfolio/case.jpg',
      },
      {
        title: 'Customer search',
        image: '/portfolio/case2.jpg',
      },
    ],
  },
];

export default projects;
