import ResourcePage from './ResourcePage.jsx'

export default function Activities() {
  const endpoint = '/api/activities/'

  return (
    <ResourcePage
      resource="activities"
      endpoint={endpoint}
      title="Activities"
      description="A live view of movement logged by the community."
    />
  )
}
