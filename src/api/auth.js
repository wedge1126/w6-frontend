const { REACT_APP_API_DOMAIN } = process.env
const BASE_URL = REACT_APP_API_DOMAIN

export const signup = async (user) => {
  const response = await fetch(`${BASE_URL}/api/signup`, {
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()

  if(json.status === 201) {
    localStorage.setItem('journal-app', json.token)
  }

  return json
}

export const login = async (user) => {
  const response = await fetch(`${BASE_URL}/api/login`, {
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()
  
  if (json.status === 200) {
    localStorage.setItem('journal-app', json.token)
  }

  return json
}

export const profile = async () => {
  const token = localStorage.getItem('journal-app')
  const response = await fetch(`${BASE_URL}/api/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    },
    method: 'GET'
  })
  const json = await response.json()

  return json
}