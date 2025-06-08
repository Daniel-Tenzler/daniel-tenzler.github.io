import portfolioData from './portfolio.json';

export async function getPortfolioItems() {
    return portfolioData.projects;
}

export async function getPortfolioItem(id) {
    return portfolioData.projects.find(project => project.id === id);
}