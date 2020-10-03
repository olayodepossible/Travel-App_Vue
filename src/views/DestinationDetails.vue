<template>
  <Section>
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
    </div>
  </Section>
</template>

<script>
import Store from "@/store";

export default {
  data() {
    return {
      destinationId: this.$route.params.id,
    };
  },

  computed: {
    destination() {
      return Store.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
};
</script>

<style scoped>
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}

img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-width: 400px;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}
</style>