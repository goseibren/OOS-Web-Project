<?php 

class Video{

	private $video_id;

	function __construct($video_id){
		$this->video_id = $video_id;
	}

	public function getUrl(){
		return $this->video_id;
	}

	public function setUrl($url){
		$this->video_id = $video_id;
	}

}

//add new video lifestyle videos here

$lifestyle_videos = array();
$lifestyle_videos[] = new Video("113033234");
$lifestyle_videos[] = new Video("114303803");

?>