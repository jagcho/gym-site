import React from 'react'

function Home() {
    return (
        <>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://images.squarespace-cdn.com/content/v1/566b9a002399a3bdabaf6fa5/1529992776260-7XKCW9QJLQRJV4SYH8PH/TD_FACILITIES+%2827+of+29%29+-+Copy.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://images.squarespace-cdn.com/content/v1/566b9a002399a3bdabaf6fa5/1529992327296-XKYYGMCMJHHTIC7QZ9CF/TD_FACILITIES+%2825+of+29%29+-+Copy.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </>
    )
}

export default Home;