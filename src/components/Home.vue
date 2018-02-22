<template>
  <div class="app">
    <main class="project-list">
      <project :projectName="projectHeader[0]" :roleUX="projectHeader[1]" :roleUI="projectHeader[2]" :roleFE="projectHeader[3]"  :statusHeader="projectHeader[4]"  :projectDate="projectHeader[5]" :projectPriority="projectHeader[6]" class="header"></project>
      
      <project v-for="(project, index) in projects" :data-id="project.id" :key="project.index" :projectName="project.name" :projectDate="project.date" :projectStatus="project.status" :projectPriority="project.priority" :projectUX="project.UX" :projectUI="project.UI" :projectFE="project.FE"></project>
    </main>

    <aside class="actions">
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

.status-section {
  h4 {
    margin: 0 0 0.2rem 0;
    padding: 1.72rem 0.5rem;
    border-radius: 0.3rem;
    background-color: lightblue;
    display: block;
  }
  .status-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2rem;

    .status {
      min-height: 50px;
      padding: 10px;
      border-radius: 0.3rem;
    }
  }
}
</style>