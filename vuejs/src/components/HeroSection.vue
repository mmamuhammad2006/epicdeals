<template>
  <div
    id="carouselExampleFade"
    class="carousel slide slider-sec carousel-fade h-400"
  >
    <div class="carousel-inner h-100">
      <div class="carousel-item h-100 active">
        <img
          src="/public/images/slider1.jpg"
          class="d-block w-100 h-100"
          alt="/images/hero-image.jpg"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item h-100">
        <img
          src="/public/images/slider2.jpg"
          class="d-block w-100 h-100"
          alt="/images/hero-image.jpg"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item h-100">
        <img
          src="/public/images/slider3.jpg"
          class="d-block w-100 h-100"
          alt="/images/hero-image.jpg"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
