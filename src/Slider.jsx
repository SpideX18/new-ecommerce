import React from 'react';

function Slider() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://api.gyapu.com/public/1920-600/files/A307E99A7E25566-Artboard%201.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://api.gyapu.com/public/1920-600/files/8ADDA05DA902468-G-%20Bar-02.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://api.gyapu.com/public/1920-600/files/178D1A44D56BB57-Kalapatthar-1920x400px.jpg" class="d-block w-100" alt="..."/>
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
    </div>
  );
}

export default Slider;
