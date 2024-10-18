<template>
    <div>
        <!-- wishlist card -->
        <div v-if="wishListDiv || false" class="container-fluid py-5 bg-body-tertiary">
            <div class="container py-5">
                <div class="head pb-5">
                    <div class="col-12">
                        <h3 class="m-0 fw-bold fs-42 text-center text-secondary">Wishlist Items</h3>
                    </div>
                </div>
                <div class="content">
                    <div class="col-12">
                        <!-- box -->
                         <div class="box col-10 rounded-5 shadow bg-white p-5 m-auto">
                            <div class="col-12 d-flex">
                                <div class="img">
                                    <div class="col-12">
                                        <img class="h-250 w-250 object-fit-cover rounded-start-5" src="/public/images/slider1.jpg" alt="" srcset="">
                                    </div>
                                </div>
                                <div class="content px-4 d-flex align-items-center">
                                    <div class="col-12">
                                        <div class="head pb-3">
                                            <div class="col-12">
                                                <h3 class="m-0 fw-bold fs-5 text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti deserun</h3>
                                            </div>
                                        </div>
                                        <div class="text pb-3">
                                            <div class="col-12">
                                                <ul>
                                                    <li>Category: <span class="fw-bold">Men</span></li>
                                                    <li>Price: <span class="fw-bold">$5</span></li>
                                                    <li>Total: <span class="fw-bold">$55</span></li>
                                                    <li>Qty: <span class="fw-bold">11</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="bttn">
                                            <div class="col-12">
                                                <a href="#" class="btn bg-sky m-0 text-decoration-none text-white me-2">Remove</a>
                                                <a href="#" class="btn bg-sky m-0 text-decoration-none text-white">Move to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add to cart -->
        <div v-if="cartDiv || false" class="container-fluid py-5 bg-body-tertiary">
            <div class="container py-5">
                <div class="head pb-5">
                    <div class="col-12">
                        <h3 class="m-0 fw-bold fs-42 text-center text-secondary">Cart Items</h3>
                    </div>
                </div>
                <div class="content">
                    <div class="col-12 d-flex">
                        <!-- box -->
                         <div class="box col-8 rounded-5 shadow bg-white p-5 d-flex align-items-center">
                            <div class="col-12 d-flex">
                                <div class="img">
                                    <div class="col-12 h-100">
                                        <img class="h-100 w-250 object-fit-cover rounded-start-5" src="/public/images/slider1.jpg" alt="" srcset="">
                                    </div>
                                </div>
                                <div class="content px-4 d-flex align-items-center">
                                    <div class="col-12">
                                        <div class="head pb-3">
                                            <div class="col-12">
                                                <h3 class="m-0 fw-bold fs-5 text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corrupti deserun</h3>
                                            </div>
                                        </div>
                                        <div class="text pb-3">
                                            <div class="col-12">
                                                <ul>
                                                    <li>Price: <span class="fw-bold">$5</span></li>
                                                    <li>Tax: <span class="fw-bold">$2</span></li>
                                                    <li>Discount: <span class="fw-bold">10% off</span></li>
                                                    <li>Qty: <span class="fw-bold">11</span></li>
                                                    <li>Total: <span class="fw-bold">$55</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="bttn">
                                            <div class="col-12">
                                                <a href="#" class="btn bg-sky m-0 text-decoration-none text-white">Remove</a>
                                                <a href="#" class="btn bg-sky m-0 text-decoration-none text-white">Edit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <!-- checkout -->
                          <h3 class="fw-bold ms-5">Checkout page to be displayed here</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- Item details -->
        <div v-if="itemDetailstDiv || false" class="container-fluid py-5 bg-body-tertiary">
            <div class="container m-auto py-5">
              <div class="content">
                <div class="col-12 p-5 shadow bg-white rounded-5">
                  <!-- top -->
                  <div class="top">
                    <div class="col-12 d-flex">
                      <!-- left img -->
                      <div class="col-7">
                        <div class="col-12">
                          <img class="h-350 w-100 rounded-5 object-fit-cover" src="/public/images/slider1.jpg" alt="" />
                        </div>
                      </div>
                      <!-- right content -->
                      <div class="content col-5 ps-4 d-flex align-items-center">
                        <div class="col-12">
                          <div class="head pb-3">
                            <div class="col-12">
                              <h3 class="m-0 fw-bold fs-4">
                                Skip to the beginning of the images gallery A 3-Course
                                Gourmet Dining Experience for 2 People at Jack @ SKYE
                                Rooftop Bar!
                              </h3>
                            </div>
                          </div>
                          <div class="price pb-3">
                            <div class="col-12">
                              <p class="m-0">Price: <span class="fw-bold">$15</span></p>
                            </div>
                          </div>
                          <div class="price pb-3">
                            <div class="col-12">
                              <p class="m-0">Discount: <span class="fw-bold">10% off</span></p>
                            </div>
                          </div>
                          <div class=" rounded me-3 pb-3">
                              <div class="col-12 text-white">
                              <p class="m-0 text-black">Qty: <span class="bg-gray p-2 rounded">-<span class=" px-2"> 2 </span>+</span></p>
          
                               
                              </div>
                            </div>
                          <!-- qty + add to cart -->
                          <div class="col-12">
                            <div class="d-flex">
                              <!-- <div class="btn bg-sky rounded me-3">
                                <div class="col-12 text-white">
                                 -<span class=" px-2"> 2 </span>+
                                </div>
                              </div> -->
                              <div class="add-cart">
                                <div class="col-12">
                                  <a href="#" class="btn bg-sky text-white me-3">Add To Wish List</a>
                                </div>
                              </div>
                              <div class="add-cart">
                                  <div class="col-12">
                                    <a href="#" class="btn bg-sky text-white">Add To Cart</a>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- bottom -->
                  <div class="bottom pt-5">
                      <div class="col-12">
                          <div class="head pb-4">
                              <div class="col-12 d-flex">
                                  <!-- tabs -->
                                   <div class="tab px-2">
                                    <div class="col-12">
                                      <h3 class="m-0 fs-5 fw-bold text-secondary">Description</h3>
                                    </div>
                                   </div>
                                   <div class="tab px-2">
                                    <div class="col-12">
                                      <h3 class="m-0 fs-5 fw-bold text-secondary">Specification</h3>
                                    </div>
                                   </div>
                                   <div class="tab px-2">
                                    <div class="col-12">
                                      <h3 class="m-0 fs-5 fw-bold text-secondary">Reviews</h3>
                                    </div>
                                   </div>
                              </div>
                          </div>
                          <!-- content -->
                          <div class="content">
                              <div class="col-12">
                                  The details will come dynamically
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
    // wishListDiv: {
    //     type: Boolean,
    //     required: true
    // },
    // cartDiv: {
    //     type: Boolean,
    //     required: true
    // },
    // itemDetailstDiv: {
    //     type: Boolean,
    //     required: true
    // }
});
const route = useRoute();
const wishListDiv = route.params.wishListDiv;
const cartDiv = route.params.cartDiv;
const itemDetailstDiv = route.params.itemDetailstDiv;
</script>