<template>
    <div class="container">
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
    max-width: 2000px;
}	
}
</style>