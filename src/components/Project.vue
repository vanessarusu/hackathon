<template>
  <div>
    <ul class="project" id="project">
    <li class="items">
      <div class="item name">{{ projectName }}</div>
      <div class="item role UX" v-dragula="projectUX" bag="UX" :data-id="dataId">{{ roleUX }}
        <div v-for="(name, index) in projectUX">{{ name }}</div>
      </div>
      <div class="item role UI" v-dragula="projectUI" bag="UI" :data-id="dataId">{{ roleUI }}</div>
      <div class="item role FE" v-dragula="projectFE" bag="FE" :data-id="dataId">{{ roleFE }}</div>
      <div class="item status" :class="projectStatus2" v-dragula="projectUI" bag="status">{{ statusHeader }}</div>
      <div class="item date"> {{ projectDate }}</div>
      <div class="item priority" v-dragula="projectName" bag="second-bag"> {{ projectPriority }}</div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: [
    "projectUX",
    "projectUI",
    "projectFE",
    "data-id",
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


