<template>
  <button @click="goBack" class="go-back">Back</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style  scoped>
.go-back {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  background-color: purple;
}
</style>