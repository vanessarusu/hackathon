<template>
  <div class="app">
    <main class="project-list" ref="testref">
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
          UX: [],
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
          priority: "1"
        },
        {
          id: 5,
          name: "Unified Builder",
          date: "2018/1/1",
          status: "red",
          priority: "3"
        },
        {
          id: 6,
          name: "Costco SEO",
          date: "2018/1/1",
          status: "green",
          priority: "2"
        },
        {
          id: 7,
          name: "Sam's SEO",
          date: "2018/1/1",
          status: "green",
          priority: "2"
        },
        {
          id: 8,
          name: "Costco Blog",
          date: "2018/1/1",
          status: "red",
          priority: "3"
        }
      ],
      roles: {
        UX: ["Daniela", "Fernanda", "Estela", "Ann", "Olga"],
        UI: ["Sebastian", "Kenneth", "Nikki", "Edward", "Lisa"],
        FE: ["Carlos", "Declan", "Jinn", "Michel", "Kevin", "Vanessa"]
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
  max-width: 1440px;
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
  position: relative;
  padding: 0 !important;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
  }
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
    font-size: 30px;
    text-transform: uppercase;
    display: block;
    margin: 0 auto 10px;
    font-weight: bold;
    padding-top: 30px;
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
@media (max-width: 767px) {
  .app {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-template-areas: "content"
                         "sidebar";
  }
  aside { display: none; }
}
</style>