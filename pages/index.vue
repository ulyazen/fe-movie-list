<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Movie</h2>

      <div class="sm:col-span-3">
        <label
          for="genre"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Genre</label
        >
        <div class="mt-2">
          <select
            v-model="genreValue"
            id="genre"
            name="genre"
            autocomplete="genre"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option
              :value="item.id"
              v-for="item in genre.genres"
              :key="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(item, index) in movie?.results"
          :key="index"
          class="group relative"
        >
          <div @click="detail(item.id)">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
                :src="imageUrl(item.backdrop_path)"
                :alt="item.original_title"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  {{ item.original_title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { movie } from '@/interface/'
import { storeToRefs } from 'pinia';
import { useMovieStore } from '@/store/movie';
const config = useRuntimeConfig()

const genreValue = ref()

// const movieStore = useMovieStore()


// await movieStore.getMovie(genreValue.value)

// await movieStore.getGenre()

// const { list, genre} = storeToRefs(movieStore)



const { data: genre } = await useFetch('/api/movie/genre')

const { data: movie } : movie = await useAsyncData(
  'posts',
  () =>
    $fetch('/api/movie', {
      params: {
        with_genres: genreValue.value,
      },
    }),
  {
    watch: [genreValue],
  }
)
const imageUrl = (url: string) => {
  return 'https://image.tmdb.org/t/p/w500/' + url + '?api_key=' + config.apiKey
}

const detail = (id: string) => {
  navigateTo(`movie/${id}`)
}
</script>

<style scoped></style>
