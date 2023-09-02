export default defineEventHandler((event) => {
    const config = useRuntimeConfig()

    const query = getQuery(event)

    const data = $fetch(config.apiBase +'/discover/movie?api_key=' + config.apiKey + '&with_genres=' + query.with_genres, {
      method: 'GET',
    })




    return data
  })