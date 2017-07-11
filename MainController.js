app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Cinema';
  $scope.status = 'none';


 $scope.select_place = function(place){
   place.modal = "new";
   place.status = "selected";
 };

 $scope.confirm = function(place){
   place.status = 'reserved';
   place.modal = "none";
 };

 $scope.cansel = function(place){
   place.status = 'free';
   place.modal = "none";
 };

  // HERE IS CINEMA DATABASE SECTION
 $scope.places = [
  {
    number:"1",
    places: [
    {
      number: "1",
      status: "free"
    },
    {
      number: "2",
      status: "free"
    },
    {
      number: "3",
      status: "free"
    },
    {
      number: "4",
      status: "free"
    },
    {
      number: "5",
      status: "free"
    },
    {
      number: "6",
      status: "free"
    },
    {
      number: "7",
      status: "free"
    },
    {
      number: "8",
      status: "free"
    },
    {
      number: "9",
      status: "free"
    },
    {
      number: "10",
      status: "free"
    },
    {
      number: "11",
      status: "free"
    },
    {
      number: "12",
      status: "free"
    },
    {
      number: "13",
      status: "free"
    },
    {
      number: "14",
      status: "free"
    },
    {
      number: "15",
      status: "free"
    },
    {
      number: "16",
      status: "free"
    },
    {
      number: "17",
      status: "free"
    },
    {
      number: "18",
      status: "free"
    },
    {
      number: "19",
      status: "free"
    },
    {
      number: "20",
      status: "free"
    }]
},
{
  number:"2",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"3",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"4",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"5",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"6",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"7",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"8",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"9",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"10",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"11",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"12",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"13",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"14",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"15",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"16",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"17",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"18",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"19",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"20",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"21",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"22",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"23",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"24",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"25",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"26",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"27",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"28",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"29",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"30",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"31",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"32",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"33",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"34",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"35",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"36",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"37",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"38",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"39",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
{
  number:"40",
  places: [
  {
    number: "1",
    status: "free"
  },
  {
    number: "2",
    status: "free"
  },
  {
    number: "3",
    status: "free"
  },
  {
    number: "4",
    status: "free"
  },
  {
    number: "5",
    status: "free"
  },
  {
    number: "6",
    status: "free"
  },
  {
    number: "7",
    status: "free"
  },
  {
    number: "8",
    status: "free"
  },
  {
    number: "9",
    status: "free"
  },
  {
    number: "10",
    status: "free"
  },
  {
    number: "11",
    status: "free"
  },
  {
    number: "12",
    status: "free"
  },
  {
    number: "13",
    status: "free"
  },
  {
    number: "14",
    status: "free"
  },
  {
    number: "15",
    status: "free"
  },
  {
    number: "16",
    status: "free"
  },
  {
    number: "17",
    status: "free"
  },
  {
    number: "18",
    status: "free"
  },
  {
    number: "19",
    status: "free"
  },
  {
    number: "20",
    status: "free"
  }]
},
];
// END DATABASE SECTION
}]);
