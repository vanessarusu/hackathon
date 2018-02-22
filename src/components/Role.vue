<template>
<div class="role-list wrapper">
  <div class="role-section">
    <h4>{{ actionsHeader }}</h4>
    <ul class="roles container" v-dragula="actionsHeader" :bag="actionsHeader">
      <li class="role drag-list-item" v-for="(name, index) in roleNames" :key="name.index">{{ name }}

      </li>
    </ul>
  </div>
  </div>
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
    "roleNames",
    "projectParticipants"
  ],
  data() {
    return {
    };
  }
};
</script>

<style scoped lang="scss">

.role-list {
  border: 1px solid #f2f2f2;
  margin-bottom: 60px;

  .role-section {

    .roles {
      display: flex;
      flex-wrap: wrap;

      .role {
        width: 20%;
        cursor: pointer;
        margin: 10px;
        padding: 10px;
        background: #f2f2f2;
      }
    }
  }
}
</style>


