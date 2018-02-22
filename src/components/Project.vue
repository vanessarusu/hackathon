<template>
  <ul class="project">
    <li class="items">
      <div class="item name">{{ projectName }}</div>
      <div class="item role UX">{{ roleUX }}</div>
      <div class="item role UI">{{ roleUI }}</div>
      <div class="item role FE">{{ roleFE }}</div>
      <div class="item status" :class="projectStatus">{{ statusHeader }}</div>
      <div class="item date"> {{ projectDate }}</div>
      <div class="item priority"> {{ projectPriority }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Project",
  props: [
    "projectName",
    "roleUX",
    "roleUI",
    "roleFE",
    "projectDate",
    "projectStatus",
    "statusHeader",
    "projectPriority"
  ],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.project {
  .items {
    display: flex;
    align-items: center;
    text-align: left;

    .item {
      width: 100px;
      height: 50px;
      padding: 10px;
      border: 1px solid #f2f2f2;
    }

    .item.name {
      min-width: 160px; 
    }
  }
}

</style>


