<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          WELCOME
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/" label="Home"/>
        <q-btn-dropdown flat label="Employee">
          <q-route-tab to="/create" label="Add"/>
          <q-route-tab to="/manage" label="Manage"/>
        </q-btn-dropdown>
        <q-route-tab to="/reports" label="Reports"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
