/*
#############
## Modules ##
#############
*/



/*
###############
## Variables ##
###############
*/

// DOM
  // Get body
  const pageBody = document.body;

  // Chart 1
    // Chart types
    const chart1SBS = document.querySelector('#chart1-sidebyside');
    const chart1Merge = document.querySelector('#chart1-combined');
    // Type switcher
    const chart1btnSBS = document.querySelector('#chart1-switcher-sbs');
    const chart1btnMerge = document.querySelector('#chart1-switcher-merge');

/*
########################
## Page Functionality ##
########################
*/

// Called when page has been completely loaded
window.addEventListener('load', function() {
  console.log('Page loaded, starting postload scripts~');
  // Init website functionality basics
  initHead();
  initNav();
  initChart1();
  initChart2();
});

// Init header that appears/vanishes based on scroll pos
function initHead() {
  // DOM
  const pageHeader = document.querySelector('header');

    document.body.addEventListener('scroll', () => {
      // Grab our scroll Y coords
      const currentScroll = document.body.scrollTop;
      
      // If we're lower than the signature, show header
      pageHeader.classList.toggle('fadein', currentScroll > 220);

      // If we're higher than the signature, hide header 
      pageHeader.classList.toggle('fadeout', currentScroll < 220);
  });
}

// Init nav's context menu button
function initNav() {
  // DOM
  const nav = document.querySelector('nav');
  const navListBtns = document.querySelectorAll('.navbox-btn');
  const navListBtnPs = document.querySelectorAll('.navbox-btn-p');
  const navHbBtn = document.querySelector('#head-hamburger-btn');
  const navHr = document.querySelectorAll('nav hr.divider-h');
  const navSubs = document.querySelectorAll('nav .nav-sub');

  navHbBtn.addEventListener('click', () => {
      // Remove nav labels
      navListBtnPs.forEach((element) => {
          element.classList.toggle('closed');
      });
      // Remove nav labels
      navSubs.forEach((element) => {
        element.classList.toggle('closed');
      });
      // Remove divider
      navHr.forEach((element) => {
        element.classList.toggle('closed');
      });
      // Shrink actual buttons so overlay thing is lessened
      navListBtns.forEach((element) => {
          element.classList.toggle('closed');
      });
      // Shrink nav size in body grid
      pageBody.classList.toggle('expand');
  });
};

// Chart 1 stuff
function initChart1() {
  // Type switcher functionality
  // Side by side btn
  chart1btnSBS.addEventListener('click', () => {
    // Test if it's 'checked'
    if(!chart1btnSBS.classList.contains('checked')) {
      chart1Toggle();
    } 
  });
  //
  chart1btnMerge.addEventListener('click', () => {
    // Test if it's 'checked'
    if(!chart1btnMerge.classList.contains('checked')) {
      chart1Toggle();
    } 
  });
};

// Toggling element classes en masse
function chart1Toggle() {
  chart1btnSBS.classList.toggle('checked');
  chart1btnMerge.classList.toggle('checked');
  
  chart1SBS.classList.toggle('chart1-hide');
  chart1Merge.classList.toggle('chart1-hide');
};


// Chart 2 stuff
function initChart2() {
  // DOM
  const chart2container = document.querySelector('#chart2-container');
  const chart2tooltip = document.querySelector('#chart2-tooltip');

  chart2container.addEventListener('click', () => {
    chart2tooltip.classList.add('closed');
  });
};