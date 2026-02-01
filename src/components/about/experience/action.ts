import { TExperience } from './experience.type';

export const getExperienceAction = async (): Promise<TExperience[] | null>  => {
  try {
    const res = await fetch('http://localhost:3000/api/about/experience')
    if(!res.ok) throw new Error('Failed to load Career data')
    const data: TExperience[] = await res.json()
    return data
  } catch (err) {
    console.error('Error fetching the Career Journey Data', err)
    return null
  }
}
