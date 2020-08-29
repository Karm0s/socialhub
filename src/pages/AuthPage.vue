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

            <v-tabs centered fixed-tabs>
              <v-tab>
                Sign In
              </v-tab>
              <v-tab>
                Sign Up
              </v-tab>

              <v-tab-item>
                <v-form v-model="valid" lazy-validation>
                  <v-text-field label="E-mail" :rules="emailRules" required></v-text-field>
                  <v-text-field label="Password" :rules="passwordRules" required></v-text-field>
                  <v-btn color="primary" :disabled="!valid">
                    Log In
                  </v-btn>
                </v-form>
              </v-tab-item>

              <v-tab-item>
                <v-form v-model="valid" lazy-validation>
                  <v-text-field label="Username" :rules="usernameRules" required></v-text-field>
                  <v-text-field label="E-mail" :rules="emailRules" required></v-text-field>
                  <v-text-field label="Password" :rules="passwordRules" required></v-text-field>
                  <v-btn color="primary" :disabled="!valid">
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
export default {
  name: "AuthPage",
  data() {
    return {
      valid: true,
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters long'
      ]
    }
  },
  methods: {
  }
};
</script>

<style></style>
