export interface Work {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  projects: WorkProject[];
}

export interface WorkProject {
  name: string;
  description: string;
  stack: string[];
  imageUrl?: string;
}