export default defineEventHandler((event) => {
    const config = useRuntimeConfig()

    const data = $fetch(config.apiBase +'/genre/movie/list?api_key=' + config.apiKey, {
      method: 'GET',
    })

    return data
  })