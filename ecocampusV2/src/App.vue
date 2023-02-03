<script type="text/javascript">
import Footer from '../src/components/Footer.vue'
import Nav from '../src/components/Nav.vue'

export default {
	name: 'app',
	components: {
		Nav,
		Footer, // register component
	},
};
</script>

<template>
  <div id="app">
		<Nav />
		<Router-view />
		<Footer />
	</div>

</template>

<style>

</style>
