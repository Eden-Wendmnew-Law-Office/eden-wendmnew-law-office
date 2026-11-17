/**
 * Projects
 * Shown on the homepage (featured: true), /projects and /projects/[slug].
 * Put images in public/projects/ and reference them as '/projects/file.jpg'.
 */

import type { Project, ProjectsPage } from '@/types/content';

/** The /projects page; its subtitle reuses HOME_PAGE.projectsSubtitle. */
export const PROJECTS_PAGE: ProjectsPage = {
  meta: {
    title: 'Work',
    description: 'Selected matters handled by Eden Wendmnew Law Office.',
  },
  title: 'Work',
};

export const PROJECTS: Project[] = [];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured).slice(0, 6);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
