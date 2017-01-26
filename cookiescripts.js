$(document).ready(function(){
	if (Cookies.get("visited") == undefined) {
		$(".redBox").css("display", "block")
		Cookies.set("sugarCount", 0)
		Cookies.set("chocolateCount", 0)
		Cookies.set("lemonCount", 0)
	}
	
	
	function getValues(){
		sugarCount = parseInt(Cookies.get("sugarCount"))
		chocolateCount = parseInt(Cookies.get("chocolateCount"))
		lemonCount = parseInt(Cookies.get("lemonCount"))
		
		if (chocolateCount > 10 && sugarCount<=15) {
			$(".lemonCount").css("color", "red")
		}
		else if (lemonCount > 15) {
			$(".lemonCount").css("color", "white")
			$(".lemonCount").css("background-color", "red")	
		}
		if (chocolateCount > 10 && chocolateCount<=15) {
			$(".chocolateCount").css("color", "red")
		}
		else if (chocolateCount > 15) {
			$(".chocolateCount").css("color", "white")
			$(".chocolateCount").css("background-color", "red")
		}

		if (sugarCount > 10 && lemonCount<=15) {
			$(".sugarCount").css("color", "red")
		}
		else if (sugarCount > 15) {
			$(".sugarCount").css("color", "white")
			$(".sugarCount").css("background-color", "red")
		}
	}
	
	Cookies.set("visited", "true")

	getValues()
    
    $("body").click(function(){
		$(".redBox").css("display", "none")
	})

	

	$("#sugarCount").html("<h4>" + sugarCount + "</h4>")
	$("#chocolateCount").html("<h4>" + chocolateCount + "</h4>")
	$("#lemonCount").html("<h4>" + lemonCount + "</h4>")

	$("#smg").click(function(){
		sugarCount += 1
		$("#sugarCount").empty()
		$("#sugarCount").html("<h4>" + sugarCount + "</h4>")
		Cookies.set("sugarCount", sugarCount)
		if (sugarCount > 10 && sugarCount<=15) {
			$(".sugarCount").css("color", "red")
		}
		else if (sugarCount > 15) {
			$(".sugarCount").css("color", "white")
			$(".sugarCount").css("background-color", "red")
		}
	})
	$("#cmg").click(function(){
		chocolateCount += 1
		$("#chocolateCount").empty()
		$("#chocolateCount").html("<h4>" + chocolateCount + "</h4>")
		Cookies.set("chocolateCount", chocolateCount)
		if (chocolateCount > 10 && chocolateCount<=15) {
			$(".chocolateCount").css("color", "red")
		}
		else if (chocolateCount > 15) {
			$(".chocolateCount").css("color", "white")
			$(".chocolateCount").css("background-color", "red")
		}
	})
	$("#lmg").click(function(){
		lemonCount += 1
		$("#lemonCount").empty()
		$("#lemonCount").html("<h4>" + lemonCount + "</h4>")
		Cookies.set("lemonCount", lemonCount)
		if (lemonCount > 10 && lemonCount<=15) {
			$(".lemonCount").css("color", "red")
		}
		else if (lemonCount > 15) {
			$(".lemonCount").css("color", "white")
			$(".lemonCount").css("background-color", "red")	
		}
	})

	$(".clearBtn").click(function(){
		sugarCount = 0
		chocolateCount = 0
		lemonCount = 0

		$("#sugarCount").html("<h4>" + sugarCount + "</h4>")
		$("#chocolateCount").html("<h4>" + chocolateCount + "</h4>")
		$("#lemonCount").html("<h4>" + lemonCount + "</h4>")

		Cookies.set("sugarCount", 0)
		Cookies.set("chocolateCount", 0)
		Cookies.set("lemonCount", 0)

		$("#sugarCount").css("color", "black" )
		$("#sugarCount").css("background-color", "white")
		$("#chocolateCount").css("color", "black")
		$("#chocolateCount").css("background-color", "white")
		$("#lemonCount").css("color", "black") 
		$("#lemonCount").css("background-color", "white")
	})




})

