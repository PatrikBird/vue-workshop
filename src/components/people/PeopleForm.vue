<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="desc">Description</label>
      <textarea id="desc" rows="5" v-model.trim="desc"></textarea>
    </div>
    <div class="form-control">
      <h3>Kind of Foods</h3>
      <div>
        <input type="checkbox" id="vegan" value="vegan" v-model="food" />
        <label for="vegan">Vegan</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="vegetarian"
          value="vegetarian"
          v-model="food"
        />
        <label for="vegetarian">Vegetarian</label>
      </div>
      <div>
        <input type="checkbox" id="bread" value="bread" v-model="food" />
        <label for="bread">Bread</label>
      </div>
      <div>
        <input type="checkbox" id="milk" value="milk" v-model="food" />
        <label for="milk">Milk</label>
      </div>
      <div>
        <input type="checkbox" id="sausages" value="sausages" v-model="food" />
        <label for="sausages">Sausages</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
export default {
  name: "PeopleForm",
  emits: ["save-data"],
  components: { BaseButton },
  data() {
    return {
      firstName: "",
      lastName: "",
      desc: "",
      food: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.desc,
        food: this.food,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
