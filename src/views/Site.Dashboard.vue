<script setup>
import Avatar from '@/components/Avatar.vue';
import Panel from '@/components/Panel.vue';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
import imgRecently from '@/assets/img/central-recently.png';
import imgProfile from '@/assets/img/central-profile.png';
import imgCorpsec from '@/assets/img/central-corpsec.png';
import imgBanking from '@/assets/img/central-banking.png';
import imgCoWorkers from '@/assets/img/central-coworker.png';
import imgAd1 from '@/assets/img/central-ad-1.png';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue';

const isExpandBottom = ref(false);
const breakpoints = {
  0: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemToShow: 2,
    snapAlign: ' center',
  },
  1024: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
};
</script>

<template>
  <div class="container site-dashboard">
    <section class="row">
      <div class="section-welcome">
        <Avatar large />
        <h5>Welcome, Jane Cooper</h5>
      </div>
    </section>
    <div class="row g-3">
      <div class="col-12">
        <div
          class="panel-rectangle d-sm-flex justify-content-between align-items-center"
        >
          <div class="h7">Let's setup your Account</div>
          <div class="d-flex align-items-center">
            <small class="">Completed</small>
            <div
              class="progress mx-3"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 4px; width: 140px"
            >
              <div class="progress-bar" style="width: 25%"></div>
            </div>
            <button
              class="btn p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
              @click="isExpandBottom = !isExpandBottom"
            >
              <i
                class="pi pi-angle-right"
                :class="{ 'rotate-right': isExpandBottom }"
              ></i>
            </button>
          </div>
        </div>
        <div class="collapse" id="collapse">
          <div class="p-2 bg-white">
            <div class="card card-body border-custom">
              <div class="d-flex justify-content-between align-items-center">
                <div class="card-text fw-semibold">Verify Your email</div>
                <Button outline class="btn btn-primary">Go verify</Button>
              </div>
            </div>
            <div class="card card-body mt-2 border-custom">
              <div class="d-flex justify-content-between align-items-center">
                <div class="card-text fw-semibold">Incorporate Company</div>
                <Button outline class="btn btn-primary">Go Dashboard</Button>
              </div>
            </div>
            <div class="card card-body mt-2 border-custom">
              <div class="d-flex justify-content-between align-items-center">
                <div class="card-text fw-semibold">Invite User</div>
                <Button outline class="btn btn-primary">Go Invite User</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <Panel header="Recently" :img="imgRecently">
          <template #content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </template>
          <template #link>Continue Last Access</template>
        </Panel>
      </div>
      <div class="col-12 col-md-6">
        <Panel header="Profile Setting" :img="imgProfile">
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</template
          >
          <template #link>Complete Profile</template>
        </Panel>
      </div>
      <div class="col-12 col-md-6">
        <Panel header="Corpsec Dashboard" :img="imgCorpsec">
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            culpa.</template
          >
          <template #link>Incorporate Company</template>
        </Panel>
      </div>
      <div class="col-12 col-md-6">
        <Panel header="Digital Banking" :img="imgBanking">
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            culpa.</template
          >
          <template #link>Coming Soon</template>
        </Panel>
      </div>
      <div class="col-12">
        <Panel header="Invite Co-Workers">
          <template #content>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <img :src="imgCoWorkers" class="w-100" />
              </div>
            </div>
          </template>
          <template #link>Invite Co-Workers</template>
        </Panel>
      </div>
      <div class="col-12">
        <h4 class="ps-3">Explore more</h4>
        <hr />
        <Carousel
          :items-to-show="2.5"
          wrap-around
          :autoplay="3000"
          :breakpoints="breakpoints"
        >
          <Slide v-for="slide in 10" :key="slide">
            <div class="card text-start mx-1">
              <div class="card-body">
                <h5 class="card-title">header</h5>
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet, delectus?
                    </p>
                  </div>
                  <div class="col-12 col-sm-6">
                    <img :src="imgAd1" class="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.site-dashboard {
  height: calc(100% - 74px);
}

.rotate-right {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transition: transform 400ms ease;
}

.section-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.panel-rectangle {
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.border-custom {
  border-radius: 10px;
  border: 1px solid #e6e6e6;
}
</style>
