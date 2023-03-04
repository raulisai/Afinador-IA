<script>
  import imgRobot from "$lib/images/robot-tuner.png";
</script>

<div class="row justify-content-center mt-5 singup_container">

    <div class="col-4 offset-2 mt-5">
        <form class="form">
            <span class="signup">Sign Up</span>
            <input type="email" placeholder="Email address" class="form--input">
            <input type="password" placeholder="Password" class="form--input">
            <input type="password" placeholder="Confirm password" class="form--input">
            
            <div class="form--marketing">
                <input id="okayToEmail" type="checkbox">
                <label for="okayToEmail" class="checkbox">
                  I want to join the newsletter
                </label>
            </div>
            <button class="form--submit">
                Sign up
            </button>
        </form>
    </div>
    <div class="col-4">
      <img src={imgRobot} alt="">
    </div>
</div>


<style>
  .singup_container {
    height: 100vh;
    width: 100%;
  }
    .form {
  background-color: white;
  padding: 3.125em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
}

.signup {
  color: rgb(77, 75, 75);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.5em;
}

.form--input {
  width: 100%;
  margin-bottom: 1.25em;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0.8em;
  font-family: 'Inter', sans-serif;
  outline: none;
}

.form--input:focus {
  border: 1px solid #639;
  outline: none;
}

.form--marketing {
  display: flex;
  margin-bottom: 1.25em;
  align-items: center;
}

.form--marketing > input {
  margin-right: 0.625em;
}

.form--marketing > label {
  color: grey;
}

.checkbox, input[type="checkbox"] {
  accent-color: rgb(153, 51, 51);
}

.form--submit {
  width: 50%;
  padding: 0.625em;
  border-radius: 5px;
  color: white;
  background-color: rgb(112, 9, 9);
  border: 1px dashed rgb(180, 19, 19);
  cursor: pointer;
}

.form--submit:hover {
  color: rgb(153, 80, 51);
  background-color: rgb(94, 100, 156);
  border: 1px dashed rgb(218, 3, 3);
  cursor: pointer;
  transition: 0.5s;
}
</style>