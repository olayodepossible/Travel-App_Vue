<template>
  <nav id="nav">
    <p class="logo">Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
          >{{ destination.name }}
        </router-link>
      </li>
    </ul>
    <p class="back-btn">
      <BackButton />
    </p>
  </nav>
</template>

<script>
import Store from "@/store";
import BackButton from "@/components/TheBackButton";

export default {
  components: {
    BackButton,
  },
  data() {
    return {
      destinations: Store.destinations,
    };
  },
};
</script>


<style scoped>
#nav {
  display: flex;
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.links {
  display: inline-block;
  padding: 10px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.back-btn {
  position: absolute;
  top: 5px;
  right: 50px;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>