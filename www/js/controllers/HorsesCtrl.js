studmateApp.controller('HorsesCtrl', function($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);

  $scope.horses = [
    { name: 'Rodioso', image: 'http://img.equinenow.com/equine/data/photos/963269_5.jpg' },
    { name: 'Indy Bright', image: 'http://img.equinenow.com/equine/data/photos/420468_1.jpg' },
    { name: 'Mo Breaking News', image: 'http://img.equinenow.com/equine/data/photos/645048_1.jpg' },
    { name: 'Cazar', image: 'http://img.equinenow.com/equine/data/photos/805245_1.jpg'},
    { name: 'Da Sir Dierich', image: 'http://img.equinenow.com/equine/data/photos/436486_1.jpg' }
  ];
})