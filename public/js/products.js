var products = [
    {   name:'Breakfast1', price:'120', img:'img/prod/B1.png', tags:'breakfast,cheap,organic'   },
    {   name:'Breakfast2', price:'125', img:'img/prod/B2.png', tags:'breakfast,cheap,organic'   },
    {   name:'Breakfast3', price:'128', img:'img/prod/B3.png', tags:'breakfast,cheap,organic'   },
    {   name:'Breakfast4', price:'133', img:'img/prod/B4.png', tags:'breakfast,cheap,organic'   },
    {   name:'Breakfast5', price:'109', img:'img/prod/B5.jpg', tags:'breakfast,cheap,organic'   },
    {   name:'Breakfast6', price:'103', img:'img/prod/B6.jpg', tags:'breakfast,cheap,organic'   },
    {   name:'Lunch1', price:'225', img:'img/prod/L1.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Lunch2', price:'255', img:'img/prod/L2.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Lunch3', price:'320', img:'img/prod/L3.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Lunch4', price:'360', img:'img/prod/L4.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Lunch5', price:'321', img:'img/prod/L5.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Snacks1', price:'150', img:'img/prod/L3.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Snacks2', price:'121', img:'img/prod/L2.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Snacks3', price:'110', img:'img/prod/L1.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Snacks4', price:'120', img:'img/prod/L3.jpg',  tags:'breakfast,cheap,organic'  },
    {   name:'Dinner1', price:'133', img:'img/prod/B4.png', tags:'breakfast,cheap,organic'   },
    {   name:'Dinner2', price:'123', img:'img/prod/B1.png', tags:'breakfast,cheap,organic'   },
    {   name:'Dinner3', price:'83', img:'img/prod/B2.png', tags:'breakfast,cheap,organic'   },
    {   name:'Dinner4', price:'113', img:'img/prod/B3.png', tags:'breakfast,cheap,organic'   },]

// var printProducts = function ()
// {
//     for(i=0; i<products.length; i++)
//     {
//         console.log(products[i].name);
//     }
// };

//Create Product Cards
//var cardGrid = document.getElementById('cardGrid');
var cardRow = document.getElementById('cardRow');   //CardRow

var productNum=0;
var createProduct = function (productNum)
{
    var card = document.createElement('div');           //Card
    var cardContent = document.createElement('div');    //CardContent
    var cardHeader = document.createElement('div');     //CardHeader
    var img = document.createElement('img');            //Img
    var cardFooter = document.createElement('div');     //CardFooter
    var cardText = document.createElement('p');         //CardText
    //var buy = document.createElement('a');

    card.setAttribute('class','col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mt-4');
    cardContent.setAttribute('class','card text-white bg-dark');
    cardHeader.setAttribute('class','card-header');
        cardHeader.innerHTML=products[productNum].name;
    img.setAttribute('class','img-fluid');
        img.setAttribute('src',products[productNum].img);
        //img.setAttribute('onClick:','itemClicked('+productNum+');');
    cardFooter.setAttribute('class','card-footer');
        cardText.innerHTML='Price : '+products[productNum].price+' Rs';
        //buy.setAttribute('onClick','itemClicked('+productNum+')');
        //buy.innerHTML='Buy';
        //buy.setAttribute('class','btn');
    cardFooter.appendChild(cardText);
    //cardFooter.appendChild(buy);
    cardContent.appendChild(cardHeader);
    cardContent.appendChild(img);
    cardContent.appendChild(cardFooter);
    card.appendChild(cardContent);
    cardRow.appendChild(card);
}

//Clear Card Grid
var clearGrid = function()
{
    var toClear = document.getElementById('cardRow');
    while (toClear.hasChildNodes()) {
        toClear.removeChild(toClear.lastChild);
    }   
}

var itemClicked = function(index)
{
console.log('Item Clicked : '+index);
}