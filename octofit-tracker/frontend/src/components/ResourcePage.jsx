import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function ResourcePage({ resource, endpoint, title, description }) {
  const [items, setItems] = useState([])
  const [state, setState] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(resource, endpoint)
      .then((data) => {
        if (active) { setItems(data); setState('ready') }
      })
      .catch((requestError) => {
        if (active) { setError(requestError.message); setState('error') }
      })
    return () => { active = false }
  }, [resource, endpoint])

  const columns = items.length ? Object.keys(items[0]).filter((key) => key !== '__v') : []

  return (
    <section>
      <div className="resource-header">
        <div><p className="eyebrow">OctoFit data</p><h1>{title}</h1><p>{description}</p></div>
        {state === 'ready' && <strong>{items.length} records</strong>}
      </div>
      {state === 'loading' && <div className="status-message">Loading {title.toLowerCase()}...</div>}
      {state === 'error' && <div className="status-message error">{error}</div>}
      {state === 'ready' && !items.length && <div className="status-message">No {title.toLowerCase()} to show yet.</div>}
      {state === 'ready' && items.length > 0 && (
        <div className="resource-table-wrap"><table className="resource-table"><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{items.map((item, index) => <tr key={item._id ?? index}>{columns.map((column) => <td key={column}>{formatValue(item[column])}</td>)}</tr>)}</tbody></table></div>
      )}
    </section>
  )
}

function formatValue(value) {
  if (value === null || value === undefined) return '-'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}
