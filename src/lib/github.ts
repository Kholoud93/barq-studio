export interface GitHubProject {
  id: number;
  name: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  language: string | null;
  stars: number;
  repoUrl: string;
  liveUrl: string | null;
  updatedAt: string;
  gradient: string;
  featured: boolean;
}

const gradients = [
  "from-blue-600 to-cyan-500",
  "from-indigo-600 to-blue-500",
  "from-emerald-600 to-teal-500",
  "from-violet-600 to-purple-500",
  "from-rose-600 to-pink-500",
  "from-cyan-600 to-blue-500",
  "from-amber-600 to-orange-500",
  "from-sky-600 to-indigo-500",
];

const projectMeta: Record<
  string,
  { title: string; description: string; category: string; featured?: boolean }
> = {
  Orphany: {
    title: "Orphany Platform",
    description:
      "A comprehensive orphan care management platform with donation tracking, child profiles, and administrative dashboards for charitable organizations.",
    category: "Non-Profit",
    featured: true,
  },
  "orphdash-admin": {
    title: "Orphany Admin Dashboard",
    description:
      "Administrative dashboard for managing orphan care operations, donations, volunteers, and organizational reporting.",
    category: "Admin System",
    featured: true,
  },
  "AL-DAR": {
    title: "AL-DAR Real Estate",
    description:
      "A modern real estate platform for property listings, search filters, and agent management built for the regional market.",
    category: "PropTech",
    featured: true,
  },
  "Novaa-CRM-Dashboard": {
    title: "Novaa CRM Dashboard",
    description:
      "A feature-rich CRM dashboard with pipeline management, contact tracking, and sales analytics for business teams.",
    category: "CRM",
    featured: true,
  },
  ApplyFlow: {
    title: "ApplyFlow",
    description:
      "A streamlined job application management system with multi-step forms, applicant tracking, and recruiter dashboards.",
    category: "HR Tech",
    featured: true,
  },
  "Ease-Book": {
    title: "Ease Book",
    description:
      "An intuitive booking platform for scheduling appointments, managing availability, and handling reservations seamlessly.",
    category: "SaaS",
    featured: true,
  },
  "Ecommerce-app": {
    title: "E-Commerce Application",
    description:
      "A full-featured e-commerce application with product catalog, shopping cart, checkout flow, and order management.",
    category: "E-commerce",
    featured: true,
  },
  "PulseForge-Training": {
    title: "PulseForge Training",
    description:
      "A corporate training management platform for course enrollment, progress tracking, and certification workflows.",
    category: "EdTech",
    featured: true,
  },
  megabox: {
    title: "MegaBox",
    description:
      "A media and content management application with dynamic layouts, content organization, and responsive design.",
    category: "Media",
    featured: true,
  },
  "Depth-Wave": {
    title: "Depth Wave",
    description:
      "An interactive web application featuring modern UI patterns, data visualization, and responsive component architecture.",
    category: "Web App",
    featured: true,
  },
  dataOrbit: {
    title: "DataOrbit Analytics",
    description:
      "A data analytics dashboard for visualizing metrics, tracking KPIs, and monitoring business performance in real-time.",
    category: "Analytics",
    featured: true,
  },
  "Qebaa-Clinic": {
    title: "Qebaa Clinic",
    description:
      "A healthcare clinic management system with patient scheduling, medical records, and clinic administration tools.",
    category: "HealthTech",
    featured: true,
  },
  "nuxt3-users-crud": {
    title: "Nuxt3 Users CRUD",
    description:
      "A full-stack user management application built with Nuxt 3 featuring CRUD operations, authentication, and admin panels.",
    category: "Full-Stack",
    featured: false,
  },
  "orphan-vue": {
    title: "Orphan Care Vue App",
    description:
      "A Vue.js application for orphan care management with profile tracking, donation management, and reporting features.",
    category: "Non-Profit",
    featured: false,
  },
  "currency-converter": {
    title: "Currency Converter",
    description:
      "A real-time currency conversion tool with live exchange rates, multi-currency support, and clean financial UI.",
    category: "FinTech",
    featured: false,
  },
  Portfolio: {
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, and professional experience with polished animations.",
    category: "Portfolio",
    featured: false,
  },
  MyPortfolio: {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website highlighting development work, technical skills, and project showcases.",
    category: "Portfolio",
    featured: false,
  },
  "Multi-step-form": {
    title: "Multi-Step Form",
    description:
      "An elegant multi-step form wizard with validation, progress tracking, and smooth step transitions.",
    category: "UI Component",
    featured: false,
  },
  "Prayer-Timing": {
    title: "Prayer Timing App",
    description:
      "A prayer times application with location-based scheduling, daily notifications, and Islamic calendar integration.",
    category: "Utility",
    featured: false,
  },
  "ToDo-Redux": {
    title: "Todo App with Redux",
    description:
      "A task management application powered by Redux state management with filtering, categories, and persistence.",
    category: "Productivity",
    featured: false,
  },
  "Quiz-app-Next.js": {
    title: "Quiz Application",
    description:
      "An interactive quiz application built with Next.js featuring timed questions, score tracking, and result analytics.",
    category: "EdTech",
    featured: false,
  },
  "Movie-app": {
    title: "Movie Discovery App",
    description:
      "A movie browsing application with search, ratings, trailers, and personalized recommendations using external APIs.",
    category: "Entertainment",
    featured: false,
  },
  "mini-Ecommerce-Crud": {
    title: "Mini E-Commerce CRUD",
    description:
      "A lightweight e-commerce CRUD application for managing products, inventory, and basic store operations.",
    category: "E-commerce",
    featured: false,
  },
  wireframing: {
    title: "Wireframing Toolkit",
    description:
      "A collection of UI wireframes and design prototypes for rapid product ideation and client presentations.",
    category: "Design",
    featured: false,
  },
  "product-mangement-system": {
    title: "Product Management System",
    description:
      "A product inventory management system with catalog organization, stock tracking, and admin controls.",
    category: "Admin System",
    featured: false,
  },
  Quotes: {
    title: "Quotes Generator",
    description:
      "An inspirational quotes application with random quote generation, favorites, and social sharing capabilities.",
    category: "Utility",
    featured: false,
  },
  "To-Do-App": {
    title: "Todo Application",
    description:
      "A clean and minimal todo application with task creation, completion tracking, and local storage persistence.",
    category: "Productivity",
    featured: false,
  },
  "E-commerce": {
    title: "E-Commerce Store",
    description:
      "A JavaScript e-commerce storefront with product browsing, cart functionality, and checkout experience.",
    category: "E-commerce",
    featured: false,
  },
  "simple-portfolio": {
    title: "Simple Portfolio",
    description:
      "A lightweight portfolio website with project showcases, about section, and contact information.",
    category: "Portfolio",
    featured: false,
  },
  "weather-Api": {
    title: "Weather API App",
    description:
      "A weather forecasting application using external APIs with location search and detailed weather displays.",
    category: "Utility",
    featured: false,
  },
  bookmarker: {
    title: "Bookmark Manager",
    description:
      "A bookmark management tool for organizing, categorizing, and quickly accessing saved web resources.",
    category: "Productivity",
    featured: false,
  },
};

function formatTitle(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getGradient(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

interface GitHubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

export async function fetchGitHubProjects(): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/Kholoud93/repos?per_page=100&sort=updated",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) return getStaticGitHubProjects();

    const repos: GitHubApiRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => {
        const meta = projectMeta[repo.name];
        return {
          id: repo.id,
          name: repo.name,
          slug: repo.name.toLowerCase(),
          title: meta?.title || formatTitle(repo.name),
          description:
            meta?.description ||
            repo.description ||
            `A ${repo.language || "web"} project built and maintained on GitHub.`,
          category: meta?.category || "Open Source",
          language: repo.language,
          stars: repo.stargazers_count,
          repoUrl: repo.html_url,
          liveUrl: repo.homepage || null,
          updatedAt: repo.updated_at,
          gradient: getGradient(repo.name),
          featured: meta?.featured ?? false,
        };
      });
  } catch {
    return getStaticGitHubProjects();
  }
}

export function getFeaturedGitHubProjects(
  projects: GitHubProject[]
): GitHubProject[] {
  return projects.filter((p) => p.featured);
}

function getStaticGitHubProjects(): GitHubProject[] {
  return Object.entries(projectMeta).map(([name, meta], index) => ({
    id: index,
    name,
    slug: name.toLowerCase(),
    title: meta.title,
    description: meta.description,
    category: meta.category,
    language: "TypeScript",
    stars: 0,
    repoUrl: `https://github.com/Kholoud93/${name}`,
    liveUrl: null,
    updatedAt: new Date().toISOString(),
    gradient: getGradient(name),
    featured: meta.featured ?? false,
  }));
}
