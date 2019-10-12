export default function () {
  return  `<h1>Sandwich Fire</h1>
  <img
    src="./sandwich-fire-logo.png"
    width="128"
    alt="Sandwich Fire Logo"
    class="logo"
  />
  <div class="container form-box">
    <form id="signup-form">
      <label for="email">Email</label>
      <hr class="bar"  />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="EMAIL ADDRESS"
      />
      <hr class="bar" />
      <label for="password">Password</label>
      <hr class="bar"  />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="PASSWORD"
      />
      <hr class="bar" />
      <br>
      <button type="submit" class="btn">LOGIN</button>
    </form>
  </div>`
};