myApp.controller("ProPicController",function($scope,$rootScope,$http,$location,$cookieStore)
{
	
	$scope.propic={"picId":'',"image":'','userDetails':{'loginname':''}};
	
    $scope.doUpload = function()
    {
    	console.log('Entered into profile pic updation');
		$http.post('http://localhost:8082/ChatMiddleware/doUpload',$scope.propic)
	
		.then(function(response)
				{
			        $scope.propic=response.data;
			        $rootScope.currentUser=response.data;
			        console.log($rootScope.currentUser);
			        $location.path("/UserHome");
				});
	}
  
	
});