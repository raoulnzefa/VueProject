<template>
    <div class="container" style="max-width:100%;">

        <!-- ------------------------------ code for the navigation bar starts from here ------------------------------ -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="width:100%;">
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

    <!-- ------------------------------ code for the navigation bar ends  here ------------------------------ -->
	    <table id="cart" class="table table-hover table-condensed">
            <thead>
                <tr>
                    <th style="width:50%">Product</th>
                    <th style="width:10%">Price</th>
                    <th style="width:8%">Quantity</th>
                    <th style="width:22%" class="text-center">Subtotal</th>
                    <th style="width:10%"></th>
                </tr>
            </thead>
            <tbody>
                 
                <!-- below tr represents one table data -->
                <tr>
                    <td data-th="Product">
                        <div class="row">
                            <div class="col-sm-2 hidden-xs"><img src="../assets/tv1.png" alt="..." class="img-responsive"/></div>
                            <div class="col-sm-10">
                                <h4 class="nomargin">RU7300</h4>
                                <p>Europe stock AUTHENTIC-smart Tv RU7300 65" Class HDR 4K UHD Smart Curved LED TV</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">$1200.00</td>
                    <td data-th="Quantity">
                        <input type="number" class="form-control text-center" value="1" min="0">
                    </td>
                    <td data-th="subtotal" class="text-center">1200</td>
                    <td class="actions" data-th="">
                        <button class="delete-btn"><img src="../assets/trash.png" alt="..." class="img-responsive"/></button>								
                    </td>
                </tr>
                <!-- below tr represents one table data -->
                <tr>
                    <td data-th="Product">
                        <div class="row">
                            <div class="col-sm-2 hidden-xs"><img src="../assets/tv2.png" alt="..." class="img-responsive"/></div>
                            <div class="col-sm-10">
                                <h4 class="nomargin">TNTSTAR</h4>
                                <p>TNTSTAR 32 43 50 55 Inch China Tv Uhd Price Factory Cheap Flat Screen Televisions High Definition Lcd Led Tv 32 inch</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">$850.00</td>
                    <td data-th="Quantity">
                        <input type="number" class="form-control text-center" value="1" min="0">
                    </td>
                    <td data-th="subtotal" class="text-center">850</td>
                    <td class="actions" data-th="">
                        <button class="delete-btn"><img src="../assets/trash.png" alt="..." class="img-responsive"/></button>								
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="visible-xs">
                    <td class="text-center"><strong>Total 2050.00</strong></td>
                </tr>
                <tr>
                    <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                    <td colspan="2" class="hidden-xs"></td>
                    <td class="hidden-xs text-center"><strong>Total $2050.00</strong></td>
                    <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
                </tr>
            </tfoot>
		</table>
    </div>
</template>
<style>

/* below is the designing code for the cart page */
.table>tbody>tr>td, .table>tfoot>tr>td{
    vertical-align: middle;
}
@media screen and (max-width: 2000px) {
    table#cart tbody td .form-control{
		width:50%;
		display: inline !important;
	}
	.actions .btn{
		width:37%;
		margin:1.7em 0;
	}
	
	.actions .btn-info{
		float:left;
	}
	.actions .btn-danger{
		float:right;
	}
	
	table#cart thead { display: none; }
	table#cart tbody td { display: block; padding: .6rem; min-width:320px;}
	table#cart tbody tr td:first-child { background: #333; color: #fff; }
	table#cart tbody td:before {
		content: attr(data-th); font-weight: bold;
		display: inline-block; width: 8rem;
	}
	
#container 
{
    max-width: 100%;
}	
}
</style>