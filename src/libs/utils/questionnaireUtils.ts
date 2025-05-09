import { ServiceOption } from '@/types/questionnaire'

export const serviceOptions = [
  { value: 'ai-ml-&-data-solutions', label: 'AI, ML & Data Solutions' },
  { value: 'venture-building', label: 'Venture Building' },
  { value: 'team-augmentation', label: 'Team Augmentation' },
  { value: 'fractional-leadership', label: 'Fractional Leadership' },
  { value: 'it-cost-optimisation', label: 'IT Cost Optimisation' },
]

export const ALMLDataSolutionTypeOptions = [
  {
    value: 'internal-ai-assistant',
    label:
      'Internal AI Assistant / Agent (e.g. automating internal queries or workflows)',
  },
  { value: 'customer-facing-agent', label: 'Customer-Facing Agent / Chatbot' },
  {
    value: 'workflow-automation',
    label:
      'Workflow Automation (e.g. document handling, lead qualification, ops tasks)',
  },
  {
    value: 'custom-ml-solution',
    label:
      'Custom ML Solution (e.g. fraud detection, recommendations, forecasting)',
  },
  {
    value: 'analytics-or-business-intelligence',
    label: 'Analytics or Business Intelligence',
  },
  { value: 'not-sure-yet', label: 'Not Sure Yet / Need Help Scoping' },
  { value: 'other', label: 'Other - please share details here' },
]

export const ventureTypeOptions = [
  { value: 'corporate-ventures', label: 'Corporate Ventures' },
  { value: 'founder-led-startup', label: 'Founder-Led Startup' },
  {
    value: 'co-built-venture',
    label: 'Co-Built Venture (or Strategic Partnership)',
  },
  { value: 'nonprofit-impact-venture', label: 'Nonprofit / Impact Venture' },
  { value: 'other', label: 'Other - please share details here' },
]

export const teamAugmentationSkillsOptions = [
  { value: 'software-engineers', label: 'Software Engineers' },
  { value: 'mobile-developers', label: 'Mobile Developers' },
  { value: 'devops-&-cloud', label: 'DevOps & Cloud' },
  { value: 'ux-ui-designers', label: 'UX/UI Design' },
  {
    value: 'quality-assurance-testing',
    label: 'QA & Testing',
  },
  { value: 'data-science-&-engineering', label: 'Data Science & Engineering' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'other', label: 'Other - please share details here' },
]

export const fractionalRoleOptions = [
  { value: 'fractional-cto', label: 'Fractional CTO' },
  { value: 'system-architect', label: 'System Architect' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'technical-advisor', label: 'Technical Advisor' },
  { value: 'security-specialist', label: 'Security Specialist' },
  { value: 'data/ai-strategist', label: 'Data/AI Strategist' },
  { value: 'other', label: 'Other - please share details here' },
]

export const optimisationAreaOptions = [
  { value: 'cloud-infrastructure', label: 'Cloud Infrastructure' },
  { value: 'saas-&-software-licensing', label: 'SaaS & Software Licensing' },
  { value: 'platform-costs', label: 'Platform Costs' },
  { value: 'development-processes', label: 'Development Processes' },
  {
    value: 'legacy-system-modernization',
    label: 'Legacy System Modernization',
  },
  { value: 'outsourcing-strategy', label: 'Outsourcing Strategy' },
  { value: 'other', label: 'Other - please share details here' },
]

export const budgetOptions = [
  { value: 'under-50k', label: 'Under $50,000' },
  { value: '50k-150k', label: '$50,000-$150,000' },
  { value: '150k-500k', label: '$150,000-$500,000' },
  { value: '500k-plus', label: '$500,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

export const timelineOptions = [
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: '12-plus-months', label: '12+ months' },
  { value: 'not-sure', label: 'Not sure yet' },
]

export const teamSizeOptions = [
  { value: '1-2', label: '1-2' },
  { value: '3-5', label: '3-5' },
  { value: '6-10', label: '6-10' },
  { value: '10-plus', label: '10+' },
]

export const durationOptions = [
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: '12-plus-months', label: '12+ months' },
  { value: 'ongoing-support', label: 'Ongoing support' },
]

export const frequencyOptions = [
  { value: 'full-time', label: 'Full-time (40h/week)' },
  { value: 'part-time', label: 'Part-time (20h/week)' },
  { value: 'quarter-time', label: 'Quarter-time (10h/week)' },
  { value: 'on-demand', label: 'On-demand' },
]

export const itSpendOptions = [
  { value: 'under-100k-year', label: 'Under $100k/year' },
  { value: '100k-500k-year', label: '$100k-$500k/year' },
  { value: '500k-2m-year', label: '$500k-$2M/year' },
  { value: '2m-plus-year', label: '$2M+/year' },
  { value: 'prefer-not-to-disclose', label: 'Prefer not to disclose' },
]

export const stageOptions = [
  { value: 'information-gathering', label: 'Information gathering' },
  { value: 'ready-to-start-soon', label: 'Ready to start soon' },
  { value: 'needed-to-start-yesterday', label: 'Needed to start yesterday' },
]

export function getOptionLabel(
  value: string,
  options: { value: string; label: string }[]
) {
  const option = options.find((opt) => opt.value === value)
  return option ? option.label : value
}

export function formatServiceOption(service?: ServiceOption): string {
  if (!service) return ''
  return getOptionLabel(service, serviceOptions)
}
