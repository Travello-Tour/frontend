export function getSizeImages(url: string, size: string): string {
  // Регулярка для замены {{size}}
  const newSizeUrl = url.replace(/{{size}}/g, size)
  return newSizeUrl
}
