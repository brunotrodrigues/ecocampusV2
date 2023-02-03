<script>

</script>

<!-- fazer form  -->

<template>
  <div class="activitiesWrapper">
    <div class="cardsGrid">
      <div v-for="item in items" :key="item.id">
        <div class="activityCard">
          <div class="activityTitle">
            {{ item.name }}
          </div>
          <div class="activityDescription">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
}

.activityCard {
  margin-top: 3%;
  color: black;
  text-align: center;
  
}

.activityTitle {
  font-weight: bold;
}

.activityDescription {
  margin-top: 1.5%;
}
</style>
