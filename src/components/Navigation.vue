<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">ISCJ WES</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link
          :to="{name:'Registration'}"
          class="nav-link"
          exact-active-class="active"
        >Registration</router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{name: 'Students'}" class="nav-link" exact-active-class="active">Students</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
