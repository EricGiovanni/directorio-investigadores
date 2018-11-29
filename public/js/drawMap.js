//var map;

AmCharts.ready(function() {
    var map = new AmCharts.AmMap();
    map.colorSteps = 10;
    $.ajax({
        url: 'http://localhost:3000/estados',
        type: 'GET',
        success: function(result){
            makeMap(result);
        }
    });

    function makeMap(result){
      var temp = [];
      for(var i in result){
        temp.push({id: 'MX-'+result[i].State, value: result[i].ResearcherCount*200000 });
      }

      for(var i in temp){
        if(temp[i].id == "MX-CDMX")
          temp[i].value = temp[i].value*3;
      }

      var dataProvider ={
          mapVar: AmCharts.maps.mexicoHigh,
          areas: temp
      };

      map.areasSettings = {
            autoZoom: true
      };

          map.dataProvider = dataProvider;
          var valueLegend = new AmCharts.ValueLegend();
          valueLegend.right = 10;
          valueLegend.minValue = "-";
          valueLegend.maxValue = "+";
          map.valueLegend = valueLegend;
          map.write("map");
    }

});
