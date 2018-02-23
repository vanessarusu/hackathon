<template>
    <ul class="project items">
      <li class="item name">
        {{ projectName }}

        <!-- BEGIN - CSS modal -->
        <label class="btn" for="modal"><span>...</span></label>
        <input class="modal-state" id="modal" type="checkbox" />
				<div class="modal">
					<label class="modal__bg" for="modal"></label>
					<div class="modal__inner">
						<label class="modal__close" for="modal"></label>
						<h2>Links</h2>
						<ul>
							<li><a href="#">Link to InVision Mockups</a></li>
							<li><a href="#">Link Jira Board</a></li>
							<li><a href="#">Link to Confluence</a></li>
						</ul>
					</div>
				</div>
        <!-- END - CSS modal -->

      </li>
      <li class="item role UX" v-dragula="projectUX" bag="UX" :data-id="dataId">{{ roleUX }}
          <!-- <span v-for="(name, index) in projectUX" :key="name.index">{{ name }}</span> -->
      </li>
      <li class="item role UI" v-dragula="projectUI" bag="UI" :data-id="dataId">{{ roleUI }}</li>
      <li class="item role FE" v-dragula="projectFE" bag="FE" :data-id="dataId">{{ roleFE }}</li>
      <li class="item status" :class="projectStatus" v-dragula="projectUI" bag="status">{{ statusHeader }}</li>
      <li class="item date">
        {{ projectDate }}
        <input id="date" type="date" />
      </li>
      <li class="item priority">
       <select v-modal="projectPriority">
          <option value="volvo" :selected="projectPriority === '1'">1</option>
          <option value="saab" :selected="projectPriority === '2'">2</option>
          <option value="mercedes" :selected="projectPriority === '3'">3</option>
        </select> 
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
    return {
    };
  }
};
</script>

<style scoped lang="scss">
.project {
  display: grid;
  justify-content: center;
  grid-column-gap: 0.3rem;
  grid-template-columns: 2fr repeat(4, 1fr) 150px 1fr;
  grid-template-rows: minmax(65px, auto);
  &.header {
    .item {
      display: flex;
      align-items: end;
      justify-content: center;
      flex-direction: row;
    }
  }
  .item {
    padding: 0.5rem 0.5rem;
		display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 0 0px #bbb;
    &.name {
      position: relative;
      &:hover .btn {
        opacity: 1;
        visibility: visible;
      }
    }
    &.date {
      input {
        max-width: 100%;
      }
    }
  }
}

.header {
  font-weight: bold;
  box-shadow: 0 2px 1px 0px #333;
  .item {
    box-shadow: none;
    &:hover .btn {
      display: none;
    }
    input[type="date"] { display: none; }
    select {display: none;}
    /* .modal { display: none; } */
  }
}

.btn {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -5px;
  right: 5px;
  cursor: pointer;
  transition: opacity .25s ease;
  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: left;
  background: rgba(0,0,0, 0.75);
  transition: opacity .25s ease;
  z-index: 1;
}
.modal__bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
}
.modal-state { display: none; }
.modal-state:checked + .modal {
  opacity: 1;
  visibility: visible;
}
.modal-state:checked + .modal .modal__inner {
  top: 0;
}
.modal__inner {
  transition: top .25s ease;
  position: absolute;
  top: -20%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 40%;
  margin: auto;
  overflow: auto;
  background: #fff;
  padding: 1rem 2rem;
  height: 20%;
  
  h2 {
    text-align: center;
  }
  ul {
    width: 50%;
    margin: 0 auto;
    li {
      list-style-type: disc;
      text-align: left;
      a {
        font-weight: normal;
      }
    }
  }
}
.modal__close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
}
.modal__close:after,
.modal__close:before {
  content: '';
  position: absolute;
  width: 2px;
  height: 1.5em;
  background: #ccc;
  display: block;
  transform: rotate(45deg);
  left: 50%;
  margin: -3px 0 0 -1px;
  top: 0;
}

.modal__close:hover:after,
.modal__close:hover:before {
  background: #aaa;
}

.modal__close:before {
  transform: rotate(-45deg);
}


/*
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
*/

@media (max-width: 375px) {
  .header {
    display: none;
  }

  .project {
    margin-bottom: 1rem;
    grid-template-columns: repeat(3, 1fr);
    .item {
      margin-top: 2rem;
      position: relative;
      &:before {
        display: block;
        text-align: center;
        position: absolute;
        top: -1.5rem;
        left: 0; right: 0;
      }
      &:first-child {
        font-weight: bold;
        grid-column: 1/-1;
        &:before { display: none; }
      }
      &:nth-child(2) {
        &:before {
          content: 'UX';
        }
      }
      &:nth-child(3) {
        &:before {
          content: 'UI';
        }
      }
      &:nth-child(4) {
        &:before {
          content: 'FE';
        }
      }
      &:nth-child(5) {
        &:before {
          content: 'Status';
        }
      }
      &:nth-child(6) {
        &:before {
          content: 'Due Date';
        }
      }
      &:nth-child(7) {
        &:before {
          content: 'Priority';
        }
      }
    }
  }
}

</style>


