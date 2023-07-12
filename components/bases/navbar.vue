<template>
  <nav class="navbar text-blue" id="navbar">
    <div class="i-wrapper border-b-2 border-b-gray-200">
      <div class="i-container py-4 sm:py-8 flex justify-between items-center">
        <div
          class="i-logo font-bold sm:text-lg text-xl flex justify-start items-center space-x-4"
        >
          <img
            class="w-6 sm:w-8"
            src="/img/brand/impact_group_logo.svg"
            alt="Impact Group"
          />
          <span class="i-logo--name">Impact Group</span>
        </div>
        <div class="hidden sm:flex justify-end items-center space-x-8">
          <ul class="i-menu i-menu__ul flex justify-end items-center space-x-4">
            <li>
              <NuxtLink to="#">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">A propos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Services</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Blog</NuxtLink>
            </li>
          </ul>
          <div>
            <NuxtLink to="#" class="i-btn i-btn__primary">
              <span>Nous contacter</span>
            </NuxtLink>
          </div>
        </div>
        <div class="sm:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-blue"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
