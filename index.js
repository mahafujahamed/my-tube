const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    // console.log(data.data);
   
    
    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onClick="handleVideos('${category.category_id}')" class="tabs tabs-boxed active:bg-[#FF1F3D] p-5 m-2">${category.category}</a>
        `;
        tabContainer.appendChild(div);
    });

};
const handleVideos = async(categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.data?.forEach((videos) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-white">
  <figure><img class="w-76 h-56" src=${videos.thumbnail} alt="Shoes" /></figure>
  <div class="card-body">
  <div class="flex">
  <div>
  <div class="avatar online">
  <div class="w-14 rounded-full">
  <img src=${videos.authors[0].profile_picture} alt="videos" />
  </div>
  </div>
  </div>
  <div>
  <h4 class="card-title mt-4 ms-4 text-black">
  ${videos.title}
</h4>
    </div>
  </div>
    <div class"text-center">
    <h2 class="card-title ms-16 font-bold text-xl font-bold">
      ${videos.authors[0].profile_name}
      <div class="badge badge-secondary">${videos.authors[0]?.verified}</div>
    </h2>
    <h3 class="ms-16">${videos.others.views} views</h3>
    </div>
  </div>
</div>
        `;
        cardContainer.appendChild(div);
    })
}

handleCategory();
handleVideos();