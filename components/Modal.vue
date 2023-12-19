<template>
  <transition name="modal-animation">
<div class="modal-overlay  bg-gradient-to-t from-[#000000] bg-opacity-90 backdrop-filter backdrop-blur-sm drop-shadow-2xl" v-if="modalActive" @click="close()" >
  <div class="modal">
    <transition name="modal-animation-inner">
    <div v-show="modalActive" class="modal-inner">
      <div class="modal-content">
        <span @click.stop="close()" class="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M26.2167 8.04804L18.2229 16.0418L26.1501 23.9689C26.8162 24.5685 26.8162 25.5677 26.1501 26.1672C25.5505 26.8334 24.5513 26.8334 23.9518 26.1672L15.958 18.2401L8.0309 26.1672C7.43137 26.8334 6.43215 26.8334 5.83262 26.1672C5.16647 25.5677 5.16647 24.5685 5.83262 23.9023L13.7598 15.9752L5.83262 8.04804C5.16647 7.44851 5.16647 6.44929 5.83262 5.78314C6.43215 5.18361 7.43137 5.18361 8.09751 5.78314L16.0247 13.7769L23.9518 5.84976C24.5513 5.18361 25.5505 5.18361 26.2167 5.84976C26.8162 6.44929 26.8162 7.44851 26.2167 8.04804Z" fill="white"/>
          </svg>
        </span>
        <component :is="content" />
      </div>
    </div>
    </transition>
  </div>
</div>
</transition>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  props: {
    modalActive: Boolean,
    content: {
    type: [Object, null],
    default: null,
  }, 
    modalKey: String,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="css" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  height: 100vh;
  width:100vw;
  	z-index:2000;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.modal .modal-inner {
	position: relative;
	min-width: 375px;
  min-height: 600px;
	text-align: center;
	background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%);
	box-shadow: outset -5px -5px 4px rgba(255, 255, 255, 0.04), outset 5px 5px 4px rgba(255, 255, 255, 0.08);
	backdrop-filter: blur(20px);
  border-radius: 1.5rem;
	padding: 0px;
	
}
.modal .modal-inner i {
	position: absolute;
	top: 15px;
	right: 15px;
	font-size: 20px;
	cursor: pointer;
}
.modal .modal-inner i:hover {
	color: crimson;
}

.modal .modal-inner button {
	padding: 10px 40px;
	border: none;
	font-size: 16px;
	background: linear-gradient(90deg, #52FF00 0%, #CCFF00 100%);
	border-radius: 100px;;
	color: #002864;
	cursor: pointer;
}
.modal-content{
  height: 600px;
}
.modal .close{
  cursor: pointer;
  color:#2d6912;
  position: absolute;
	top: 15px;
	right: 15px;
  z-index: 9000;
}
</style>