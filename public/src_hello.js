$(document).ready(function() {
    $("#address").hide()
$("#response").hide()
$("#submit").hide()
$("#urRes").hide()
$("#inputStringe").hide()
$("#finalButton").hide()
})
var array1 = []
var array2 = []
var bount = 0

$("#oneButton").click(function() {
send.searchResponsePerQuestion(web3.eth.defaultAccount, function(err, res) {
    if(err) {
    console.log(err)
    } else {
    $("#urRes").show()
    $("#inputString").show()
    $("#inputStringe").show()

$("#finalButton").show()
    secondArray = res
    for (var j = 0; j < secondArray.length; j++) {
        send.searchResponseByNumber(2, function(err, res) {
            if(err) {
                console.log(err)
            } else {
                console.log(res)
                array1.push(res[0])
                array2.push(res[1])
                var text9 = "";
                for(var r = 0; r < array1.length; r++) {
                    text9 += array1[r] + "<br>";
                }
                document.getElementById("responses").innerHTML = text9;
                var text10 = "";
                for(var q = 0; q < array2.length; q++) {
                    text10 += array2[q] + "<br>";
                }
                document.getElementById("peopleWhoSubmitted").innerHTML = text10;
            }
        })
    }
}
})
})
 
    console.log("It's finally working!")
            if(typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
        } else {
            web3 = new Web3(web3.currentProvider)
         }
         web3.eth.defaultAccount = web3.eth.accounts[0]
         console.log(web3.eth.defaultAccount)

var sendContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"addresses","type":"address[]"}],"name":"acceptArray2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"approval","type":"bool"},{"name":"_selectedAddress","type":"address"}],"name":"approveOfResponse","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"returnArray","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_response","type":"string"},{"name":"_questionAddress","type":"address"}],"name":"respondToQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"returnMsg","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"questions","outputs":[{"name":"contents","type":"string"},{"name":"bounty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"searchResponsePerQuestion","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"uints","type":"uint256[]"},{"name":"number","type":"uint256"}],"name":"acceptArray","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"returnAllAddresses","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"respondant","type":"address"},{"name":"approval","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_responseNumber","type":"uint256"}],"name":"searchResponseByNumber","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_question","type":"string"},{"name":"_bounty","type":"uint256"}],"name":"postQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"addresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"returnAllBounties","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);

var mainAddress
    var send = sendContract.at("0x002e3f8e805ee52e0b1f1ba765e8e8ecf1368780")
    console.log(send)
    send.returnMsg(function(err, res) {
    if(err) {
    console.log(err)
    } else {
    mainAddress = res
    console.log(mainAddress)
    }
    })
var array = []
$("#testButton").click(function() {
var stringInput = $("#inputString").val()
var numberInput = $("#inputNumber").val()
console.log(stringInput)
console.log(numberInput)
    	send.postQuestion(web3.eth.defaultAccount, stringInput, numberInput, function(err, res) {
    	if(!err) {
    	alert("Success!")
    	} else {
    	alert("you fucked up")
    	}
    	})
})
var messageArray = []
var bountyArray = []
var secondArray = []
var numberArray = []
$("#submit").click(function() {
	send.respondToQuestion($("#response").val(), $("#address").val(), function(err, res) {
	if(err) {
	alert("You fucked up")
	} else {
	alert("Success")
	}
	})
})
send.returnAllAddresses(function(err, res) {
	if(err) {
	alert("Something went wrong")
	} else {
	array = res
    console.log(array)
	for (var i = 0; i < array.length; i++) {
	send.returnAllBounties(array[i], function(error, result) {
	if(error) {
	console.log(error)
	} else {
    bount += 1
	messageArray.push(result[0])
	console.log(messageArray)
	bountyArray.push(result[1].c)
	console.log(bountyArray)
    numberArray.push(bount)
    console.log(bount)
    var text = "";
    for(var k = 0; k < messageArray.length; k++) {
        text += messageArray[k] + "<br>";
    }
    document.getElementById("bountyContent").innerHTML = text;
    var text2 = "";
    for(var l = 0; l < bountyArray.length; l++) {
        text2 += bountyArray[l] + "<br>";
    }
    document.getElementById("bountyPrice").innerHTML = text2;
    var text3 = "";
    for(var w = 0; w < numberArray.length; w++) {
        text3 += numberArray[w] + "<br>";
    }
    document.getElementById("bountyNumber").innerHTML = text3;
    $("#bId").click(function() {
    var bnd = $("#numberVal").val()
    console.log(bnd - 1)
    send.acceptArray(bountyArray, bnd-1, function(err, res) {
        if(!err) {
            console.log(res)
        } 
    })
    send.acceptArray2(array, function(err, res) {
        if(!err) {
            console.log(res)
        }
    })
    window.location.replace('./bounty.html')
    })
	}
	})
	}
	}
})
    $(".clickable-row").click(function() {
        window.location.assign("./bounty.html");
    });
$("#finalButton").click(function() {
    if(web3.eth.defaultAccount == 0x3e53850cf23cd51254a134c77a2deba0fdd274b6) {
    send.approveOfResponse(true, $("#inputStringe").val(), function(err, res) {
        if(err) {
            console.log(err)
        } else {
            alert("Transaction sent with hash: " + res)
            console.log(res)
        }
    })
    } else {
        console.log("Scammer alert")
    }
})

    