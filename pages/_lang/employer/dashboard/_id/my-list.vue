<template>
  <div>
    Hi
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  middleware: "auth",
  head() {
    return {
      title: "My list"
    };
  }
};
</script>

<style lang="scss" scoped></style>
