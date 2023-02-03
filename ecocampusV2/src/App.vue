<script type="text/javascript">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		NavBar,
		Footer, // register component
	},
};
</script>

<template>
  <div id="app">
		<NavBar />
		<Router-view />
		<Footer />
	</div>

</template>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>
