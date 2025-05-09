export type ServiceOption =
  | 'ai-ml-&-data-solutions'
  | 'venture-building'
  | 'team-augmentation'
  | 'fractional-leadership'
  | 'it-cost-optimisation'

export type AIMLDataSolutionType =
  | 'internal-ai-assistant'
  | 'customer-facing-agent'
  | 'workflow-automation'
  | 'custom-ml-solution'
  | 'analytics-or-business-intelligence'
  | 'not-sure-yet'
  | 'other'

export type VentureType =
  | 'corporate-ventures'
  | 'founder-led-startup'
  | 'co-built-venture'
  | 'nonprofit-impact-venture'
  | 'other'

export type TeamAugmentationSkills =
  | 'software-engineers'
  | 'mobile-developers'
  | 'devops-&-cloud'
  | 'ux-ui-designers'
  | 'quality-assurance-testing'
  | 'data-science-&-engineering'
  | 'project-management'
  | 'other'

export type FractionalRole =
  | 'fractional-cto'
  | 'system-architect'
  | 'product-manager'
  | 'technical-advisor'
  | 'security-specialist'
  | 'data/ai-strategist'
  | 'other'

export type OptimisationArea =
  | 'cloud-infrastructure'
  | 'saas-&-software-licensing'
  | 'platform-costs'
  | 'development-processes'
  | 'legacy-system-modernization'
  | 'outsourcing-strategy'
  | 'other'

export type Budget =
  | 'under-50k'
  | '50k-150k'
  | '150k-500k'
  | '500k-plus'
  | 'not-sure'

export type Timeline =
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | '12-plus-months'
  | 'not-sure'

export type TeamSize = '1-2' | '3-5' | '6-10' | '10-plus'

export type Duration =
  | '1-3-months'
  | '3-6-months'
  | '6-12-months'
  | '12-plus-months'
  | 'ongoing-support'

export type Frequency = 'full-time' | 'part-time' | 'quarter-time' | 'on-demand'

export type ITSpend =
  | 'under-100k-year'
  | '100k-500k-year'
  | '500k-2m-year'
  | '2m-plus-year'
  | 'prefer-not-to-disclose'

export type Stage =
  | 'information-gathering'
  | 'ready-to-start-soon'
  | 'needed-to-start-yesterday'

export interface QuestionnaireState {
  step: number
  service?: ServiceOption
  dataSolutionType?: AIMLDataSolutionType
  dataSolutionOther?: string
  ventureType?: VentureType
  ventureTypeOther?: string
  teamAugmentationSkills?: TeamAugmentationSkills[]
  teamAugmentationSkillsOther?: string
  fractionalRole?: FractionalRole
  fractionalRoleOther?: string
  optimisationAreas?: OptimisationArea[]
  optimisationAreasOther?: string
  budget?: Budget
  timeline?: Timeline
  teamSize?: TeamSize
  duration?: Duration
  frequency?: Frequency
  itSpend?: ITSpend
  stage?: Stage
  projectDetails?: string
  contact: {
    fullName: string
    companyName: string
    email: string
    phoneNumber: string
  }
}
