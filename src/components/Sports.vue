<template>
  <div class="course-container">
    <div class="mma-course-container">
      <div class="mma-course-content-left">
        <component :is="selectedSportComponent" />
      </div>
      <div class="mma-course-content-right">
        <div class="wrapper">
          <div class="table basic">
            <div class="price-section">
              <div class="price-area">
                <div class="inner-area">
                  <span class="text">$</span>
                  <span class="price">{{ plan.Prix }}</span>
                </div>
              </div>
            </div>
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">Entraînements illimités</span>
                <span class="icon check"><i class="fas fa-check"></i></span>
              </li>
              <li>
                <span class="list-name">Entraîneurs qualifiés</span>
                <span class="icon check"><i class="fas fa-check"></i></span>
              </li>
              <li>
                <span class="list-name">Remords</span>
                <span class="icon cross"><i class="fas fa-times"></i></span>
              </li>
              <li>
                <span class="list-name">Insatisfaction</span>
                <span class="icon cross"><i class="fas fa-times"></i></span>
              </li>
            </ul>
            <div class="btn"><button>Purchase</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Chat />
</template>

<script>
import { db } from "@/firebase/init";
import { doc, getDoc } from "firebase/firestore";
import Chat from "./Chat.vue";
import MMAComponent from "./Sports/Mma.vue";
import BoxComponent from "./Sports/Box.vue";
import WrestlingComponent from "./Sports/Wrestling.vue";
import NotFoundComponent from "./default.vue";
import "../assets/SubsAssets/css/styles.css";

export default {
  name: "SportsPage",
  props: {
    sportNom: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      plan: null,
    };
  },
  computed: {
    selectedSportComponent() {
      switch (this.sportNom) {
        case "Mma":
          return MMAComponent;
        case "Box":
          return BoxComponent;
        case "Wrestling":
          return WrestlingComponent;
        default:
          return NotFoundComponent;
      }
    },
  },

  components: { Chat },

  async created() {
    await this.fetchPlanDetails();
  },
  methods: {
    async fetchPlanDetails() {
      try {
        const docRef = doc(db, "plans", this.sportNom);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.plan = docSnap.data();
          this.plan.Prix = `${docSnap.data().Prix}`;
          console.log("Plan:", this.plan);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    },
  },
};
</script>
<style scoped>
.course-container {
  margin-top: 10vh;
  padding-top: 1vh;
  padding-bottom: 50px;
}
.mma-course-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10vh;
  height: 90vh;
}
.mma-course-content-left {
  padding: 20px;
  text-align: center;
  width: 90%;
}

.mma-course-content-right {
  padding: 20px 0 0 100px;
  width: 50%;
}
</style>
