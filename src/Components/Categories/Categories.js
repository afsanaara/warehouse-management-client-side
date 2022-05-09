import React from 'react';

const Categories = () => {
    return (
        <div class="container  mx-auto text-center mt-5">
            <h3 className="text-center mt-5">Cate<span className="text-warning fw-bold">g</span>ories</h3>
      <div class="row  d-flex justify-content-center mt-5">
        <div class="col-md-4 me-5  border border-light shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center ">
            <h5>English Breakfast</h5>
            <img style={{ width: '40%' }} src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg" alt=""/>
          </div>
        </div>
        <div class="col-md-4   shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center ">
            <h5>Mexican</h5>
            <img style={{ width: '40%' }} src="https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/croppedshutterstock1659067060GE9Zjpg_14.JPEG" alt=""/>
          </div>
        </div>
        <div class="col-md-4 me-5 shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center">
            <h5>Italian</h5>
            <img style={{ width: '40%' }} src="https://www.lux-review.com/wp-content/uploads/2020/03/Pasta-1.jpg" alt=""/>
          </div>
        </div> 
        <div class="col-md-4 me-1 shadow p-3 mb-5 bg-body rounded">
          <div class="d-flex justify-content-between align-items-center">
            <h5>Japanese</h5>
            <img style={{ width: '40%' }} src="https://see.news/wp-content/uploads/2021/09/sukiyaka_healthy_japan_food.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Categories;