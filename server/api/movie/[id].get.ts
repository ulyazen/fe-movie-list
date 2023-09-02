export default defineEventHandler((event) => {


  const id = event?.context?.params?.id

  const config = useRuntimeConfig()

  const data = $fetch(
    config.apiBase + `/movie/${id}?api_key=` + config.apiKey,
    {
      method: 'GET',
    }
  )

  return data
})
