<template>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(q, i) in qa"
        :key="'q' + i"
      >
        <v-expansion-panel-header class="title">{{q.question}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{q.answer}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
    props: {
        qa: Array
    }
}
</script>