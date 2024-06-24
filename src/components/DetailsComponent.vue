<template>
  <v-card class="card">
    <v-card-title class="title"><h2>Post Details</h2></v-card-title>
    <v-card-text><span class="text">ID:</span> {{ post.id }}</v-card-text>
    <v-card-text><span class="text">Title:</span> {{ post.title }}</v-card-text>
    <v-card-text><span class="text">Body:</span> {{ post.body }}</v-card-text>
  </v-card>
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
const post = ref(props);

onMounted(async () => {
  post.value = await getPostById(postId.value);
  return post.value;
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  text-align: left;
  width: 600px;
  height: 300px;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 6px 2px rgba(0.1, 0.1, 0.1, 0.1);
  color: black;
  border: 10px solid black;
}

.title {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
}

.text {
  font-weight: bold;
}
</style>
