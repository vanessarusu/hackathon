<template>
    <ul class="project items">
      <li class="item name">
        {{ projectName }}

        <!-- BEGIN - CSS modal -->
        <label class="btn" for="modal-1"><span>...</span></label>
        <input class="modal-state" id="modal-1" type="checkbox" />
				<div class="modal">
					<label class="modal__bg" for="modal-1"></label>
					<div class="modal__inner">
						<label class="modal__close" for="modal-1"></label>
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
      <li class="item role UX">{{ roleUX }}</li>
      <li class="item role UI">{{ roleUI }}</li>
      <li class="item role FE">{{ roleFE }}</li>
      <li class="item status" :class="projectStatus">{{ statusHeader }}</li>
      <li class="item date">
        {{ projectDate }}
        <input id="date" type="date" />
      </li>
      <li class="item priority">{{ projectPriority }}</li>
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
  margin-bottom: 0.5rem;
  display: grid;
  justify-content: center;
  border-radius: 0.2rem;
  grid-gap: 0.2rem;
  grid-template-columns: 2fr repeat(4, 1fr) 150px 1fr;
  .item {
    padding: 1.5rem 0.5rem;
		display: block;
    box-shadow: inset 0 0 0 1px lightgrey;
    border-radius: 0.3rem;
    &.name {
      position: relative;
      &:hover .btn {
        opacity: 1;
        visibility: visible;
      }
    }
    &.date {
      input {
        max-width: 80%;
      }
    }
  }
}

.header {
  border-radius: 0.3rem;
	background-color: lightblue;
  font-weight: bold;
  .item {
    box-shadow: none;
    &:hover .btn {
      display: none;
    }
    input { display: none; }
    .modal { display: none; }
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
  background: rgba(0,0,0, 0.9);
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
  width: 50%;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  padding: 1rem 2rem;
  height: 20%;
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

.modal__inner ul {
  width: 50%;
  margin: 0 auto;
}
.modal__inner ul li {
  text-align: left;
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

</style>


