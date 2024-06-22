<template>
  <div>
    <h2>Post Details</h2>
    <p>ID: {{ post.id }}</p>
    <p>Title: {{ post.title }}</p>
    <p>Body: {{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPostById } from "../services/post.services";

const props = defineProps<{
  id: number;
  title: string;
  body: string;
}>();

const route = useRoute();
const postId = ref(route.params.id);
const post = ref({ id: 0, title: "", body: "" });

onMounted(async () => {
  post.value = await getPostById(postId.value);
  return post.value;
});
</script>
