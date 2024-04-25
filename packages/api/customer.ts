import { getMedusaUrl } from "./utils/medusa"

export async function getToken(email: string, password: string): Promise<string>{
  const params = {
    email,
    password
  }
  const token = fetch(`${getMedusaUrl()}/store/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
    next: {
      tags: ['auth']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.access_token
    }).catch((err) => {
      console.error(err)
      throw new Error("Wrong email or password.")
    })

  return token
}
