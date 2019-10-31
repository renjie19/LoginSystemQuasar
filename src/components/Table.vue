<template>
    <q-markup-table style="width: 300px; min-height: 400px; height: 400px">
      <thead>
      <tr>
        <th>NAME</th>
      </tr>
      </thead>
      <tbody>
      <tr class="scroll overflow-hidden" v-for="item in items" :key="item.name" @click="itemClick(item)">
        <td>{{ item.name }}</td>
      </tr>
      </tbody>
    </q-markup-table>
</template>

<script>
export default {
  data () {
    return {
      employees: this.items
    }
  },
  props: ['items'],
  methods: {
    itemClick (employee) {
      this.$emit('employeeSelected', employee)
    }
  }
}
</script>

<style scoped>

</style>
