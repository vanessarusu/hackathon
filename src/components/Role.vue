<template>
<div class="role-list">
  <h4>{{ actionsHeader }}</h4>
  <ul class="roles">
    <li class="role" v-for="(name, index) in roleNames" :key="name.index">{{ name }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Role",
  props: [
    "projectName",
    "roleUX",
    "roleUI",
    "roleFE",
    "projectDate",
    "projectStatus",
    "statusHeader",
    "projectPriority",
    "actionsHeader",
    "roleNames"
  ],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">

.role-list {


  h4 {
    margin: 0 0 0.2rem 0;
    padding: 1.72rem 0.5rem;
    display: block;
    box-shadow: 0 2px 1px 0px #333;
  }

  .roles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-gap: 0.2rem;

      .role {
        margin-bottom: 0.2rem;
        padding: 0.5rem 0.2rem;
        display: block;
        cursor: pointer;
        box-shadow: -1px 1px 0 0px #bbb;
      }

  }
}
</style>


