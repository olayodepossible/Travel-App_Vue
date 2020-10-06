<template>
  <div>
    <Section>
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </Section>

    <section>
      <h2>Top Experience in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="exp in destination.experiences"
          :key="exp.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceSlug: exp.slug },
            }"
          >
            <img :src="require(`@/assets/${exp.image}`)" :alt="exp.name" />
            <span class="card__text">{{ exp.name }}</span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import Store from "@/store";

export default {
  data() {
    return {};
  },

  props: {
    slug: {
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

.destination-details,
.cards {
  display: flex;
  justify-content: space-between;
}

.cards img {
  max-width: 300px;
}

.card {
  padding: 0 20px;
  position: relative;
}

.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>