// Tipo para cada tecnología individual
type Technology = {
  name: string;
  icon: string;
};

// Tipo para las categorías disponibles
type TechCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Agile';

// Tipo para el objeto completo
type TechStack = {
  [K in TechCategory]: Technology[];
};


export const techStack: TechStack = {
  Frontend: [
    { name: "React", icon: "react" },
    { name: "JavaScript", icon: "javaScript" },
    { name: "TypeScript", icon: "typeScript" },
    { name: "Redux", icon: "redux" },
    { name: "Websockets", icon: "websocket" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Highcharts", icon: "highcharts" },
    { name: "HTML5", icon: "HTML5" },
    { name: "CSS3", icon: "CSS3" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Styled Components", icon: "styled-components" },
    { name: "Astro", icon: "astro" },
    { name: "Next.js", icon: "next" },
    { name: "Webpack", icon: "webpack" },
    { name: "Jest", icon: "jest" },
    { name: "Cypress", icon: "cypress" },
    { name: "Playwright", icon: "playwright" },
  ],
  Backend: [
    { name: "Java", icon: "java" },
    { name: "Spring", icon: "spring" },
    { name: "Hibernate", icon: "hibernate" },
    { name: "Node.js", icon: "nodejs" },
  ],
  Database: [
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgre-sql" },
    { name: "Redis", icon: "redis" },
    { name: "Supabase", icon: "supabase" },
  ],
  Tools: [
    { name: "Git", icon: "git" },
    { name: "Jenkins", icon: "jenkins" },
    { name: "Jira", icon: "jira" },
    { name: "AWS", icon: "aws" },
  ],
  Agile: [
    { name: "Scrum", icon: "scrum" },
    { name: "Kanban", icon: "kanban" },
  ],
};

export const getTechnologies = () => {
  const technologies: string[] = [];
  const categories: TechCategory[] = ['Frontend', 'Backend', 'Database', 'Tools', 'Agile'];
  categories.forEach(category => {
    techStack[category].forEach(tech => technologies.push(tech.icon));
  });
  return technologies
}