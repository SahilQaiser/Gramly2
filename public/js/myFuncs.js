// Slider for Kitchen Logos

$(document).ready(function(){
  $('.kitchen-logos').slick({
      infinite:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
      {
          breakpoint: 980, // tablet breakpoint
          settings: {        
              dots:false,
              arrows:false,
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 480, // mobile breakpoint
          settings: {        
              dots:false,
              arrows:false,
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
  });
  $('.slicktabs').slick({
        infinite:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots:false,
        autoplay: false,
        responsive: [
        {
            breakpoint: 980, // tablet breakpoint
            settings: {        
                dots:false,
                arrows:true,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {        
                dots:false,
                arrows:true,
                slidesToShow: 1,
            }
        }
    ]
    });
    $('.slicktabsSubs').slick({
        infinite:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        dots:false,
        autoplay: false,
        responsive: [
        {
            breakpoint: 980, // tablet breakpoint
            settings: {        
                dots:false,
                arrows:true,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {        
                dots:false,
                arrows:true,
                slidesToShow: 2,
            }
        }
    ]
    });
    showBreakfast();
});
function homeStyleShow(){
   console.log("HomeStyle Items Loaded..."); 
}
function riceShow(){
    console.log("Rice Bowls Loaded...");
}
function saladsShow(){
    console.log("Salad Items Loaded...");
}
function proteinShow(){
    console.log("Protein Packed Items Loaded...");
}
function showBreakfast()
{
    try {
        clearGrid();
    } catch (error) {
        console.log('Grid Empty Already...'+error.message);
    }
    for(i=0; i<6; i++)
    {
        createProduct(i);
    }
}
function showLunch()
{
    clearGrid();
    for(i=6; i<11; i++)
    {
        createProduct(i);
    }
}
function showSnacks()
{
    clearGrid();
    for(i=11; i<15; i++)
    {
        createProduct(i);
    }
}
function showDinner()
{
    clearGrid();
    for(i=15; i<19; i++)
    {
        createProduct(i);
    }
}