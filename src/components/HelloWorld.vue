<!-- SIMPLE TABLE -->
 
<!-- <template>
  <v-data-table-virtual
    :header="header"
    :items="data"
    height="400"
    item-value="name"
  ></v-data-table-virtual>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const data = ref([]);
const header = [
  { title: "User Id", align: "start", key: "userId" },
  { title: "Id", align: "end", key: "id" },
  { title: "Title", align: "start", key: "title" },
  { title: "Completed", align: "start", key: "completed" },
];

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    data.value = json;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script> -->


<!-- TABLE WITH PAGINATION -->

<!-- <template>
  <v-data-table
    :items="items"
    :page.sync="page"
    :items-per-page.sync="itemsPerPage"
    :items-per-page-options="[5, 10, 15, 20]"
    :headers="headers"
  >
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title>Todo List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-select
          v-model="itemsPerPage"
          :items="[5, 10, 15, 20]"
          label="Items per page"
          outlined
          dense
        ></v-select>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const items = ref([]);
const page = ref(1);
const itemsPerPage = ref(10);


const headers = [
  { text: "User Id", value: "userId", align: "start" },
  { text: "Id", value: "id", align: "end" },
  { text: "Title", value: "title", align: "start" },
  { text: "Completed", value: "completed", align: "start" },
];


const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    items.value = json;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script> -->





<!-- APEXCHARTDA DIAGRAMMA -->


