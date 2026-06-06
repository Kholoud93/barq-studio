import type { Project } from "@/data/projects";
import type { Locale } from "@/i18n";
import { getProjectTranslation } from "@/i18n/project-translations";

export interface LocalizedProject extends Project {
  localizedTitle: string;
  localizedCategory: string;
  localizedDescription: string;
  localizedChallenge: string;
  localizedSolution: string;
  localizedResults: string[];
  localizedServices: string[];
  localizedDuration: string;
}

export function localizeProject(project: Project, locale: Locale): LocalizedProject {
  const translation = getProjectTranslation(project.slug, locale);

  return {
    ...project,
    localizedTitle: translation?.title ?? project.title,
    localizedCategory: translation?.category ?? project.category,
    localizedDescription: translation?.description ?? project.description,
    localizedChallenge: translation?.challenge ?? project.challenge,
    localizedSolution: translation?.solution ?? project.solution,
    localizedResults: translation?.results ?? project.results,
    localizedServices: translation?.services ?? project.services,
    localizedDuration: translation?.duration ?? project.duration,
  };
}

export function localizeProjects(projects: Project[], locale: Locale): LocalizedProject[] {
  return projects.map((p) => localizeProject(p, locale));
}
