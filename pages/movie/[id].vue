<template>
  <div class="bg-white">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
    >
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ data.original_title }}
        </h2>
        <p class="mt-4 text-gray-500">
          {{ data.overview }}
        </p>
        <dl
          class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
        >
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Release Date</dt>
            <dd class="mt-2 text-sm text-gray-500">
              {{ data.release_date }}
            </dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Status</dt>
            <dd class="mt-2 text-sm text-gray-500">
              {{ data.status }}
            </dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Popularity</dt>
            <dd class="mt-2 text-sm text-gray-500">
              {{ data.popularity }}
            </dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Tagline</dt>
            <dd class="mt-2 text-sm text-gray-500">
              {{ data.tagline }}
            </dd>
          </div>
        </dl>
      </div>
      <div>
        <img
          :src="imageUrl(data.poster_path)"
          :alt="data.original_title"
          class="rounded-lg bg-gray-100"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const { data, pending, error, refresh } = await useFetch(
  `/api/movie/${route.params.id}`
)

const imageUrl = (url: string) => {
  return 'https://image.tmdb.org/t/p/w500/' + url + '?api_key=' + config.apiKey
}
</script>

<style scoped></style>
