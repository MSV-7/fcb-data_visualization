console.log("hello world");

const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();
dateElement.innerHTML= currentDate;

let dataOption = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US',
    dataOptions);


const url = "https://fakestoreapi.com/products"
const options = {
    method: 'POST',
    
};
fetch(url, options)
.then(res => res.json())
.then(data => {
    console.log(data);
    /*
        // let products = [
        //     {
        //         title:"Lip stick",
        //         price: 199.9,
        //         description: "red Lip stick",
        //         category:'beauty product',
        //         image: null,
        //         rating: {
        //             rate: 5,
        //             count: 100
        //         }
        //     },
        //     {
        //         title:"Lip stick 2",
        //         price: 199.9,
        //         description: "pink Lip stick",
        //         category:'beauty product',
        //         image: null,
        //         rating: {
        //             rate: 4, 
        //             count: 100
        //         }
        //     },
            
        // ];
        // console.log(products);
        // console.log(products[0].title)
        // console.log(products[0].price)
        // console.log(products[0].rating.rate)
    */
    
        let titles = data.map(object => {
        //  console.log(object);
        //  console.log(object.title);
         return object.title; //adds the title for the objects to the "titles" storage
    });
    console.log(titles);

    let ratings = data.map(object => {
        return objects.rating.rate; // adds the rate inside the rating property per object to "ratings" storage
    });
    console.log(ratings);








    const mychart = document.getElementById("mychart");
    let barChart = new Chart(myChart,{
        type: 'bar',
        data:{
            labels: titles,
            datasets: [{
                label: "ratings of Tweets",
                data: ratings,
                borderWidth: 2,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
	    		'rgba(255, 159, 64, 0.2)',
	    		'rgba(255, 205, 86, 0.2)',
	    		'rgba(75, 192, 192, 0.2)',
	    		'rgba(54, 162, 235, 0.2)',
	    		'rgba(153, 102, 255, 0.2)',
	    		'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                'rgba(255, 99, 132)',
	    		'rgba(255, 159, 64)',
	    		'rgba(255, 205, 86)',
	    		'rgba(75, 192, 192)',
	    		'rgba(54, 162, 235)',
	    		'rgba(153, 102, 255)',
	    		'rgba(201, 203, 207)'
                ],
                hoverBackgroundColor:[
                'rgba(255, 99, 132)',
	    		'rgba(255, 159, 64)',
	    		'rgba(255, 205, 86)',
	    		'rgba(75, 192, 192, 0.2)',
	    		'rgba(54, 162, 235, 0.2)',
	    		'rgba(153, 102, 255, 0.2)',
	    		'rgba(201, 203, 207, 0.2)'
                ]
        }]
    },
    options:{
        indexAxis: 'y',
        scales: {
            y:{
                beginAtZero: true
            }
        }
    }
});
})