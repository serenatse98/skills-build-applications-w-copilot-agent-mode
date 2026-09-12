import ResourcePage from './ResourcePage.jsx'

export default function Teams() {
  const endpoint = '/api/teams/'

  return (
    <ResourcePage
      resource="teams"
      endpoint={endpoint}
      title="Teams"
      description="Find your crew and follow collective progress."
    />
  )
}
