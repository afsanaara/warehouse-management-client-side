import React from 'react';

const RecentPost = () => {
    return (
        <div class="container">
             <h1 className="text-center mt-5">Our Recent<span className="text-warning fw-bold"> Post</span></h1>
            <div class="row mt-5">
               
        <div class="col-md-6 border border-dark">
          <div class=" text-center mt-5">
            
                        <img style={{ width: '60%' }} src="https://static.independent.co.uk/2022/05/02/14/iStock-914659458.jpg?quality=75&width=990&auto=webp&crop=982:726,smart" alt="" />
                        <h5>Don’t let spring veggies go to waste with these top tips and recipes</h5>
                        <p>One of the great things about spring is the rainbow of fresh vegetables, a welcome change for those looking to keep their food miles low and eat seasonally.Recent research revealed that the average family wastes up to £720 of food per year, and that fruits and vegetables are the most wasted foods.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center mt-5 border border-dark ">
            
                        <img style={{ width: '50%' }} src="https://static.independent.co.uk/2022/05/04/16/featureimage-2.jpg?quality=75&width=990&auto=webp&crop=982:726,smart" alt="" />
                        <h5>Three gluten-free recipes that are definitely not boring</h5>
                        <p>Megan McKenna says she has these gluten-free pancakes for breakfast five days a week.“They are so good, and fluffy too! The demand for these bad boys has been crazy. Pair them with my crispy bacon and maple syrup.”</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center mt-5 border border-dark">
            
                        <img style={{ width: '50%' }} src="https://static.independent.co.uk/2022/02/08/10/GettyImages-1282497578.jpg?quality=75&width=990&auto=webp&crop=982:726,smart" alt="" />
                        <h5>Two million adults in UK can’t afford to eat every day due to ‘catastrophic’ cost of living crisis</h5>
                        <p>More than two million adults in the UK have skipped meals for a whole day over the past month because they cannot afford to eat, new research on the cost of living crisis says.One in seven adults lives in homes where people have eaten smaller portions, skipped meals or gone hungry all day because they could not afford or access food. </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RecentPost;