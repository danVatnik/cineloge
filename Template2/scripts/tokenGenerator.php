<?php

$secret = 'testKey';
	$path = '/sample.mp4';

	// Expiration in seconds (e.g. 90 seconds)
	$expire = 1406849160; 

	// Generate token
	$md5 = md5($path.$secret.$expire); 

	// Use this URL
	$url = 'http://samplemp4push-8be.kxcdn.com'.$path.'?token='.$md5.'&expire='.$expire; 


	echo $url;

?>