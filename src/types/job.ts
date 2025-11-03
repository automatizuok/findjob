export interface JobNode {
  question: string;
  label: string;
  description?: string;
  options?: JobNode[];
}
