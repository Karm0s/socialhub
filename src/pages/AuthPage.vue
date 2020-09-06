<template>
  <v-container fill-height class="pb-10 mb-10">
    <v-row align="center" justify="center">
      <v-col sm="6" lg="5">
        <v-row align="center" justify="center" class="py-10 overline">
          <h1>
            SocialHub
          </h1>
        </v-row>

        <v-card elevation="10">
          <v-card-text>
            <v-tabs color="black" centered fixed-tabs @change="resetForms">
              <v-tab>
                Sign In
              </v-tab>
              <v-tab>
                Sign Up
              </v-tab>

              <v-tab-item>
                <v-alert v-if="loginError" type="error" class="mt-2">An error occured! Please check you credentials and 
                  retry.
                </v-alert>
                <v-form v-model="validLogin" lazy-validation>
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
                  <v-btn
                    width="100"
                    class="white--text"
                    color="black"
                    :disabled="!validLogin"
                    @click="signIn"
                  >
                    <div v-if="!loadingLogin">
                      Log In
                    </div>
                    <v-progress-circular
                      size="25"
                      width="3"
                      v-else
                      indeterminate
                    >
                    </v-progress-circular>
                  </v-btn>
                </v-form>
              </v-tab-item>

              <v-tab-item>
                <v-alert v-if="signupError" type="error" class="mt-2">An error occured! Please check you credentials and 
                  retry.
                </v-alert>
                <v-form v-model="validSignup" lazy-validation>
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
                  <v-btn
                    width="100"
                    class="white--text"
                    color="black"
                    :disabled="!validSignup"
                    @click="signUp"
                  >
                    <div v-if="!loadingSignup">
                      Sign Up
                    </div>
                    <v-progress-circular
                      size="25"
                      width="3"
                      v-else
                      indeterminate
                    >
                    </v-progress-circular>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AuthPage",
  data() {
    return {
      validLogin: false,
      validSignup: false,
      loadingLogin: false,
      loadingSignup: false,
      loginError: false,
      signupError: false,
      username: "",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be at least 6 characters long",
      ],
    };
  },
  computed: mapGetters(["isAuthenticated"]),
  created() {
    if (this.isAuthenticated) {
      this.loadUserInformations();
      this.$router.push({ name: "forum" });
    }
  },
  methods: {
    ...mapActions(["authenticate", "register", "loadUserInformations"]),
    resetForms() {
      this.username = "";
      this.email = "";
      this.password = "";
    },
    signIn() {
      if (!(this.email && this.password)) {
        this.validLogin = false;
        return;
      }
      this.loadingLogin = true;
      this.loginError = false;
      this.authenticate({ email: this.email, password: this.password })
        .then(() => {
          console.log("Login Done, redirecting now... (next time)");
          this.$router.push({ path: "forum" });
        })
        .catch(() => {
          console.log("An Error happened");
          this.loadingLogin = false;
          this.loginError = true;
        });
    },
    signUp() {
      if (!(this.email && this.password && this.username)) {
        this.validSignup = false;
        return;
      }
      this.loadingSignup = true;
      this.signupError = false;
      this.register({
        username: this.username,
        email: this.email,
        password: this.password,
      })
        .then(() => {
          console.log("Registration done, redirecting now... (next time)");
          this.$router.push({ path: "forum" });
        })
        .catch(() => {
          console.log("An Error happened");
          this.loadingSignup = false;
          this.signupError = true;
        });
    },
  },
};
</script>

<style></style>
