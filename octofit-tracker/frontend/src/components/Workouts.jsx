import ResourcePage from './ResourcePage.jsx'

export default function Workouts() {
  const endpoint = '/api/workouts/'

  return (
    <ResourcePage
      resource="workouts"
      endpoint={endpoint}
      title="Workouts"
      description="Browse suggested ways to keep your momentum going."
    />
  )
}
