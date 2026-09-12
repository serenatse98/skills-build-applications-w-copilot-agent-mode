import ResourcePage from './ResourcePage.jsx'

export default function Users() {
  const endpoint = '/api/users/'

  return (
    <ResourcePage
      resource="users"
      endpoint={endpoint}
      title="Users"
      description="The people powering the OctoFit community."
    />
  )
}
