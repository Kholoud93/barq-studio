import type { Project } from "@/data/projects";
import type { Locale } from "@/i18n";

export interface LocalizedProject extends Project {
  localizedTitle: string;
  localizedCategory: string;
  localizedDescription: string;
  localizedChallenge: string;
  localizedSolution: string;
  localizedResults: string[];
  localizedKind: string;
}

export function localizeProject(project: Project, locale: Locale): LocalizedProject {
  const isAr = locale === "ar";

  return {
    ...project,
    localizedTitle: isAr ? project.titleAr : project.title,
    localizedCategory: isAr ? project.categoryAr : project.category,
    localizedDescription: isAr ? project.descriptionAr : project.description,
    localizedChallenge: isAr ? project.challengeAr : project.challenge,
    localizedSolution: isAr ? project.solutionAr : project.solution,
    localizedResults: isAr ? project.resultsAr : project.results,
    localizedKind:
      project.kind === "concept"
        ? isAr
          ? "مشروع مفهوم"
          : "Concept Project"
        : project.kind === "demo"
          ? isAr
            ? "مشروع تجريبي"
            : "Demo Project"
          : isAr
            ? "عمل مختار"
            : "Selected Work",
  };
}

export function localizeProjects(projects: Project[], locale: Locale): LocalizedProject[] {
  return projects.map((p) => localizeProject(p, locale));
}
