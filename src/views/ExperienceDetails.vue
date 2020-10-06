<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ exp.name }}</h2>
    <div class="exp__details">
      <img :src="require(`@/assets/${exp.image}`)" alt="exp.name" />
      <p>{{ exp.description }}</p>
    </div>
  </section>
</template>

<script>
import Store from "@/store";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },

    experienceSlug: {
      type: String,
      required: true,
    },
  },

  computed: {
    destination() {
      return Store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },

    exp() {
      return this.destination.experiences.find(
        (exp) => exp.slug === this.experienceSlug
      );
    },
  },
};
</script>

<style  scoped>
.exp__details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>