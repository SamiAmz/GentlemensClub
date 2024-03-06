<template>
  <div class="wrapper">
    <div class="table basic">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">500</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">example</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">example</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">example</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">example</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button>Purchase</button></div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase/init";
import { doc, getDoc } from "firebase/firestore";
import "../assets/SubsAssets/css/styles.css";
export default {
  name: "SubsCard",
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
  async created() {
    await this.fetchCoachDetails();
  },
  methods: {
    async fetchCoachDetails() {
      try {
        const docRef = doc(db, "plan", this.sportNom);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.plan = docSnap.data();
          this.plan.Prix = `${docSnap.data().Prix}`;
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
