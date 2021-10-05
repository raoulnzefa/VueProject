<template>
    <div class="home">
        <!-- <app-home></app-home> -->
        <h1>Customer Rates and Reviews</h1>

        <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
        
        <!-- ---------------------------------- Below code is for user-rating only ---------------------------------- -->
        <div id="ratings">
            <div class="row">
                <div class="col-md-6">
                    <div class="user-rating-block">
                        <h4>Average user user-rating</h4>
                        <h2 class="bold padding-bottom-7">4 <small>/ 5</small></h2>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                        <span class="fa fa-star marked"></span>
                        <span class="fa fa-star marked"></span>
                        <span class="fa fa-star marked"></span>
                        <span class="fa fa-star marked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <div class="user-comment-block">
                        <textarea  id="user-comment" placeholder="Enter your review here"></textarea>
                    </div>
                </div>
                <div class="col-md-6">
                    <h4>Rating breakdown</h4>
                    <div class="row">
                        <div class="align">
                            <div>5 star</div>
                        </div>
                        <div class="middle">
                            <div class="horizontal-bar"><div class="bar-5"></div></div>
                        </div>
                        <div class="align">
                            <div>4 star</div>
                        </div>
                            <div class="middle"><div class="horizontal-bar"><div class="bar-4"></div></div>
                        </div>
                        <div class="align">
                            <div>3 star</div>
                        </div>
                        <div class="middle">
                            <div class="horizontal-bar"><div class="bar-3"></div></div>
                        </div>
                        <div class="align">
                            <div>2 star</div>
                        </div>
                        <div class="middle"><div class="horizontal-bar"><div class="bar-2"></div></div></div>
                        <div class="align">
                            <div>1 star</div>
                        </div>
                        <div class="middle"><div class="horizontal-bar"><div class="bar-1"></div></div></div>
                    </div>
                </div>
            </div>

            <div class="row">
            <div class="col-md-12">
                <hr/>
                <div class="review-block">
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="../assets/Hoon.png" class="img-rounded">
                            <div class="review-product-user"><a href="#" class="name">Hoon</a></div>
                            <div class="review-product-time">Sept 19, 2021<br/>15 day ago</div>
                        </div>
                        <div class="col-sm-9">
                            <div class="review-product-star">
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div class="review-block-title">Best Product</div>
                            <div class="review-product-comment">This product has the best quality and is having the cheapest price in the market. This has the best ultra 4K quality.</div>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="../assets/satyam.png" class="img-rounded">
                            <div class="review-product-user"><a href="#" class="name">Satyam</a></div>
                            <div class="review-product-time">Sept 19, 2021<br/>15 day ago</div>
                        </div>
                        <div class="col-sm-9">
                            <div class="review-product-star">
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div class="review-block-title">Best Product</div>
                            <div class="review-product-comment">This product has the best quality and is having the cheapest price in the market. This has the best ultra 4K quality.</div>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="../assets/kushal.png" class="img-rounded">
                            <div class="review-product-user"><a href="#" class="name">Kushal</a></div>
                            <div class="review-product-time">Sept 19, 2021<br/>15 day ago</div>
                        </div>
                        <div class="col-sm-9">
                            <div class="review-product-star">
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star marked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div class="review-block-title">Best Product</div>
                            <div class="review-product-comment">This product has the best quality and is having the cheapest price in the market. This has the best ultra 4K quality.</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<style>
#ratings
{
    font-family: sans-serif;
    font-size: 24px;
    padding-left: 0px;
    /* float: left;
    margin-left: 60px; */
}
body {
  padding-top: 70px;
}
.btn-grey{
    background-color:#D8D8D8;
    color:#FFF;
}
.user-rating-block{
    background-color:#FAFAFA;
    border:1px solid #EFEFEF;
    padding:15px 15px 20px 15px;
    border-radius:3px;
}
.user-comment-block{
    background-color:#FAFAFA;
    border:1px solid #EFEFEF;
    padding:15px 15px 20px 15px;
    border-radius:3px;
    max-height: 200px;
}
#user-comment
{
    min-height: 100px;
    min-width: 950px;
}
.bold{
    font-weight:700;
}
.padding-bottom-7{
    padding-bottom:7px;
}

.review-block{
    background-color:#FAFAFA;
    border:1px solid #EFEFEF;
    padding:15px;
    border-radius:3px;
    margin-bottom:15px;
}
.review-product-user{
    font-size:12px;
    margin:10px 0;
}
.review-product-time{
    font-size:16px;
}
.review-product-star{
    font-size:16px;
    margin-bottom:15px;
}
.review-block-title{
    font-size:24px;
    font-weight:700;
    margin-bottom:10px;
}
.review-product-comment{
    font-size:16px;
}
.marked {
  color: orange;
}

.bar-5 {width: 60%; height: 18px; background-color: #04AA6D;}
.bar-4 {width: 30%; height: 18px; background-color: #2196F3;}
.bar-3 {width: 10%; height: 18px; background-color: #00bcd4;}
.bar-2 {width: 4%; height: 18px; background-color: #ff9800;}
.bar-1 {width: 15%; height: 18px; background-color: #f44336;}

.heading {
  font-size: 25px;
  margin-right: 25px;
}

.fa {
  font-size: 25px;
}

/* Place text to the right */
.right {
  text-align: right;
}

.horizontal-bar {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}

/* Three column layout */
.align {
  float: left;
  width: 15%;
  margin-top: 10px;
}

.middle {
  float: left;
  width: 70%;
  margin-top: 10px;
}

.name
{
    font-size: 24px;
}
</style>


