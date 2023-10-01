var MembersCode = 6492;

let http = new XMLHttpRequest();

http.open('get', 'data.json', true);

http.send();

http.onload = function(){
    
    if(this.readyState == 4 && this.status == 200){
        
        let votes = JSON.parse(this.responseText);


        console.log(votes);
        //console.log("test");

        
        let output = "";

        const list = [];
        var data = []

        for(let item of votes){

            //console.log(item.digitMembersCode)
            if(item.digitMembersCode == MembersCode){
                var itemexists = false;
                for(let i = 0; i < list.length; i++){
                    
                    //console.log(list[i][0])
                    if(item.nameOfTheShowFilm == list[i][0]){
                        itemexists = true;
                        list[i][1] += 1
                    }
                }

                if(!itemexists){
                    list.push([item.nameOfTheShowFilm, 1]) 
                }             
            }
            
        }
        list.reverse();
        list.sort(function(a, b) {
            return a[1] - b[1]; // Compare the second elements (votes) of the arrays
        });
        for(let i = 0; i < list.length; i++){
            data.push({ name: list[i][0], votes: list[i][1], color: getRandomColor()})


        }
        console.log(list);


        //source https://support.syncfusion.com/kb/article/9536/how-to-create-horizontal-bar-chart-in-js
        var chart = new ej.charts.Chart({

            width: 'auto', // Set the width of the chart
            height: '250%', // Set the height of the chart
            title: 'Voting List',
            
            
            titleStyle:{
                color: 'white',
                fontFamily: "Arial",
                fontStyle: 'italic',
                fontWeight: 'regular',
                size: '50px'
            },
            
            
            background: "transparent",

           
            
            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: "Category",
                title: "Shows / Films",
                titleStyle: { color: 'white' },
                labelStyle: { color: 'white' },
                minimum: 0,
              
                
            },
            //Initializing Primary Y Axis
            primaryYAxis: {
                title: "Number of Votes",
                titleStyle: { color: 'white' },
                labelStyle: { color: 'white' },
                minimum: 0,
                interval: 1,
               
            },
            //Initializing Chart Series
            series: [
                {
                    fill: "#cc99ff",
                    
                    pointColorMapping: 'color',
                    type: "Bar",
                    dataSource: data,
                    xName: "name",
                    yName: "votes",
                   
                    marker: {
                        dataLabel: { visible: true, 
                            font: {color: '#ffffff' },
                        
                        },
                        
                    },
                  
                    
                }
            ],
           
        });
        chart.appendTo("#container");
        
        

        
    }
}




function getRandomColor() {
    // Generate random values for red, green, and blue components (0-255)
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    // Convert the RGB components to hexadecimal format
    var hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    
    return hexColor;
}

document.querySelector(" .votes").innerHTML = output;

