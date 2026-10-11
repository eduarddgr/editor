
/*
	Copyright 2026 Sander Theetaert

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

function mapPieceToIdentifier(name){

	switch(name) {
	
	  case "pawn":
	  
		return "p"; //green
		
		break;
	  case "horse":

		return "h"; //green

		break;
	  case "bisshop":

		return "b"; //green

		break;
	  case "tower":

		return "t"; //green

		break;
	  case "queen":

		return "q"; //green

		break;
	  case "king":

		return "k"; //green

		break;
	}
}

function mapIdentifierToPiece(name){

	switch(name) {

	  case "p":

		return "pawn"; //green

		break;
	  case "h":

		return "horse"; //green

		break;
	  case "b":

		return "bisshop"; //green

		break;

	  case "t":

		return "tower"; //green

		break;

	  case "q":

		return "queen"; //green

		break;
	  case "k":

		return "king"; //green

		break;
	}
}

function mapColorNameToColorInt(colorName){
	
	switch(colorName) {
	
	  case "green":
	  
		return "0"; //green
		
		break;
	  case "blue":
	  
		return "1"; //_blue

		break;
	  case "red":
	  
		return "2"; //_red

		break;
	  case "yellow":
	  
		return "3"; //_yellow

		break;

	case "dead":

		return "4"; //_yellow

		break;

	}
	
	throw new Error("Wrong colorName :( !!!");
}

function mapColorIntToColorName(colorName){

	switch(colorName) {

	  case 0:

		return "green"; //green

		break;
	  case 1:

		return "blue"; //_blue

		break;
	  case 2:

		return "red"; //_red

		break;
	  case 3:

		return "yellow"; //_yellow

		break;

	  case 4:

		return "dead"; //_yellow

		break;
	}

	throw new Error("Wrong colorName :( !!!");
}
