export const generateWhatsAppLink = (link: string, message: string) => {
  const url = `${link}?text=${encodeURIComponent(message)}`

  return url
}
