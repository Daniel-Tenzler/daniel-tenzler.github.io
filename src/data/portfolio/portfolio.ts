import type { PortfolioItem, PortfolioItems } from './portfolio.types';
import portfolioData from './portfolio.json';

export async function getPortfolioItems(): Promise<PortfolioItems> {
	return portfolioData.projects;
}

export async function getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
	return portfolioData.projects.find((project) => project.id === id);
}
