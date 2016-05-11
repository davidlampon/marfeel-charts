define(['chart/controller'], function(controller) {
  var population = [];

  var data = [{
    title: 'revenue',
    total: 200000,
    values: [{
      label: 'smartphone',
      count: 0.4
    }, {
      label: 'tablet',
      count: 0.6
    }],
    evolution: [
      {'date':'1-May-12','close':'582.13'},
      {'date':'30-Apr-12','close':'583.98'},
      {'date':'27-Apr-12','close':'603.00'},
      {'date':'26-Apr-12','close':'607.70'},
      {'date':'25-Apr-12','close':'610.00'},
      {'date':'24-Apr-12','close':'560.28'},
      {'date':'23-Apr-12','close':'571.70'},
      {'date':'20-Apr-12','close':'572.98'},
      {'date':'19-Apr-12','close':'587.44'},
      {'date':'18-Apr-12','close':'608.34'},
      {'date':'17-Apr-12','close':'609.70'},
      {'date':'16-Apr-12','close':'580.13'},
      {'date':'13-Apr-12','close':'605.23'},
      {'date':'12-Apr-12','close':'622.77'},
      {'date':'11-Apr-12','close':'626.20'},
      {'date':'10-Apr-12','close':'628.44'},
      {'date':'9-Apr-12','close':'636.23'},
      {'date':'5-Apr-12','close':'633.68'},
      {'date':'4-Apr-12','close':'624.31'},
      {'date':'3-Apr-12','close':'629.32'},
      {'date':'2-Apr-12','close':'618.63'},
      {'date':'30-Mar-12','close':'599.55'},
      {'date':'29-Mar-12','close':'609.86'},
      {'date':'28-Mar-12','close':'617.62'},
      {'date':'27-Mar-12','close':'614.48'},
      {'date':'26-Mar-12','close':'606.98'},
      {'date':'23-Mar-12','close':'596.05'},
      {'date':'22-Mar-12','close':'599.34'},
      {'date':'21-Mar-12','close':'602.50'},
      {'date':'20-Mar-12','close':'605.96'},
      {'date':'19-Mar-12','close':'601.10'},
      {'date':'16-Mar-12','close':'585.57'},
      {'date':'15-Mar-12','close':'585.56'},
      {'date':'14-Mar-12','close':'589.58'},
      {'date':'13-Mar-12','close':'568.10'},
      {'date':'12-Mar-12','close':'552.00'},
      {'date':'9-Mar-12','close':'545.17'},
      {'date':'8-Mar-12','close':'541.99'},
      {'date':'7-Mar-12','close':'530.69'},
      {'date':'6-Mar-12','close':'530.26'},
      {'date':'5-Mar-12','close':'533.16'},
      {'date':'2-Mar-12','close':'545.18'},
      {'date':'1-Mar-12','close':'544.47'},
      {'date':'29-Feb-12','close':'542.44'},
      {'date':'28-Feb-12','close':'535.41'},
      {'date':'27-Feb-12','close':'525.76'},
      {'date':'24-Feb-12','close':'522.41'},
      {'date':'23-Feb-12','close':'516.39'},
      {'date':'22-Feb-12','close':'513.04'}
    ]
  }, {
    title: 'impressions',
    total: 50000000,
    values: [{
      label: 'smartphone',
      count: 0.6
    }, {
      label: 'tablet',
      count: 0.4
    }],
    evolution: [
      {'date':'1-May-12','close':'582.13'},
      {'date':'30-Apr-12','close':'583.98'},
      {'date':'27-Apr-12','close':'603.00'},
      {'date':'26-Apr-12','close':'607.70'},
      {'date':'25-Apr-12','close':'610.00'},
      {'date':'24-Apr-12','close':'560.28'},
      {'date':'23-Apr-12','close':'571.70'},
      {'date':'20-Apr-12','close':'572.98'},
      {'date':'19-Apr-12','close':'587.44'},
      {'date':'18-Apr-12','close':'608.34'},
      {'date':'17-Apr-12','close':'609.70'},
      {'date':'16-Apr-12','close':'580.13'},
      {'date':'13-Apr-12','close':'605.23'},
      {'date':'12-Apr-12','close':'622.77'},
      {'date':'11-Apr-12','close':'626.20'},
      {'date':'10-Apr-12','close':'628.44'},
      {'date':'9-Apr-12','close':'636.23'},
      {'date':'5-Apr-12','close':'633.68'},
      {'date':'4-Apr-12','close':'624.31'},
      {'date':'3-Apr-12','close':'629.32'},
      {'date':'2-Apr-12','close':'618.63'},
      {'date':'30-Mar-12','close':'599.55'},
      {'date':'29-Mar-12','close':'609.86'},
      {'date':'28-Mar-12','close':'617.62'},
      {'date':'27-Mar-12','close':'614.48'},
      {'date':'26-Mar-12','close':'606.98'},
      {'date':'23-Mar-12','close':'596.05'},
      {'date':'22-Mar-12','close':'599.34'},
      {'date':'21-Mar-12','close':'602.50'},
      {'date':'20-Mar-12','close':'605.96'},
      {'date':'19-Mar-12','close':'601.10'},
      {'date':'16-Mar-12','close':'585.57'},
      {'date':'15-Mar-12','close':'585.56'},
      {'date':'14-Mar-12','close':'589.58'},
      {'date':'13-Mar-12','close':'568.10'},
      {'date':'12-Mar-12','close':'552.00'},
      {'date':'9-Mar-12','close':'545.17'},
      {'date':'8-Mar-12','close':'541.99'},
      {'date':'7-Mar-12','close':'530.69'},
      {'date':'6-Mar-12','close':'530.26'},
      {'date':'5-Mar-12','close':'533.16'},
      {'date':'2-Mar-12','close':'545.18'},
      {'date':'1-Mar-12','close':'544.47'},
      {'date':'29-Feb-12','close':'542.44'},
      {'date':'28-Feb-12','close':'535.41'},
      {'date':'27-Feb-12','close':'525.76'},
      {'date':'24-Feb-12','close':'522.41'},
      {'date':'23-Feb-12','close':'516.39'},
      {'date':'22-Feb-12','close':'513.04'}
    ]
  }, {
    title: 'visits',
    total: 600000000,
    values: [{
      label: 'smartphone',
      count: 0.2
    }, {
      label: 'tablet',
      count: 0.8
    }],
    evolution: [
      {'date':'1-May-12','close':'582.13'},
      {'date':'30-Apr-12','close':'583.98'},
      {'date':'27-Apr-12','close':'603.00'},
      {'date':'26-Apr-12','close':'607.70'},
      {'date':'25-Apr-12','close':'610.00'},
      {'date':'24-Apr-12','close':'560.28'},
      {'date':'23-Apr-12','close':'571.70'},
      {'date':'20-Apr-12','close':'572.98'},
      {'date':'19-Apr-12','close':'587.44'},
      {'date':'18-Apr-12','close':'608.34'},
      {'date':'17-Apr-12','close':'609.70'},
      {'date':'16-Apr-12','close':'580.13'},
      {'date':'13-Apr-12','close':'605.23'},
      {'date':'12-Apr-12','close':'622.77'},
      {'date':'11-Apr-12','close':'626.20'},
      {'date':'10-Apr-12','close':'628.44'},
      {'date':'9-Apr-12','close':'636.23'},
      {'date':'5-Apr-12','close':'633.68'},
      {'date':'4-Apr-12','close':'624.31'},
      {'date':'3-Apr-12','close':'629.32'},
      {'date':'2-Apr-12','close':'618.63'},
      {'date':'30-Mar-12','close':'599.55'},
      {'date':'29-Mar-12','close':'609.86'},
      {'date':'28-Mar-12','close':'617.62'},
      {'date':'27-Mar-12','close':'614.48'},
      {'date':'26-Mar-12','close':'606.98'},
      {'date':'23-Mar-12','close':'596.05'},
      {'date':'22-Mar-12','close':'599.34'},
      {'date':'21-Mar-12','close':'602.50'},
      {'date':'20-Mar-12','close':'605.96'},
      {'date':'19-Mar-12','close':'601.10'},
      {'date':'16-Mar-12','close':'585.57'},
      {'date':'15-Mar-12','close':'585.56'},
      {'date':'14-Mar-12','close':'589.58'},
      {'date':'13-Mar-12','close':'568.10'},
      {'date':'12-Mar-12','close':'552.00'},
      {'date':'9-Mar-12','close':'545.17'},
      {'date':'8-Mar-12','close':'541.99'},
      {'date':'7-Mar-12','close':'530.69'},
      {'date':'6-Mar-12','close':'530.26'},
      {'date':'5-Mar-12','close':'533.16'},
      {'date':'2-Mar-12','close':'545.18'},
      {'date':'1-Mar-12','close':'544.47'},
      {'date':'29-Feb-12','close':'542.44'},
      {'date':'28-Feb-12','close':'535.41'},
      {'date':'27-Feb-12','close':'525.76'},
      {'date':'24-Feb-12','close':'522.41'},
      {'date':'23-Feb-12','close':'516.39'},
      {'date':'22-Feb-12','close':'513.04'}
    ]
  }];

  function getData() {
    return data;
  }

  function setModel(data) {
    var males = 0;
    var females = 0;
    var total = 0;

    for (var i = 0; i < data.length; i++) {
      males += data[i].males;
      females += data[i].females;
      total += data[i].total;
    }

    var totalChart = {
      title: 'total',
      total: total,
      values: [{
        label: 'male',
        count: males / total
      }, {
        label: 'female',
        count: females / total
      }],
      evolution: data
    };

    population[0] = totalChart;

    controller.drawCharts(population);
  }

  function loadInfo(country) {
    var url = 'http://api.population.io/1.0/population/2015/' + country.replace(/ /g,"%20");;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        if (response.length) {
          setModel(response);
        }
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  }

  return {
    getData : getData,
    loadInfo : loadInfo
  }
});
