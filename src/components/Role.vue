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
  margin-bottom: 30px;

  h4 {
    margin: 0 0 0.2rem 0;
    padding: 1.72rem 0.5rem;
    border-radius: 0.3rem;
    background-color: lightblue;
    display: block;
  }

  .roles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    border-radius: 0.2rem;
    grid-gap: 0.2rem;

      .role {
        margin-bottom: 0.2rem;
        padding: 0.5rem 0.2rem;
        border-radius: 0.3rem;
        background: #f2f2f2;
        display: block;
        cursor: pointer;
      }

  }
}
</style>


