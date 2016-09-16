function AppCtrl($scope){
    console.log("hello world from controller");
    
   person1 = {
        name = 'Priyam',
        email = 'priyam@gmail.com',
        number = '9454886957'
    };
    person2 = {
        name = 'Priyam',
        email = 'priyam@gmail.com',
        number = '9454886957'
    };
     person3 = {
        name = 'Priyam',
        email = 'priyam@gmail.com',
        number = '9454886957'
    };
    
    var contactlist = [person1,person2,person3];
    $scope.contactlist = contactlist;
}