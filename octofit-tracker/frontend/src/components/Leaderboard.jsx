import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  const endpoint = '/api/leaderboard/'

  return (
    <ResourcePage
      resource="leaderboard"
      endpoint={endpoint}
      title="Leaderboard"
      description="See who is setting the pace across OctoFit."
    />
  )
}
