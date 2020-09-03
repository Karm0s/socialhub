<template>
  <v-container fill-height class="pb-10 mb-10">
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-row align="center" justify="center" class="py-10">
          <h1>
            SocialHub
          </h1>
        </v-row>

        <v-card elevation="10">
          <v-card-text>
            <v-tabs centered fixed-tabs @change="resetForms">
              <v-tab>
                Sign In
              </v-tab>
              <v-tab>
                Sign Up
              </v-tab>

              <v-tab-item>
                <v-form v-model="valid" lazy-validation>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                    type="password"
                  ></v-text-field>
                  <v-btn color="primary" :disabled="!valid" @click="signIn">
                    Log In
                  </v-btn>
                </v-form>
              </v-tab-item>

              <v-tab-item>
                <v-form v-model="valid" lazy-validation>
                  <v-text-field
                    label="Username"
                    v-model="username"
                    :rules="usernameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                    type="password"
                  ></v-text-field>
                  <v-btn color="primary" :disabled="!valid" @click="signUp">
                    Sign Up
                  </v-btn>
                </v-form>
              </v-tab-item>
            </v-tabs>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthPage",
  data() {
    return {
      valid: true,
      username: "",
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must be at least 6 characters long"
      ]
    };
  },
  methods: {
    ...mapActions(["authenticate", "register"]),
    resetForms() {
      this.username = "";
      this.email = "";
      this.password = "";
    },
    signIn() {
      this.authenticate({ email: this.email, password: this.password }).then(
        () => {
          console.log("Login Done, redirecting now... (next time)");
          this.$router.push({path: 'chat'});
        }
      );
    },
    signUp() {
      this.register({username: this.username, email: this.email, password: this.password}).then(() => {
        console.log("Registration done, redirecting now... (next time)");
        this.$router.push({path: 'chat'});
      });
    }
  }
};
</script>

<style></style>
