<template>
  <div>

    <!-- --------------------------- code for navigation bar starts form here --------------------------- -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Y Mall</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/home" href="#"
                >Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Electronic Products</a>
            </li>
          </ul>
          <form class="d-flex">
            <router-link class="nav-link" to="/cart" href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                /></svg
            ></router-link>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <router-link class="nav-link" to="/login" href="#"
              >Login</router-link
            >
          </form>
        </div>
      </div>
    </nav>

    <!-- --------------------------- code for navigation bar ends here --------------------------- -->

    <main class="mt-3">
      
      <!-- --------------------------- displaying products from here --------------------------- -->

      <div id="cards" class="container">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://s.alicdn.com/@sc04/kf/H64079b70ffc541a2a0e5b19fa7b23d644.jpg_300x300.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Europe stock AUTHENTIC-smart Tv RU7300 65" Class HDR 4K UHD
                Smart Curved LED TV
              </h5>
              <p class="card-text">
                <span class="badge bg-dark">Electronic product</span>
                <span class="badge bg-dark">TV</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <router-link class="nav-link" to="review" href="#"
                >Review</router-link>
                  </button>
                </div>
                <select class="form-select-sm form-select-sm">
                  <option selected>-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small class="text-dark">$1,200</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://s.alicdn.com/@sc04/kf/H83c619e07fe74bb5b6e49c6ad059dca9R.jpg_300x300.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                DQ TV-Hot sale real 4K UHD 55 inch led tv smart television with
                android&wifi tempered glass smart tv
              </h5>
              <p class="card-text">
                <span class="badge bg-dark">Electronic product</span>
                <span class="badge bg-dark">TV</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <router-link class="nav-link" to="review" href="#"
                >Review</router-link>
                  </button>
                </div>
                <select class="form-select-sm form-select-sm">
                  <option selected>-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small class="text-dark">$650</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://s.alicdn.com/@sc04/kf/HTB1bkMfdMmH3KVjSZKzq6z2OXXaw.jpg_300x300.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                TNTSTAR 32 43 50 55 Inch China Tv Uhd Price Factory Cheap Flat
                Screen Televisions High Definition Lcd Led Tv 32 inch
              </h5>
              <p class="card-text">
                <span class="badge bg-dark">Electronic product</span>
                <span class="badge bg-dark">TV</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <router-link class="nav-link" to="review" href="#"
                >Review</router-link>
                  </button>
                </div>
                <select class="form-select-sm form-select-sm">
                  <option selected>-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small class="text-dark">$850</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://s.alicdn.com/@sc04/kf/H94eee506fa99445db752acf72b27d526u.png_300x300.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                WHOLESALES FREE SHIPPING FOR NEW Samsungs 65 Inch Qled Uhd 8k 4K
                Smart Tv- Voice Interaction Tv
              </h5>
              <p class="card-text">
                <span class="badge bg-dark">Electronic product</span>
                <span class="badge bg-dark">TV</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <router-link class="nav-link" to="review" href="#"
                >Review</router-link>
                  </button>
                </div>
                <select class="form-select-sm form-select-sm">
                  <option selected>-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small class="text-dark">$1,800</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://s.alicdn.com/@sc04/kf/He574bc332b2d49fc803f2a8ded1988a5D.jpg_300x300.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Tcl Led TV Is Ready To Ship With A Size Of 32"43"50"55"65"75"85"
                Led 4k Smart TV
              </h5>
              <p class="card-text">
                <span class="badge bg-dark">Electronic product</span>
                <span class="badge bg-dark">TV</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <router-link class="nav-link" to="review" href="#"
                >Review</router-link>
                  </button>
                </div>
                <select class="form-select-sm form-select-sm">
                  <option selected>-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small class="text-dark">$450</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://s.alicdn.com/@sc04/kf/H2eb6092e669d4a8ba21a3e8393587107Q.jpg_300x300.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                2021 Original Xiaomi Television Led 65 Inch HD Ultra Slim
                Android 1080P 4K Smart TV For Home
              </h5>
              <p class="card-text">
                <span class="badge bg-dark">Electronic product</span>
                <span class="badge bg-dark">TV</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <router-link class="nav-link" to="review" href="#"
                >Review</router-link>
                  </button>
                </div>
                <select class="form-select-sm form-select-sm">
                  <option selected>-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small class="text-dark">$490</small>
              </div>
            </div>
          </div>
        </div>
        <!-- --------------------------- products ending here --------------------------- -->
      </div>

      <!-- --------------------------- footer starts from here --------------------------- -->
      <footer class="mt-5 py-5 bg-dark">
        <div class="row">
          <div class="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10" />
              <path
                d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
              />
            </svg>
            <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="#">Cool stuff</a></li>
              <li><a class="link-secondary" href="#">Random feature</a></li>
              <li><a class="link-secondary" href="#">Team feature</a></li>
              <li>
                <a class="link-secondary" href="#">Stuff for developers</a>
              </li>
              <li><a class="link-secondary" href="#">Another one</a></li>
              <li><a class="link-secondary" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="#">Resource name</a></li>
              <li><a class="link-secondary" href="#">Resource</a></li>
              <li><a class="link-secondary" href="#">Another resource</a></li>
              <li><a class="link-secondary" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="#">Business</a></li>
              <li><a class="link-secondary" href="#">Education</a></li>
              <li><a class="link-secondary" href="#">Government</a></li>
              <li><a class="link-secondary" href="#">Gaming</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary" href="#">Team</a></li>
              <li><a class="link-secondary" href="#">Locations</a></li>
              <li><a class="link-secondary" href="#">Privacy</a></li>
              <li><a class="link-secondary" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <!-- --------------------------- footer ends from here --------------------------- -->
    </main>
  </div>
</template>
<style>

/* css for the width of the cards */
#cards
{
  max-width: 1800px;
}
</style>
