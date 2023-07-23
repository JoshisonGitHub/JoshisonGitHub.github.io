var MembersCode = 1234;

let http = new XMLHttpRequest();

http.open('get', 'data.json', true);

http.send();

http.onload = function(){
    
    if(this.readyState == 4 && this.status == 200){
        
        let votes = JSON.parse(this.responseText);


        console.log(votes);

        
        let output = "";

        const list = [];
        var data = []

        for(let item of votes){

            console.log(item.digitMembersCode)
            if(item.digitMembersCode == MembersCode){
                var itemexists = false;
                for(let i = 0; i < list.length; i++){
                    
                    console.log(list[i][0])
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
        for(let i = 0; i < list.length; i++){
            data.push({ name: list[i][0], votes: list[i][1], color: getRandomColor()})


        }
        console.log(list);


        //source https://support.syncfusion.com/kb/article/9536/how-to-create-horizontal-bar-chart-in-js
        var chart = new ej.charts.Chart({

            title: 'Voting List',
        

            background: "transparent",
            
            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: "Category",
                title: "Shows / Films",
                
            },
            //Initializing Primary Y Axis
            primaryYAxis: {
                title: "Number of Votes",
                
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
                    dataLabel: {
                        visible: true,
                       
                    },
                    marker: {
                        dataLabel: { visible: true },
                       
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

