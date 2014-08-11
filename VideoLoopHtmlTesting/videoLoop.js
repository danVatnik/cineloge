$(document).ready(function() {
	    //place code inside jQuery ready event handler 
	    //to ensure videoElement is available
	    var i = 0;
	    var isPlaying = false;
	    var isInitialized = false;
	    var initialTime;
	    var sources = ['sample.mp4', 'horses.mp4', 'sample.mp4'];

	    $('#videoElement').bind('click', function() {
	    	initialTime = this.currentTime;
	    	if(!isPlaying) {
	    		if(i < sources.length)
		        {
		        	if(!isInitialized) {
		        		this.src = sources[i];
		    	    	this.load();
		    	    	isInitialized = true;
		        	} 		          	
		    	    this.play();
		    	    isPlaying = true;
		        }
	    	} else {
	    		this.pause();
	    		isPlaying = false;
	    	}
    	});
	    /* $('#videoElement').src = sources[i];
	    $('#videoElement').load();
	    $('#videoElement').play(); */

    	$('#videoElement').bind('ended', function() {
	    	i++;
	        if(i < sources.length)
	        {
	          	this.src = sources[i];
	    	    this.load();
	    	    if(i == 1) {

	    	    }
	    	    this.setAttribute('controls');
	    	    this.setAttribute('width', '1000');
	    	    this.setAttribute('height', '600');
	    	    this.play();
	        }
    	});

    	$('#videoElement').on('seeking', function(position, offset){
    		//var firstSeekTime = this.currentTime;
		  	$('#p1').text(position);
		  	$('#p2').text(offset);
		  	//this.currentTime = 0;
		})

		$('#videoElement').on('seeked', function(){
    		//var firstSeekTime = this.currentTime;
		  	//$('p').text(this.currentTime);
		  	this.currentTime = 0;
		})
		});