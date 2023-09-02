import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie-store', () => {
  const list = ref()
  const detail = ref()
  const genre = ref()

  async function getGenre() {
    const { data } = await useFetch('/api/movie/genre')
    genre.value = data.value
  }

  async function getMovie(genre: any) {
    const { data } = await useAsyncData(
      'posts',
      () =>
        $fetch('/api/movie', {
          params: {
            with_genres: genre,
          },
        }),
      {
        watch: [genre],
      }
    )

    list.value = data.value
  }

  return { list, detail, genre, getGenre, getMovie }
})
