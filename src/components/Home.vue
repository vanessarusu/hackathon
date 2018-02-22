<template>
  <div class="app">
    <div class="project-list">
      <project :projectName="projectHeader[0]" :roleUX="projectHeader[1]" :roleUI="projectHeader[2]" :roleFE="projectHeader[3]"  :statusHeader="projectHeader[4]"  :projectDate="projectHeader[5]" :projectPriority="projectHeader[6]" class="header"></project>
      
      <project v-for="(project, index) in projects" :data-id="project.id" :key="project.index" :projectName="project.name" :projectDate="project.date" :projectStatus="project.status" :projectPriority="project.priority" :projectUX="project.UX" :projectUI="project.UI" :projectFE="project.FE"></project>
    </div>

    <div class="actions">
      <role :roleNames="roles.UX" :actionsHeader="projectHeader[1]"></role> 
      <role :roleNames="roles.UI" :actionsHeader="projectHeader[2]"></role> 
      <role :roleNames="roles.FE" :actionsHeader="projectHeader[3]"></role>
      <div class="status-section">
        <h4>{{ projectHeader[4] }}</h4>
        <ul class="status-wrapper" v-dragula="projects.name" bag="status">
          <li class="status green"  bag="second-bag">green</li>
          <li class="status yellow" bag="second-bag">yellow</li>
          <li class="status red">red</li>
        </ul>
      </div> 
      <!-- <role :actionsHeader="projectHeader[2]" :statusHeader="projectHeader[4]"></role> 
      <role :actionsHeader="projectHeader[3]" :statusHeader="projectHeader[4]"></role>  -->
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";
import Role from "./Role.vue";

export default {
  name: "Home",
  data() {
    return {
      projectHeader: [
        "Project",
        "UX",
        "UI",
        "FE",
        "Status",
        "Due Date",
        "Priority"
      ],
      projects: [
        {
          id: 1,
          name: "Sam's Cake Builder",
          date: "2018/1/1",
          status: "red",
          priority: "1",
          UX: ["one", "two"],
          UI: [],
          FE: []
        },
        {
          id: 2,
          name: "Costco Refresh 3.0",
          date: "2018/1/2",
          status: "green",
          priority: "2",
          UX: [],
          UI: [],
          FE: []
        },
        {
          id: 3,
          name: "Hercules",
          date: "2018/1/1",
          status: "yellow",
          priority: "3",
          UX: [],
          UI: [],
          FE: []
        },
        {
          id: 4,
          name: "Costoco Checkout",
          date: "2018/1/1",
          status: "green",
          priority: "4"
        },
        {
          id: 5,
          name: "Unified Builder",
          date: "2018/1/1",
          status: "red",
          priority: "5"
        },
        {
          id: 6,
          name: "Costco SEO",
          date: "2018/1/1",
          status: "green",
          priority: "6"
        },
        {
          id: 7,
          name: "Sam's SEO",
          date: "2018/1/1",
          status: "green",
          priority: "7"
        },
        {
          id: 8,
          name: "Costco Blog",
          date: "2018/1/1",
          status: "red",
          priority: "8"
        }
      ],
      roles: {
        UX: ["Daniela", "Fernanda"],
        UI: ["Sebastian", "Kenneth"],
        FE: ["Carlos", "Declan", "Jinn", "Michel", "Kevin"]
      }
    };
  },
  components: {
    project: Project,
    role: Role
  }
};
</script>

<style lang="scss">
ul,
li {
  list-style: none;
  margin: 0;
}

.app {
  display: flex;
  justify-content: space-around;
}

.header {
  margin-bottom: 30px;
}

.status {
  &.green {
    background: green;
  }

  &.yellow {
    background: yellow;
  }

  &.red {
    background: red;
  }
}

.status-wrapper {
  display: flex;

  .status {
    width: 60px;
    height: 30px;
    padding: 10px;
    margin: 10px;
  }
}
</style>