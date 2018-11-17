    var ExampleElement = React.createClass({

        render : function() { return (
        <center>
        <h1>Get UCASH bounties on top problems</h1>
        <input id="inputString"></input>
        <input id="inputNumber"></input>
        <button id="testButton">Send</button>
        <table width="500">
            <thead>
            </thead>
            <tbody id="mainTable">
                <tr>
                    <td id="bountyContent" class='clickable-row'>
                    </td>
                    <td id="bountyPrice"></td>
                </tr>
            </tbody>
        </table>
        <a href="./bounty.html">Bounty page</a>
        </center>
        ); }
    });
    React.render(<ExampleElement/>, document.getElementById('example'));

    console.log("It's finally working!")
            if(typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
        } else {
            web3 = new Web3(web3.currentProvider)
         }
         web3.eth.defaultAccount = web3.eth.accounts[0]
         console.log(web3.eth.defaultAccount)

var sendContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"approval","type":"bool"},{"name":"_selectedAddress","type":"address"}],"name":"approveOfResponse","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_response","type":"string"},{"name":"_questionAddress","type":"address"}],"name":"respondToQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"returnMsg","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"questions","outputs":[{"name":"contents","type":"string"},{"name":"bounty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"returnAllAddresses","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"searchResponsePerQuestion","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"respondant","type":"address"},{"name":"approval","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_responseNumber","type":"uint256"}],"name":"searchResponseByNumber","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_question","type":"string"},{"name":"_bounty","type":"uint256"}],"name":"postQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"addresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"returnAllBounties","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
var mainAddress
    var send = sendContract.at("0x2520c129bb35f77f9c30c03354ed8bbaf2c4982e")
    console.log(send)
    send.returnMsg(function(err, res) {
    if(err) {
    console.log(err)
    } else {
    mainAddress = res
    console.log(res)
    }
    })
var array = []
$("#testButton").click(function() {
var stringInput = $("#inputString").val()
var numberInput = $("#inputNumber").val()
console.log(stringInput)
console.log(numberInput)
if(web3.eth.defaultAccount == mainAddress) {
    	send.postQuestion(web3.eth.defaultAccount, stringInput, numberInput, function(err, res) {
    	if(!err) {
    	alert("Success!")
    	} else {
    	alert("you fucked up")
    	}
    	})
} else {
	alert("You're not UCASH bitch")
}
})
var messageArray = []
var bountyArray = []
var secondArray = []
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
	for (var i = 0; i < array.length; i++) {
	send.returnAllBounties(array[i], function(error, result) {
	if(error) {
	console.log(error)
	} else {
	messageArray.push(result[0])
	console.log(messageArray)
	bountyArray.push(result[1].c)
	console.log(bountyArray)
                        var text = "";
                        for(var k = 0; k < messageArray.length; k++) {
                            text += messageArray[k] + "<br>" ;
                        }
                        document.getElementById("bountyContent").innerHTML = text;
                        var text2 = "";
                        for(var l = 0; l < bountyArray.length; l++) {
                            text2 += bountyArray[l] + "<br>";
                        }
                        document.getElementById("bountyPrice").innerHTML = text2;
	}
	})
	}
	}
})
send.searchResponsePerQuestion(function(err, res) {
	if(err) {
	console.log(err)
	} else {
	secondArray = res
	for (var j = 0; j < secondArray.length; j++) {
	send.searchResponseByNumber(secondArray[j], function(error, result) {
	if(error) {
	console.log("You fucked up")
	} else {
	console.log(result)
	}
	})
	}
	}
})
    $(".clickable-row").click(function() {
        window.location.replace("./bounty.html");
    });

    