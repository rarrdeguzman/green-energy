function hideShow() {
  // alert("hey");
  let navbar = document.getElementById("navbar");
  let burger = document.getElementById("burger");
  let xIcon = document.getElementById("xIcon");

  navbar.classList.toggle("showOnMobile");
  burger.classList.toggle("hideOnMobile");
  xIcon.classList.toggle("showOnMobile");
}

function defaultValue() {
  let p1 = document.getElementById('p1');
  p1.click();
}

let resources = {
  p1: {
    title: 'Panel Kits',
    bodyText: 'Solar panel kits are complete packages designed for residential or small commercial installations. They typically include solar panels, inverters, mounting hardware, and wiring. These kits allow homeowners to generate their own electricity from sunlight, reducing their reliance on the grid and lowering energy bills. Modern solar panels are efficient, durable, and can be installed on rooftops or ground-mounted systems.',
    url: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  p2: {
    title: 'Wind Turbines',
    bodyText: 'Home wind turbines are small-scale wind energy systems that convert wind power into electricity for home use. These turbines are ideal for areas with consistent wind speeds and can be installed on rooftops or standalone towers. They help reduce electricity costs and provide a renewable energy source that can complement solar panels. Home wind turbines are designed to be quiet, efficient, and low-maintenance.',
    url: 'https://images.pexels.com/photos/603764/pexels-photo-603764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  p3: {
    title: 'Water Heaters',
    bodyText: 'Solar water heaters use solar energy to heat water for residential use. These systems typically consist of solar collectors, a storage tank, and a circulation system. The collectors capture sunlight and convert it into heat, which is then transferred to the water in the storage tank. Solar water heaters can significantly reduce water heating costs and are an environmentally friendly alternative to traditional gas or electric water heaters. They are available in both active (with pumps) and passive (without pumps) configurations.',
    url: 'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
}

let buttons = document.querySelectorAll('#buttons div');
let dc = document.getElementById('dynamic-content');

function selectPage(click){
  let currentButton = click.target;
  console.log(currentButton.id);



  dc.innerHTML = `
  <div class='product'>
    <div class='prod_image'> 
      <img src='${resources[currentButton.id].url}' alt='${resources[currentButton.id].title} image'>
    </div>
    <div class="desc_container">
      <h2 class="title">${resources[currentButton.id].title}</h2>
      <p class="desc karla-300">${resources[currentButton.id].bodyText}</p>
    </div>
  </div>
  `;

  if(currentButton.id === 'p1') {
    buttons[0].classList.add("active");

    buttons[1].classList.remove("active");
    buttons[2].classList.remove("active");

  } 

  else if (currentButton.id === 'p2') {
    buttons[1].classList.add("active");

    buttons[0].classList.remove("active");
    buttons[2].classList.remove("active");
  }

  else {
    buttons[2].classList.add("active");

    buttons[1].classList.remove("active");
    buttons[0].classList.remove("active");
  }

}

buttons[0].addEventListener('click', selectPage);
buttons[1].addEventListener('click', selectPage);
buttons[2].addEventListener('click', selectPage);
