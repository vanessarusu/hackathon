<template>
  <div class="app">
    <main class="project-list">
      <project :projectName="projectHeader[0]" :roleUX="projectHeader[1]" :roleUI="projectHeader[2]" :roleFE="projectHeader[3]"  :statusHeader="projectHeader[4]"  :projectDate="projectHeader[5]" :projectPriority="projectHeader[6]" class="header"></project>
      <project v-for="(project, index) in projects" :key="project.index" :projectName="project.name" :projectDate="project.date" :projectStatus="project.status" :projectPriority="project.priority"></project>
    </main>

    <aside class="actions">
      <role :roleNames="roles.UX" :actionsHeader="projectHeader[1]"></role> 
      <role :roleNames="roles.UI" :actionsHeader="projectHeader[2]"></role> 
      <role :roleNames="roles.FE" :actionsHeader="projectHeader[3]"></role>
      <div class="status-section">
        <h4>{{ projectHeader[4] }}</h4>
        <ul class="status-wrapper">
          <li class="status green"></li>
          <li class="status yellow"></li>
          <li class="status red"></li>
        </ul>
      </div> 
      <!-- <role :actionsHeader="projectHeader[2]" :statusHeader="projectHeader[4]"></role> 
      <role :actionsHeader="projectHeader[3]" :statusHeader="projectHeader[4]"></role>  -->
    </aside>
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
          name: "Sam's Cake Builder",
          date: "2018/1/1",
          status: "red",
          priority: "1"
        },
        {
          name: "Costco Refresh 3.0",
          date: "2018/1/2",
          status: "green",
          priority: "2"
        },
        {
          name: "Hercules",
          date: "2018/1/1",
          status: "yellow",
          priority: "3"
        },
        {
          name: "Costoco Checkout",
          date: "2018/1/1",
          status: "green",
          priority: "4"
        },
        {
          name: "Unified Builder",
          date: "2018/1/1",
          status: "red",
          priority: "5"
        },
        {
          name: "Costco SEO",
          date: "2018/1/1",
          status: "green",
          priority: "6"
        },
        {
          name: "Sam's SEO",
          date: "2018/1/1",
          status: "green",
          priority: "7"
        },
        {
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

body {
  background: radial-gradient(circle, #f6f6f6 60%,#bbbbbb 100%);
  height: 100vh;
}


.app {
  max-width: 1190px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content sidebar";
}
main {
  padding: 0.5em;
  grid-area: content;
}
aside {
  padding: 0.5em;
  grid-area: sidebar;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
.app {
  display: flex;
  justify-content: space-around;
}
*/

.project-list {
  display: grid;
  grid-row-gap: 0.3rem;
}

.status {
  box-shadow: none !important;
  &.green {
    background: #33d9b2;
  }

  &.yellow {
    background: #ffda79;
  }

  &.red {
    background: #ff5252;
  }
}

.status-section {
  h4 {
    margin: 0 0 0.2rem 0;
    padding: 1.72rem 0.5rem;
    display: block;
  }
  .status-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2rem;

    .status {
      min-height: 50px;
      padding: 10px;
    }
  }
}
</style>