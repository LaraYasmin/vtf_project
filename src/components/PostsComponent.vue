<template>
  <div class="container_title">
    <div class="title">
      <h1>Posts from the website</h1>
    </div>
  </div>
  <div class="container">
    <v-table class="table_content">
      <thead class="header">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-center">Title</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr v-for="item in posts" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td class="actions" @click="handleClick">Details</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getPosts } from "../services/post.services";

const props = defineProps<{
  id: number;
  title: string;
  body: string;
  userId: number;
}>();

const posts = ref<
  Array<{ id: number; title: string; body: string; userId: number }>
>([]);

const handleClick = () => {
  console.log("clicked");
};

onMounted(async () => {
  posts.value = await getPosts();
  return posts.value;
});
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 30px;
  border-radius: 20px;
  width: 700px;
  justify-content: center;
  box-shadow: 0 4px 6px 2px rgba(0.1, 0.1, 0.1, 0.1);
}

.container_title {
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 5px;
  height: 56px;
  border-radius: 10px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table_content {
  padding: 20px;
}

.actions {
  cursor: pointer;
  color: blue;

  &:hover {
    color: black;
  }
}

.header th {
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 10px;
}

.body td {
  padding: 12px 15px;
}
</style>
